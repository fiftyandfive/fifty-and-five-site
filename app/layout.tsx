import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { GeistMono } from 'geist/font/mono';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { StickyCtaButton } from '@/components/ui/StickyCtaButton';
import { ExitIntentBar } from '@/components/ui/ExitIntentBar';
import { StockTicker } from '@/components/ui/StockTicker';
import { Analytics } from '@/components/layout/Analytics';
import { FACTS } from '@/lib/site-facts';

export const metadata: Metadata = {
  metadataBase: new URL('https://fiftyandfive.com'),
  title: {
    default: 'Fifty & Five | Senior Marketing Leadership + Execution | 222 Brands Since 2008',
    template: '%s | Fifty & Five',
  },
  alternates: {
    canonical: 'https://fiftyandfive.com',
  },
  description: 'CMO strategy. Agency execution. ROI you can defend. We\'ve run marketing for 222 brands across five continents since 2008. Lead the function, run the work, or both. Retainers from $4,000/mo.',
  openGraph: {
    type: 'website',
    title: 'Fifty & Five | Senior Marketing Leadership + Execution | 222 Brands Since 2008',
    description:
      'CMO strategy. Agency execution. ROI you can defend. We\'ve run marketing for 222 brands across five continents since 2008. Lead the function, run the work, or both. Retainers from $4,000/mo.',
    url: 'https://fiftyandfive.com',
    siteName: 'Fifty & Five',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fifty & Five | Senior Marketing Leadership + Execution | 222 Brands Since 2008',
    description: 'CMO strategy. Agency execution. ROI you can defend. We\'ve run marketing for 222 brands across five continents since 2008. Lead the function, run the work, or both. Retainers from $4,000/mo.',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '64x64' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  verification: {
    google: '0cTj21SBXLflv9dYDU5fu8O50xnrpemT5WMbSKRR1vU',
    ...(process.env.BING_SITE_VERIFICATION
      ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } }
      : {}),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistMono.variable}`}
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
                  name: FACTS.name,
                  legalName: FACTS.legalName,
                  alternateName: [
                    ...FACTS.alternateNames,
                    'Fifty & Five Agency',
                    'Fifty & Five Social Media',
                    'Fifty & Five Orlando',
                    'Fifty & Five Fractional CMO',
                  ],
                  url: FACTS.url,
                  telephone: FACTS.phone,
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://fiftyandfive.com/logo.svg',
                    width: 512,
                    height: 512,
                  },
                  image: 'https://fiftyandfive.com/opengraph-image',
                  description:
                    `Senior-led boutique social media agency. ${FACTS.brandsManaged}+ brands across ${FACTS.continents} continents since ${FACTS.founded}. The boutique agency Fortune 500s call.`,
                  slogan: 'CMO strategy. Agency execution. ROI you can defend.',
                  foundingDate: String(FACTS.founded),
                  founder: {
                    '@type': 'Person',
                    '@id': 'https://fiftyandfive.com/#lucas-vandenberg',
                    name: FACTS.founder,
                    jobTitle: ['Founder', 'Fractional CMO'],
                    description:
                      `Founder of Fifty & Five (${FACTS.founded}). Built the first marketing department at Southern Wine & Spirits in 2007. Has led marketing and social strategy for ${FACTS.brandsManaged}+ brands across five continents, including Microsoft, Kendall-Jackson, Enterprise Holdings, and Blaze Pizza.`,
                    url: 'https://fiftyandfive.com/about',
                    image: 'https://fiftyandfive.com/images/people/lucas.jpg',
                    worksFor: { '@id': 'https://fiftyandfive.com/#organization' },
                    knowsAbout: [
                      'Fractional CMO',
                      'Social Media Marketing',
                      'Wine and Spirits Marketing',
                      'Hospitality Marketing',
                      'Franchise Marketing',
                      'Answer Engine Optimization',
                    ],
                    sameAs: [
                      'https://www.linkedin.com/in/LucasV/',
                    ],
                  },
                  address: { '@type': 'PostalAddress', ...FACTS.address },
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      contactType: 'sales',
                      telephone: FACTS.phone,
                      email: FACTS.email,
                      areaServed: [
                        { '@type': 'Country', name: 'United States' },
                        { '@type': 'Country', name: 'Canada' },
                        { '@type': 'Country', name: 'United Kingdom' },
                        { '@type': 'AdministrativeArea', name: 'European Union' },
                        { '@type': 'AdministrativeArea', name: 'Latin America' },
                        { '@type': 'AdministrativeArea', name: 'Asia-Pacific' },
                      ],
                      availableLanguage: ['English', 'Spanish'],
                    },
                  ],
                  sameAs: [
                    'https://www.linkedin.com/company/fiftyandfive',
                    'https://www.instagram.com/fiftyandfive',
                    'https://www.facebook.com/fiftyandfive',
                    'https://x.com/FiftyandFive',
                    'https://maps.google.com/?cid=17642359949703277975',
                    'https://www.crunchbase.com/organization/fifty-five-6144',
                    'https://clutch.co/profile/fifty-five',
                    'https://www.agencyspotter.com/fifty-five',
                    'https://digitalagencynetwork.com/agency/fifty-five/',
                  ],
                  knowsAbout: [
                    'Social Media Marketing',
                    'Wine and Spirits Marketing',
                    'Franchise Social Media',
                    'Hospitality Marketing',
                    'Recommendation Engineering',
                    'Fractional CMO',
                    'Marketing Leadership',
                    'Marketing Strategy',
                    'Brand Strategy',
                    'Marketing Operations',
                    'Agency Management',
                    'Marketing Execution',
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
                  memberOf: [
                    {
                      '@type': 'Organization',
                      name: 'SoDo Main Street',
                      description:
                        'Lucas Vandenberg serves on the SoDo Main Street Board (Orlando)',
                    },
                  ],
                  subjectOf: [
                    {
                      '@type': 'Article',
                      name: 'Fifty & Five on Clutch.co',
                      url: 'https://clutch.co/profile/fifty-five',
                      publisher: { '@type': 'Organization', name: 'Clutch.co' },
                    },
                    {
                      '@type': 'WebPage',
                      name: 'Fifty & Five on Crunchbase',
                      url: 'https://www.crunchbase.com/organization/fifty-five-6144',
                      publisher: { '@type': 'Organization', name: 'Crunchbase' },
                    },
                    {
                      '@type': 'WebPage',
                      name: 'Fifty & Five on Digital Agency Network',
                      url: 'https://digitalagencynetwork.com/agency/fifty-five/',
                      publisher: { '@type': 'Organization', name: 'Digital Agency Network' },
                    },
                  ],
                },
                {
                  '@type': 'Service',
                  '@id': 'https://fiftyandfive.com/#fractional-cmo-service',
                  serviceType: 'Fractional CMO',
                  name: 'Fractional CMO',
                  description:
                    'Senior marketing leadership for owner-operators: strategy, budget, channel mix, and agency oversight, owning the number rather than the deliverable.',
                  provider: { '@id': 'https://fiftyandfive.com/#organization' },
                  areaServed: [
                    { '@type': 'Country', name: 'United States' },
                    { '@type': 'Country', name: 'Canada' },
                  ],
                },
                {
                  '@type': 'Service',
                  '@id': 'https://fiftyandfive.com/#execution-service',
                  serviceType: 'Marketing Execution',
                  name: 'Senior Marketing Execution',
                  description:
                    'Senior capacity on named workstreams for teams with an existing marketing leader: social, content, paid, and creative, delivered by senior practitioners with no junior layer to manage.',
                  provider: { '@id': 'https://fiftyandfive.com/#organization' },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://fiftyandfive.com/#website',
                  url: 'https://fiftyandfive.com',
                  name: 'Fifty & Five',
                  publisher: { '@id': 'https://fiftyandfive.com/#organization' },
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://fiftyandfive.com/#localbusiness',
                  name: 'Fifty & Five',
                  image: 'https://fiftyandfive.com/opengraph-image',
                  telephone: FACTS.phone,
                  email: FACTS.email,
                  address: { '@type': 'PostalAddress', ...FACTS.address },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 28.5494,
                    longitude: -81.3792,
                  },
                  url: 'https://fiftyandfive.com',
                  sameAs: ['https://www.linkedin.com/company/fiftyandfive'],
                  openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '09:00',
                    closes: '18:00',
                  },
                  priceRange: '$$$$',
                },
              ],
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GR56TJNPEJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GR56TJNPEJ');
          `}
        </Script>
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
