import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { VERTICALS, getVertical } from '@/lib/data/verticals';
import { CASE_STUDIES, VERTICAL_COLOR_HEX, getCaseStudy } from '@/lib/data/caseStudies';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { DurationBadge, VerticalPill } from '@/components/ui/DurationBadge';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { CTASection } from '@/components/layout/CTASection';

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const v = getVertical(params.slug);
  if (!v) return { title: 'Vertical Not Found' };
  return {
    title: `Social Media for ${v.name}`,
    description: v.subhead,
  };
}

export default function VerticalPage({ params }: { params: { slug: string } }) {
  const v = getVertical(params.slug);
  if (!v) notFound();
  const hex = VERTICAL_COLOR_HEX[v.colorKey];
  const studies = v.featuredCaseStudies
    .map((s) => getCaseStudy(s))
    .filter(Boolean)
    .map((cs) => cs!);

  return (
    <>
      <section
        className="relative overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20"
        style={{
          background: `linear-gradient(180deg, ${hex}22 0%, ${hex}08 40%, var(--color-bg-primary) 100%)`,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 80% -20%, ${hex}55 0%, transparent 50%)`,
            filter: 'blur(60px)',
          }}
        />
        <div className="relative container-edge">
          <div
            className="font-mono text-caption uppercase tracking-[0.15em]"
            style={{ color: hex }}
          >
            {v.shortLabel}
          </div>
          <AnimatedHeadline
            as="h1"
            text={v.headline}
            className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-4xl"
            stagger={0.04}
          />
          <SimpleReveal delay={0.3}>
            <p className="mt-6 text-body-lg text-text-secondary max-w-3xl">{v.subhead}</p>
          </SimpleReveal>
        </div>
      </section>

      <section className="container-edge py-20">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          Selected clients
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {v.clients.map((c) => (
            <div
              key={c}
              className="glass rounded-glass px-4 py-5 font-serif text-[20px] leading-[1.1] tracking-[-0.015em] text-text-primary"
            >
              {c}
            </div>
          ))}
        </div>
      </section>

      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              What we bring
            </div>
            <AnimatedHeadline
              as="h2"
              text="Expertise earned in the category."
              className="mt-4 font-serif text-h2 tracking-[-0.02em]"
            />
          </div>
          <div className="md:col-span-8 space-y-6 text-body-lg text-text-secondary leading-[1.75]">
            {v.expertise.map((p, i) => (
              <SimpleReveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </SimpleReveal>
            ))}
          </div>
        </div>
      </section>

      {studies.length > 0 && (
        <section className="container-edge py-20">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Case studies in {v.shortLabel}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {studies.map((cs) => (
              <Link key={cs.slug} href={`/work/${cs.slug}`} className="block group">
                <TiltCard tiltStrength={4}>
                  <GlassCard padded={false}>
                    <div className="p-6 flex items-center justify-between gap-4">
                      <VerticalPill label={cs.verticalLabel} colorKey={cs.verticalColor} />
                      <DurationBadge>{cs.durationBadge}</DurationBadge>
                    </div>
                    <div className="px-6">
                      <PlaceholderImage
                        colorKey={cs.verticalColor}
                        aspect="16/9"
                        label={cs.client}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-[28px] leading-[1.1] tracking-[-0.02em]">
                        {cs.client}
                      </h3>
                      <p className="mt-3 text-body text-text-secondary">{cs.tagline}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-meta text-accent group-hover:text-accent-light transition-colors">
                        View Case Study
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </TiltCard>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection
        headline={`Let's talk ${v.shortLabel.toLowerCase()}.`}
        body="A conversation about what you're building. No proposals until we know it's a fit."
        ctaLabel="Start a Conversation →"
      />
    </>
  );
}
