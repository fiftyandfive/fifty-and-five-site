'use client';

import { useState, useCallback } from 'react';
import { CLIENT_LOGOS } from '@/lib/data/clients';

/** Minimum natural width (px) to keep the image — below this we show text. */
const MIN_LOGO_WIDTH = 48;

function LogoItem({ name, asset }: { name: string; asset?: string }) {
  const [failed, setFailed] = useState(false);

  const handleLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalWidth < MIN_LOGO_WIDTH) {
      setFailed(true); // too small — show text wordmark instead
    }
  }, []);

  if (!asset || failed) {
    return (
      <span className="font-serif text-[22px] tracking-tight whitespace-nowrap">
        {name}
      </span>
    );
  }

  /* eslint-disable @next/next/no-img-element */
  return (
    <img
      src={asset}
      alt={name}
      width={128}
      height={128}
      className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity [filter:brightness(0)_invert(1)] hover:[filter:none]"
      onLoad={handleLoad}
      onError={() => setFailed(true)}
    />
  );
}

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
      <div className="ticker-track gap-14 px-8 items-center">
        {doubled.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="shrink-0 text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <LogoItem name={logo.name} asset={logo.asset} />
          </div>
        ))}
      </div>
    </div>
  );
}
