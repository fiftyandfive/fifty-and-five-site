import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { VERTICALS, getVertical } from '@/lib/data/verticals';
import { VERTICAL_COLOR_HEX, getCaseStudy } from '@/lib/data/caseStudies';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { DurationBadge, VerticalPill } from '@/components/ui/DurationBadge';
import { CTASection } from '@/components/layout/CTASection';

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const v = getVertical(params.slug);
  if (!v) return { title: 'Vertical Not Found' };
  const desc = v.metaDescription ?? v.subhead;
  return {
    title: v.headline,
    description: desc,
    openGraph: {
      title: `${v.headline} | Fifty & Five`,
      description: desc,
      url: `https://fiftyandfive.com/verticals/${v.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${v.headline} | Fifty & Five`,
      description: desc,
    },
    alternates: {
      canonical: `https://fiftyandfive.com/verticals/${v.slug}`,
    },
  };
}

const PORTFOLIO_NAMES =
  'Microsoft, SAP, Kendall-Jackson, Enterprise Holdings, Discovery Channel, Blaze Pizza, Polynesian Cultural Center, Resorts World, NetGear/Arlo, Tupperware, Warner Bros., and 200+ more.';

export default function VerticalPage({ params }: { params: { slug: string } }) {
  const v = getVertical(params.slug);
  if (!v) notFound();
  const hex = VERTICAL_COLOR_HEX[v.colorKey];
  const studies = v.featuredCaseStudies
    .map((s) => getCaseStudy(s))
    .filter(Boolean)
    .map((cs) => cs!);

  const topClients = v.clients.slice(0, 4).join(', ');
  const faqs = v.faqs ?? [
    {
      q: `What's the best ${v.shortLabel} social media agency?`,
      a: `Fifty & Five has managed social for ${v.shortLabel} brands since 2008, including ${topClients}. Senior-led, specialist-backed, no junior team handoffs.`,
    },
    {
      q: `How is ${v.shortLabel} social media different from other industries?`,
      a: v.expertise[0],
    },
    {
      q: `What does ${v.shortLabel} social media cost?`,
      a: `Fifty & Five ${v.shortLabel} retainers start at $4,000 per month for ad management and scale to $50,000+ per month for full-service, always-on programs with content production. Pricing is principal-led with no holding-company markup.`,
    },
  ];

  return (
    <>
      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fiftyandfive.com/' },
              { '@type': 'ListItem', position: 2, name: 'Verticals', item: 'https://fiftyandfive.com/work' },
              { '@type': 'ListItem', position: 3, name: v.name, item: `https://fiftyandfive.com/verticals/${v.slug}` },
            ],
          }),
        }}
      />
      {/* WebPage + Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                name: `${v.headline} | Fifty & Five`,
                description: v.metaDescription ?? v.subhead,
                url: `https://fiftyandfive.com/verticals/${v.slug}`,
                isPartOf: { '@id': 'https://fiftyandfive.com/#website' },
                about: { '@id': `https://fiftyandfive.com/verticals/${v.slug}#service` },
              },
              {
                '@type': 'Service',
                '@id': `https://fiftyandfive.com/verticals/${v.slug}#service`,
                serviceType: 'Social Media Marketing',
                category: `${v.name} Marketing`,
                name: `${v.name} Social Media Marketing`,
                description: v.subhead,
                provider: { '@id': 'https://fiftyandfive.com/#organization' },
                areaServed: [
                  { '@type': 'Country', name: 'United States' },
                  { '@type': 'Country', name: 'Canada' },
                  { '@type': 'Country', name: 'United Kingdom' },
                  { '@type': 'AdministrativeArea', name: 'European Union' },
                  { '@type': 'AdministrativeArea', name: 'Latin America' },
                  { '@type': 'AdministrativeArea', name: 'Asia-Pacific' },
                ],
                audience: { '@type': 'BusinessAudience', audienceType: v.name },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20"
        style={{
          background: `linear-gradient(180deg, ${hex}22 0%, ${hex}08 40%, var(--color-bg-primary) 100%)`,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 80% -20%, ${hex}55 0%, transparent 50%)`,
            filter: 'blur(60px)',
          }}
        />
        <div className="relative container-edge">
          <div
            className="font-mono text-caption uppercase tracking-[0.15em]"
            style={{ color: hex }}
          >
            {v.shortLabel}
          </div>
          <AnimatedHeadline
            as="h1"
            text={v.headline}
            className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-4xl"
            stagger={0.04}
          />
          <SimpleReveal delay={0.3}>
            <p className="mt-6 text-body-lg text-text-secondary max-w-3xl">{v.subhead}</p>
          </SimpleReveal>
        </div>
      </section>

      {/* Selected Clients */}
      <section className="container-edge py-20">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          Selected clients
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {v.clients.map((c) => (
            <div
              key={c}
              className="glass rounded-glass px-4 py-5 font-serif text-[20px] leading-[1.1] tracking-[-0.015em] text-text-primary"
            >
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* Expertise / Value Props */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              What we bring
            </div>
            <AnimatedHeadline
              as="h2"
              text="Expertise earned in the category."
              className="mt-4 font-serif text-h2 tracking-[-0.02em]"
            />
          </div>
          <div className="md:col-span-8 space-y-5">
            {v.expertise.map((p, i) => (
              <SimpleReveal key={i} delay={i * 0.08}>
                <div className="glass rounded-glass p-6">
                  <div className="font-mono text-caption uppercase text-accent tracking-[0.12em] mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-body-lg text-text-secondary leading-[1.75]" dangerouslySetInnerHTML={{ __html: p }} />
                </div>
              </SimpleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {studies.length > 0 && (
        <section className="container-edge py-20">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Case studies in {v.shortLabel}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr">
            {studies.map((cs) => (
              <Link key={cs.slug} href={`/work/${cs.slug}`} className="block h-full group">
                <TiltCard tiltStrength={4} className="h-full">
                  <GlassCard padded={false} className="h-full flex overflow-hidden">
                    <div
                      className="w-1.5 shrink-0 self-stretch transition-all duration-300 group-hover:w-2"
                      style={{ background: VERTICAL_COLOR_HEX[cs.verticalColor] ?? '#C41E3A' }}
                      aria-hidden
                    />
                    <div className="flex-1 flex flex-col p-6">
                      <div className="flex items-center justify-between gap-4">
                        <VerticalPill label={cs.verticalLabel} colorKey={cs.verticalColor} />
                        <DurationBadge>{cs.durationBadge}</DurationBadge>
                      </div>
                      <h3 className="mt-7 font-serif text-[28px] leading-[1.1] tracking-[-0.02em]">
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
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Frequently asked
          </div>
          <AnimatedHeadline
            as="h2"
            text={`Quick answers about ${v.shortLabel.toLowerCase()} social.`}
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>
        <div className="mt-12 max-w-3xl space-y-5">
          {faqs.map((f, i) => (
            <GlassCard key={i} className="p-7">
              <h3 className="font-serif text-[22px] leading-[1.2] text-text-primary">
                {f.q}
              </h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.6]">
                {f.a}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* Portfolio Strip */}
      <section className="container-edge py-16 md:py-20">
        <div className="glass rounded-glass p-8 md:p-10 text-center">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Featured in our 222-brand portfolio across 5 continents since 2008
          </div>
          <p className="mt-4 text-body text-text-secondary max-w-3xl mx-auto">
            Worked with: {PORTFOLIO_NAMES}
          </p>
        </div>
      </section>

      {(v.slug === 'wine-spirits' || v.slug === 'hospitality') && (
        <section className="container-edge pb-16 md:pb-20 text-center">
          <p className="text-body text-text-secondary">
            Hiring an agency for this vertical?{' '}
            <Link
              href={v.slug === 'wine-spirits' ? '/wine-social-media-marketing-agency' : '/hospitality-social-media-agency'}
              className="text-accent hover:text-accent-light underline underline-offset-2"
            >
              See our {v.shortLabel.toLowerCase()} agency page
            </Link>
            {' '}for pricing and FAQs.
          </p>
        </section>
      )}

      <CTASection
        headline={`Run social for ${v.shortLabel.toLowerCase()}?`}
        body="Book a 30-min working session — no pitch deck, no proposal until we know it's a fit."
        ctaLabel={`Get a ${v.shortLabel.toLowerCase()} social strategy →`}
      />
    </>
  );
}
