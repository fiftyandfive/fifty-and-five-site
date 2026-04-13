import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { MagneticButton } from '@/components/ui/MagneticButton';

type Props = {
  headline?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTASection({
  headline = 'Ready to work with someone who\u2019s done this 215 times?',
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
            <MagneticButton href={ctaHref} variant="primary" size="large">
              {ctaLabel}
            </MagneticButton>
            <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
              Typical response time: same day
            </p>
          </div>
        </SimpleReveal>
      </div>
    </section>
  );
}
