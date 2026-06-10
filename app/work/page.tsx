'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { CASE_STUDIES } from '@/lib/data/caseStudies';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { DurationBadge, VerticalPill } from '@/components/ui/DurationBadge';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { BrandColorHero } from '@/components/ui/BrandColorHero';
import { FilterBar } from '@/components/ui/FilterBar';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { MagneticButton } from '@/components/ui/MagneticButton';

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'Wine & Spirits', label: 'Wine & Spirits' },
  { value: 'Hospitality', label: 'Hospitality' },
  { value: 'Restaurant', label: 'Restaurant' },
  { value: 'Fitness', label: 'Fitness' },
  { value: 'Tech', label: 'Tech' },
  { value: 'Retail', label: 'Retail' },
  { value: 'CPG', label: 'CPG' },
  { value: 'Finance', label: 'Finance' },
  { value: 'Auto', label: 'Auto' },
];

export default function WorkIndex() {
  const [filter, setFilter] = useState('all');
  const items = useMemo(
    () =>
      filter === 'all'
        ? CASE_STUDIES
        : CASE_STUDIES.filter((c) => c.verticalLabel === filter),
    [filter],
  );

  return (
    <>
      <section className="container-edge pt-36 md:pt-44 pb-14">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          The Work
        </div>
        <AnimatedHeadline
          as="h1"
          text="222+ brands across 15 verticals since 2008."
          className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-4xl"
        />
        <SimpleReveal delay={0.2}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-2xl">
            Here&rsquo;s a selection. Every outcome is real
            work, not a recycled pitch-deck statistic.
          </p>
        </SimpleReveal>

        <div className="mt-10">
          <FilterBar options={FILTERS} value={filter} onChange={setFilter} />
        </div>
      </section>

      <section className="container-edge pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr">
          {items.map((cs, i) => (
            <SimpleReveal key={cs.slug} delay={Math.min(i * 0.05, 0.3)} className="h-full">
              <Link href={`/work/${cs.slug}`} className="block h-full group">
                <TiltCard tiltStrength={4} className="h-full">
                  <GlassCard padded={false} className="h-full flex flex-col overflow-hidden">
                    <div className="p-6 flex items-start justify-between gap-4">
                      <VerticalPill label={cs.verticalLabel} colorKey={cs.verticalColor} />
                      <DurationBadge>{cs.durationBadge}</DurationBadge>
                    </div>
                    <div className="px-6">
                      <BrandColorHero
                        client={cs.client}
                        verticalLabel={cs.verticalLabel}
                        verticalColor={cs.verticalColor}
                        caseNumber={String(CASE_STUDIES.findIndex((x) => x.slug === cs.slug) + 1).padStart(2, '0')}
                        aspect="16/9"
                        variant="compact"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-serif text-[28px] leading-[1.1] tracking-[-0.02em]">
                        {cs.client}
                      </h3>
                      <p className="mt-3 text-body text-text-secondary flex-1">{cs.tagline}</p>
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
            </SimpleReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-edge py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-h2 tracking-[-0.02em]">
            Want results like these?
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Book a 30-min working session — no pitch deck, no proposal until we know it's a fit.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <MagneticButton href="/contact" variant="primary" size="large">
              Talk to our founder about your brand →
            </MagneticButton>
            <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
              Typical response: same day
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
