'use client';

/**
 * A scrolling memorial of social platforms we've outlasted. Reads
 * as zero-bragging experience flex: the list itself does the work.
 * Mirrors the `ticker-track` pattern from the logo ticker, but
 * slower, muted, and tombstoned with a dagger character.
 */

const DEAD_PLATFORMS: { name: string; epitaph: string }[] = [
  { name: 'Vine', epitaph: '† 2017' },
  { name: 'Google+', epitaph: '† 2019' },
  { name: 'Path', epitaph: '† 2018' },
  { name: 'Periscope', epitaph: '† 2021' },
  { name: 'Meerkat', epitaph: '† 2016' },
  { name: 'Orkut', epitaph: '† 2014' },
  { name: 'Yik Yak', epitaph: '† 2023' },
  { name: 'Peach', epitaph: '† 2016' },
  { name: 'Ello', epitaph: '† 2023' },
  { name: 'Friendster', epitaph: '† 2015' },
  { name: 'Canary', epitaph: '† 2018' },
  { name: 'Posterous', epitaph: '† 2013' },
  { name: 'Clubhouse', epitaph: '† on life support' },
  { name: 'MySpace', epitaph: '† kinda' },
  { name: 'BeReal', epitaph: '† sort of' },
  { name: 'Twitter', epitaph: '† X' },
];

export function PlatformGraveyard() {
  const doubled = [...DEAD_PLATFORMS, ...DEAD_PLATFORMS];
  return (
    <section className="relative border-y border-glass-border bg-bg-primary">
      <div className="container-edge pt-10 pb-3">
        <div className="font-mono text-caption uppercase tracking-[0.18em] text-text-tertiary">
          Platforms we&rsquo;ve outlasted
        </div>
      </div>
      <div className="relative overflow-hidden pb-10 pt-2">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, var(--color-bg-primary), transparent)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, var(--color-bg-primary), transparent)' }}
        />
        <div
          className="ticker-track gap-12 px-8 items-baseline"
          style={{ animationDuration: '70s' }}
        >
          {doubled.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="shrink-0 flex items-baseline gap-2 whitespace-nowrap"
            >
              <span className="font-serif text-[22px] tracking-[-0.02em] text-text-secondary">
                {p.name}
              </span>
              <span className="font-mono text-caption text-text-tertiary tracking-[0.05em]">
                {p.epitaph}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
