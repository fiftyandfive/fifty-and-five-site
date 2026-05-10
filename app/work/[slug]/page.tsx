import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CASE_STUDIES, getCaseStudy, getNextCaseStudy } from '@/lib/data/caseStudies';
import { SimpleReveal } from '@/components/ui/AnimatedHeadline';
import { BrandColorHero } from '@/components/ui/BrandColorHero';
import { CTASection } from '@/components/layout/CTASection';

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cs = getCaseStudy(params.slug);
  if (!cs) return { title: 'Case Study Not Found' };
  return {
    title: `${cs.client} · Case Study · Fifty & Five`,
    description: cs.tagline,
    alternates: {
      canonical: `https://fiftyandfive.com/work/${cs.slug}`,
    },
    openGraph: {
      title: `${cs.client} · Social Media Case Study · Fifty & Five`,
      description: cs.tagline,
      url: `https://fiftyandfive.com/work/${cs.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cs.client} · Case Study · Fifty & Five`,
      description: cs.tagline,
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const next = getNextCaseStudy(cs.slug);
  const caseIndex = CASE_STUDIES.findIndex((c) => c.slug === cs.slug);
  const caseNumber = String(caseIndex + 1).padStart(2, '0');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fiftyandfive.com/' },
              { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://fiftyandfive.com/work' },
              { '@type': 'ListItem', position: 3, name: cs.client, item: `https://fiftyandfive.com/work/${cs.slug}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            '@id': `https://fiftyandfive.com/work/${cs.slug}`,
            name: `${cs.client} case study`,
            about: cs.industry,
            description: cs.tagline,
            author: { '@id': 'https://fiftyandfive.com/#organization' },
            publisher: { '@id': 'https://fiftyandfive.com/#organization' },
            keywords: [cs.client, cs.industry, cs.verticalLabel, ...cs.services, ...cs.platforms].join(', '),
          }),
        }}
      />

      {/* HERO */}
      <section className="container-content pt-36 md:pt-44 pb-10">
        <Link
          href="/work"
          className="font-receipt text-[12px] uppercase tracking-[0.15em] text-ff-fade-50 hover:text-ff-paper transition-colors"
        >
          ← Back to work
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <span className="font-receipt text-[12px] uppercase tracking-[0.12em] text-ff-stamp">
            {cs.verticalLabel}
          </span>
          <span className="font-receipt text-[12px] uppercase tracking-[0.08em] text-ff-fade-50">
            {cs.durationBadge}
          </span>
        </div>
        <h1 className="mt-6 font-editorial text-display text-ff-paper">
          {cs.client}
        </h1>
        <SimpleReveal delay={0.2}>
          <p className="mt-6 text-body-lg text-ff-fade-50 max-w-3xl">{cs.tagline}</p>
        </SimpleReveal>
      </section>

      {/* BODY */}
      <section className="container-content pb-28 md:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
          <article className="max-w-[680px]">
            <SimpleReveal>
              <BrandColorHero
                client={cs.client}
                verticalLabel={cs.verticalLabel}
                verticalColor={cs.verticalColor}
                caseNumber={caseNumber}
                aspect="16/9"
                className="mb-16"
              />
            </SimpleReveal>

            <Section number="01" label="The Challenge" title="What the brand needed.">
              {cs.challenge}
            </Section>

            <Section number="02" label="The Approach" title="What Fifty & Five did.">
              {cs.approach}
            </Section>

            <SimpleReveal>
              <blockquote className="my-16 pl-6 border-l-2 border-ff-stamp font-editorial text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.02em] text-ff-paper italic">
                {cs.tagline}
              </blockquote>
            </SimpleReveal>

            <Section number="03" label="The Outcome" title="What actually happened.">
              {cs.outcome}
            </Section>
          </article>

          {/* SIDEBAR */}
          <aside className="relative">
            <div className="lg:sticky lg:top-28">
              <div className="border border-ff-fade-30 p-6">
                <div className="font-receipt text-[12px] uppercase tracking-[0.12em] text-ff-stamp mb-5">
                  Project Details
                </div>
                <dl className="space-y-4 font-receipt text-[13px] tracking-[0.02em]">
                  <SidebarRow label="INDUSTRY" value={cs.industry} />
                  <SidebarRow label="DURATION" value={cs.duration} />
                  <SidebarRow label="SERVICES" value={cs.services.join(', ')} />
                  <SidebarRow label="PLATFORMS" value={cs.platforms.join(', ')} />
                </dl>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-ff-stamp text-ff-paper font-receipt text-[13px] uppercase tracking-[0.05em] px-6 py-3 hover:opacity-90 transition-opacity"
                  >
                    Start a similar project →
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* NEXT CASE STUDY */}
      <section className="container-content pb-16">
        <hr className="receipt-divider mb-8" />
        <div className="flex items-end justify-between gap-6 flex-wrap mb-6">
          <div className="font-receipt text-[12px] uppercase tracking-[0.12em] text-ff-fade-50">
            Next case study
          </div>
          <Link
            href="/work"
            className="font-receipt text-[12px] uppercase tracking-[0.1em] text-ff-stamp hover:text-ff-paper transition-colors"
          >
            View all →
          </Link>
        </div>
        <Link href={`/work/${next.slug}`} className="block group">
          <div className="border border-ff-fade-30 hover:border-ff-stamp transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <BrandColorHero
                client={next.client}
                verticalLabel={next.verticalLabel}
                verticalColor={next.verticalColor}
                aspect="16/10"
                variant="compact"
              />
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-receipt text-[11px] uppercase tracking-[0.12em] text-ff-stamp">
                    {next.verticalLabel}
                  </span>
                  <span className="font-receipt text-[11px] uppercase tracking-[0.08em] text-ff-fade-50">
                    {next.durationBadge}
                  </span>
                </div>
                <h3 className="mt-4 font-editorial text-[36px] md:text-[40px] leading-[1.05] text-ff-paper">
                  {next.client}
                </h3>
                <p className="mt-3 text-body text-ff-fade-50">{next.tagline}</p>
                <div className="mt-5 font-receipt text-[12px] uppercase tracking-[0.1em] text-ff-stamp group-hover:text-ff-paper transition-colors">
                  Read case study →
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* CTA */}
      <CTASection
        headline={"Let's build something like this."}
        body={"Same principal. Same playbook.\nJust a conversation about what you're trying to build."}
      />
    </>
  );
}

function Section({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <SimpleReveal>
      <section className="mb-16">
        <div className="font-receipt text-[12px] uppercase tracking-[0.15em] text-ff-stamp">
          {number} · {label}
        </div>
        <h2 className="mt-3 font-editorial text-[32px] leading-[1.15] tracking-[-0.02em] text-ff-paper">
          {title}
        </h2>
        <p className="mt-5 text-body-lg text-ff-fade-50 leading-[1.75]">{children}</p>
      </section>
    </SimpleReveal>
  );
}

function SidebarRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-receipt text-[11px] uppercase tracking-[0.12em] text-ff-fade-50">
        {label}
      </dt>
      <dd className="mt-1 text-[13px] text-ff-paper">{value}</dd>
    </div>
  );
}
