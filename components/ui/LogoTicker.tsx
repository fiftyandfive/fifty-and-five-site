'use client';

import { CLIENT_LOGOS } from '@/lib/data/clients';

/**
 * Typographic wordmark ticker. We intentionally render every client
 * name in Archivo Black instead of fetching brand logos — Clearbit
 * favicons come with white backgrounds that can't be cleanly matted
 * against our dark canvas, which produced a row of white squares.
 * Wordmarks read more "senior agency," scale crisply, and survive
 * without any third-party image dependency.
 */
export function LogoTicker() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <div className="relative overflow-hidden py-10 border-y border-glass-border bg-bg-secondary">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, var(--color-bg-secondary), transparent)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, var(--color-bg-secondary), transparent)' }}
      />
      <div className="ticker-track gap-16 px-8 items-center">
        {doubled.map((logo, i) => (
          <span
            key={`${logo.name}-${i}`}
            className="shrink-0 font-serif text-[26px] md:text-[30px] tracking-[-0.02em] whitespace-nowrap text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            {logo.name}
          </span>
        ))}
      </div>
    </div>
  );
}
