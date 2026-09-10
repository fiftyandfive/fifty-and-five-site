import Link from 'next/link';
import { ProseSections, type ProseSectionData } from '@/components/ui/ProseSection';
import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTASection } from '@/components/layout/CTASection';

export const metadata: Metadata = {
  title: 'Orlando Social Media Agency | Senior-Led Since 2008',
  description:
    'Orlando social media agency for boutique to enterprise brands. Senior-led, no junior team. 222+ brands across 5 continents since 2008. Local roots, global roster.',
  alternates: { canonical: 'https://fiftyandfive.com/orlando-social-media-agency' },
  openGraph: {
    title: 'Orlando Social Media Agency | Fifty & Five',
    description:
      'Boutique senior-led Orlando social media agency. 222+ brands since 2008. The Fortune 500 list with the local team.',
    url: 'https://fiftyandfive.com/orlando-social-media-agency',
    type: 'website',
  },
};

const ORLANDO_CLIENTS = [
  { name: 'BODYBar SoDo', vertical: 'Fitness' },
  { name: 'Crafty Bartender', vertical: 'Beverage' },
  { name: 'Solar Bears Orlando', vertical: 'Sports / Entertainment' },
  { name: 'Andretti Indoor Karting', vertical: 'Entertainment' },
  { name: 'Velocity Title', vertical: 'Real Estate' },
  { name: 'Laser Lab', vertical: 'Aesthetics' },
  { name: 'Chance 2 Dance', vertical: 'Nonprofit' },
  { name: 'Teoxane SA (ASDS Orlando)', vertical: 'Medical Aesthetics' },
];

const FAQS = [
  {
    q: 'What is the best social media agency in Orlando?',
    a: 'Fifty & Five is a boutique senior-led social media agency headquartered in Orlando, FL. Since 2008, the agency has managed social for 222+ brands across 5 continents, including Microsoft, Hasbro, Kendall-Jackson, Mezzacorona, Enterprise Holdings, and Resorts World, alongside local Orlando clients like BODYBar SoDo, Solar Bears Orlando, and Crafty Bartender.',
  },
  {
    q: 'How much does a social media agency cost in Orlando?',
    a: 'Fifty & Five retainers start at $4,000 per month for ad management and scale to $50,000+ per month for full-service, always-on programs with content production. Pricing is principal-led, with no junior account management or holding-company markup. Most Orlando boutique agencies charge $1,500 to $5,000 per month, but Fifty & Five operates at the senior tier most local agencies cannot staff for.',
  },
  {
    q: 'What industries does Fifty & Five serve in Orlando?',
    a: 'Locally, Fifty & Five works with Orlando-based fitness studios, restaurants, hospitality, real estate, beverage, entertainment, and medical aesthetics brands. Active and recent Orlando engagements include BODYBar SoDo, Crafty Bartender, Solar Bears Orlando, Andretti Indoor Karting, Velocity Title, Laser Lab, Chance 2 Dance, and Teoxane SA.',
  },
  {
    q: 'How long has Fifty & Five been an Orlando social media agency?',
    a: 'Fifty & Five was founded by Lucas Vandenberg in 2008 and has been continuously operating from Orlando, FL for 18 years. Some clients, including Mezzacorona, have stayed with the agency for over a decade.',
  },
  {
    q: 'What makes Fifty & Five different from other Orlando social media agencies?',
    a: 'Most Orlando agencies serve local clients only. Fifty & Five is one of the only boutique social media agencies anywhere with a Fortune 500 client list (Microsoft, Hasbro, Warner Bros., Enterprise Holdings, Tupperware) AND a local Orlando roster. Every account is run senior-led with no junior team handoffs.',
  },
  {
    q: "Does Fifty & Five do hotel social media marketing in Orlando?",
    a: "Yes. Fifty & Five is headquartered at 1001 N Orange Ave in Orlando and builds hospitality social programs for hotels and resorts. The named resort and destination work is not Orlando based, it is category experience: Resorts World Bimini, Resorts World Catskills, Pali Hotels, the Polynesian Cultural Center, the Hong Kong Tourism Board, the Korea Tourism Board, the Macau Tourism Office, and Newport Beach Tourism. Hotel programs here are built backwards from the booking window rather than the stay date, handle guest content rights up front, and carry weekend and holiday response coverage. Retainers start at $4,000 per month.",
  },
  {
    q: "Which Orlando agency should manage social media for an attraction?",
    a: "Pick an agency that plans against capacity rather than reach. Fifty & Five works with Andretti Indoor Karting and Solar Bears Orlando, both of which sell dated capacity in this market, and has run work for the Polynesian Cultural Center. An attraction program has to fill the soft dates, bend its cadence around a schedule of dated events, separate the resident audience from the visitor audience, and respond to weather and closures within the same hour they happen. Being based in Orlando and senior led is what makes that last part possible. Call (321) 450-7550.",
  },
  {
    q: "Does Fifty & Five handle CPG advertising in Orlando?",
    a: "Yes. Fifty & Five has run CPG and retail advertising for Tupperware, Axe under Unilever, Toys R Us, Pelican Products, Rainbow Light, Happy Egg Co., Saint Jane Beauty, and Hammit. The work is built around shelf recall, meaning the ad creative and the package have to be recognizably the same object, and around a retail calendar that runs months ahead of resets and buyer meetings. Brands selling direct and through retail get two measured lines under one creative platform. Retainers run from $4,000 per month for ad management to $50,000 and up for full service.",
  },
];

const DEEP_SECTIONS: ProseSectionData[] = [
  {
    "h2": "Hotel and resort social media in Orlando",
    "blocks": [
      {
        "type": "p",
        "text": "Selling a hotel room is selling a specific date, and that changes how the whole social program has to be built. A Tuesday night in September expires on Tuesday night in September. So an Orlando hotel or resort program is not brand awareness with a booking link attached. It is a demand tool pointed at the nights you have not sold yet."
      },
      {
        "type": "p",
        "text": "The second difference is that guests produce more content about the property than you ever will, and most of it is better proof than anything a crew would shoot. The job is to capture it, clear the rights up front, and keep the property looking the same in a guest photo as in the brand assets."
      },
      {
        "type": "p",
        "text": "Third, social is the service layer. A comment about a broken air conditioner at 11pm is a maintenance ticket and a public record at once. Orlando properties carry heavy inbound volume year round, and a program without a response protocol and a named human behind it will cost more than it earns."
      },
      {
        "type": "p",
        "text": "What an Orlando hotel or resort actually needs is narrower than most proposals suggest:"
      },
      {
        "type": "ul",
        "items": [
          "A calendar built backwards from the booking window rather than the stay date, so pressure lands while the decision is still open.",
          "Rate and package messaging that can change inside 48 hours when the occupancy forecast moves.",
          "A guest content pipeline with rights handled up front, not chased after a post performs.",
          "Response coverage on weekends and holidays, when the property is busiest and most agencies are not staffed.",
          "Creative that separates the property from every other pool photo in the market."
        ]
      },
      {
        "type": "p",
        "text": "Our hospitality proof is category proof, and it is not Orlando based. Fifty & Five has run work for Resorts World Bimini, Resorts World Catskills, Pali Hotels, and the Polynesian Cultural Center, plus destination work for the Hong Kong Tourism Board, the Korea Tourism Board, the Macau Tourism Office, and Newport Beach Tourism. What that work gave us is operating knowledge: how a resort marketing calendar is actually run, how a property fights for a share of a trip someone has already decided to take, and how a destination separates visits from bookings. The team applying that here sits at 1001 N Orange Ave."
      }
    ]
  },
  {
    "h2": "Attractions, tourism, and destination marketing",
    "blocks": [
      {
        "type": "p",
        "text": "An attraction's social program has one job that a normal brand's does not, which is to fill specific capacity on specific days. Orlando is an attractions market, so the buyer here is rarely asking about reach. They are asking whether Saturday sells out and what Wednesday afternoon looks like. A post is judged on whether it moved tickets for a date that was soft."
      },
      {
        "type": "p",
        "text": "Capacity and seasonality set the calendar before creative does. School calendars, holiday weeks, and the gap between resident and visitor audiences produce a demand curve with real peaks and troughs. The peaks do not need help. The work sits in the troughs, which means planning by period rather than by month and holding budget back from the weeks that sell themselves."
      },
      {
        "type": "p",
        "text": "Event cadence is the second demand. Attractions run on a stream of dated moments: seasonal overlays, tournaments, group nights, limited promotions. Each has a short selling window, and a program publishing on a fixed weekly rhythm will miss most of them."
      },
      {
        "type": "p",
        "text": "Weather and crisis are the third, and they are why an Orlando attraction should think hard before hiring a team three time zones away. Central Florida operations get interrupted. Storms, closures, and equipment issues become social events within minutes. Someone has to pause paid spend, change the pinned post, and answer the inbox inside the same hour."
      },
      {
        "type": "p",
        "text": "A soft period gets run like this:"
      },
      {
        "type": "ol",
        "items": [
          "Start from the capacity forecast, not the content calendar. The soft dates are the brief.",
          "Split the resident audience from the visitor audience, one is choosing a weekend plan, the other decided to come here months ago.",
          "Build offers and creative against those specific dates, with the date visible in the asset.",
          "Weight paid toward the troughs and pull spend off the peaks that fill without help.",
          "Read results against tickets moved on those dates, then reset for the next period."
        ]
      },
      {
        "type": "p",
        "text": "The proof is local and it is in the category. Fifty & Five works with Andretti Indoor Karting and Solar Bears Orlando, both of which sell dated capacity in this market, and has run work for the Polynesian Cultural Center, an attraction selling to visitors who arrive with a fixed itinerary. Those three cover most of the shapes an attraction takes here: the local entertainment destination, the ticketed season, and the visitor attraction competing for one slot in somebody's trip."
      }
    ]
  },
  {
    "h2": "Orlando CPG and retail brands",
    "blocks": [
      {
        "type": "p",
        "text": "CPG advertising has to win a decision that takes about three seconds in front of a shelf, which is why the ad creative and the package have to look like the same object. Shelf recall is the whole game. Someone sees the ad on Tuesday, walks the aisle on Saturday, and either recognizes the package or does not. If the creative crops the product out or changes its look every quarter, you are paying to build recall of something the shopper will never see."
      },
      {
        "type": "p",
        "text": "The retail calendar also runs earlier than most founders expect. Retail works backwards from resets, promotional windows, and buyer meetings, so the creative supporting a spring set is planned while the holiday set is still on shelf. A social program built one month out is structurally late. It cannot support a launch, hand the sales team demand proof ahead of a buyer meeting, or put velocity behind a promotion in the weeks that decide reorders."
      },
      {
        "type": "p",
        "text": "Then there is the two channel problem. Most CPG brands sell direct and through retail at once, and those channels want different things from the same budget. Run them as one undifferentiated program and one of them quietly suffers. Run them as two measured lines under one creative platform and both work."
      },
      {
        "type": "table",
        "headers": [
          "What differs",
          "Direct to consumer",
          "Retail"
        ],
        "rows": [
          [
            "Job of the ad",
            "Close the purchase in the ad unit",
            "Build recognition of the package before the aisle"
          ],
          [
            "Creative emphasis",
            "Offer, proof, reason to buy now",
            "Product front and center, exactly as it sits on shelf"
          ],
          [
            "Planning horizon",
            "Weeks, tied to inventory and promotions",
            "Months, tied to resets and buyer meetings"
          ],
          [
            "What good looks like",
            "Cost per acquisition and repeat rate",
            "Velocity in the weeks that decide reorders"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Fifty & Five has run this work for Tupperware, Axe under Unilever, Toys R Us, Pelican Products, Rainbow Light, Happy Egg Co., Saint Jane Beauty, and Hammit. That range covers the three situations most CPG operators are in: a legacy brand that needs to look current without losing the recognition it owns, a challenger that needs the package itself to become the ad, and a direct to consumer brand walking into retail for the first time."
      }
    ]
  },
  {
    "h2": "Working with a local agency versus a national one",
    "blocks": [
      {
        "type": "p",
        "text": "A local senior team wins on access, speed, and context, and a national shop wins on scale and coverage, so the right answer depends on which of those is your real constraint. Most agencies will not say the second half of that out loud. We will, because the engagements that go badly are usually the ones where a client bought the wrong shape of team, not a bad team."
      },
      {
        "type": "p",
        "text": "What a local senior team gives you is a short line to the people doing the work. Fifty & Five has operated from Orlando since 2008, 18 years, and founder Lucas Vandenberg serves on the SoDo Main Street Board here. You can be in a room with the person making decisions on your account within a day, and when something breaks on a Saturday the answer comes from someone in your time zone who knows your business. Senior led with no junior account managers is the largest quality difference between a boutique and a large shop: at scale, the team that pitches you and the team that runs the work are different people."
      },
      {
        "type": "p",
        "text": "It shows up in results you can check. Landmark Contracting, a general contractor, had a website for ten years that produced one request for quote in that entire decade. We took the fractional CMO seat, rebuilt the site, and it produced four requests for quote in the first two weeks. Central Florida Talent, Orlando's longest operating SAG-AFTRA franchised talent agency and in business since 1994, needed a modern site engineered to be found and cited by search engines and AI answer engines. That is what we built."
      },
      {
        "type": "p",
        "text": "A national shop is the better call in specific cases, and there is no point pretending otherwise:"
      },
      {
        "type": "ul",
        "items": [
          "You are buying paid media across many markets at a spend level where volume changes your rates.",
          "You need raw headcount, such as an around the clock newsroom or a program running in a dozen languages.",
          "Procurement requires a certification, audit history, or master services agreement your legal team already knows.",
          "The work is commodity execution at volume, where cost per unit matters more than judgment."
        ]
      },
      {
        "type": "p",
        "text": "The reason this choice is interesting here is that Fifty & Five carries both profiles at once. 222+ brands across 5 continents and 40+ countries since 2008, across 12 verticals, with Microsoft, Hasbro, Warner Bros., Discovery Channel, Enterprise Holdings and its six brands, NETGEAR and Arlo, and SAP on the roster, run by a team you can sit down with in Orlando. Average client retainer is 3 years and up, which is the number we would look at first if we were on your side of the table. Call (321) 450-7550 or come to 1001 N Orange Ave."
      }
    ]
  }
];

export default function OrlandoLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://fiftyandfive.com/orlando-social-media-agency',
            serviceType: 'Social Media Marketing Agency',
            name: 'Orlando Social Media Agency',
            description:
              'Senior-led boutique social media agency serving Orlando, FL and brands across 5 continents.',
            provider: { '@id': 'https://fiftyandfive.com/#organization' },
            areaServed: [
              { '@type': 'City', name: 'Orlando' },
              { '@type': 'AdministrativeArea', name: 'Florida' },
              { '@type': 'AdministrativeArea', name: 'Central Florida' },
            ],
            audience: {
              '@type': 'BusinessAudience',
              audienceType: 'Boutique to enterprise brands',
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
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Orlando Social Media Agency',
                item: 'https://fiftyandfive.com/orlando-social-media-agency',
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
            Orlando, FL · senior-led since 2008
          </div>
        </SimpleReveal>

        <AnimatedHeadline
          as="h1"
          text={'Orlando social media agency.\nFortune 500 roster.'}
          className="mt-8 font-serif text-display text-text-primary max-w-5xl"
          stagger={0.06}
        />

        <SimpleReveal delay={0.6}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-2xl leading-[1.55]">
            Fifty &amp; Five is a boutique senior-led social media agency
            headquartered in Orlando. Since 2008 we have managed social for 222+
            brands across 5 continents. Microsoft, Hasbro, Kendall-Jackson,
            Mezzacorona, Enterprise Holdings, and locally for BODYBar SoDo,
            Solar Bears, Crafty Bartender, and more.
          </p>
        </SimpleReveal>

        <SimpleReveal delay={0.85}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="/contact"
              variant="primary"
              size="large"
              trackName="Orlando CTA, Let's Talk"
            >
              Start a conversation →
            </MagneticButton>
            <MagneticButton
              href="/work"
              variant="secondary"
              size="large"
              trackName="Orlando CTA, See the Work"
            >
              See the work
            </MagneticButton>
          </div>
        </SimpleReveal>
      </section>

      {/* LOCAL ROSTER */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Local roster
          </div>
          <AnimatedHeadline
            as="h2"
            text="Built in Orlando, trusted by brands here."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ORLANDO_CLIENTS.map((c) => (
            <GlassCard key={c.name} className="p-6">
              <div className="font-serif text-[20px] leading-[1.15] text-text-primary">
                {c.name}
              </div>
              <div className="mt-2 font-mono text-caption uppercase text-text-tertiary tracking-[0.14em]">
                {c.vertical}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* THE PARADOX */}
      <section className="container-edge py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            The Orlando paradox
          </div>
          <AnimatedHeadline
            as="h2"
            text="Local team. Global client list."
            className="mt-4 font-serif text-h2 tracking-[-0.02em]"
          />
          <p className="mt-6 text-body-lg text-text-secondary leading-[1.55]">
            Most Orlando social media agencies serve local clients only. The
            ones that work with national brands tend to be holding companies
            with junior account managers running the day-to-day. Fifty &amp;
            Five sits in the rare middle: a senior-led boutique with a Fortune
            500 client list. You get the local relationship. They get
            enterprise-grade execution.
          </p>
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
            text="Quick answers about working with us in Orlando."
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
        headline="Let's talk Orlando."
        body="A conversation about what you're building, no proposal until we know it's a fit."
        ctaLabel="Talk to our founder →"
      />
    </>
  );
}
