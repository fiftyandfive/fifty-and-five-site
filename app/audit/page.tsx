import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedHeadline, SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { AuditForm } from '@/components/ui/AuditForm';

export const metadata: Metadata = {
  title: 'Free Brand Audit',
  description:
    'A senior strategist reviews your search, social, and AI visibility, then sends real findings to your inbox within 2 business days. No pitch, no obligation.',
  alternates: {
    canonical: 'https://fiftyandfive.com/audit',
  },
  openGraph: {
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
    </>
  );
}
