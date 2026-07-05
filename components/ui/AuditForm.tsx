'use client';

import { useState } from 'react';
import { trackEvent, gtagEvent } from '@/components/layout/Analytics';

const inputClass =
  'w-full bg-transparent border border-glass-border rounded-full px-5 py-3 text-[15px] text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors';

export function AuditForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  if (status === 'done') {
    return (
      <div className="glass rounded-glass p-8 md:p-10 max-w-xl">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">Done</div>
        <p className="mt-3 font-serif text-h3 tracking-[-0.02em] text-text-primary">
          Audit lands in your inbox within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      className="max-w-xl space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus('sending');
        const fd = new FormData(e.currentTarget);
        trackEvent('Audit Form Submit');
        gtagEvent('generate_lead', {
          event_category: 'audit',
          event_label: 'free_brand_audit',
          value: 1,
        });
        try {
          const res = await fetch('/api/audit-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: fd.get('name'),
              email: fd.get('email'),
              company: fd.get('company'),
              website: fd.get('website'),
              frustration: fd.get('frustration'),
              honey: fd.get('honey'),
            }),
          });
          setStatus(res.ok ? 'done' : 'error');
        } catch {
          setStatus('error');
        }
      }}
    >
      {/* Honeypot: hidden from humans, tempting to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="honey" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" name="name" required placeholder="Name" className={inputClass} />
        <input type="email" name="email" required placeholder="Email" className={inputClass} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" name="company" required placeholder="Company" className={inputClass} />
        <input type="text" name="website" required placeholder="Website" className={inputClass} />
      </div>
      <textarea
        name="frustration"
        rows={4}
        placeholder="What's your biggest marketing frustration?"
        className="w-full bg-transparent border border-glass-border px-5 py-4 text-[15px] text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors resize-y"
        style={{ borderRadius: 24 }}
      />
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-accent text-white px-8 py-3.5 text-[15px] font-medium glow-accent hover:bg-accent-light transition-colors disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Get my free audit →'}
        </button>
        {status === 'error' && (
          <p className="text-meta text-accent">
            Something broke. Email us instead: hello@fiftyandfive.com
          </p>
        )}
      </div>
    </form>
  );
}
