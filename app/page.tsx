import Link from 'next/link';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { PlatformGraveyard } from '@/components/ui/PlatformGraveyard';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { DurationBadge, VerticalPill } from '@/components/ui/DurationBadge';
import { CTASection } from '@/components/layout/CTASection';
import { ReceiptsDashboard } from '@/components/ui/ReceiptsDashboard';
import { TypewriterHero } from '@/components/ui/TypewriterHero';
import { BrandMarquee } from '@/components/ui/BrandMarquee';
import { SelectedWork } from '@/components/ui/SelectedWork';
import { VERTICAL_COLOR_HEX, getCaseStudy } from '@/lib/data/caseStudies';
import { VERTICALS } from '@/lib/data/verticals';

export default function HomePage() {
  const featuredSlugs = ['blaze-pizza', 'resorts-world', 'kendall-jackson', 'enterprise-holdings'];
  const featured = featuredSlugs.map((s) => getCaseStudy(s)!).filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is Fifty & Five?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five is a boutique senior-led social media and content agency founded in 2008. The agency has managed social media for 222+ brands across 5 continents, including Microsoft, Hasbro, Kendall-Jackson, Mezzacorona, Enterprise Holdings, Warner Bros., Tupperware, Resorts World, and Blaze Pizza.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where is Fifty & Five located?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five is headquartered in Orlando, Florida, and serves clients across the United States, Latin America, Europe, Asia, and Oceania.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long has Fifty & Five been in business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five was founded in 2008 by Lucas Vandenberg. The agency has been continuously operating for 18 years and has retained some clients, including Mezzacorona, for over a decade.',
                },
              },
              {
                '@type': 'Question',
                name: 'What industries does Fifty & Five specialize in?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five specializes in 15+ verticals, including Wine and Spirits, Hospitality and Tourism, Restaurant and Food, Fitness and Wellness, Tech and SaaS, Retail and CPG, Healthcare, Real Estate, Automotive, Entertainment, Luxury, and Education.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does Fifty & Five charge?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five offers five retainer tiers from $1,500/mo (Studio) to $50,000+/mo (Enterprise). Every tier runs on the same Senior + AI operating model.',
                },
              },
              {
                '@type': 'Question',
                name: 'What makes Fifty & Five different from other social media agencies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five is one of the only boutique social media agencies with an enterprise client list including Microsoft, Hasbro, Warner Bros., Enterprise Holdings, and Tupperware. Every account is run with senior-led practices and an AI-leveraged operating model.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does Fifty & Five work with international brands?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Fifty & Five has worked with brands across 5 continents and 40+ countries, including Mezzacorona (Italy), Penfolds (Australia), Melora (New Zealand), Koenig (Germany), Happy Egg Co. (United Kingdom), Don Papa Rum (Philippines), and the Hong Kong, Korea, and Macau Tourism Boards.',
                },
              },
            ],
          }),
        }}
      />
      {/* HERO */}
      <TypewriterHero />

      {/* BIG-BRAND MARQUEE */}
      <BrandMarquee />

      {/* STATS BAR */}
      <section className="container-edge py-28 md:py-36">
        <SimpleReveal y={8} duration={0.4} margin="-30%">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
            <Stat value={222} suffix="+" label="Brands Managed" />
            <div>
              <div className="font-serif text-[clamp(48px,7vw,84px)] leading-none tracking-[-0.03em] text-text-primary">
                <AnimatedCounter target={5} />
              </div>
              <div className="mt-3 font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
                Continents · 40+ Countries
              </div>
            </div>
            <Stat value={18} label="Years Social-First" />
            <div>
              <div className="font-serif text-[clamp(48px,7vw,84px)] leading-none tracking-[-0.03em] text-text-primary">
                3+
              </div>
              <div className="mt-3 font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
                Avg. Retainer Length (Yrs)
              </div>
            </div>
          </div>
        </SimpleReveal>
      </section>

      {/* SELECTED WORK — creative proof */}
      <SelectedWork />

      {/* PLATFORMS WE'VE OUTLASTED */}
      <PlatformGraveyard />

      {/* THE RECEIPTS ROW — Duration depth */}
      <section className="container-edge py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            The moat
          </div>
          <AnimatedHeadline
            as="h2"
            text={'Most agencies sell projects.\nWe sell durations.'}
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
          <SimpleReveal delay={0.15}>
            <p className="mt-6 text-body-lg text-text-secondary leading-[1.6] max-w-2xl">
              When we take a brand on, we don&rsquo;t show up for a quarter&nbsp;&mdash; we show up for a
              decade. Once we hold the brand voice, the calendar cadence, the asset library, and the
              institutional memory of which campaigns worked and why, replacing us costs the client
              6&ndash;9 months of rebuild risk.
            </p>
          </SimpleReveal>
          <SimpleReveal delay={0.25}>
            <p className="mt-4 text-body text-text-tertiary leading-[1.7]">
              That&rsquo;s why our retainers run long. Most of our clients are 3+ year partnerships.
              The longest run more than ten.
            </p>
          </SimpleReveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          <SimpleReveal delay={0.0}>
            <GlassCard className="h-full flex flex-col">
              <div className="font-serif text-[48px] leading-none tracking-[-0.03em] text-accent">
                10 yrs
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Blaze Pizza
              </h3>
              <p className="mt-3 text-body text-text-secondary">
                National restaurant program. Built and ran the social layer during Blaze&rsquo;s rise
                to one of the fastest-growing chains in U.S. history.
              </p>
            </GlassCard>
          </SimpleReveal>

          <SimpleReveal delay={0.1}>
            <GlassCard className="h-full flex flex-col">
              <div className="font-serif text-[48px] leading-none tracking-[-0.03em] text-accent">
                10 yrs
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Mezzacorona
              </h3>
              <p className="mt-3 text-body text-text-secondary">
                Italian wine portfolio. ~1M followers added across the portfolio over a decade-long
                partnership.
              </p>
            </GlassCard>
          </SimpleReveal>

          <SimpleReveal delay={0.2}>
            <GlassCard className="h-full flex flex-col">
              <div className="font-serif text-[48px] leading-none tracking-[-0.03em] text-accent">
                30+
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Wine &amp; Spirits Brands
              </h3>
              <p className="mt-3 text-body text-text-secondary">
                Across producers, distributors, and importers&nbsp;&mdash; the home vertical since 2008.
              </p>
            </GlassCard>
          </SimpleReveal>
        </div>
      </section>

      {/* RECEIPTS DASHBOARD */}
      <ReceiptsDashboard />

      {/* FEATURED WORK, BENTO GRID */}
      <section className="container-edge py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              Selected Work
            </div>
            <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em] max-w-3xl">
              Campaigns for brands you know, built by the senior team that actually ran them.
            </h2>
          </div>
          <Link
            href="/work"
            className="font-mono text-meta uppercase tracking-[0.1em] text-accent hover:text-accent-light transition-colors"
          >
            View all work →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((cs, i) => {
            const hex = VERTICAL_COLOR_HEX[cs.verticalColor] ?? '#C41E3A';
            return (
              <SimpleReveal key={cs.slug} delay={i * 0.08}>
                <Link href={`/work/${cs.slug}`} className="block h-full group">
                  <TiltCard tiltStrength={4} className="h-full">
                    <GlassCard className="h-full flex overflow-hidden" padded={false}>
                      <div
                        className="w-1.5 shrink-0 self-stretch transition-all duration-300 group-hover:w-2"
                        style={{ background: hex }}
                        aria-hidden
                      />
                      <div className="flex-1 flex flex-col p-6">
                        <div className="flex items-start justify-between gap-4">
                          <VerticalPill label={cs.verticalLabel} colorKey={cs.verticalColor} />
                          <DurationBadge>{cs.durationBadge}</DurationBadge>
                        </div>
                        <h3 className="mt-7 font-serif text-[26px] leading-[1.1] tracking-[-0.02em]">
                          {cs.client}
                        </h3>
                        <p className="mt-3 text-body text-text-secondary flex-1 line-clamp-3">{cs.tagline}</p>
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
                  className="group relative block aspect-[4/3] w-full overflow-hidden transition-transform duration-300 will-change-transform hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label={`Explore ${v.name} vertical`}
                  style={{
                    background: `linear-gradient(135deg, var(--color-${v.colorKey}) 0%, var(--color-${v.colorKey}) 40%, rgba(0,0,0,0.55) 100%)`,
                  }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay"
                    style={{
                      background:
                        'radial-gradient(120% 80% at 20% 0%, rgba(255,255,255,0.25) 0%, transparent 55%)',
                    }}
                  />
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
      <CTASection
        headline="Ready to work with the team that's done this 222 times?"
        body="Most agency relationships start with a pitch deck. Ours starts with a conversation. No proposals until we know it's a fit."
        ctaLabel="See how we'd approach your brand →"
      />
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
