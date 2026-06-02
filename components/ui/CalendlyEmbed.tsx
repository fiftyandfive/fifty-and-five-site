'use client';

import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { trackEvent, gtagEvent } from '@/components/layout/Analytics';

const DEFAULT_URL = 'https://calendly.com/lucasv/30-minute-intro-call';

export function CalendlyEmbed() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL || DEFAULT_URL;

  useCalendlyEventListener({
    onEventScheduled: () => {
      trackEvent('Calendly Booking Confirmed');
      gtagEvent('book_call', {
        event_category: 'calendly',
        event_label: 'inline_widget',
        value: 1,
      });
    },
  });

  return (
    <div className="glass rounded-glass p-8 md:p-10">
      <h3 className="font-serif text-[32px] leading-[1.1] tracking-[-0.02em]">
        Book a 30-minute intro call.
      </h3>
      <p className="mt-3 text-body text-text-secondary">
        Same-day response. Paid pilot within 14 days of contract.
      </p>

      <div className="mt-6 rounded-lg border border-glass-border overflow-hidden bg-bg-tertiary">
        <InlineWidget
          url={url}
          styles={{ height: 680 }}
          pageSettings={{
            backgroundColor: '111114',
            primaryColor: 'C41E3A',
            textColor: 'F0F0EC',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
          }}
        />
      </div>
    </div>
  );
}
