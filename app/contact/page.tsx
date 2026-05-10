import type { Metadata } from 'next';
import { SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { ContactForm } from '@/components/ui/ContactForm';
import { CalendlyEmbed } from '@/components/ui/CalendlyEmbed';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact · Run the Numbers · Fifty & Five',
  description:
    "No proposals until we know it's a fit. Same-day response. Three engagements available this quarter.",
  alternates: { canonical: 'https://fiftyandfive.com/contact' },
  openGraph: {
    title: 'Contact · Run the Numbers · Fifty & Five',
    description: "No proposals until we know it's a fit. Same-day response. Three engagements available this quarter.",
    url: 'https://fiftyandfive.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact · Run the Numbers · Fifty & Five',
    description: "No proposals until we know it's a fit. Same-day response. Three engagements available this quarter.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-content pt-36 md:pt-44 pb-10">
        <div className="font-receipt text-[12px] uppercase tracking-[0.15em] text-ff-stamp">
          Contact
        </div>
        <h1 className="mt-6 font-editorial text-display text-ff-paper">
          Run the numbers.
        </h1>
        <SimpleReveal delay={0.2}>
          <p className="mt-6 text-body-lg text-ff-fade-50 max-w-2xl">
            No pitch decks. No proposals until we know it&rsquo;s a fit.
            Just a conversation about what you&rsquo;re trying to build.
          </p>
        </SimpleReveal>
      </section>

      {/* CALENDLY (above form) */}
      <section className="container-content pb-16 pt-6">
        <div className="font-receipt text-[12px] uppercase tracking-[0.12em] text-ff-stamp mb-4">
          PICK A TIME
        </div>
        <SimpleReveal>
          <CalendlyEmbed />
        </SimpleReveal>
      </section>

      {/* FORM (below Calendly) */}
      <section className="container-content pb-16">
        <SimpleReveal delay={0.1}>
          <h3 className="font-body text-[24px] text-ff-paper mb-6">
            Or send a note.
          </h3>
          <ContactForm />
        </SimpleReveal>
      </section>

      {/* DIRECT CONTACT DETAILS */}
      <section className="container-content pb-32">
        <hr className="receipt-divider mb-8" />
        <div className="max-w-md font-receipt text-[14px] tracking-[0.02em] text-ff-fade-50 space-y-1">
          <div className="font-receipt text-[12px] uppercase tracking-[0.12em] text-ff-paper mb-4">
            DIRECT LINES
          </div>
          <div className="flex justify-between gap-2">
            <span>EMAIL</span>
            <span className="flex-1 border-b border-dotted border-ff-fade-30 mx-1 mb-1" />
            <a href={`mailto:${SITE.email}`} className="hover:text-ff-paper transition-colors">
              {SITE.email}
            </a>
          </div>
          <div className="flex justify-between gap-2">
            <span>PHONE</span>
            <span className="flex-1 border-b border-dotted border-ff-fade-30 mx-1 mb-1" />
            <a href={SITE.phoneHref} className="hover:text-ff-paper transition-colors">
              {SITE.phone}
            </a>
          </div>
          <div className="flex justify-between gap-2">
            <span>LINKEDIN</span>
            <span className="flex-1 border-b border-dotted border-ff-fade-30 mx-1 mb-1" />
            <a href={SITE.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-ff-paper transition-colors">
              linkedin.com/in/lucasv ↗
            </a>
          </div>
          <div className="flex justify-between gap-2">
            <span>CLUTCH</span>
            <span className="flex-1 border-b border-dotted border-ff-fade-30 mx-1 mb-1" />
            <a href={SITE.social.clutch} target="_blank" rel="noreferrer" className="hover:text-ff-paper transition-colors">
              clutch.co/profile/fifty-five ↗
            </a>
          </div>
          <div className="flex justify-between gap-2">
            <span>LOCATION</span>
            <span className="flex-1 border-b border-dotted border-ff-fade-30 mx-1 mb-1" />
            <span>ORLANDO, FL &middot; MMXXVI</span>
          </div>
          <div className="flex justify-between gap-2">
            <span>RESPONSE TIME</span>
            <span className="flex-1 border-b border-dotted border-ff-fade-30 mx-1 mb-1" />
            <span className="text-ff-data">SAME DAY</span>
          </div>
        </div>
        <hr className="receipt-divider mt-8" />
      </section>
    </>
  );
}
