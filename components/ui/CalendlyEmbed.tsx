'use client';

import { InlineWidget } from 'react-calendly';

const DEFAULT_URL = 'https://calendly.com/lucasv/30-minute-intro-call';

export function CalendlyEmbed() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL || DEFAULT_URL;

  return (
    <div className="glass rounded-glass p-8 md:p-10">
      <div className="font-mono text-caption uppercase text-accent tracking-[0.1em]">
        Or skip the form
      </div>
      <h3 className="mt-2 font-serif text-[32px] leading-[1.1] tracking-[-0.02em]">
        Book a 30-minute intro call.
      </h3>
      <p className="mt-3 text-body text-text-secondary">
        No pitch deck. No pressure. Just a conversation about what you&rsquo;re building and whether
        Fifty &amp; Five is a fit.
      </p>

      <div className="mt-6 rounded-lg border border-glass-border overflow-hidden bg-bg-tertiary">
        <InlineWidget
          url={url}
          styles={{ height: 680 }}
          pageSettings={{
            backgroundColor: '111114',
            primaryColor: '6366F1',
            textColor: 'F0F0EC',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
          }}
        />
      </div>
    </div>
  );
}
