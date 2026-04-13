import Link from 'next/link';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { SpotlightEffect } from '@/components/ui/SpotlightEffect';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { LogoTicker } from '@/components/ui/LogoTicker';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { DurationBadge, VerticalPill } from '@/components/ui/DurationBadge';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { CTASection } from '@/components/layout/CTASection';
import { SITE } from '@/lib/constants';
import { CASE_STUDIES, getCaseStudy } from '@/lib/data/caseStudies';
import { VERTICALS } from '@/lib/data/verticals';

export default function HomePage() {
  const featuredSlugs = [
    'kendall-jackson',
    'blaze-pizza',
    'enterprise-holdings',
    'mezzacorona',
    'microsoft',
  ];
  const featured = featuredSlugs.map((s) => getCaseStudy(s)!).filter(Boolean);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-bg-primary">
        <AuroraBackground />
        <SpotlightEffect />
        <div className="relative z-10 container-edge pt-32 pb-24 md:pt-40 md:pb-32">
          <SimpleReveal>
            <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.18em]">
              {SITE.wordmark} — senior-led social, since 2008
            </div>
          </SimpleReveal>

          <AnimatedHeadline
            as="h1"
            text="215 brands. 18 years. Zero handoffs."
            className="mt-8 font-serif text-display text-text-primary max-w-5xl"
            stagger={0.06}
          />

          <SimpleReveal delay={0.55}>
            <p className="mt-6 font-mono text-caption uppercase text-accent tracking-[0.15em]">
              Senior-led. Specialist-backed. No junior handoffs.
            </p>
          </SimpleReveal>

          <SimpleReveal delay={0.7}>
            <p className="mt-6 text-body-lg text-text-secondary max-w-2xl leading-[1.55]">
              Strategy and day-to-day from the senior who sold you the engagement — backed by a
              vetted network of specialists (paid CTV, technical SEO, web) when the work calls
              for it. The person who built campaigns for Microsoft, Kendall-Jackson, and Blaze
              Pizza, working directly with you.
            </p>
          </SimpleReveal>

          <SimpleReveal delay={0.85}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="/work"
                variant="primary"
                size="large"
                trackName="Hero CTA — See the Work"
              >
                See the Work →
              </MagneticButton>
              <MagneticButton
                href="/contact"
                variant="secondary"
                size="large"
                trackName="Hero CTA — Let's Talk"
              >
                Let&rsquo;s Talk
              </MagneticButton>
            </div>
          </SimpleReveal>
        </div>
        <ScrollIndicator />
      </section>

      {/* LOGO TICKER */}
      <section>
        <LogoTicker />
        <div className="container-edge pt-6 text-center">
          <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
            A selection from 215+ brands managed since 2008
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="container-edge py-28 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
          <Stat value={215} suffix="+" label="Brands Managed" />
          <Stat value={18} label="Years in Social" />
          <Stat value={15} suffix="+" label="Industry Verticals" />
        </div>
      </section>

      {/* THE PITCH — VALUE PROPS */}
      <section className="relative container-edge py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Why brands hire us
          </div>
          <AnimatedHeadline
            as="h2"
            text="Why brands choose one senior strategist over a 20-person agency."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-fr">
          <SimpleReveal delay={0.0} className="h-full">
            <TiltCard tiltStrength={5} className="h-full">
              <GlassCard className="h-full flex flex-col">
                <IconSingle />
                <h3 className="mt-6 font-serif text-[26px] leading-[1.15] tracking-[-0.015em]">
                  Principal on every account.
                </h3>
                <p className="mt-4 text-body text-text-secondary">
                  Lucas leads every engagement — strategy, account management, day-to-day. When
                  the work calls for a specialist (paid CTV, technical SEO, web build), we bring
                  in a vetted partner who runs their own shop and has been doing it for a decade.
                  You get the right senior for the work, every time. No coordinators. No handoffs.
                </p>
              </GlassCard>
            </TiltCard>
          </SimpleReveal>

          <SimpleReveal delay={0.12} className="h-full">
            <TiltCard tiltStrength={5} className="h-full">
              <GlassCard className="h-full flex flex-col">
                <IconGrid />
                <h3 className="mt-6 font-serif text-[26px] leading-[1.15] tracking-[-0.015em]">
                  215 brands of pattern recognition.
                </h3>
                <p className="mt-4 text-body text-text-secondary">
                  When you&rsquo;ve managed social for Kendall-Jackson, Enterprise Holdings, and
                  Blaze Pizza across 15 verticals, you start seeing what works before the data
                  confirms it. Pattern recognition is what you&rsquo;re buying — not hours on a
                  timesheet.
                </p>
              </GlassCard>
            </TiltCard>
          </SimpleReveal>

          <SimpleReveal delay={0.24} className="h-full">
            <TiltCard tiltStrength={5} className="h-full">
              <GlassCard className="h-full flex flex-col">
                <IconSparkle />
                <h3 className="mt-6 font-serif text-[26px] leading-[1.15] tracking-[-0.015em]">
                  AI-augmented, not AI-dependent.
                </h3>
                <p className="mt-4 text-body text-text-secondary">
                  We use AI to accelerate research, scheduling, and reporting — the same work that
                  eats 40% of a traditional agency&rsquo;s billable hours. The result: senior-level
                  strategy at a fraction of the cost, because we&rsquo;re not billing you for a team
                  of coordinators.
                </p>
              </GlassCard>
            </TiltCard>
          </SimpleReveal>
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="font-mono text-meta uppercase tracking-[0.1em] text-accent hover:text-accent-light transition-colors"
          >
            How we&rsquo;re different →
          </Link>
        </div>
      </section>

      {/* FEATURED WORK — BENTO GRID */}
      <section className="container-edge py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              Selected Work
            </div>
            <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em] max-w-3xl">
              Campaigns for brands you know — by the person who actually ran them.
            </h2>
          </div>
          <Link
            href="/work"
            className="font-mono text-meta uppercase tracking-[0.1em] text-accent hover:text-accent-light transition-colors"
          >
            View all work →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(280px,auto)] gap-5">
          {featured.map((cs, i) => {
            const span =
              i === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-2 md:row-span-1';
            return (
              <SimpleReveal key={cs.slug} delay={i * 0.08} className={span}>
                <Link href={`/work/${cs.slug}`} className="block h-full group">
                  <TiltCard tiltStrength={4} className="h-full">
                    <GlassCard className="h-full flex flex-col" padded={false}>
                      <div className="p-6 flex items-start justify-between gap-4">
                        <VerticalPill label={cs.verticalLabel} colorKey={cs.verticalColor} />
                        <DurationBadge>{cs.durationBadge}</DurationBadge>
                      </div>
                      <div className="px-6">
                        <PlaceholderImage
                          colorKey={cs.verticalColor}
                          aspect={i === 0 ? '4/3' : '16/9'}
                          label={cs.client}
                        />
                      </div>
                      <div className="p-6 pt-6 flex-1 flex flex-col">
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
            );
          })}
        </div>
      </section>

      {/* VERTICALS STRIP */}
      <section className="container-edge py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Verticals
          </div>
          <AnimatedHeadline
            as="h2"
            text="Deep expertise where it matters."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 auto-rows-fr">
          {VERTICALS.map((v, i) => (
            <SimpleReveal key={v.slug} delay={i * 0.06} className="h-full">
              <Link
                href={`/verticals/${v.slug}`}
                className="group block h-full glass rounded-glass p-6 border-l-2 transition-all hover:bg-white/[0.05]"
                style={{ borderLeftColor: `var(--color-${v.colorKey})` }}
              >
                <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
                  {v.shortLabel}
                </div>
                <h3 className="mt-2 font-serif text-[22px] leading-[1.15] tracking-[-0.015em]">
                  {v.name}
                </h3>
                <ul className="mt-4 space-y-1.5 text-meta text-text-secondary">
                  {v.clients.slice(0, 4).map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <div className="mt-5 inline-flex items-center gap-1.5 text-meta text-accent group-hover:text-accent-light">
                  Explore
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </div>
              </Link>
            </SimpleReveal>
          ))}
        </div>
      </section>

      {/* THE CLOSE */}
      <CTASection />
    </>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-[clamp(48px,7vw,84px)] leading-none tracking-[-0.03em] text-text-primary">
        <AnimatedCounter target={value} suffix={suffix} />
      </div>
      <div className="mt-3 font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
        {label}
      </div>
    </div>
  );
}

function IconSingle() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-accent">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconGrid() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
      {[0, 6, 12, 18].map((y) =>
        [0, 6, 12, 18].map((x) => <circle key={`${x}-${y}`} cx={x + 3} cy={y + 3} r="1.2" />),
      )}
    </svg>
  );
}
function IconSparkle() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
    </svg>
  );
}
