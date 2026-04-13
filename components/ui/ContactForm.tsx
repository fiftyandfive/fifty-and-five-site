'use client';

import { useState } from 'react';
import { MagneticButton } from './MagneticButton';
import { trackEvent } from '@/components/layout/Analytics';

type State = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<State>('idle');
  const [error, setError] = useState<string | null>(null);

  if (state === 'success') {
    return (
      <div className="glass rounded-glass p-8">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.1em]">
          Got it
        </div>
        <h3 className="mt-2 font-serif text-[32px] leading-[1.1] tracking-[-0.02em]">
          Message received.
        </h3>
        <p className="mt-3 text-body text-text-secondary">
          Typical response time: same day. Want to skip the back-and-forth? Book a time below.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setState('submitting');
        setError(null);
        const form = e.currentTarget;
        const fd = new FormData(form);
        const payload = {
          name: String(fd.get('name') || ''),
          email: String(fd.get('email') || ''),
          company: String(fd.get('company') || ''),
          message: String(fd.get('message') || ''),
          honey: String(fd.get('website') || ''),
        };
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          const data = await res.json().catch(() => ({ ok: false }));
          if (!res.ok || !data.ok) throw new Error(data.error || 'Submission failed');
          trackEvent('Contact Form Submit', {
            company: payload.company || '(none)',
          });
          setState('success');
        } catch (err) {
          setState('error');
          setError(err instanceof Error ? err.message : 'Something went wrong');
        }
      }}
      className="glass rounded-glass p-8 md:p-10 space-y-5"
    >
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Company / Brand" name="company" />
      <Field label="What are you looking for?" name="message" as="textarea" />

      {/* Honeypot — hidden from users, bots fill it */}
      <div aria-hidden className="hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="pt-2 flex items-center gap-4 flex-wrap">
        <MagneticButton type="submit" variant="primary" size="large">
          {state === 'submitting' ? 'Sending…' : 'Send It →'}
        </MagneticButton>
        {state === 'error' && (
          <span className="text-meta text-[#FF6B6B]">
            {error || 'Something went wrong. Try again or email lucas@fiftyandfive.com.'}
          </span>
        )}
      </div>
      <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
        Typical response time: same day
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  as = 'input',
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: 'input' | 'textarea';
}) {
  return (
    <label className="block">
      <span className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {as === 'textarea' ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          className="mt-2 w-full bg-transparent border border-glass-border rounded-lg px-4 py-3 text-body text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors resize-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="mt-2 w-full bg-transparent border border-glass-border rounded-lg px-4 py-3 text-body text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
        />
      )}
    </label>
  );
}
