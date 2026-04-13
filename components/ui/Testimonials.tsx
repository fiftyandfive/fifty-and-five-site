'use client';

import { SimpleReveal } from '@/components/ui/AnimatedHeadline';
import {
  TESTIMONIALS,
  CLUTCH_PROFILE_URL,
  type Testimonial,
} from '@/lib/data/testimonials';

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-accent" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.9 6.9 7.1.5-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7L2 9.4l7.1-.5L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t, delay }: { t: Testimonial; delay: number }) {
  return (
    <SimpleReveal delay={delay}>
      <figure className="group relative h-full rounded-[20px] border border-glass-border bg-glass-bg p-7 md:p-8 flex flex-col">
        <span
          aria-hidden
          className="absolute -top-3 left-6 font-serif text-[64px] leading-none text-accent/60 select-none"
        >
          &ldquo;
        </span>
        <Stars count={t.rating} />
        <blockquote className="mt-5 font-serif text-[22px] md:text-[24px] leading-[1.25] tracking-[-0.02em] text-text-primary">
          {t.quote}
        </blockquote>
        <figcaption className="mt-6 pt-5 border-t border-glass-border">
          <div className="font-serif text-[18px] tracking-[-0.02em] text-text-primary">
            {t.author}
          </div>
          <div className="mt-1 font-mono text-caption uppercase tracking-[0.12em] text-text-tertiary">
            {t.title}
          </div>
        </figcaption>
      </figure>
    </SimpleReveal>
  );
}

export function Testimonials() {
  return (
    <section className="container-edge py-24 md:py-32">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            5.0 on Clutch
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em] max-w-3xl">
            What clients put in writing.
          </h2>
        </div>
        <a
          href={CLUTCH_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-meta uppercase tracking-[0.1em] text-accent hover:text-accent-light transition-colors"
        >
          Read all reviews on Clutch →
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr">
        {TESTIMONIALS.map((t, i) => (
          <Card key={t.company} t={t} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
