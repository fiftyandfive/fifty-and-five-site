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
      <div className="ticker-track gap-14 px-8">
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="shrink-0 font-serif text-[22px] text-text-secondary hover:text-text-primary transition-colors duration-300 tracking-tight"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
