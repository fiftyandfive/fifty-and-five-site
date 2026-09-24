import Link from 'next/link';
import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CTASection } from '@/components/layout/CTASection';
import { ProseSections, type ProseSectionData } from '@/components/ui/ProseSection';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Ways to Work With Us | Fifty & Five',
  description:
    'Same senior team at every depth. Run the work, lead the function, or both. Retainers and fractional CMO seats from $4,000/mo.',
  alternates: { canonical: 'https://fiftyandfive.com/ways-to-work' },
  openGraph: {
    images: ['/opengraph-image'],
    title: 'Ways to Work With Us | Fifty & Five',
    description: 'Same senior team at every depth. The only difference is how much of the function we hold.',
    url: 'https://fiftyandfive.com/ways-to-work',
    type: 'website',
  },
};

const SECTIONS: ProseSectionData[] = [
  {
    h2: 'The difference is scope, not seniority.',
    blocks: [
      {
        type: 'p',
        text: 'Most agencies sell you a tier and staff it down. The pitch comes from a principal, the work goes to whoever is free. We do not run that model, so the three doors below are not good, better, and best. They are three different amounts of the marketing function, held by the same people either way.',
      },
      {
        type: 'p',
        text: 'That matters because the wrong door costs you more than the wrong price. A brand with a capable VP of Marketing does not need us to own the number, it needs senior hands on the workstreams that VP cannot staff. A brand with nobody owning marketing does not need more output, it needs someone accountable for the plan before a single post ships. Buying execution when the real gap is leadership is the most common way a retainer quietly fails.',
      },
      {
        type: 'table',
        headers: ['', 'Run the work', 'Lead the function', 'Both'],
        rows: [
          ['You already have', 'A marketing leader', 'Budget and a revenue target', 'Neither, or a leader who just left'],
          ['We own', 'Named workstreams', 'Strategy, budget, channel mix', 'The plan and the execution'],
          ['Who reports the number', 'Your leader', 'We do', 'We do'],
          ['Typical start', 'Paid pilot on one workstream', 'Command brief in the first 30 days', 'Brief first, then build'],
          ['Starts at', '$4,000 per month', '$4,000 per month', 'Scoped after the brief'],
        ],
      },
    ],
  },
  {
    h2: 'How to tell which door you are standing in.',
    blocks: [
      {
        type: 'p',
        text: 'Read these as symptoms. If more than two in a group sound like your last quarter, that is your door. If none of them land and you mostly want to know whether your current setup is working at all, start with the ten point checklist instead and come back once you have a diagnosis.',
        href: '/audit-checklist',
        anchor: 'Run the 5-minute audit checklist.',
      },
      {
        type: 'p',
        text: 'Run the work fits when the strategy is sound and the bottleneck is capacity:',
      },
      {
        type: 'ul',
        items: [
          'Your marketing leader can tell you exactly what should happen next quarter, and cannot get it made.',
          'You are hiring for a role you have already failed to fill twice.',
          'One channel is clearly underbuilt and nobody owns it.',
          'Freelancers are producing work that is fine in isolation and incoherent together.',
        ],
      },
      {
        type: 'p',
        text: 'Lead the function fits when nobody in the building owns the marketing number:',
      },
      {
        type: 'ul',
        items: [
          'The founder is still the de facto CMO and it is costing them the work only they can do.',
          'Budget gets allocated by whoever argues hardest, not by what the numbers say.',
          'You cannot answer what a customer costs you to acquire without opening three tools.',
          'Agencies keep getting hired and fired because nobody is holding the brief steady.',
        ],
      },
      {
        type: 'p',
        text: 'Both fits when a leader just left, when you are entering a market you have never sold into, or when the plan and the hands have to arrive at the same time because there is no internal team to hand a strategy to.',
      },
    ],
  },
  {
    h2: 'What each depth costs.',
    blocks: [
      {
        type: 'p',
        text: 'Published, not quoted on request. Retainers run four tiers and scope decides the tier, not negotiation. The fractional CMO seat is separate and priced on its own.',
      },
      {
        type: 'table',
        headers: ['Tier', 'Monthly', 'Shape of the work'],
        rows: [
          ['Growth', '$4,000 to $6,500', 'Strategy, managed calendar, original creative, community, reporting'],
          ['Premium', '$7,500 to $12,000', 'More platforms and content volume, paid media oversight layered in'],
          ['Scale', '$15,000 to $25,000', 'Multi location or multi market, a central brand system with local room'],
          ['Enterprise', '$30,000 to $50,000+', 'Portfolios, sub brands, hundreds of locations, scoped and not templated'],
          ['Fractional CMO', 'From $4,000', 'The seat itself, month to month with 30 days notice'],
        ],
      },
      {
        type: 'p',
        text: 'The floor is $4,000 because below it the only way to deliver is to staff the account with juniors, and that is the model we exist to avoid. If your budget is under that, we will say so on the first call and point you somewhere honest rather than sell you a thinner version of this.',
      },
    ],
  },
  {
    h2: 'How an engagement actually starts.',
    blocks: [
      {
        type: 'ol',
        items: [
          'A 30 minute working session. Your numbers, your bottleneck, which door fits. No deck and no proposal, because a priced proposal after one call is a guess you end up paying for.',
          'A scoping conversation, usually a week later, once we understand the problem well enough to price it honestly.',
          'A paid pilot within 14 days. Real work on a real workstream, not a strategy deck. You see how we operate before the retainer starts.',
          'The retainer, or not. Plenty of pilots end at the pilot, and that is a legitimate outcome rather than a failed sale.',
        ],
      },
      {
        type: 'p',
        text: 'Fractional CMO engagements start with a command brief inside the first 30 days: the plan, the budget, the channel mix, and the number we are accountable for, written down where you can hold us to it.',
        href: '/blog/what-is-a-marketing-command-brief',
        anchor: 'See what goes into a command brief.',
      },
    ],
  },
  {
    h2: 'Why the durations are the proof.',
    blocks: [
      {
        type: 'p',
        text: 'Anyone can show you a campaign. The harder question is who renewed. Fifty & Five has run marketing for 222 brands since 2008, across 5 continents, 40+ countries, and 12 verticals, and most clients stay past three years. That is the number we would want to see if we were buying.',
      },
      {
        type: 'p',
        text: 'Blaze Pizza, a ten year national program to 300+ locations. Gruppo Mezzacorona, ten years across five portfolio brands. Enterprise Holdings, six brands across the US and LATAM. Those are not case studies we won, they are relationships that survived contact with a decade of budget cycles, agency reviews, and marketing leadership turnover on the client side.',
        href: '/work',
        anchor: 'See the full client work.',
      },
    ],
  },
];

const WAYS_FAQS = [
  {
    q: 'Which door should I pick if I am not sure?',
    a: 'Book the 30 minute session and let the conversation decide. Picking wrong is a real cost, so we would rather spend half an hour getting it right than sell you the door with the bigger number. In practice the answer is usually obvious within ten minutes of looking at who currently owns the marketing number inside your business.',
  },
  {
    q: 'Can I switch between them later?',
    a: 'Yes, and it happens often in both directions. Companies start with a fractional CMO seat, hire a full time leader once the function is built, and keep us on execution. Others start with a retainer, lose their marketing leader, and ask us to hold the seat while they search. The engagement is month to month with 30 days notice, so changing shape does not mean renegotiating a contract.',
  },
  {
    q: 'What is the minimum commitment?',
    a: 'There is no minimum term. Retainers and the fractional CMO seat both run month to month with 30 days notice. We would rather earn the next month than trap you in a twelve month agreement, and a client who stays because leaving is expensive is not a reference we can use anyway.',
  },
  {
    q: 'Do you work with clients outside Orlando?',
    a: 'Yes, and most of the work is not local. Fifty & Five has run marketing for 222 brands across 5 continents and 40+ countries since 2008. Orlando is where the agency is based and where the founder can meet you in person, which genuinely changes the first ninety days, but it has never been a requirement.',
  },
  {
    q: 'Who actually does the work?',
    a: 'Senior practitioners, and the same ones through the life of the engagement. There is no junior account layer, no handoff after the pitch, and no holding company markup sitting on top of the invoice. This is the reason the price floor is where it is: the model only works if the people who sold the work are the people doing it.',
  },
  {
    q: 'How is the fractional CMO seat different from hiring a consultant?',
    a: 'A consultant recommends and leaves. The seat owns the number, the budget, and the channel mix, and reports against them like an employee would. We hold a maximum of three seats at a time because senior attention does not scale past that, which is also why the seat is not something we can always offer on the timeline you want.',
  },
];

const DOORS = [
  {
    name: 'Run the work',
    copy: 'You have a marketing leader. They need senior capacity on named workstreams: social, content, paid, creative. Delivered by senior practitioners, scoped to specific programs, with no junior layer to manage. Retainers from $4,000/mo.',
    href: '/services',
    cta: 'See services',
  },
  {
    name: 'Lead the function',
    copy: 'No marketing leader in the building. Someone has to own the number, the budget, and the channel mix.',
    href: '/fractional-cmo',
    cta: 'See the seat',
  },
  {
    name: 'Both',
    copy: 'Strategy and the hands to execute it.',
    href: '/contact',
    cta: 'Start a conversation',
  },
];

export default function WaysToWorkPage() {
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
                '@id': 'https://fiftyandfive.com/ways-to-work',
                name: 'Ways to Work With Us | Fifty & Five',
                description:
                  'Same senior team at every depth. Run the work, lead the function, or both.',
                url: 'https://fiftyandfive.com/ways-to-work',
                dateModified: '2026-09-15',
                isPartOf: { '@id': 'https://fiftyandfive.com/#website' },
                about: { '@id': 'https://fiftyandfive.com/#organization' },
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
              { '@type': 'ListItem', position: 2, name: 'Ways to Work', item: 'https://fiftyandfive.com/ways-to-work' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="container-edge pt-36 md:pt-44 pb-16 md:pb-20">
        <AnimatedHeadline
          as="h1"
          text="Three ways to work with us."
          className="font-serif text-h1 tracking-[-0.02em] max-w-4xl"
          stagger={0.03}
        />
        <SimpleReveal delay={0.3}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-3xl leading-[1.7]">
            Same senior team at every depth. The only difference is how much of the function we
            hold.
          </p>
        </SimpleReveal>
      </section>

      {/* Three doors */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DOORS.map((d) => (
            <Link key={d.name} href={d.href} className="block group h-full">
              <GlassCard className="p-8 h-full flex flex-col">
                <h2 className="font-serif text-h3 tracking-[-0.015em] text-text-primary">
                  {d.name}
                </h2>
                <p className="mt-4 text-body text-text-secondary leading-[1.6] flex-1">
                  {d.copy}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-meta text-accent group-hover:text-accent-light transition-colors">
                  {d.cta}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section className="container-edge py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Proof
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Most agencies sell projects. We sell durations.
          </h2>
        </div>
        <SimpleReveal delay={0.1}>
          <p className="mt-8 text-body-lg text-text-secondary max-w-3xl leading-[1.7]">
            Blaze Pizza, a ten-year national program. Gruppo Mezzacorona, ten years across five
            portfolio brands. Enterprise Holdings, six brands across the US and LATAM.
          </p>
        </SimpleReveal>
      </section>

      <ProseSections sections={SECTIONS} />

      {/* FAQ */}
      <section className="container-edge pb-16 md:pb-24">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Frequently asked
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Questions people ask before choosing a door.
          </h2>
        </div>
        <div className="mt-12 max-w-3xl space-y-5">
          {WAYS_FAQS.map((f) => (
            <GlassCard key={f.q} className="p-7">
              <h3 className="font-serif text-[22px] leading-[1.2] text-text-primary">{f.q}</h3>
              <p className="mt-3 text-body text-text-secondary leading-[1.6]">{f.a}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: WAYS_FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <CTASection
        headline="Not sure which door?"
        body="A 30-minute call. Your numbers, your bottleneck, and which door fits. No deck, no pressure."
        ctaLabel="Start a conversation →"
      />
    </>
  );
}
