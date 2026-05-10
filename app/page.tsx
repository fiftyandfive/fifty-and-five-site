import { TypewriterHero } from '@/components/ui/TypewriterHero';
import { ReceiptHeader } from '@/components/ui/ReceiptHeader';
import { SixtyDayReceipt } from '@/components/ui/SixtyDayReceipt';
import { MarqueeBar } from '@/components/ui/MarqueeBar';
import { DRScroll } from '@/components/ui/DRScroll';
import { ReceiptTeardown } from '@/components/ui/ReceiptTeardown';
import { Testimonials } from '@/components/ui/Testimonials';
import { LogoBar } from '@/components/ui/LogoBar';
import { WorkCarousel } from '@/components/ui/WorkCarousel';
import { VerticalsMarquee } from '@/components/ui/VerticalsMarquee';
import { CTASection } from '@/components/layout/CTASection';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is Fifty & Five?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five is a boutique principal-led social media and content agency founded in 2008. The agency has managed social media for 215+ brands across 5 continents, including Microsoft, Hasbro, Kendall-Jackson, Mezzacorona, Enterprise Holdings, Warner Bros., Tupperware, Resorts World, and Blaze Pizza.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where is Fifty & Five located?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five is headquartered in Orlando, Florida, and serves clients across the United States, Latin America, Europe, Asia, and Oceania.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long has Fifty & Five been in business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five was founded in 2008 by Lucas Vandenberg. The agency has been continuously operating for 18 years and has retained some clients, including Mezzacorona, for over a decade.',
                },
              },
              {
                '@type': 'Question',
                name: 'What industries does Fifty & Five specialize in?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five specializes in 10 verticals: Wine and Spirits, Hospitality and Tourism, Restaurant and Food, Fitness and Wellness, Tech and SaaS, Retail and CPG, Healthcare, Real Estate, Automotive, and Entertainment.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does Fifty & Five charge?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Retainers range from $1,500 to $50,000+ monthly across five tiers. The 60-Day Receipt at $8,500/mo is the default offer.',
                },
              },
              {
                '@type': 'Question',
                name: 'What makes Fifty & Five different from other social media agencies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Principal-led practices. Most clients are 3+ years. Two retainers past ten years.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does Fifty & Five work with international brands?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Fifty & Five has worked with brands across 5 continents and 40+ countries, including Mezzacorona (Italy), Penfolds (Australia), Melora (New Zealand), Koenig (Germany), Happy Egg Co. (United Kingdom), Don Papa Rum (Philippines), and the Hong Kong, Korea, and Macau Tourism Boards.',
                },
              },
            ],
          }),
        }}
      />

      {/* 1. Hero typewriter */}
      <TypewriterHero />

      {/* 2. Receipt header (stat block) */}
      <ReceiptHeader />

      {/* 3. The 60-Day Receipt offer */}
      <SixtyDayReceipt />

      {/* 4. Marquee scroll-bar */}
      <MarqueeBar />

      {/* 5. Long-form DR scroll */}
      <DRScroll />

      {/* 6. Itemized receipt teardown */}
      <ReceiptTeardown />

      {/* 7. Named testimonials (single-quote-per-viewport) */}
      <Testimonials />

      {/* 8. Client logo bar */}
      <LogoBar />

      {/* 9. Selected work carousel */}
      <WorkCarousel />

      {/* 10. Verticals marquee */}
      <VerticalsMarquee />

      {/* 11. Final CTA */}
      <CTASection />
    </>
  );
}
