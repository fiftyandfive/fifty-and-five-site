import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { ContactForm } from '@/components/ui/ContactForm';
import { CalendlyEmbed } from '@/components/ui/CalendlyEmbed';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Book a Working Session | Fifty & Five',
  description:
    'No pitch decks. Same-day response. Paid pilot within 14 days. Book a 30-minute working session with the senior team.',
  alternates: {
    canonical: 'https://fiftyandfive.com/contact',
  },
  openGraph: {
    title: 'Contact | Book a Working Session | Fifty & Five',
    description: 'No pitch decks. Same-day response. Paid pilot within 14 days. Book a 30-minute working session with the senior team.',
    url: 'https://fiftyandfive.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Book a Working Session | Fifty & Five',
    description: 'No pitch decks. Same-day response. Paid pilot within 14 days. Book a 30-minute working session with the senior team.',
  },
};

export default function ContactPage() {
  return (
    <>
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
      </section>
    </>
  );
}
