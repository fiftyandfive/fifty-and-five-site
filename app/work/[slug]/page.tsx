import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CASE_STUDIES, getCaseStudy, getNextCaseStudy, VERTICAL_COLOR_HEX } from '@/lib/data/caseStudies';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { DurationBadge, VerticalPill } from '@/components/ui/DurationBadge';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cs = getCaseStudy(params.slug);
  if (!cs) return { title: 'Case Study Not Found' };
  return {
    title: `${cs.client} | Case Study`,
    description: cs.tagline,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const next = getNextCaseStudy(cs.slug);
  const hex = VERTICAL_COLOR_HEX[cs.verticalColor];

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28"
        style={{
          background: `linear-gradient(180deg, ${hex}20 0%, ${hex}08 40%, var(--color-bg-primary) 100%)`,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 20% -20%, ${hex}40 0%, transparent 50%)`,
            filter: 'blur(60px)',
          }}
        />
        <div className="relative container-edge">
          <Link
            href="/work"
            className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em] hover:text-text-primary"
          >
            ← Back to work
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <VerticalPill label={cs.verticalLabel} colorKey={cs.verticalColor} />
            <DurationBadge>{cs.durationBadge}</DurationBadge>
          </div>
          <AnimatedHeadline
            as="h1"
            text={cs.client}
            className="mt-6 font-serif text-display tracking-[-0.03em]"
            stagger={0.04}
          />
          <SimpleReveal delay={0.3}>
            <p className="mt-6 text-body-lg text-text-secondary max-w-3xl">{cs.tagline}</p>
          </SimpleReveal>
        </div>
      </section>

      {/* BODY */}
      <section className="container-edge pb-28 md:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          <article className="max-w-[680px] text-[18px] leading-[1.75] text-text-primary/90">
            <SimpleReveal>
              <PlaceholderImage
                aspect="21/9"
                colorKey={cs.verticalColor}
                label={`${cs.client} — hero`}
                className="rounded-glass mb-16"
              />
            </SimpleReveal>

            <Section label="01 — The Challenge" title="What the brand needed.">
              {cs.challenge}
            </Section>

            <Section label="02 — The Approach" title="What Fifty & Five did.">
              {cs.approach}
            </Section>

            <PullQuote>{cs.tagline}</PullQuote>

            <Section label="03 — The Outcome" title="What actually happened.">
              {cs.outcome}
            </Section>
          </article>

          <aside className="relative">
            <div className="lg:sticky lg:top-28">
              <GlassCard>
                <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
                  Project
                </div>
                <dl className="mt-5 space-y-5 text-meta">
                  <Row label="Industry" value={cs.industry} />
                  <Row label="Duration" value={cs.duration} />
                  <Row
                    label="Services"
                    value={cs.services.join(', ')}
                  />
                  <Row label="Platforms" value={cs.platforms.join(', ')} />
                </dl>
                <div className="mt-8">
                  <MagneticButton href="/contact" variant="primary" size="small" className="w-full">
                    Start a Similar Project →
                  </MagneticButton>
                </div>
              </GlassCard>
            </div>
          </aside>
        </div>
      </section>

      {/* NEXT */}
      <section className="container-edge pb-32">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
            Next case study
          </div>
          <Link
            href="/work"
            className="font-mono text-meta uppercase tracking-[0.1em] text-accent hover:text-accent-light"
          >
            View all →
          </Link>
        </div>
        <Link href={`/work/${next.slug}`} className="block group">
          <TiltCard tiltStrength={4}>
            <GlassCard padded={false}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <PlaceholderImage
                  aspect="16/10"
                  colorKey={next.verticalColor}
                  label={next.client}
                />
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 flex-wrap">
                    <VerticalPill label={next.verticalLabel} colorKey={next.verticalColor} />
                    <DurationBadge>{next.durationBadge}</DurationBadge>
                  </div>
                  <h3 className="mt-5 font-serif text-[40px] leading-[1.05] tracking-[-0.02em]">
                    {next.client}
                  </h3>
                  <p className="mt-4 text-body text-text-secondary">{next.tagline}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-meta text-accent group-hover:text-accent-light transition-colors">
                    Read case study
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </TiltCard>
        </Link>
      </section>
    </>
  );
}

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <SimpleReveal>
      <section className="mb-16">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          {label}
        </div>
        <h2 className="mt-3 font-serif text-[32px] leading-[1.15] tracking-[-0.02em]">{title}</h2>
        <p className="mt-5 text-body-lg text-text-secondary leading-[1.75]">{children}</p>
      </section>
    </SimpleReveal>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <SimpleReveal>
      <blockquote className="my-16 pl-6 border-l-2 border-accent font-serif text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.02em] text-text-primary">
        {children}
      </blockquote>
    </SimpleReveal>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
        {label}
      </dt>
      <dd className="mt-1 text-meta text-text-primary">{value}</dd>
    </div>
  );
}
