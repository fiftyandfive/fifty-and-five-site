import type { Metadata } from 'next';
import { ProseSections, type ProseSectionData } from '@/components/ui/ProseSection';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: { absolute: 'Franchise Social Media Agency | Fifty & Five' },
  description:
    'Social media agency for franchise and multi-location brands. Blaze Pizza, Enterprise Holdings, Orangetheory, and more. Senior-led since 2008.',
  alternates: { canonical: 'https://fiftyandfive.com/franchise-social-media-agency' },
  openGraph: {
    images: ['/opengraph-image'],
    title: 'Franchise Social Media Agency | Fifty & Five',
    description:
      'The social media agency franchises trust. Blaze Pizza (300+ locations), Enterprise Holdings (6 brands), Orangetheory, and more. Senior-led since 2008.',
    url: 'https://fiftyandfive.com/franchise-social-media-agency',
    type: 'website',
  },
};

const FRANCHISE_CLIENTS = [
  { name: 'Enterprise Holdings', detail: '6 brands — Enterprise, National, Alamo', vertical: 'Automotive' },
  { name: 'Blaze Pizza', detail: '300+ locations nationally', vertical: 'Restaurant / QSR' },
  { name: "Roscoe's Chicken & Waffles", detail: 'Iconic multi-location brand', vertical: 'Restaurant / QSR' },
  { name: "Shakey's Pizza", detail: 'Multi-unit franchise program', vertical: 'Restaurant / QSR' },
  { name: 'Orangetheory Fitness', detail: 'National fitness franchise', vertical: 'Fitness' },
  { name: 'Body Bar Pilates', detail: 'Multi-studio franchise', vertical: 'Fitness' },
  { name: 'Title Boxing Club', detail: 'Multi-unit fitness franchise', vertical: 'Fitness' },
  { name: 'Centennial Real Estate', detail: '9 properties managed simultaneously', vertical: 'Real Estate' },
];

const FAQS = [
  {
    q: 'What is the best social media agency for franchise brands?',
    a: 'Fifty & Five is a boutique senior-led social media agency that has managed social for 10+ franchise and multi-location brands since 2008, including Enterprise Holdings (6 brands), Blaze Pizza (300+ locations), Orangetheory Fitness, Roscoe\'s Chicken & Waffles, Shakey\'s Pizza, Body Bar Pilates, Title Boxing Club, and Centennial Real Estate (9 properties). Every account is led by the founder — no junior handoffs.',
  },
  {
    q: 'How do you manage brand consistency across 50+ franchise locations?',
    a: 'We build a central brand voice guide and content system in month one, then create platform-specific content that scales across locations while leaving room for local relevance. We\'ve run this model for Enterprise Holdings across 6 brands and Blaze Pizza across 300+ locations.',
  },
  {
    q: 'Can you handle both corporate social and local franchise pages?',
    a: 'Yes. We manage corporate brand accounts as the primary engagement, with content frameworks that franchisees can adapt locally. For Enterprise Holdings, we managed 6 distinct brand identities under one strategic umbrella.',
  },
  {
    q: 'How much does franchise social media management cost?',
    a: 'Franchise programs typically fall in the Scale ($15,000–$25,000/mo) or Enterprise ($30,000–$50,000+/mo) tier depending on location count, platform coverage, and whether paid media is included. Single-location franchise owners can start at the Growth tier ($4,000–$6,500/mo).',
  },
  {
    q: 'What makes Fifty & Five different from other franchise marketing agencies?',
    a: 'Most franchise marketing agencies focus on paid media and lead generation. Fifty & Five is a social media management agency — we build the organic presence, manage communities, create content, and run paid social. We\'ve been doing this since 2008 across 222+ brands. Our average client retainer is 3+ years, and our longest franchise relationships exceed a decade.',
  },
  {
    q: "What should I look for in a QSR social media agency?",
    a: "Look for an agency that has run a QSR system through growth, not one that has managed a few restaurant accounts at a steady size. Ask how they ship limited time offers, since LTO windows are where most programs fall behind. Ask who answers a comment about a wrong order at a specific store, and how fast. Ask whether senior people stay on the account after the pitch. We ran Blaze Pizza's national program for ten years, from before the first restaurant opened to more than 300 locations, with 400% engagement growth.",
  },
  {
    q: "Do you work with restaurant franchise brands specifically?",
    a: "Yes. Restaurant and QSR franchises are one of our deepest categories. We ran Blaze Pizza's national social media program for ten years, from day zero to 300+ locations, and we have worked with Roscoe's Chicken & Waffles and Shakey's Pizza. Each needed the same underlying system, a national voice with a working local layer, an offer pipeline that stays ahead of the operations calendar, and a response framework for store level comments, with a very different voice on top. We have run 10+ franchise and multi-location brands since 2008.",
  },
];

const DEEP_SECTIONS: ProseSectionData[] = [
  {
    "h2": "QSR and restaurant franchise social media",
    "blocks": [
      {
        "type": "p",
        "text": "QSR and restaurant franchise social media is a speed problem before it is a creative problem. The menu moves, limited time offers expire on a fixed date, and most of the people commenting are standing inside one of your restaurants while they type. We have run this category for Blaze Pizza, Roscoe's Chicken & Waffles and Shakey's Pizza, and the operating model is built around that clock, not a monthly calendar that gets approved and then ignored."
      },
      {
        "type": "p",
        "text": "Limited time offers are where most franchise programs break. An LTO has a start date, an end date, participating locations, and a price that may differ by market. If social is built one post at a time, the calendar sits behind operations and the brand promotes a product half the system has already sold out of. We build each LTO as a kit: the national announcement, the local cutdowns, the paid variants, the reply language for the questions that always arrive, and a kill date on every asset."
      },
      {
        "type": "p",
        "text": "The second difference is that store operations show up in the comments. A slow line, a wrong order, a location that closed early. That traffic starts as an operations issue but it lands on marketing's channels, and it needs an answer that does not promise what the restaurant cannot deliver. We sort inbound into what the community manager answers directly, what routes to the franchisee, and what escalates to corporate the same day."
      },
      {
        "type": "p",
        "text": "A QSR program has to hold all of this at once."
      },
      {
        "type": "ul",
        "items": [
          "An LTO pipeline that ships national and local versions of an offer before the window opens, not during it",
          "A response framework separating food questions, order problems, hiring questions and store specific complaints",
          "A national voice that stays recognizable while local pages sound like the neighborhood they sit in",
          "Enough asset volume that a location opening in a new market never posts stock photography",
          "Approval paths short enough that a same day reaction is still possible"
        ]
      },
      {
        "type": "p",
        "text": "Local versus national voice is the part clients underestimate. A national account builds the brand and carries the offer. A local account makes one restaurant feel like it belongs to one neighborhood. Different jobs, different content, and they cannot contradict each other on price, product or promise. The fix is a system where the national layer is fixed and the local layer is genuinely local, inside rules a franchisee can read in one page."
      },
      {
        "type": "p",
        "text": "If you are choosing between agencies that work with QSR and restaurant brands, the honest test is whether they have run a system through growth rather than held a few accounts at a steady size. Blaze Pizza went from zero restaurants to more than 300 with us. Roscoe's Chicken & Waffles and Shakey's Pizza both came with long histories and loyal audiences to respect. All three needed the same machine underneath and very different voices on top."
      }
    ]
  },
  {
    "h2": "Blaze Pizza: day zero to 300+ locations",
    "blocks": [
      {
        "type": "p",
        "text": "We started Blaze Pizza's social media program before the first restaurant opened and ran it for ten years, to more than 300 locations, with 400% engagement growth across the national channels. It is the one we point to when a franchisor asks whether an agency our size can hold a national system."
      },
      {
        "type": "p",
        "text": "Day zero is a specific kind of assignment. No customer photography, no review history, no comment volume, no proof anyone wants the product. The job is to build an audience for a restaurant that does not exist yet, so the content has to carry the idea of the brand rather than the evidence of it. We built the voice, the visual language and the launch cadence in that window, and those decisions had to survive everything after."
      },
      {
        "type": "p",
        "text": "What changed as the count grew was the content system, not the strategy:"
      },
      {
        "type": "ol",
        "items": [
          "Pre-opening: one voice, one calendar, national channels only, every asset made for the brand rather than a market.",
          "Early growth: new market openings needed their own launch content, so the system had to produce market specific assets on a repeatable schedule without a fresh brief every time.",
          "Scale: enough locations that the national account could no longer speak to every market, so content became modular, with national assets built to be recut locally and local activity feeding back up.",
          "Maturity: inbound conversation became its own workstream, with response frameworks, escalation paths and a clear line between what community management answers and what the brand team decides."
        ]
      },
      {
        "type": "p",
        "text": "The 400% engagement growth came out of the later phases more than the first. Engagement at day zero is easy to move because the base is small. Holding growth while the location count climbs is the hard version: the audience gets broader, the comment volume gets heavier, and content that worked for one city stops working nationally."
      },
      {
        "type": "p",
        "text": "Jerry Shen, Director of Digital Growth at Blaze Pizza, put it this way: they grew engagement 400%, and it did not feel like being partnered with a large company."
      },
      {
        "type": "p",
        "text": "That second half matters as much as the number. A ten year partnership at national scale usually means an account team that turns over every year and a senior name who shows up at the quarterly review. We are built the other way. The founder is on every account, the people who built the program run it, and there are no junior handoffs once an account gets big."
      }
    ]
  },
  {
    "h2": "What franchise social media costs",
    "blocks": [
      {
        "type": "p",
        "text": "Most franchise and multi-location programs we run land in the Scale or Enterprise band of our published pricing. Single location franchise owners are a different conversation and can start at Growth. We publish the ranges because a franchisor comparing agencies should not have to sit through two calls to find out whether we are in budget."
      },
      {
        "type": "p",
        "text": "The published ladder is Growth $4,000-$6,500/mo, Premium $7,500-$12,000/mo, Scale $15,000-$25,000/mo, and Enterprise $30,000-$50,000+/mo."
      },
      {
        "type": "table",
        "headers": [
          "Tier",
          "Monthly",
          "What it covers"
        ],
        "rows": [
          [
            "Growth",
            "$4,000-$6,500",
            "A single location or a small owner group. One brand, core platforms, organic content and community management."
          ],
          [
            "Premium",
            "$7,500-$12,000",
            "A multi-location brand with a national account and a defined local layer. Higher volume, deeper reporting, paid support available."
          ],
          [
            "Scale",
            "$15,000-$25,000",
            "A full franchise system. National channels plus a location framework, LTO and promotion pipelines, response frameworks, franchisee facing assets."
          ],
          [
            "Enterprise",
            "$30,000-$50,000+",
            "Large systems, multiple brands, or multiple regions and languages. Scale plus paid media management, expanded platform coverage and executive reporting."
          ]
        ]
      },
      {
        "type": "p",
        "text": "Three things decide whether a franchise program is Scale or Enterprise. Location count is the first, because a framework for 40 locations and a framework for 300 are different builds. Platform coverage is the second, since every added platform is a production line rather than a repost. Paid media is the third and usually the one that moves a program up a tier, because managing spend across national and local budgets is its own discipline."
      },
      {
        "type": "p",
        "text": "Multi-brand and multi-region work sits at the top of the ladder for the same reason. We managed six brands simultaneously for Enterprise Holdings, including Enterprise Rent-A-Car, National Car Rental and Alamo Rent A Car, across the United States and Latin America, and nine properties at once for Centennial Real Estate. That is not one account repeated. It is a shared operating model carrying separate voices, calendars and approval chains."
      },
      {
        "type": "p",
        "text": "The full breakdown, including what sits inside each line item and where franchise budgets get misallocated, is worth reading before you build the budget:",
        "href": "/blog/franchise-social-media-management-cost",
        "anchor": "what franchise social media management costs"
      }
    ]
  },
  {
    "h2": "Corporate versus local: who controls what",
    "blocks": [
      {
        "type": "p",
        "text": "Corporate owns the message, local owns the moment. That one line resolves most of the arguments franchise marketing teams have with their systems, and the rest is writing it down clearly enough that a franchisee can follow it without calling anyone."
      },
      {
        "type": "p",
        "text": "We split every franchise program into three buckets, written into one document the whole system can see."
      },
      {
        "type": "ul",
        "items": [
          "Brand owned and locked: national campaigns, pricing, product claims, menu language, identity usage, crisis and legal response, anything carrying a nutritional, safety or franchise disclosure. Locations run these as supplied.",
          "Local and flexible: community events, staff and hiring posts, neighborhood partnerships, local sports and school moments, store milestones, guest photos taken at that location, replies in that location's own comments.",
          "Shared with approval: any local offer that touches price, any content featuring a person who is not staff, anything that reads as a brand statement, any paid spend behind brand assets."
        ]
      },
      {
        "type": "p",
        "text": "On approvals, a location's promotion should go through one named person at corporate with a stated turnaround, usually two business days. The failure mode is not strict approval, it is slow approval. When a franchisee waits a week for a yes on a local sponsorship post, they stop asking, and the next thing they run will not come through the process at all."
      },
      {
        "type": "p",
        "text": "When a franchisee runs an offer that contradicts the national campaign, treat it as an operations problem with a marketing symptom. Pull the post quickly and quietly, because a public correction hurts the brand more than the original offer did. Honor whatever a customer already acted on. Then find out why it happened, which is almost always a real problem the national calendar was not solving, like a slow daypart or a competitor opening across the street. If three locations do the same thing in a month, fix the national calendar, not the franchisees."
      },
      {
        "type": "p",
        "text": "Getting this right is why our franchise relationships run long. Our average client retainer is over three years and the longest franchise relationships pass a decade. Decision rights that are written down, fast enough to use, and revisited when the system outgrows them are the difference between a program the field cooperates with and one it routes around."
      }
    ]
  }
];

export default function FranchisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://fiftyandfive.com/franchise-social-media-agency',
            serviceType: 'Franchise Social Media Management',
            name: 'Franchise & Multi-Location Social Media Agency',
            description:
              'Senior-led social media management for franchise and multi-location brands. 10+ franchise clients including Enterprise Holdings (6 brands), Blaze Pizza (300+ locations), and Orangetheory Fitness.',
            provider: { '@id': 'https://fiftyandfive.com/#organization' },
            areaServed: [
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'Canada' },
            ],
            audience: {
              '@type': 'BusinessAudience',
              audienceType: 'Franchise brands and multi-location businesses',
            },
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
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://fiftyandfive.com/services' },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Franchise Social Media Agency',
                item: 'https://fiftyandfive.com/franchise-social-media-agency',
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

      {/* HERO */}
      <section className="container-edge pt-32 pb-16 md:pt-40 md:pb-24">
        <SimpleReveal>
          <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.18em]">
            Franchise &amp; multi-location brands · senior-led since 2008
          </div>
        </SimpleReveal>

        <AnimatedHeadline
          as="h1"
          text={'Social media agency for\nfranchise brands.'}
          className="mt-8 font-serif text-display text-text-primary max-w-5xl"
          stagger={0.06}
        />

        <SimpleReveal delay={0.6}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-2xl leading-[1.55]">
            Fifty &amp; Five has managed social media for 10+ franchise and
            multi-location brands since 2008 &mdash; including Enterprise
            Holdings (6 brands), Blaze Pizza (300+ locations), Orangetheory
            Fitness, Roscoe&rsquo;s Chicken &amp; Waffles, and Shakey&rsquo;s
            Pizza. Same senior team. No junior handoffs.
          </p>
        </SimpleReveal>

        <SimpleReveal delay={0.85}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-white glow-accent transition-colors hover:bg-accent-light"
            >
              Talk to our founder about your franchise &rarr;
            </a>
            <a
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-glass-border px-7 py-3.5 text-[15px] font-medium text-text-primary transition-colors hover:border-white/20"
            >
              See franchise case studies
            </a>
          </div>
        </SimpleReveal>
      </section>

      {/* FRANCHISE ROSTER */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Franchise roster
          </div>
          <AnimatedHeadline
            as="h2"
            text="10+ multi-location brands. One operating model."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.55] max-w-2xl">
            From 6-brand automotive portfolios to 300-location QSR chains, the model
            is the same: senior-led strategy, AI-leveraged execution, and a single
            point of accountability on every account.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FRANCHISE_CLIENTS.map((c) => (
            <GlassCard key={c.name} className="p-6">
              <div className="font-serif text-[20px] leading-[1.15] text-text-primary">
                {c.name}
              </div>
              <div className="mt-2 text-body text-text-secondary">
                {c.detail}
              </div>
              <div className="mt-3 font-mono text-caption uppercase text-text-tertiary tracking-[0.14em]">
                {c.vertical}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* WHY FRANCHISES CHOOSE US */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Why franchise brands choose us
          </div>
          <AnimatedHeadline
            as="h2"
            text="The franchise social media problem."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <SimpleReveal>
            <GlassCard className="h-full flex flex-col">
              <h3 className="font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Brand consistency at scale
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                Franchise social fails when every location posts independently without
                a brand voice system. We build the central voice guide in month one,
                then create content frameworks that scale to 50, 100, or 300+ locations.
              </p>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.08}>
            <GlassCard className="h-full flex flex-col">
              <h3 className="font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Multi-brand portfolio management
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                Enterprise Holdings trusted us with 6 brands simultaneously. Centennial
                handed us 9 properties. We know how to keep distinct brand identities
                sharp under one strategic umbrella.
              </p>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.16}>
            <GlassCard className="h-full flex flex-col">
              <h3 className="font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Senior accountability
              </h3>
              <p className="mt-4 text-body text-text-secondary">
                Most franchise marketing agencies assign a junior coordinator who
                disappears after month two. At Fifty &amp; Five, the founder leads every
                engagement. The team that pitches you is the team on the call in month
                twelve.
              </p>
            </GlassCard>
          </SimpleReveal>
        </div>
      </section>

      {/* RESULTS */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Franchise results
          </div>
          <AnimatedHeadline
            as="h2"
            text="Receipts, not promises."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <SimpleReveal>
            <GlassCard className="h-full flex flex-col">
              <div className="font-serif text-[48px] leading-none tracking-[-0.03em] text-accent">
                400%
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Blaze Pizza
              </h3>
              <p className="mt-3 text-body text-text-secondary">
                Engagement growth across national social program. 300+ locations.
                10-year partnership.
              </p>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.1}>
            <GlassCard className="h-full flex flex-col">
              <div className="font-serif text-[48px] leading-none tracking-[-0.03em] text-accent">
                6 brands
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Enterprise Holdings
              </h3>
              <p className="mt-3 text-body text-text-secondary">
                Managed social for Enterprise, National, Alamo, and three additional
                brands under one strategic umbrella.
              </p>
            </GlassCard>
          </SimpleReveal>
          <SimpleReveal delay={0.2}>
            <GlassCard className="h-full flex flex-col">
              <div className="font-serif text-[48px] leading-none tracking-[-0.03em] text-accent">
                3+ yrs
              </div>
              <h3 className="mt-4 font-serif text-[24px] leading-[1.15] tracking-[-0.015em]">
                Average retention
              </h3>
              <p className="mt-3 text-body text-text-secondary">
                Our franchise clients don&rsquo;t churn. Most stay 3+ years.
                The longest exceed a decade.
              </p>
            </GlassCard>
          </SimpleReveal>
        </div>
      </section>

      <ProseSections sections={DEEP_SECTIONS} />

      {/* FAQ */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Frequently asked
          </div>
          <AnimatedHeadline
            as="h2"
            text="Questions franchise brands ask us."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>
        <div className="mt-12 max-w-3xl space-y-5">
          {FAQS.map((f, i) => (
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

      <CTASection
        headline="Let's talk about your franchise."
        body="A conversation about your multi-location brand. No proposal until we know it's a fit."
        ctaLabel="Talk to our founder →"
      />
    </>
  );
}
