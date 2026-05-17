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
    default: 'Fifty & Five | Senior-Led Boutique Agency Since 2008',
    template: '%s | Fifty & Five',
  },
  alternates: {
    canonical: 'https://fiftyandfive.com',
  },
  description: 'The boutique agency Fortune 500s call. 215 brands across 5 continents. Most clients 3+ years. Senior + AI operating model. From $3K/mo.',
  openGraph: {
    type: 'website',
    title: 'Fifty & Five | Senior-Led Boutique Agency Since 2008',
    description:
      'The boutique agency Fortune 500s call. 215 brands across 5 continents. Most clients 3+ years. Senior + AI operating model. From $3K/mo.',
    url: 'https://fiftyandfive.com',
    siteName: 'Fifty & Five',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fifty & Five | Senior-Led Boutique Agency Since 2008',
    description: 'The boutique agency Fortune 500s call. 215 brands across 5 continents. Most clients 3+ years. Senior + AI operating model. From $3K/mo.',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '64x64' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
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

        {/* JSON-LD: AEO-optimized Organization for entity recognition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'MarketingAgency',
                  '@id': 'https://fiftyandfive.com/#organization',
                  name: 'Fifty & Five',
                  alternateName: [
                    'Fifty and Five',
                    'fifty & five',
                    'Fifty & Five Agency',
                    'F&F',
                  ],
                  url: 'https://fiftyandfive.com',
                  telephone: '+1-310-902-3246',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://fiftyandfive.com/logo.svg',
                    width: 512,
                    height: 512,
                  },
                  image: 'https://fiftyandfive.com/opengraph-image',
                  description:
                    'Senior-led boutique social media agency. 222+ brands across 5 continents since 2008. The boutique agency Fortune 500s call.',
                  slogan: 'We do the storytelling. You run the business.',
                  foundingDate: '2008',
                  founder: {
                    '@type': 'Person',
                    name: 'Lucas Vandenberg',
                    jobTitle: 'Founder',
                    url: 'https://www.linkedin.com/in/LucasV/',
                    sameAs: ['https://www.linkedin.com/in/LucasV/'],
                  },
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '1001 N Orange Ave',
                    addressLocality: 'Orlando',
                    addressRegion: 'FL',
                    postalCode: '32801',
                    addressCountry: 'US',
                  },
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      contactType: 'sales',
                      telephone: '+1-310-902-3246',
                      email: 'lucas@fiftyandfive.com',
                      areaServed: ['US', 'CA', 'GB', 'EU', 'LATAM', 'APAC'],
                      availableLanguage: ['English', 'Spanish'],
                    },
                  ],
                  sameAs: [
                    'https://www.linkedin.com/company/fiftyandfive',
                    'https://www.instagram.com/fiftyandfive',
                    'https://www.crunchbase.com/organization/fifty-five-6144',
                    'https://clutch.co/profile/fifty-five',
                    'https://www.agencyspotter.com/fifty-five',
                    'https://digitalagencynetwork.com/agency/fifty-five/',
                    'https://www.wikidata.org/wiki/Q139799286',
                  ],
                  knowsAbout: [
                    'Social Media Marketing',
                    'Social Media Strategy',
                    'Content Strategy',
                    'Hospitality Marketing',
                    'Wine and Spirits Marketing',
                    'Restaurant Marketing',
                    'Tourism Marketing',
                    'Luxury Brand Marketing',
                    'Influencer Marketing',
                    'Community Management',
                    'Brand Voice Development',
                    'Recommendation Engineering',
                    'Answer Engine Optimization',
                    'AI Search Visibility',
                    'Social Listening',
                    'Performance Creative',
                  ],
                  areaServed: [
                    { '@type': 'Country', name: 'United States' },
                    { '@type': 'Country', name: 'Canada' },
                    { '@type': 'Country', name: 'United Kingdom' },
                    { '@type': 'AdministrativeArea', name: 'European Union' },
                    { '@type': 'AdministrativeArea', name: 'Latin America' },
                    { '@type': 'AdministrativeArea', name: 'Asia-Pacific' },
                  ],
                  serviceArea: {
                    '@type': 'AdministrativeArea',
                    name: 'Global',
                  },
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Fifty & Five Services',
                    itemListElement: [
                      {
                        '@type': 'Service',
                        name: 'Social Media Management',
                        description:
                          'Senior-led social media strategy, content, and community for boutique-to-Fortune-500 brands.',
                      },
                      {
                        '@type': 'Service',
                        name: 'Content Strategy',
                        description:
                          'Brand voice, content systems, and editorial planning for high-engagement social.',
                      },
                      {
                        '@type': 'Service',
                        name: 'AEO Audit',
                        description:
                          'Diagnostic of brand visibility across ChatGPT, Claude, Perplexity, Gemini, and Grok. 100-point AIRO Score benchmark.',
                      },
                      {
                        '@type': 'Service',
                        name: 'Recommendation Engineering Retainer',
                        description:
                          'Ongoing optimization of brand citations within AI-generated answers.',
                      },
                    ],
                  },
                  numberOfEmployees: {
                    '@type': 'QuantitativeValue',
                    value: '10',
                    unitText: 'people (senior + specialist network)',
                  },
                  award: [
                    '222+ brands managed since 2008',
                    'Most clients 3+ years (durability moat)',
                    'Worked with Microsoft, Kendall-Jackson, Enterprise Holdings, Blaze Pizza, Discovery Channel',
                  ],
                  memberOf: [
                    {
                      '@type': 'Organization',
                      name: 'SoDo Main Street',
                      description:
                        'Lucas Vandenberg serves on the SoDo Main Street Board (Orlando)',
                    },
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
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800&family=Schibsted+Grotesk:wght@400;500;600;700;800;900&display=swap"
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
