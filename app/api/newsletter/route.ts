import { NextResponse } from 'next/server';
import { clientIp, rateLimit } from '@/lib/rateLimit';

export const runtime = 'nodejs';

type Payload = {
  email?: string;
  honey?: string;
  source?: string;
};

export async function POST(req: Request) {
  if (!rateLimit(`newsletter:${clientIp(req)}`)) {
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

  const email = (body.email || '').trim().slice(0, 200);
  const source = (body.source || 'unknown').trim().slice(0, 100);

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'Valid email required' }, { status: 400 });
  }

  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log('[newsletter] webhook not configured. Submission:', { email, source });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: `fiftyandfive.com/${source}`,
        list: 'the-receipt',
        submittedAt: new Date().toISOString(),
        email,
      }),
    });
    if (!res.ok) throw new Error(`webhook responded ${res.status}`);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('[newsletter] webhook failed', err);
    return NextResponse.json({ ok: false, error: 'Delivery failed' }, { status: 502 });
  }
}
