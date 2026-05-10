import Link from 'next/link';
import { SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { SITE } from '@/lib/constants';

type Props = {
  headline?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTASection({
  headline = 'Most agency relationships start with a pitch deck.\nOurs starts with a conversation.',
  body = 'No proposals until we know it’s a fit.\nThree engagements available this quarter.',
  ctaLabel,
  ctaHref = '/contact',
}: Props) {
  return (
    <section className="paper-bg">
      <div className="container-content py-24 md:py-32 text-center">
        <SimpleReveal>
          <h2 className="font-editorial text-h2 text-ff-ink max-w-3xl mx-auto whitespace-pre-line">
            {headline}
          </h2>
        </SimpleReveal>
        <SimpleReveal delay={0.15}>
          <p className="mt-6 text-body-lg text-ff-ink/70 max-w-2xl mx-auto whitespace-pre-line">
            {body}
          </p>
        </SimpleReveal>
        <SimpleReveal delay={0.25}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href={ctaHref}
              className="inline-block bg-ff-stamp text-ff-paper font-receipt text-[14px] uppercase tracking-[0.05em] px-8 py-4 rounded hover:opacity-90 transition-opacity"
            >
              {ctaLabel || SITE.cta}
            </Link>
            <p className="font-receipt text-[11px] uppercase tracking-[0.12em] text-ff-ink/40">
              TYPICAL RESPONSE TIME: SAME DAY
            </p>
          </div>
        </SimpleReveal>
      </div>
    </section>
  );
}
