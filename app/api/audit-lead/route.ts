import { NextResponse } from 'next/server';
import { clientIp, rateLimit } from '@/lib/rateLimit';

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  frustration?: string;
  honey?: string;
};

export async function POST(req: Request) {
  if (!rateLimit(`audit:${clientIp(req)}`)) {
    return NextResponse.json({ ok: false, error: 'Too many requests' }, { status: 429 });
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot: accept silently so bots learn nothing
  if (body.honey && body.honey.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || '').trim().slice(0, 200);
  const email = (body.email || '').trim().slice(0, 200);
  const company = (body.company || '').trim().slice(0, 200);
  const website = (body.website || '').trim().slice(0, 300);
  const frustration = (body.frustration || '').trim().slice(0, 3000);

  if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'Missing name or valid email' }, { status: 400 });
  }

  const webhookUrl = process.env.AUDIT_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log('[audit-lead] webhook not configured. Submission:', { name, email, company, website });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'fiftyandfive.com/audit',
        submittedAt: new Date().toISOString(),
        name,
        email,
        company,
        website,
        frustration,
      }),
    });
    if (!res.ok) throw new Error(`webhook responded ${res.status}`);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('[audit-lead] webhook failed', err);
    return NextResponse.json({ ok: false, error: 'Delivery failed' }, { status: 502 });
  }
}
