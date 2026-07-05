'use client';

import { useState } from 'react';
import { trackEvent } from '@/components/layout/Analytics';

type Props = {
  source?: string;
  className?: string;
};

export function NewsletterSignup({ source = 'footer', className = '' }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  return (
    <div className={className}>
      <div className="font-mono text-caption uppercase text-accent tracking-[0.12em]">
        The Receipt
      </div>
      <p className="mt-2 text-meta text-text-secondary">
        One client result and one operator lesson. Monthly. No fluff.
      </p>
      {status === 'done' ? (
        <p className="mt-4 text-meta text-text-primary">
          You&apos;re on the list. First one lands next month.
        </p>
      ) : (
        <form
          className="mt-4 flex flex-col sm:flex-row gap-2"
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus('sending');
            const fd = new FormData(e.currentTarget);
            trackEvent('Newsletter Signup', { source });
            try {
              const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email: fd.get('email'),
                  honey: fd.get('honey'),
                  source,
                }),
              });
              setStatus(res.ok ? 'done' : 'error');
            } catch {
              setStatus('error');
            }
          }}
        >
          {/* Honeypot */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label>
              Leave this field empty
              <input type="text" name="honey" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="flex-1 min-w-0 bg-transparent border border-glass-border rounded-full px-4 py-2.5 text-[14px] text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-full bg-accent text-white px-5 py-2.5 text-[14px] font-medium glow-accent hover:bg-accent-light transition-colors disabled:opacity-60 shrink-0"
          >
            {status === 'sending' ? 'Sending…' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="mt-2 text-caption text-accent">Something broke. Try again in a minute.</p>
      )}
    </div>
  );
}
