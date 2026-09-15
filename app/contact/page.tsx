import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { ContactForm } from '@/components/ui/ContactForm';
import { CalendlyEmbed } from '@/components/ui/CalendlyEmbed';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { GlassCard } from '@/components/ui/GlassCard';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Book a Working Session',
  description:
    'No pitch decks, no junior handoffs. Same-day response, a paid pilot within 14 days. Book a 30-minute working session with the senior team that runs the work.',
  alternates: {
    canonical: 'https://fiftyandfive.com/contact',
  },
  openGraph: {
    images: ['/opengraph-image'],
    title: 'Contact | Book a Working Session | Fifty & Five',
    description: 'No pitch decks, no junior handoffs. Same-day response, a paid pilot within 14 days. Book a 30-minute working session with the senior team that runs the work.',
    url: 'https://fiftyandfive.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Book a Working Session | Fifty & Five',
    description: 'No pitch decks, no junior handoffs. Same-day response, a paid pilot within 14 days. Book a 30-minute working session with the senior team that runs the work.',
  },
};

const CONTACT_FAQS = [
  {
    q: 'How fast will someone get back to me?',
    a: 'Same day, in almost every case. A senior person reads what you sent, not an intake coordinator sorting it into a queue. If your note lands over a weekend or a holiday, expect the next business day. If you would rather skip the back and forth entirely, book the 30-minute working session directly on this page and pick a time that suits you.',
  },
  {
    q: 'What happens on the first call?',
    a: 'We talk about your business, not about us. Thirty minutes covering what you are building, where marketing is actually stuck, what you have already tried, and what the numbers look like. No deck, no capabilities tour. By the end you should know whether there is a fit. If there is not, we will say so and point you somewhere better.',
  },
  {
    q: 'Do I get a proposal after the first conversation?',
    a: 'Not automatically, and that is deliberate. Proposals come after we understand the problem well enough to scope it honestly, which is usually one conversation later. Anyone who sends a priced proposal after a single call is guessing, and you end up paying for the guess. If the first call makes the shape obvious, we will move faster.',
  },
  {
    q: 'What does working with Fifty & Five cost?',
    a: 'Retainers start at $4,000 per month for ad management and scale to $50,000 or more per month for full-service, always-on programs with content production. A fractional CMO seat starts at $4,000 per month, month to month with 30 days notice. Every engagement is senior-led with no junior account management and no holding-company markup.',
  },
  {
    q: 'Do you work with clients outside Orlando?',
    a: 'Yes. Fifty & Five has run marketing for 222+ brands across 5 continents and 40+ countries since 2008, and most of that work is not local. Orlando is where the agency is based and where the founder can meet you in person, which genuinely changes the first ninety days. It is not a requirement.',
  },
  {
    q: 'What if I am not sure what I need yet?',
    a: 'Then start with the free brand audit instead. A senior strategist reviews your search presence, social presence, and AI answer engine visibility, and sends written findings within two business days including the first fix we would make. It costs nothing, there is no pitch attached, and it usually makes the next decision obvious.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ContactPage + BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'ContactPage',
                name: 'Contact Fifty & Five',
                description:
                  'No pitch decks. Same-day response. Book a 30-minute working session with the senior team.',
                url: 'https://fiftyandfive.com/contact',
                isPartOf: { '@id': 'https://fiftyandfive.com/#website' },
                about: { '@id': 'https://fiftyandfive.com/#organization' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fiftyandfive.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://fiftyandfive.com/contact' },
                ],
              },
            ],
          }),
        }}
      />
      <section className="relative overflow-hidden">
        <AuroraBackground />
        <div className="relative z-10 container-edge pt-36 md:pt-44 pb-10">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Contact
          </div>
          <AnimatedHeadline
            as="h1"
            text="Let's talk."
            className="mt-4 font-serif text-display tracking-[-0.03em]"
            stagger={0.05}
          />
          <SimpleReveal delay={0.3}>
            <p className="mt-6 text-body-lg text-text-secondary max-w-2xl">
              No pitch decks. No proposals until we know it&rsquo;s a fit. Just a working session
              about what you&rsquo;re building.
            </p>
          </SimpleReveal>
          <SimpleReveal delay={0.45}>
            <p className="mt-3 font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
              Prefer email?{' '}
              <a href={`mailto:${SITE.email}`} className="text-accent hover:text-accent-light">
                {SITE.email}
              </a>
            </p>
            <p className="mt-2 font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
              Or call &mdash;{' '}
              <a href={`tel:${SITE.phone.e164}`} className="text-accent hover:text-accent-light">
                {SITE.phone.display}
              </a>
            </p>
          </SimpleReveal>
        </div>
      </section>

      <section className="container-edge pb-32 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calendly FIRST — primary conversion path */}
          <SimpleReveal>
            <div>
              <CalendlyEmbed />
              {/* Scarcity line — Change #8 */}
              <p className="mt-6 text-body text-text-secondary text-center max-w-lg mx-auto">
                We staff a limited number of new principal-led engagements per quarter.
                Currently accepting Q3 2026 conversations.
              </p>
            </div>
          </SimpleReveal>

          {/* Form SECOND — fallback path */}
          <SimpleReveal delay={0.15}>
            <div>
              <div className="mb-6 text-center lg:text-left">
                <div className="font-mono text-caption uppercase text-text-tertiary tracking-[0.15em]">
                  Or send a note.
                </div>
              </div>
              <ContactForm />
            </div>
          </SimpleReveal>
        </div>

        <div className="mt-16 text-center font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
          Fifty &amp; Five · 1001 N Orange Ave, Orlando, FL 32801 · {SITE.phone.display} · hello@fiftyandfive.com
        </div>
      </section>

      {/* FAQ */}
      <section className="container-edge pb-24 md:pb-32">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            Before you write
          </div>
          <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">
            Questions people ask before the first call.
          </h2>
        </div>
        <div className="mt-12 max-w-3xl space-y-5">
          {CONTACT_FAQS.map((f) => (
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
            mainEntity: CONTACT_FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
