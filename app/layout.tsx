import './globals.css';
import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { StickyCtaButton } from '@/components/ui/StickyCtaButton';
import { ExitIntentBar } from '@/components/ui/ExitIntentBar';
import { StockTicker } from '@/components/ui/StockTicker';
import { Analytics } from '@/components/layout/Analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://fiftyandfive.com'),
  title: {
    default: 'Fifty & Five | Senior-Led Social Media Agency | Orlando, FL | 215+ Brands Since 2008',
    template: '%s | Fifty & Five',
  },
  alternates: {
    canonical: 'https://fiftyandfive.com',
  },
  description: 'Senior-led social and content strategy for 215+ brands since 2008 — Microsoft, Kendall-Jackson, Enterprise Holdings, Blaze Pizza. Principal-led, specialist-backed, zero junior handoffs.',
  openGraph: {
    type: 'website',
    title: 'Fifty & Five | Senior-Led Social Media Agency',
    description:
      'Senior-led. Specialist-backed. No junior handoffs. 215+ brands since 2008.',
    url: 'https://fiftyandfive.com',
    siteName: 'Fifty & Five',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fifty & Five | Senior-Led Social Media Agency',
    description: 'Senior-led. Specialist-backed. No junior handoffs. 215+ brands since 2008.',
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%236366F1'/><text x='50%25' y='58%25' text-anchor='middle' font-family='Georgia,serif' font-size='34' fill='white'>55</text></svg>",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${GeistMono.variable}`}
    >
      <head>
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
                  '@id': 'https://fiftyandfive.com/#organization',
                  name: 'Fifty & Five',
                  alternateName: 'Fifty and Five',
                  url: 'https://fiftyandfive.com',
                  logo: 'https://fiftyandfive.com/logo.svg',
                  description: 'Senior-led social media management and content strategy agency. 215+ brands since 2008.',
                  foundingDate: '2009',
                  founder: {
                    '@type': 'Person',
                    '@id': 'https://fiftyandfive.com/#founder',
                    name: 'Lucas Vandenberg',
                    jobTitle: 'Founder & Principal',
                    url: 'https://fiftyandfive.com/about',
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Orlando',
                    addressRegion: 'FL',
                    addressCountry: 'US',
                  },
                  areaServed: {
                    '@type': 'Country',
                    name: 'United States',
                  },
                  serviceType: [
                    'Social Media Management',
                    'Content Strategy',
                    'Community Management',
                    'Paid Social Advertising',
                  ],
                  priceRange: '$3,000 - $7,500/mo',
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '5.0',
                    reviewCount: '12',
                    bestRating: '5',
                  },
                  sameAs: [
                    'https://www.linkedin.com/company/fiftyandfive',
                    'https://clutch.co/profile/fifty-five',
                  ],
                  knowsAbout: [
                    'Social Media Marketing',
                    'Content Strategy',
                    'Brand Management',
                    'Community Management',
                    'Restaurant Marketing',
                    'Wine Marketing',
                    'Hospitality Marketing',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://fiftyandfive.com/#website',
                  url: 'https://fiftyandfive.com',
                  name: 'Fifty & Five',
                  publisher: { '@id': 'https://fiftyandfive.com/#organization' },
                },
              ],
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased font-sans">
        <NoiseOverlay />
        <Navigation />
        <main className="relative z-[2]">{children}</main>
        <Footer />
        {/* spacer so the fixed stock ticker doesn't obscure the footer */}
        <div aria-hidden className="h-8" />
        <StockTicker />
        <StickyCtaButton />
        <ExitIntentBar />
        <Analytics />
      </body>
    </html>
  );
}
