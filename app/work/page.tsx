'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { CASE_STUDIES } from '@/lib/data/caseStudies';
import { SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { BrandColorHero } from '@/components/ui/BrandColorHero';

const FILTERS = [
  { value: 'all', label: 'ALL' },
  { value: 'Wine & Spirits', label: 'WINE & SPIRITS' },
  { value: 'Hospitality', label: 'HOSPITALITY' },
  { value: 'Restaurant', label: 'RESTAURANT' },
  { value: 'Tech', label: 'TECH' },
  { value: 'Retail', label: 'RETAIL' },
  { value: 'Automotive', label: 'AUTO' },
];

const STATS = [
  { label: 'TOTAL ENGAGEMENTS', value: '215+' },
  { label: 'DECADE+ RETAINERS', value: '2' },
  { label: 'LONGEST RETAINER', value: '10 yrs' },
  { label: 'AVG ENGAGEMENT', value: '3+ yrs' },
];

export default function WorkIndex() {
  const [filter, setFilter] = useState('all');
  const items = useMemo(
    () =>
      filter === 'all'
        ? CASE_STUDIES
        : CASE_STUDIES.filter(
            (c) =>
              c.verticalLabel === filter ||
              c.industry.toLowerCase().includes(filter.toLowerCase()),
          ),
    [filter],
  );

  return (
    <>
      {/* HERO */}
      <section className="container-content pt-36 md:pt-44 pb-10">
        <div className="font-receipt text-[12px] uppercase tracking-[0.15em] text-ff-stamp">
          The Work
        </div>
        <h1 className="mt-6 font-editorial text-display text-ff-paper max-w-4xl">
          215+ brands. 15 verticals. Since 2008.
        </h1>
        <SimpleReveal delay={0.2}>
          <p className="mt-6 text-body-lg text-ff-fade-50 max-w-2xl">
            Every case study links to one person. Every outcome is real work,
            not a recycled pitch-deck statistic.
          </p>
        </SimpleReveal>
      </section>

      {/* STAT RECEIPT */}
      <section className="container-content pb-10">
        <hr className="receipt-divider mb-6" />
        <div className="max-w-md font-receipt text-[14px] tracking-[0.02em] space-y-1">
          {STATS.map((s) => (
            <div key={s.label} className="flex justify-between gap-2">
              <span className="text-ff-fade-50">{s.label}</span>
              <span className="flex-1 border-b border-dotted border-ff-fade-30 mx-1 mb-1" />
              <span className="text-ff-data">{s.value}</span>
            </div>
          ))}
        </div>
        <hr className="receipt-divider mt-6" />
      </section>

      {/* FILTER BAR */}
      <section className="container-content pb-10">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((o) => {
            const active = filter === o.value;
            return (
              <button
                key={o.value}
                onClick={() => setFilter(o.value)}
                className={`font-receipt text-[12px] uppercase tracking-[0.1em] px-4 py-2 border transition-colors ${
                  active
                    ? 'bg-ff-stamp text-ff-paper border-ff-stamp'
                    : 'border-ff-fade-30 text-ff-fade-50 hover:text-ff-paper hover:border-ff-paper'
                }`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* GRID */}
      <section className="container-content pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((cs, i) => (
            <SimpleReveal key={cs.slug} delay={Math.min(i * 0.04, 0.25)}>
              <Link href={`/work/${cs.slug}`} className="block group">
                <div className="border border-ff-fade-30 hover:border-ff-stamp transition-colors">
                  <BrandColorHero
                    client={cs.client}
                    verticalLabel={cs.verticalLabel}
                    verticalColor={cs.verticalColor}
                    caseNumber={String(
                      CASE_STUDIES.findIndex((x) => x.slug === cs.slug) + 1,
                    ).padStart(2, '0')}
                    aspect="16/10"
                    variant="compact"
                  />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="font-receipt text-[11px] uppercase tracking-[0.12em] text-ff-stamp">
                        {cs.verticalLabel}
                      </span>
                      <span className="font-receipt text-[11px] uppercase tracking-[0.08em] text-ff-fade-50 shrink-0">
                        {cs.durationBadge}
                      </span>
                    </div>
                    <h3 className="font-editorial text-[24px] leading-[1.1] text-ff-paper">
                      {cs.client}
                    </h3>
                    <p className="mt-2 text-[14px] text-ff-fade-50 leading-[1.5] line-clamp-2">
                      {cs.tagline}
                    </p>
                    <div className="mt-4 font-receipt text-[12px] uppercase tracking-[0.1em] text-ff-stamp group-hover:text-ff-paper transition-colors">
                      View receipt →
                    </div>
                  </div>
                </div>
              </Link>
            </SimpleReveal>
          ))}
        </div>
      </section>
    </>
  );
}
