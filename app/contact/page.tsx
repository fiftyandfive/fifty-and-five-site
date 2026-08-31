import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { ContactForm } from '@/components/ui/ContactForm';
import { CalendlyEmbed } from '@/components/ui/CalendlyEmbed';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Book a Working Session',
  description:
    'No pitch decks, no junior handoffs. Same-day response, a paid pilot within 14 days. Book a 30-minute working session with the senior team that runs the work.',
  alternates: {
    canonical: 'https://fiftyandfive.com/contact',
  },
  openGraph: {
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
    </>
  );
}
