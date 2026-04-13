import Link from 'next/link';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { SpotlightEffect } from '@/components/ui/SpotlightEffect';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { LogoTicker } from '@/components/ui/LogoTicker';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { AlgorithmCounter } from '@/components/ui/AlgorithmCounter';
import { PlatformGraveyard } from '@/components/ui/PlatformGraveyard';
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
            text={'215 brands.\n18 years.\nZero handoffs.'}
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
              Strategy and day-to-day from the same person who pitched you the work — backed by a
              vetted network of specialists (paid CTV, technical SEO, web) when the brief calls
              for it. The strategist who built campaigns for Microsoft, Kendall-Jackson, and
              Blaze Pizza, working directly with you.
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
          <AlgorithmStat />
        </div>
      </section>

      {/* PLATFORMS WE'VE OUTLASTED */}
      <PlatformGraveyard />

      {/* WHAT'S BROKEN — PAIN POINTS */}
      <section className="relative container-edge py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            You&rsquo;ve been here before
          </div>
          <AnimatedHeadline
            as="h2"
            text={'Agencies break the same three ways.\nOurs doesn\u2019t.'}
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-fr">
          <SimpleReveal delay={0.0} className="h-full">
            <GlassCard className="h-full flex flex-col border-l-2 border-l-accent/50">
              <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
                The bait-and-switch
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                The principal sold you. The junior delivers.
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                You bought a senior strategist. You got a 26-year-old learning on your brand. The
                person who pitched you hasn&rsquo;t been on a call in six months.
              </p>
            </GlassCard>
          </SimpleReveal>

          <SimpleReveal delay={0.12} className="h-full">
            <GlassCard className="h-full flex flex-col border-l-2 border-l-accent/50">
              <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
                The layer cake
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                You ask a question. Three people forward the email.
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                Account manager to traffic manager to coordinator to strategist. Your feedback gets
                translated four times before it reaches the person doing the work.
              </p>
            </GlassCard>
          </SimpleReveal>

          <SimpleReveal delay={0.24} className="h-full">
            <GlassCard className="h-full flex flex-col border-l-2 border-l-accent/50">
              <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
                The billing game
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                You&rsquo;re paying for hours. Not pattern recognition.
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                40% of a traditional agency&rsquo;s billable hours get eaten by coordination. You
                wrote the check for strategy. You got a timesheet.
              </p>
            </GlassCard>
          </SimpleReveal>
        </div>
      </section>

      {/* WHAT YOU GET — BUYER-FORWARD SOLUTION CARDS */}
      <section className="relative container-edge py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            What you actually get
          </div>
          <AnimatedHeadline
            as="h2"
            text="One senior. One strategy. One name on the door."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-fr">
          <SimpleReveal delay={0.0} className="h-full">
            <TiltCard tiltStrength={5} className="h-full">
              <GlassCard className="h-full flex flex-col">
                <IconSingle />
                <h3 className="mt-6 font-serif text-[26px] leading-[1.15] tracking-[-0.015em]">
                  Answers on the first call.
                </h3>
                <p className="mt-4 text-body text-text-secondary">
                  No &ldquo;let me check with the team.&rdquo; The person on the call is the person
                  doing the work. You get the decision, not a scheduled follow-up to get the
                  decision.
                </p>
              </GlassCard>
            </TiltCard>
          </SimpleReveal>

          <SimpleReveal delay={0.12} className="h-full">
            <TiltCard tiltStrength={5} className="h-full">
              <GlassCard className="h-full flex flex-col">
                <IconGrid />
                <h3 className="mt-6 font-serif text-[26px] leading-[1.15] tracking-[-0.015em]">
                  A strategy that adjusts in real time.
                </h3>
                <p className="mt-4 text-body text-text-secondary">
                  Not a PDF you review quarterly. A living plan that flexes when the feed shifts,
                  when a platform changes its rules, when a competitor moves — because the
                  strategist is the one shipping.
                </p>
              </GlassCard>
            </TiltCard>
          </SimpleReveal>

          <SimpleReveal delay={0.24} className="h-full">
            <TiltCard tiltStrength={5} className="h-full">
              <GlassCard className="h-full flex flex-col">
                <IconSparkle />
                <h3 className="mt-6 font-serif text-[26px] leading-[1.15] tracking-[-0.015em]">
                  One name to hold accountable.
                </h3>
                <p className="mt-4 text-body text-text-secondary">
                  One senior. One email. One person whose reputation rides on the outcome — backed
                  by a vetted network of specialists when the work calls for depth outside social.
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
                          src={cs.heroImage}
                          alt={`${cs.client} — ${cs.verticalLabel} case study`}
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

        {/* Apple TV-style tile lineup: horizontal scroll on mobile, 3-across on tablet, 5x2 grid on desktop */}
        <div className="mt-12 -mx-6 md:mx-0">
          <div
            className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6
              md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:snap-none
              lg:grid-cols-5
            "
          >
            {VERTICALS.map((v, i) => (
              <SimpleReveal
                key={v.slug}
                delay={(i % 5) * 0.06}
                className="snap-start shrink-0 w-[82vw] sm:w-[60vw] md:w-auto"
              >
                <Link
                  href={`/verticals/${v.slug}`}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[20px] transition-transform duration-300 will-change-transform hover:scale-[1.03] focus-visible:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label={`Explore ${v.name} vertical`}
                  style={{
                    background: `linear-gradient(135deg, var(--color-${v.colorKey}) 0%, var(--color-${v.colorKey}) 40%, rgba(0,0,0,0.55) 100%)`,
                    boxShadow:
                      '0 1px 0 rgba(255,255,255,0.08) inset, 0 10px 30px rgba(0,0,0,0.35)',
                  }}
                >
                  {/* gloss sheen */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay"
                    style={{
                      background:
                        'radial-gradient(120% 80% at 20% 0%, rgba(255,255,255,0.25) 0%, transparent 55%)',
                    }}
                  />
                  {/* content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] md:text-caption uppercase tracking-[0.18em] text-white/80">
                        {v.shortLabel}
                      </span>
                      <span
                        aria-hidden
                        className="font-mono text-[10px] md:text-caption uppercase tracking-[0.15em] text-white/70 transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-[20px] md:text-[22px] lg:text-[18px] xl:text-[20px] leading-[1.05] tracking-[-0.025em] text-white">
                        {v.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </SimpleReveal>
            ))}
          </div>
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

function AlgorithmStat() {
  return (
    <div>
      <div className="font-serif text-[clamp(48px,7vw,84px)] leading-none tracking-[-0.03em] text-text-primary">
        <AlgorithmCounter />
      </div>
      <div className="mt-3 font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
        Algorithm Updates Survived
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
