'use client';

import { InlineWidget } from 'react-calendly';

const DEFAULT_URL = 'https://calendly.com/lucasv/30-minute-intro-call';

export function CalendlyEmbed() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL || DEFAULT_URL;

  return (
    <div className="border border-ff-fade-30 p-8 md:p-10">
      <h3 className="font-editorial text-[32px] leading-[1.1] tracking-[-0.02em] text-ff-paper">
        Book a 30-minute intro call.
      </h3>
      <p className="mt-3 text-body text-ff-fade-50">
        Same-day response. Paid pilot within 14 days of contract.
      </p>

      <div className="mt-6 border border-ff-fade-30 overflow-hidden">
        <InlineWidget
          url={url}
          styles={{ height: 680 }}
          pageSettings={{
            backgroundColor: '0E0D0B',
            primaryColor: 'E33B0F',
            textColor: 'F4F1EA',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
          }}
        />
      </div>
    </div>
  );
}
