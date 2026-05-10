import Link from 'next/link';
import { SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { SITE } from '@/lib/constants';

export function SixtyDayReceipt() {
  return (
    <section id="offer" className="paper-bg">
      <div className="container-content py-24 md:py-32">
        <hr className="receipt-divider receipt-divider--paper" />

        <SimpleReveal>
          <div className="mt-10 text-center">
            <div className="font-receipt text-[12px] uppercase tracking-[0.15em] text-ff-ink/50">
              THE 60-DAY RECEIPT
            </div>
            <h2 className="mt-6 font-editorial text-h2 text-ff-ink max-w-3xl mx-auto">
              $8,500/mo. We deliver measurable movement on the one number that matters in 60 days,{' '}
              <span className="text-[1.25em]">or month 3 is on us.</span>
            </h2>
          </div>
        </SimpleReveal>

        <hr className="receipt-divider receipt-divider--paper my-10" />

        <SimpleReveal delay={0.15}>
          <div className="max-w-lg mx-auto">
            <div className="font-receipt text-[12px] uppercase tracking-[0.12em] text-ff-ink/50 mb-4">
              WHAT YOU GET
            </div>
            <ul className="space-y-3 font-body text-[18px] text-ff-ink/80">
              <li className="flex gap-3">
                <span className="text-ff-ink/40 shrink-0">&mdash;</span>
                Brand + pipeline audit (the receipt sets the bar)
              </li>
              <li className="flex gap-3">
                <span className="text-ff-ink/40 shrink-0">&mdash;</span>
                A principal-led practice running your engagement
              </li>
              <li className="flex gap-3">
                <span className="text-ff-ink/40 shrink-0">&mdash;</span>
                Monthly receipts call. Numbers, not vibes.
              </li>
              <li className="flex gap-3">
                <span className="text-ff-ink/40 shrink-0">&mdash;</span>
                Direct access to Lucas. Same person, every call.
              </li>
            </ul>
          </div>
        </SimpleReveal>

        <hr className="receipt-divider receipt-divider--paper my-10" />

        <SimpleReveal delay={0.25}>
          <div className="text-center space-y-6">
            <div className="font-receipt text-[14px] uppercase tracking-[0.12em] text-ff-ink/70">
              THREE ENGAGEMENTS PER QUARTER.<br />
              WE&rsquo;RE FULL WHEN WE&rsquo;RE FULL.
            </div>
            <Link
              href="/contact"
              className="inline-block bg-ff-stamp text-ff-paper font-receipt text-[14px] uppercase tracking-[0.05em] px-8 py-4 rounded hover:opacity-90 transition-opacity"
            >
              {SITE.cta}
            </Link>
            <div className="font-editorial text-[24px] md:text-[28px] italic text-ff-ink/60">
              That&rsquo;s the receipt.
            </div>
          </div>
        </SimpleReveal>

        <hr className="receipt-divider receipt-divider--paper mt-10" />
      </div>
    </section>
  );
}
