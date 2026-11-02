import Link from 'next/link';
import type { Metadata } from 'next';
import { ProseSections, type ProseSectionData } from '@/components/ui/ProseSection';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';
import { FACTS } from '@/lib/site-facts';

const URL = 'https://fiftyandfive.com/wine-us-market-entry';
const TITLE = 'Imported Wine & Spirits: US Market Entry';
const DESCRIPTION =
  'Social, creator and trade marketing for imported wine and spirits brands entering the US. Ten years building Mezzacorona from zero in the US. Senior-led since 2008.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    images: ['/opengraph-image'],
    title: `${TITLE} | Fifty & Five`,
    description: DESCRIPTION,
    url: URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | Fifty & Five`,
    description: DESCRIPTION,
  },
};

/** Three ways in, each a real ask from an imported brand or trade group. */
const OFFERS = [
  {
    title: 'US launch retainer',
    body: 'The full program for a brand new to the US: audience and market research, an English-language social presence built around your region and growers, community management, paid support once organic stops carrying reach, and trade-facing assets your importer and distributor can use.',
  },
  {
    title: 'Creator program',
    body: 'Creators matched to communities that already drink your category, pitched on the bottle rather than a fee schedule. Commission, product, or paid, set per creator. We built the StreetStrider program from zero to 100+ creator partnerships on the same matching principle.',
  },
  {
    title: 'Trade association workshops',
    body: 'A working session for wine alliances, regional associations and importer groups on DTC and social for member wineries. In person or virtual, fixed fee per session, quoted before anything is booked.',
  },
];

const FAQS = [
  {
    q: 'Can Fifty & Five launch an imported wine brand in the US?',
    a: 'Yes. Fifty & Five built the English-language social presence for the Gruppo Mezzacorona portfolio in the United States from nothing and ran it for a decade across 5+ brands. The work starts from zero US recognition and builds the region, the growers and the food the wine belongs next to into a story a US shopper understands.',
  },
  {
    q: 'Do you work with our importer and distributor, or only the brand?',
    a: 'Both. Three-tier rules decide which messages can come from the brand, so brand channels carry story and provenance while retailer and trade assets are produced separately for the importer and distributor. The founder built the first marketing department at Southern Wine & Spirits in 2007, inside the distributor tier, before founding the agency in 2008.',
  },
  {
    q: 'Can a creator program run on commission instead of paid posts?',
    a: 'Often, yes. Creators who already love the category will work for product, commission or a small fee when the brief is about the bottle and the occasion rather than a rate card. The mix is set per creator, and the content each partnership produces is reused across the brand feed so the program keeps working after each deal closes.',
  },
  {
    q: 'Do you run workshops for wine associations and alliances?',
    a: 'Yes. Fifty & Five runs working sessions on DTC and social for member wineries of trade associations and alliances, in person or virtual, at a fixed fee per session quoted in advance.',
  },
  {
    q: 'Which markets beyond the US do you cover?',
    a: `The US is the core, with the Hispanic market mapped from day one in Miami, Houston, Los Angeles, Phoenix and San Antonio. Across ${FACTS.brandsManaged}+ brands the agency has worked in ${FACTS.countries}+ countries on ${FACTS.continents} continents.`,
  },
];

const DEEP_SECTIONS: ProseSectionData[] = [
  {
    h2: 'Why the home-market story does not travel on its own',
    blocks: [
      {
        type: 'p',
        text: 'An imported label starts at zero recognition in the United States. The region that sells it at home, the appellation, the family name, means close to nothing to a shopper standing in front of forty bottles. That does not mean dropping the region. It means telling it in the register of someone buying wine for a Tuesday dinner, not a wine school exam.',
      },
      {
        type: 'p',
        text: 'That was the brief on Mezzacorona: no English-language presence to improve, a Trentino-Alto Adige story built from nothing, and a decade of platform changes underneath it. The story stayed fixed while the formats changed around it, from static images to video to short vertical video to shoppable placements.',
        href: '/work/mezzacorona',
        anchor: 'Read the Mezzacorona case study',
      },
    ],
  },
  {
    h2: 'What the first year covers',
    blocks: [
      {
        type: 'ul',
        items: [
          'Market and audience research before any posting: who already buys your category, in which states, at what price.',
          'The Hispanic market mapped from day one, not added later as a translation line item.',
          'An English-language social presence built around the region, the growers and the food the wine belongs next to.',
          'Brand channels kept inside three-tier rules: story and provenance, no price, no retailer call to action.',
          'Separate trade and retailer assets for your importer and distributor to put in front of buyers.',
          'Paid support folded into the plan once organic reach stops carrying the account.',
          'A creator program matched to communities that already drink the category.',
        ],
      },
    ],
  },
  {
    h2: 'Working through the three tiers, not around them',
    blocks: [
      {
        type: 'p',
        text: 'An imported brand sells through an importer, a distributor and a retailer before it reaches a glass. Each tier needs something different from marketing, and the brand account is legally limited in what it can say about where to buy. The program is built around that structure from the start instead of discovering it in a compliance review.',
      },
      {
        type: 'p',
        text: 'The founder learned the distributor side first: he built the first marketing department at Southern Wine & Spirits in 2007, with a 15% average lift in case sales, before founding the agency in 2008.',
        href: '/about',
        anchor: 'About the founder',
      },
    ],
  },
];

export default function WineUsMarketEntryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': URL,
                name: `${TITLE} | Fifty & Five`,
                description: DESCRIPTION,
                url: URL,
                isPartOf: { '@id': 'https://fiftyandfive.com/#website' },
                about: { '@id': `${URL}#service` },
              },
              {
                '@type': 'Service',
                '@id': `${URL}#service`,
                serviceType: 'US market entry marketing for imported wine and spirits',
                category: 'Wine and Spirits Marketing',
                name: TITLE,
                description: DESCRIPTION,
                provider: { '@id': 'https://fiftyandfive.com/#organization' },
                areaServed: [{ '@type': 'Country', name: 'United States' }],
                audience: {
                  '@type': 'BusinessAudience',
                  audienceType: 'Imported wine and spirits brands, importers, and wine trade associations',
                },
                mentions: [{ '@type': 'Organization', name: 'Mezzacorona' }],
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fiftyandfive.com/' },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Wine Marketing Agency',
                item: 'https://fiftyandfive.com/wine-social-media-marketing-agency',
              },
              { '@type': 'ListItem', position: 3, name: 'US Market Entry', item: URL },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="container-edge pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          Wine &amp; Spirits &middot; US market entry
        </div>
        <AnimatedHeadline
          as="h1"
          text="Bringing an imported wine or spirits brand to the US"
          className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-5xl"
          stagger={0.03}
        />
        <SimpleReveal delay={0.3}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-3xl leading-[1.7]">
            Fifty &amp; Five plans and runs US marketing for imported wine and spirits brands:
            social, creators, and the trade assets your importer and distributor need. We built
            the US presence for the Gruppo Mezzacorona portfolio from nothing and ran it for ten
            years across 5+ brands, inside {FACTS.wineSpiritsBrands}+ wine and spirits brands since{' '}
            {FACTS.founded}.
          </p>
        </SimpleReveal>
        <SimpleReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="/contact" variant="primary" size="large" trackName="Wine Entry Hero CTA">
              Start a conversation &rarr;
            </MagneticButton>
            <MagneticButton href="/work/mezzacorona" variant="secondary" size="large" trackName="Wine Entry Mezzacorona CTA">
              See the Mezzacorona work
            </MagneticButton>
          </div>
        </SimpleReveal>
      </section>

      {/* Three ways in */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Three ways in
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            A full launch, a creator program, or a working session for your members.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {OFFERS.map((o, i) => (
            <SimpleReveal key={o.title} delay={i * 0.08}>
              <GlassCard className="h-full p-7">
                <h3 className="font-serif text-[22px] leading-[1.2] text-text-primary">{o.title}</h3>
                <p className="mt-3 text-body text-text-secondary leading-[1.6]">{o.body}</p>
              </GlassCard>
            </SimpleReveal>
          ))}
        </div>
      </section>

      <ProseSections sections={DEEP_SECTIONS} />

      {/* FAQ */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Frequently asked
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Straight answers before you hire.
          </h2>
        </div>
        <div className="mt-12 max-w-3xl space-y-5">
          {FAQS.map((f) => (
            <GlassCard key={f.q} className="p-7">
              <h3 className="font-serif text-[22px] leading-[1.2] text-text-primary">{f.q}</h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.6]">{f.a}</p>
            </GlassCard>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-body text-text-secondary leading-[1.6]">
          Already selling in the US? See our{' '}
          <Link href="/wine-social-media-marketing-agency" className="text-accent hover:text-accent-light underline underline-offset-2">
            wine and spirits marketing agency
          </Link>{' '}
          page.
        </p>
      </section>

      <CTASection
        headline="Bringing a label to the US?"
        body="A conversation about your region, your importer and your first year. No proposal until we know it's a fit."
        ctaLabel="Talk to our founder &rarr;"
      />
    </>
  );
}
