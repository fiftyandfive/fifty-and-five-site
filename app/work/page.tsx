'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { CASE_STUDIES } from '@/lib/data/caseStudies';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { DurationBadge, VerticalPill } from '@/components/ui/DurationBadge';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { FilterBar } from '@/components/ui/FilterBar';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';

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
          text="215+ brands across 15 verticals since 2008."
          className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-4xl"
        />
        <SimpleReveal delay={0.2}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-2xl">
            Here&rsquo;s a selection. Every case study links to one person. Every outcome is real
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
                      <PlaceholderImage
                        colorKey={cs.verticalColor}
                        aspect="16/9"
                        label={cs.client}
                        src={cs.heroImage}
                        alt={`${cs.client} — ${cs.verticalLabel} case study`}
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
    </>
  );
}
