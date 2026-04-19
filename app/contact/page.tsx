import type { Metadata } from 'next';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { ContactForm } from '@/components/ui/ContactForm';
import { CalendlyEmbed } from '@/components/ui/CalendlyEmbed';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact — Let\u2019s Talk',
  description:
    'No pitch decks. No proposals until we know it\u2019s a fit. Start a conversation with Fifty & Five.',
  alternates: {
    canonical: 'https://fiftyandfive.com/contact',
  },
  openGraph: {
    title: 'Contact | Let\u2019s Talk Social Media Strategy | Fifty & Five',
    description: 'Start a conversation about your social media strategy. Orlando-based, nationally serving 215+ brands. Typical response time: same day.',
    url: 'https://fiftyandfive.com/contact',
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
              No pitch decks. No proposals until we know it&rsquo;s a fit. Just a conversation about
              what you&rsquo;re trying to build and whether I can help.
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
          <SimpleReveal>
            <ContactForm />
          </SimpleReveal>
          <SimpleReveal delay={0.15}>
            <CalendlyEmbed />
          </SimpleReveal>
        </div>
      </section>
    </>
  );
}
