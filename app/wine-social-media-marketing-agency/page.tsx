import Link from 'next/link';
import { ProseSections, type ProseSectionData } from '@/components/ui/ProseSection';
import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: { absolute: 'Wine & Spirits Marketing Agency | Fifty & Five' },
  description:
    'Wine marketing agency for wine and spirits brands. Social, content, and influencer work with three-tier compliance built in. 34+ brands since 2008.',
  alternates: { canonical: 'https://fiftyandfive.com/wine-social-media-marketing-agency' },
  openGraph: {
    images: ['/opengraph-image'],
    title: 'Wine Marketing Agency | Social, Content, Influencer | Fifty & Five',
    description:
      '34+ wine and spirits brands since 2008. The agency wine brands and distributors actually vet.',
    url: 'https://fiftyandfive.com/wine-social-media-marketing-agency',
    type: 'website',
  },
};

const CLIENTS = [
  'Kendall-Jackson',
  'Mezzacorona',
  'Penfolds',
  'Beringer',
  'Sutter Home',
  'Zardetto Prosecco',
  'Clean Slate Riesling',
  'Don Papa Rum',
];

const FAQS = [
  {
    q: 'What wine and spirits brands has Fifty & Five worked with?',
    a: 'Kendall-Jackson, Mezzacorona, Penfolds, Beringer, Sutter Home, Zardetto Prosecco, Clean Slate Riesling, Don Papa Rum, and 34+ wine and spirits brands across our 222-brand portfolio since 2008. Senior-led on every account, no junior bench.',
  },
  {
    q: 'How does Fifty & Five handle three-tier wine and spirits compliance on social?',
    a: 'Compliance is built into every retainer. We know which posts can ship through which tier, what is legal for DTC versus distributor markets, and how to balance trade promotion with consumer storytelling without crossing TTB lines.',
  },
  {
    q: 'Does Fifty & Five work with both luxury and mass-market wine brands?',
    a: 'Both. We have operated Kendall-Jackson’s premium positioning and value-tier brands from the same senior team. Vertical specialization, not project work.',
  },
  {
    q: 'How much does a wine and spirits social media agency cost?',
    a: 'Retainers run from $4,000 per month for ad management to $50,000+ per month for full-service, always-on programs. Pricing is principal-led, with no junior account management or holding-company markup.',
  },
  {
    q: 'Why does a wine brand need an agency with wine-specific experience?',
    a: 'Wine and spirits social carries rules other categories do not: mandatory age-gating, platform-specific advertising restrictions, and a hard line between trade and consumer communication. An agency that learns this on the job finds out the expensive way. Fifty & Five has built against these constraints since 2008.',
  },
  {
    q: 'What is the longest wine and spirits partnership Fifty & Five has run?',
    a: 'A 10-year retainer with Gruppo Mezzacorona across 5+ brands in their portfolio, adding roughly 1M followers over the relationship. Fifty & Five also runs a multi-year, active partnership with Kendall-Jackson.',
  },
  {
    q: 'Does Fifty & Five work with wine distributors as well as brands?',
    a: 'Yes. Our founder built the first marketing department at Southern Wine & Spirits, a major distributor, starting in 2007, before founding Fifty & Five in 2008. We understand both the brand and distributor sides of the three-tier system.',
  },
  {
    q: "What does a wine and spirits digital marketing company actually handle?",
    a: "A wine and spirits digital marketing company should run the full digital program and the compliance underneath it. For our clients that means paid media, organic social, content production, email, and the trade assets that support distributor sell-in, all built inside the three-tier system with age-gating on every platform and a claims check before anything is scheduled. Fifty & Five has managed 34 or more wine and spirits brands since 2008, including Kendall-Jackson, Penfolds, Beringer, Sutter Home, Zardetto Prosecco, and Clean Slate Riesling. The founder is on every account.",
  },
  {
    q: "Do you work as a spirits marketing agency, or only on wine?",
    a: "Both, and the spirits work is run by the same senior team. Don Papa Rum is one example from a client list that spans 34 or more wine and spirits brands since 2008. Spirits carry the same three-tier rules, the same age-gating requirements, and the same split between trade and consumer communication as wine, but the buying occasions, the cocktail-led content, and the on-premise relationships are different, so the calendar is built differently. Retainers start at $4,000 per month for ad management and run to $50,000 or more per month for full-service programs.",
  },
];

const DEEP_SECTIONS: ProseSectionData[] = [
  {
    "h2": "Three-tier compliance, and why it decides your content calendar",
    "blocks": [
      {
        "type": "p",
        "text": "The three tiers are supplier, distributor, and retailer, and the tier a message comes from decides whether that message is legal. As a supplier you can talk about the wine, the vineyard, the winemaker, and the occasion. You cannot post a price, promote a retailer's promotion, or run a call to action for inventory you do not legally control. The retailer can post price and availability. The distributor sits in the middle and mostly speaks to trade, not to consumers. Almost every content problem we inherit comes from a brand writing retailer copy on a brand account."
      },
      {
        "type": "p",
        "text": "Age-gating is not optional, and not a box you tick once at setup. Every platform profile, every paid audience floor, every DTC funnel, and every influencer post needs it, including pages you do not own. TTB lines govern label imagery and health or benefit claims, so a caption praising a wine for being light or clean can create a problem the creative team never saw coming. A real month of content ends up split like this."
      },
      {
        "type": "ul",
        "items": [
          "Brand-owned channels carry story, provenance, pairing, and occasion, with no price and no retailer call to action.",
          "Retailer-facing assets are produced separately and handed to the distributor or the chain, never published from the brand account.",
          "Paid media is split by market, because what is legal for DTC shipping in one state is not legal next door.",
          "Trade content runs on its own calendar and its own channels, aimed at buyers and sales reps rather than consumers.",
          "Every asset clears an age-gate check and a claims check before it is scheduled, not after a comment shows up."
        ]
      },
      {
        "type": "p",
        "text": "Seasonality then sets the order of the year. Harvest content is shot and banked before the crush. Rose season is planned in winter, because shelf resets land months ahead of the first warm weekend. Holiday assets are approved in late summer, because retail programs lock long before December. A calendar built on compliance and season survives legal review. A calendar built on trends does not."
      }
    ]
  },
  {
    "h2": "What we did for Kendall-Jackson and Mezzacorona",
    "blocks": [
      {
        "type": "p",
        "text": "Both are long-run retainers, not campaigns, and both are run by the senior team that pitched them."
      },
      {
        "type": "p",
        "text": "Gruppo Mezzacorona has been on retainer with us for ten years, covering five or more brands in their portfolio, and across that relationship we added roughly one million followers. The work is portfolio work: one senior team running several brands with different price points, audiences, and distributor footprints, without letting them blur into a single voice. Ten years also covers harvest cycles, holiday programs, packaging changes, and platform shifts, which is the part a one-year contract never reaches."
      },
      {
        "type": "p",
        "text": "Kendall-Jackson is a multi-year partnership and still active. That work is premium positioning, which means the creative has to hold a price point rather than chase volume. The same senior team also runs value-tier brands. An agency that only works in luxury makes everything look expensive. An agency that only works in value discounts by instinct. Running both teaches you which levers move a bottle on a promotional endcap and which protect a bottle that should never be discounted."
      },
      {
        "type": "p",
        "text": "The shape of the engagement is the same in both cases. The founder is on the account, and there is no junior account manager translating between you and the people doing the work. Month one is discovery only, so nothing is published before we understand the portfolio, the distributor map, and how legal review works on your side. Our average retainer runs more than three years, and these two are why that number holds."
      }
    ]
  },
  {
    "h2": "Distributor-side marketing, not just brand-side",
    "blocks": [
      {
        "type": "p",
        "text": "We plan the distributor side as well as the brand side, because the founder built the function inside a distributor before he built the agency."
      },
      {
        "type": "p",
        "text": "Lucas Vandenberg built the first marketing department at Southern Wine & Spirits starting in 2007, with zero prior wine industry experience. The result was a 15 percent average lift in case sales. He ran trade marketing across Walgreens, Kroger, CVS, and Target, and across more than 200 new account distributions. Fifty & Five opened in 2008 on top of that experience and has since managed 34 or more wine and spirits brands."
      },
      {
        "type": "p",
        "text": "A distributor sales rep carries hundreds of items and has no reason to care about your follower count. What moves that rep is a reason to open the bag: a program that is easy to sell, an account that already asked for the item, point of sale material that needs no explaining, and a brand story short enough to survive a buyer meeting. Consumer marketing that never reaches the trade creates demand nobody in the chain is set up to fill."
      },
      {
        "type": "ul",
        "items": [
          "Trade communication is aimed at distributor managers, reps, and chain buyers. It leads with margin, velocity, and program dates.",
          "Consumer communication is aimed at the shopper. It leads with taste, occasion, provenance, and where to find the bottle.",
          "The two need different assets, channels, and timing, and they should never run from the same account.",
          "Sell-in and sell-through are planned together, so a chain authorization is supported by demand in that market rather than nationally."
        ]
      },
      {
        "type": "p",
        "text": "If the agency you are interviewing cannot explain a depletion report, or why a shelf reset date sets your creative deadline, they are planning your year with half the information missing."
      }
    ]
  },
  {
    "h2": "What a wine marketing agency costs",
    "blocks": [
      {
        "type": "p",
        "text": "Our retainers run from $4,000 per month for ad management to $50,000 or more per month for full-service, always-on programs."
      },
      {
        "type": "table",
        "headers": [
          "Where you sit in the range",
          "What the engagement is",
          "Who it fits"
        ],
        "rows": [
          [
            "Starting at $4,000 per month",
            "Paid media management on defined channels, with reporting and ongoing optimization",
            "One brand with creative in hand and a clear commercial goal"
          ],
          [
            "Middle of the range",
            "Paid media plus organic social, content production, email, and supporting trade assets",
            "A brand or small portfolio that needs the whole calendar run"
          ],
          [
            "$50,000 or more per month",
            "Full service and always on across a multi-brand portfolio: strategy, production, media, trade support, reporting",
            "Several brands, multiple markets, both DTC and distributor obligations"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Scope moves the number, not seniority. The senior team is the same at both ends of the range."
      },
      {
        "type": "ul",
        "items": [
          "How many brands and how many SKUs sit inside the portfolio.",
          "How many markets you sell in, and how the DTC and distributor split falls across them.",
          "How much original photography and video the calendar needs each month.",
          "Whether trade assets and distributor support are in scope or handled internally.",
          "How much paid media is under management, and in how many countries."
        ]
      },
      {
        "type": "p",
        "text": "What is not in the number matters too. No junior account management, no holding-company markup, no layer of people between you and the work. We run a senior and AI operating model, which is why a small team can carry a portfolio this size. Month one is discovery only, so the first invoice buys understanding rather than output nobody approved."
      }
    ]
  },
  {
    "h2": "What to ask before you hire a wine marketing agency",
    "blocks": [
      {
        "type": "p",
        "text": "Ask questions that force specifics about compliance, staffing, and who touches the account."
      },
      {
        "type": "ol",
        "items": [
          "Which tier are you writing for, and how do you keep those messages separate? A good answer treats brand, distributor, and retailer content as three work streams with three approval paths, not one calendar with a legal check at the end.",
          "How do you handle age-gating across paid, organic, DTC, and influencer content? A good answer covers all four unprompted, including partner pages the agency does not own.",
          "Who is on my account every week, and what is their title? A good answer names people and hours. If the senior people in the pitch are not the people doing the work, keep looking.",
          "What have you done in wine or spirits, and for how long? A good answer names brands, gives the length of each relationship, and says what happened after year one, because anyone can show a launch.",
          "How does the calendar change for harvest, the holidays, rose season, and shelf resets? A good answer comes back with lead times and dates, not themes.",
          "What happens in month one? A good answer is discovery. An agency that starts publishing in week one is guessing about your portfolio and your legal review.",
          "What is excluded from the retainer, and what gets billed separately? A good answer is a short, plain list naming media spend, production, and talent before you have to ask."
        ]
      }
    ]
  }
];

export default function WineSocialMediaLandingPage() {
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
                '@id': 'https://fiftyandfive.com/wine-social-media-marketing-agency',
                name: 'Wine Marketing Agency | Social, Content, Influencer | Fifty & Five',
                description:
                  'Wine marketing agency for wine and spirits brands. Social, content, and influencer work with three-tier compliance built in. 34+ brands since 2008.',
                url: 'https://fiftyandfive.com/wine-social-media-marketing-agency',
                isPartOf: { '@id': 'https://fiftyandfive.com/#website' },
                about: { '@id': 'https://fiftyandfive.com/wine-social-media-marketing-agency#service' },
              },
              {
                '@type': 'Service',
                '@id': 'https://fiftyandfive.com/wine-social-media-marketing-agency#service',
                serviceType: 'Marketing Agency',
                category: 'Wine and Spirits Marketing',
                name: 'Wine & Spirits Marketing Agency',
                description:
                  'Senior-led wine marketing agency: social, content, influencer, and paid programs for wine and spirits brands, with three-tier compliance built in since 2008.',
                provider: { '@id': 'https://fiftyandfive.com/#organization' },
                areaServed: [{ '@type': 'Country', name: 'United States' }],
                audience: {
                  '@type': 'BusinessAudience',
                  audienceType: 'Wine and spirits brands, distributors, and hospitality groups',
                },
                mentions: [
                  { '@type': 'Organization', name: 'Kendall-Jackson' },
                  { '@type': 'Organization', name: 'Mezzacorona' },
                  { '@type': 'Organization', name: 'Penfolds' },
                ],
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
          Wine &amp; Spirits &middot; senior-led since 2008
        </div>
        <AnimatedHeadline
          as="h1"
          text={'Wine & Spirits Marketing Agency'}
          className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-5xl"
          stagger={0.03}
        />
        <SimpleReveal delay={0.3}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-3xl leading-[1.7]">
            A wine marketing agency plans and runs the marketing a wine or spirits brand cannot
            staff in-house: brand and content strategy, social media, influencer programs, paid
            media, and the trade and DTC communication that has to stay inside three-tier
            compliance. Fifty &amp; Five is different in three ways. The wine marketing and
            spirits marketing work is run by the founder, who built the first marketing
            department at Southern Wine &amp; Spirits before founding the agency in 2008. The
            portfolio is 34+ wine and spirits brands, including a 10-year Gruppo Mezzacorona
            retainer across 5+ brands and a multi-year Kendall-Jackson partnership. And
            compliance is treated as craft: which posts ship through which tier, what is legal
            for DTC versus distributor markets, and how trade promotion and consumer storytelling
            coexist.
          </p>
        </SimpleReveal>
        <SimpleReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="/contact" variant="primary" size="large" trackName="Wine Hero CTA">
              Start a conversation &rarr;
            </MagneticButton>
            <MagneticButton href="/verticals/wine-spirits" variant="secondary" size="large" trackName="Wine CTA See Portfolio">
              See the portfolio
            </MagneticButton>
          </div>
        </SimpleReveal>
      </section>

      {/* Roster */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Client roster
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Wine, spirits, and the distributors behind them.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLIENTS.map((c) => (
            <GlassCard key={c} className="p-6">
              <div className="font-serif text-[20px] leading-[1.15] text-text-primary">{c}</div>
            </GlassCard>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-body text-text-secondary leading-[1.6]">
          Full write-ups on <Link href="/work/kendall-jackson" className="text-accent hover:text-accent-light underline underline-offset-2">Kendall-Jackson</Link> and{' '}
          <Link href="/work/mezzacorona" className="text-accent hover:text-accent-light underline underline-offset-2">Mezzacorona</Link>, or the full portfolio on our{' '}
          <Link href="/verticals/wine-spirits" className="text-accent hover:text-accent-light underline underline-offset-2">wine and spirits social media agency</Link> page.
        </p>
      </section>

      {/* Why it works */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
              Why it works
            </div>
            <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
              Compliance is not a constraint. It is the craft.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-lg text-text-secondary leading-[1.75] max-w-2xl">
              Wine social has rules: compliance nuance around what you can and cannot say,
              age-gating on every platform, seasonal rhythms dictated by harvest, the holidays,
              ros&eacute; season, and shelf-reset cycles. Our founder built the first marketing
              department at Southern Wine &amp; Spirits in 2007, before founding Fifty &amp; Five
              in 2008 &mdash; this vertical is where the agency&rsquo;s discipline started.
              Read the full playbook in our{' '}
              <Link href="/blog/wine-spirits-social-media-2026" className="text-accent hover:text-accent-light underline underline-offset-2">2026 wine social guide</Link>{' '}
              or our <Link href="/blog/wine-spirits-influencer-marketing" className="text-accent hover:text-accent-light underline underline-offset-2">influencer marketing guide</Link>.
            </p>
          </div>
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
      </section>

      <CTASection
        headline="Let's talk wine and spirits."
        body="A conversation about what you're building, no proposal until we know it's a fit."
        ctaLabel="Talk to our founder &rarr;"
      />
    </>
  );
}
