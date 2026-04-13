import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  honey?: string; // honeypot
};

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string),
  );
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields. Silently accept and drop.
  if (body.honey && body.honey.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || '').trim().slice(0, 200);
  const email = (body.email || '').trim().slice(0, 200);
  const company = (body.company || '').trim().slice(0, 200);
  const message = (body.message || '').trim().slice(0, 5000);

  if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'Missing name or valid email' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'lucas@fiftyandfive.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'Fifty & Five <hello@fiftyandfive.com>';

  // If Resend isn't configured (dev / preview), log and return ok so the form
  // still exercises its success state.
  if (!apiKey) {
    console.log('[contact] Resend not configured. Submission:', { name, email, company, message });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New inquiry — ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 12px;font-family:Georgia,serif;font-weight:400">New inquiry via fiftyandfive.com</h2>
          <p><strong>Name:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
          ${company ? `<p><strong>Company:</strong> ${esc(company)}</p>` : ''}
          ${
            message
              ? `<p><strong>Looking for:</strong></p><blockquote style="margin:0;padding:12px 16px;border-left:3px solid #6366F1;background:#f7f7f5">${esc(message).replace(/\n/g, '<br/>')}</blockquote>`
              : ''
          }
        </div>
      `,
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('[contact] send failed', err);
    return NextResponse.json({ ok: false, error: 'Send failed' }, { status: 500 });
  }
}
