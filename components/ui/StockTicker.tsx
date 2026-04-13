'use client';

import { CLIENT_LOGOS } from '@/lib/data/clients';

/**
 * Fixed-bottom stock-ticker chrome. Reads like a trading-desk crawl:
 * mono 11px, tight tracking, muted, slow 80s scroll, accent arrow
 * between entries. No logos — by design. The absence of imagery is
 * the elevation; client names in pure type sit more "senior agency"
 * than any favicon wall could.
 */
export function StockTicker() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <div
      aria-label="Selected clients"
      className="fixed bottom-0 inset-x-0 z-40 h-8 border-t border-glass-border bg-bg-primary/90 backdrop-blur-md overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
        style={{ background: 'linear-gradient(to right, var(--color-bg-primary), transparent)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
        style={{ background: 'linear-gradient(to left, var(--color-bg-primary), transparent)' }}
      />
      {/* Left-edge label — reads like a terminal channel name */}
      <div className="absolute inset-y-0 left-0 z-20 flex items-center px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent/80 border-r border-glass-border bg-bg-primary/80">
        LIVE <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
      </div>
      <div
        className="ticker-track items-center h-full pl-20"
        style={{ animationDuration: '80s' }}
      >
        {doubled.map((c, i) => (
          <span
            key={`${c.name}-${i}`}
            className="shrink-0 whitespace-nowrap flex items-center gap-2 px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary"
          >
            <span className="text-accent/70">▲</span>
            <span className="text-text-secondary">{c.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
