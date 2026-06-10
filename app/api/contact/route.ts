import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  message?: string;
  honey?: string;
};

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string),
  );
}

const BRAND = '#C41E3A';

function wrapEmail(body: string) {
  return `
    <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:1.6;color:#222;max-width:600px;margin:0 auto">
      ${body}
      <div style="margin-top:32px;padding-top:20px;border-top:1px solid #e5e5e5;font-size:12px;color:#999;line-height:1.5">
        Fifty &amp; Five · 1001 N Orange Ave, Orlando FL 32801<br/>
        <a href="https://fiftyandfive.com" style="color:${BRAND}">fiftyandfive.com</a>
      </div>
    </div>
  `;
}

function buildInternalEmail(name: string, email: string, company: string, budget: string, message: string) {
  return `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;line-height:1.6;color:#111">
      <h2 style="margin:0 0 12px;font-family:Georgia,serif;font-weight:400">New inquiry via fiftyandfive.com</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
      ${company ? `<p><strong>Company:</strong> ${esc(company)}</p>` : ''}
      ${budget ? `<p><strong>Monthly Budget:</strong> ${esc(budget)}</p>` : ''}
      ${
        message
          ? `<p><strong>Looking for:</strong></p><blockquote style="margin:0;padding:12px 16px;border-left:3px solid ${BRAND};background:#f7f7f5">${esc(message).replace(/\n/g, '<br/>')}</blockquote>`
          : ''
      }
    </div>
  `;
}

function buildContactAutoReply(name: string) {
  return wrapEmail(`
    <div style="padding:24px 0 0">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:${BRAND};font-weight:600">
        Fifty &amp; Five
      </div>
      <h1 style="margin:12px 0 0;font-family:Georgia,serif;font-size:28px;font-weight:400;color:#111;line-height:1.2">
        Thanks for reaching out, ${esc(name.split(' ')[0])}.
      </h1>
      <p style="margin:16px 0 0;font-size:16px;color:#444;line-height:1.65">
        Your message landed. I read every inquiry personally and typically respond the same day.
      </p>
      <p style="margin:16px 0 0;font-size:16px;color:#444;line-height:1.65">
        If you'd rather skip the back-and-forth and jump straight to a conversation:
      </p>
      <div style="margin:24px 0">
        <a href="https://calendly.com/lucasv/30-minute-intro-call"
           style="display:inline-block;background:${BRAND};color:#fff;padding:12px 28px;border-radius:999px;text-decoration:none;font-size:15px;font-weight:500">
          Book a 30-min call →
        </a>
      </div>
      <p style="margin:24px 0 0;font-size:14px;color:#888;line-height:1.5">
        Talk soon,<br/>
        <strong style="color:#444">Lucas Vandenberg</strong><br/>
        Founding Principal, Fifty &amp; Five
      </p>
    </div>
  `);
}

function buildAuditChecklistEmail() {
  const items = [
    { label: 'Profile audit', detail: 'Bio, link-in-bio, highlights, pinned posts — does every element earn its spot?' },
    { label: 'Content-market fit', detail: 'Pull your last 20 posts. How many would make a stranger follow you? Be honest.' },
    { label: 'Engagement ratio', detail: 'Divide comments + saves by impressions. Under 1%? Your content is being seen, not felt.' },
    { label: 'Competitor gap', detail: 'Find 3 competitors with higher engagement. What are they doing that you\'re not?' },
    { label: 'Conversion path', detail: 'Follow the journey from post → profile → link → landing page. Count the friction points.' },
    { label: 'Community pulse', detail: 'Check your last 50 DMs and comments. Are you responding within 2 hours?' },
    { label: 'Platform-content match', detail: 'Are you posting the same content everywhere? Each platform rewards different formats.' },
    { label: 'Content velocity', detail: 'How many posts per week vs. your top competitor? Volume isn\'t everything, but zero is zero.' },
    { label: 'Visual consistency', detail: 'Screenshot your grid. Does it look like one brand or a mood board from 5 different companies?' },
    { label: 'One-sentence strategy test', detail: 'Can you finish this sentence: "We post because ___." If not, that\'s the first thing to fix.' },
  ];

  const listHtml = items
    .map(
      (item, i) => `
        <tr>
          <td style="padding:12px 16px;vertical-align:top;width:32px;font-family:Georgia,serif;font-size:18px;color:${BRAND};font-weight:700">
            ${i + 1}.
          </td>
          <td style="padding:12px 16px 12px 0;border-bottom:1px solid #f0f0f0">
            <strong style="font-size:15px;color:#111">${esc(item.label)}</strong>
            <div style="margin-top:4px;font-size:14px;color:#555;line-height:1.55">${esc(item.detail)}</div>
          </td>
        </tr>
      `,
    )
    .join('');

  return wrapEmail(`
    <div style="padding:24px 0 0">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:${BRAND};font-weight:600">
        Fifty &amp; Five
      </div>
      <h1 style="margin:12px 0 0;font-family:Georgia,serif;font-size:28px;font-weight:400;color:#111;line-height:1.2">
        Your 5-Minute Social Media Audit
      </h1>
      <p style="margin:16px 0 0;font-size:16px;color:#444;line-height:1.65">
        Set a timer. Run through these 10 checks. By the end you'll know exactly where your social presence is strong — and where it's leaking value.
      </p>

      <table style="margin:24px 0;width:100%;border-collapse:collapse">
        ${listHtml}
      </table>

      <div style="margin:28px 0;padding:20px 24px;background:#faf9f7;border-left:3px solid ${BRAND};border-radius:0 8px 8px 0">
        <p style="margin:0;font-family:Georgia,serif;font-size:17px;color:#111;font-weight:500;line-height:1.35">
          "Most brands know something is off. This checklist tells you where."
        </p>
        <p style="margin:8px 0 0;font-size:13px;color:#888">
          — Lucas Vandenberg, Founding Principal
        </p>
      </div>

      <p style="margin:20px 0 0;font-size:16px;color:#444;line-height:1.65">
        Want me to run this audit for your brand? I do a handful of these each month — 30 minutes, on the house.
      </p>
      <p style="margin:12px 0 0;font-size:14px;color:#888">
        <a href="https://fiftyandfive.com/audit-checklist" style="color:${BRAND}">View the full checklist online</a> · Print or save as PDF anytime.
      </p>
      <div style="margin:24px 0">
        <a href="https://calendly.com/lucasv/30-minute-intro-call"
           style="display:inline-block;background:${BRAND};color:#fff;padding:12px 28px;border-radius:999px;text-decoration:none;font-size:15px;font-weight:500">
          Book a free 30-min audit call →
        </a>
      </div>
      <p style="margin:24px 0 0;font-size:14px;color:#888;line-height:1.5">
        Talk soon,<br/>
        <strong style="color:#444">Lucas Vandenberg</strong><br/>
        Founding Principal, Fifty &amp; Five
      </p>
    </div>
  `);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  if (body.honey && body.honey.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || '').trim().slice(0, 200);
  const email = (body.email || '').trim().slice(0, 200);
  const company = (body.company || '').trim().slice(0, 200);
  const budget = (body.budget || '').trim().slice(0, 100);
  const message = (body.message || '').trim().slice(0, 5000);

  if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'Missing name or valid email' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'hello@fiftyandfive.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'Fifty & Five <hello@fiftyandfive.com>';

  if (!apiKey) {
    console.log('[contact] Resend not configured. Submission:', { name, email, company, budget, message });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(apiKey);
  const isAuditRequest = message.includes('5-minute social media audit checklist');

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New inquiry, ${name}${company ? ` (${company})` : ''}${budget ? ` · ${budget}` : ''}`,
      html: buildInternalEmail(name, email, company, budget, message),
    });

    if (isAuditRequest) {
      await resend.emails.send({
        from,
        to: email,
        replyTo: to,
        subject: 'Your 5-Minute Social Media Audit Checklist — Fifty & Five',
        html: buildAuditChecklistEmail(),
      });
    } else {
      await resend.emails.send({
        from,
        to: email,
        replyTo: to,
        subject: `Thanks for reaching out — Fifty & Five`,
        html: buildContactAutoReply(name),
      });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('[contact] send failed', err);
    return NextResponse.json({ ok: false, error: 'Send failed' }, { status: 500 });
  }
}
