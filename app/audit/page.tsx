import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { AuditForm } from '@/components/ui/AuditForm';
import { GlassCard } from '@/components/ui/GlassCard';
import { ProseSections, type ProseSectionData } from '@/components/ui/ProseSection';

export const metadata: Metadata = {
  title: 'Free Brand Audit',
  description:
    'A senior strategist reviews your search, social, and AI visibility, then sends real findings to your inbox within 2 business days. No pitch, no obligation.',
  alternates: {
    canonical: 'https://fiftyandfive.com/audit',
  },
  openGraph: {
    images: ['/opengraph-image'],
    title: 'Free Brand Audit | Fifty & Five',
    description:
      'A senior strategist reviews your search, social, and AI visibility, then sends real findings to your inbox within 2 business days. No pitch, no obligation.',
    url: 'https://fiftyandfive.com/audit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Brand Audit | Fifty & Five',
    description:
      'A senior strategist reviews your search, social, and AI visibility, then sends real findings to your inbox within 2 business days. No pitch, no obligation.',
  },
};

const WHAT_WE_CHECK = [
  'Where your brand shows up in search and where it should',
  'What your social presence signals to a first-time visitor',
  'Whether AI answer engines can find and cite your business',
  'The one fix we would make first, and why',
];

const SECTIONS: ProseSectionData[] = [
  {
    h2: 'What is a free brand audit?',
    blocks: [
      {
        type: 'p',
        text: 'A free brand audit is a senior review of how your business actually appears to someone discovering it for the first time, delivered as written findings rather than a sales call. A strategist looks at your search presence, your social presence, and your visibility inside AI answer engines, then writes down what is working, what is costing you, and the single fix worth doing first. It takes us a few hours and it lands in your inbox within two business days.',
      },
      {
        type: 'p',
        text: 'The reason we price it at nothing is not that it is worth nothing. We run the same review at the start of every paid engagement, where it is part of a scoped month-one discovery. Doing it for a business we have never met costs us a morning and tells us more about fit than any discovery call would. If it turns out we are not the right agency for you, the findings are still yours.',
      },
    ],
  },
  {
    h2: 'What you get back, specifically',
    blocks: [
      {
        type: 'p',
        text: 'You get a written document, not a dashboard export and not a template with your logo dropped in. It covers four things.',
      },
      {
        type: 'ol',
        items: [
          'Search presence. Which queries you already appear for, which ones you should own and do not, and whether anything technical is holding the site back.',
          'Social presence. What your profiles and recent posts communicate to a stranger evaluating you, and whether the content is doing commercial work or filling a calendar.',
          'AI answer engine visibility. Whether ChatGPT, Perplexity, Google AI Overviews and Gemini can find, parse, and cite your business when someone asks about your category.',
          'The first fix. One prioritized recommendation, scoped, with the reasoning attached so you can act on it with or without us.',
        ],
      },
      {
        type: 'p',
        text: 'What you do not get is a pitch deck, a drip sequence, or a proposal you did not ask for. If you want to talk after reading it, the findings will say so plainly and you can book a call. If you do not, nothing happens.',
      },
    ],
  },
  {
    h2: 'Who this is for, and who it is not',
    blocks: [
      {
        type: 'p',
        text: 'The audit is most useful for owner-operated businesses doing $1M to $20M in revenue, where marketing has outgrown running on instinct but there is nobody senior owning where it goes next. That is the same profile the fractional CMO seat is built for, and the audit is often how that conversation starts.',
      },
      {
        type: 'p',
        text: 'It is less useful if you are pre-revenue, if you already have a senior marketing leader running a working scoreboard, or if what you actually want is a quote for a specific deliverable. In the last case, go straight to the contact form and describe the deliverable. We will price it or tell you who should.',
      },
    ],
  },
];

const FAQS = [
  {
    q: 'How much does the brand audit cost?',
    a: 'Nothing. We run the same review as a paid engagement at $2,500 when it is scoped as standalone work, and free for qualified businesses because it tells us more about fit than a discovery call does. There is no card, no trial, and no obligation attached to it.',
  },
  {
    q: 'How long does the audit take to come back?',
    a: 'Two business days. A senior strategist does the review personally, so it is not instant, and it is not automated. If we are backed up and it will take longer, we tell you when you submit rather than letting the deadline pass quietly.',
  },
  {
    q: 'Who actually performs the audit?',
    a: 'A senior strategist, and on most audits that is the founder. Fifty & Five is senior-led with no junior bench, which is the same reason the paid work runs the way it does. Nobody is handing your audit to a coordinator to fill in a template.',
  },
  {
    q: 'What do you need from me to run it?',
    a: 'Your website and whichever social handles you want reviewed. That is enough to start. If you have a specific worry, a competitor you keep losing to, or a channel you suspect is wasting money, put it in the message field and the findings will address it directly.',
  },
  {
    q: 'Is the audit just a sales pitch in disguise?',
    a: 'No, and the format is the proof. You get written findings including the one fix we would make first, whether or not you hire us. There is no proposal attached and no follow-up sequence. If the findings point somewhere we are not the right agency for, they say that.',
  },
  {
    q: 'Can I run a brand audit myself instead?',
    a: 'Yes, and we publish the checklist for exactly that. It walks through the ten checks we would run in about five minutes, so you can pressure-test your own presence before deciding whether an outside review is worth your time. The DIY checklist is linked from this page.',
  },
];

export default function AuditPage() {
  return (
    <>
      <section className="container-edge pt-36 md:pt-44 pb-12 md:pb-16">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
          Free brand audit
        </div>
        <AnimatedHeadline
          as="h1"
          text="Find out what your brand looks like from the outside."
          className="mt-4 font-serif text-h1 tracking-[-0.02em] max-w-4xl"
          stagger={0.04}
        />
        <SimpleReveal delay={0.3}>
          <p className="mt-6 text-body-lg text-text-secondary max-w-2xl">
            A senior strategist reviews your digital presence and sends back real findings. Not a
            sales sequence. An audit.
          </p>
        </SimpleReveal>
        <SimpleReveal delay={0.4}>
          <p className="mt-4 font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
            A $2,500 audit. Free for qualified businesses.
          </p>
        </SimpleReveal>
      </section>

      <section className="container-edge pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <AuditForm />
          </div>
          <aside className="lg:col-span-5">
            <div className="glass rounded-glass p-7">
              <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
                What we check
              </div>
              <ul className="mt-5 space-y-4 text-body text-text-secondary">
                {WHAT_WE_CHECK.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-[0.5em] w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-6 border-t border-glass-border font-mono text-caption text-text-tertiary leading-[1.6]">
                Audit lands in your inbox within 2 business days.
              </p>
              <p className="mt-4 text-body text-text-secondary leading-[1.6]">
                Rather run it yourself first?{' '}
                <Link
                  href="/audit-checklist"
                  className="text-accent hover:text-accent-light underline underline-offset-2"
                >
                  See the DIY brand audit checklist &rarr;
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <ProseSections sections={SECTIONS} />

      {/* FAQ */}
      <section className="container-edge pb-20 md:pb-28">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Frequently asked
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Straight answers about the audit.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fiftyandfive.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Free Brand Audit', item: 'https://fiftyandfive.com/audit' },
                ],
              },
              {
                '@type': 'Service',
                '@id': 'https://fiftyandfive.com/audit#service',
                serviceType: 'Brand Audit',
                name: 'Free Brand Audit',
                description:
                  'A senior strategist reviews search presence, social presence, and AI answer engine visibility, then sends written findings within two business days.',
                provider: { '@id': 'https://fiftyandfive.com/#organization' },
                areaServed: [{ '@type': 'Country', name: 'United States' }],
              },
              {
                '@type': 'FAQPage',
                mainEntity: FAQS.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}
