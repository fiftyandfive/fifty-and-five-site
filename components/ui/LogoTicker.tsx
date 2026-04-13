import Image from 'next/image';
import { CLIENT_LOGOS } from '@/lib/data/clients';

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
            {logo.asset ? (
              <Image
                src={logo.asset}
                alt={logo.name}
                width={140}
                height={40}
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity [filter:grayscale(1)_brightness(1.4)] hover:[filter:none]"
                unoptimized
              />
            ) : (
              <span className="font-serif text-[22px] tracking-tight whitespace-nowrap">
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
