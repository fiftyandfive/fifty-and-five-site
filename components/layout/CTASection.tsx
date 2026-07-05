import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SITE } from '@/lib/constants';

type Props = {
  headline?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTASection({
  headline = 'Ready to work with the team that\u2019s done this 222 times?',
  body = 'Most agency relationships start with a pitch deck. Ours starts with a conversation. No proposals until we know it\u2019s a fit.',
  ctaLabel = 'Start a Conversation →',
  ctaHref = '/contact',
}: Props) {
  return (
    <section className="relative overflow-hidden bg-bg-primary">
      <AuroraBackground variant="warm" />
      <div className="relative z-10 container-edge py-28 md:py-40 text-center">
        <AnimatedHeadline
          as="h2"
          text={headline}
          className="font-serif text-h1 tracking-[-0.02em] text-text-primary max-w-4xl mx-auto"
        />
        <SimpleReveal delay={0.2}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-2xl mx-auto">{body}</p>
        </SimpleReveal>
        <SimpleReveal delay={0.35}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <MagneticButton
                href={ctaHref}
                variant="primary"
                size="large"
                trackName="Close CTA"
              >
                {ctaLabel}
              </MagneticButton>
              {ctaHref !== SITE.calendly && (
                <MagneticButton
                  href={SITE.calendly}
                  variant="secondary"
                  size="large"
                  trackName="Close CTA - Run the numbers"
                >
                  Run the numbers →
                </MagneticButton>
              )}
            </div>
            <a
              href="/audit"
              className="text-meta text-text-secondary underline underline-offset-4 decoration-ash hover:text-ink-black transition-colors"
            >
              Get your free brand audit →
            </a>
            <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
              Typical response time: same day
            </p>
          </div>
        </SimpleReveal>
      </div>
    </section>
  );
}
