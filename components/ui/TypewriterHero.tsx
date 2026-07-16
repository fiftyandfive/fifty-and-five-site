import Image from 'next/image';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { SITE } from '@/lib/constants';

/* Editorial poster hero — Creative Giants language.
   One oversized hairline-weight headline on warm cream, a quiet meta line,
   two pill CTAs, then a full-bleed band of sharp-cornered photography.
   (Name retained for import stability across the homepage.) */

const HERO_IMAGES = [
  {
    src: '/images/work/kendall-jackson-breckenridge-lifestyle.jpg',
    alt: 'Kendall-Jackson winter shoot, Breckenridge',
    location: 'Breckenridge, Colorado',
    caption: 'Kendall-Jackson',
    position: 'center',
  },
  {
    src: '/images/work/lebron-blaze.jpg',
    alt: 'LeBron James carrying Blaze Pizza boxes',
    location: 'Los Angeles, California',
    caption: 'Blaze Pizza × LeBron James',
    position: 'center 22%',
  },
];

export function TypewriterHero() {
  return (
    <section className="relative bg-bg-primary" aria-label="Fifty & Five — senior-led boutique social media agency since 2008">
      <h1 className="sr-only">
        Fifty &amp; Five — Senior-Led Boutique Social Media Agency
      </h1>

      {/* Poster headline block */}
      <div className="container-edge pt-32 md:pt-48 pb-12 md:pb-20">
        <SimpleReveal y={10} duration={0.5}>
          <div className="font-mono text-caption uppercase text-graphite tracking-[0.18em]">
            Senior-led Social Media Marketing since 2008 — 222 brands, 5 continents
          </div>
        </SimpleReveal>

        <SimpleReveal y={14} duration={0.6} delay={0.08}>
          <p
            aria-hidden
            className="mt-8 md:mt-10 font-serif text-display text-ink-black max-w-[20ch]"
          >
            CMO strategy<span className="text-accent">.</span>
          </p>
        </SimpleReveal>

        <SimpleReveal y={14} duration={0.6} delay={0.16}>
          <p
            aria-hidden
            className="font-serif text-display text-graphite max-w-[20ch]"
          >
            Agency execution<span className="text-accent">.</span>
          </p>
        </SimpleReveal>

        <SimpleReveal y={14} duration={0.6} delay={0.24}>
          <p
            aria-hidden
            className="font-serif text-display text-ink-black max-w-[22ch]"
          >
            ROI you can defend<span className="text-accent">.</span>
          </p>
        </SimpleReveal>

        <SimpleReveal y={12} duration={0.5} delay={0.28}>
          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-3.5">
            <MagneticButton
              href={SITE.calendly}
              variant="primary"
              size="large"
              trackName="Hero CTA — Run the numbers"
            >
              Run the numbers →
            </MagneticButton>
            <MagneticButton
              href="/work"
              variant="secondary"
              size="large"
              trackName="Hero CTA — See the work"
            >
              See the work →
            </MagneticButton>
          </div>
          <a
            href="/audit"
            className="mt-5 inline-block text-meta text-text-secondary underline underline-offset-4 decoration-ash hover:text-ink-black transition-colors"
          >
            Get your free brand audit →
          </a>
        </SimpleReveal>
      </div>

      {/* Full-bleed editorial image band — sharp corners, bottom-left meta */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {HERO_IMAGES.map((img, i) => (
          <SimpleReveal key={i} y={0} duration={0.7} delay={0.1 + i * 0.1}>
            <figure className="relative w-full overflow-hidden bg-bg-tertiary" style={{ aspectRatio: '4/3' }}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                style={{ objectPosition: img.position }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
                quality={85}
              />
              <figcaption className="absolute left-0 bottom-0 p-6 md:p-8">
                <div
                  className="font-mono text-caption uppercase tracking-[0.18em]"
                  style={{ color: 'rgba(255,254,247,0.85)' }}
                >
                  {img.location}
                </div>
                <div
                  className="mt-1.5 font-serif text-h3"
                  style={{ color: '#fffef7' }}
                >
                  {img.caption}
                </div>
              </figcaption>
            </figure>
          </SimpleReveal>
        ))}
      </div>
    </section>
  );
}
