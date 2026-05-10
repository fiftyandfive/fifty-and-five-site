import './globals.css';
import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { StickyCtaButton } from '@/components/ui/StickyCtaButton';
import { Analytics } from '@/components/layout/Analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://fiftyandfive.com'),
  title: {
    default: 'Fifty & Five · Principal-Led Social Media Agency · 215+ Brands Since 2008',
    template: '%s',
  },
  alternates: {
    canonical: 'https://fiftyandfive.com',
  },
  description: 'Principal-led social media for 215+ brands across 5 continents. AI-augmented, senior-run. Retainers from $1.5K/mo. Same-day response.',
  openGraph: {
    type: 'website',
    title: 'Fifty & Five · Principal-Led Social Media Agency · 215+ Brands Since 2008',
    description:
      'Principal-led social media for 215+ brands across 5 continents. AI-augmented, senior-run. Retainers from $1.5K/mo. Same-day response.',
    url: 'https://fiftyandfive.com',
    siteName: 'Fifty & Five',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fifty & Five · Principal-Led Social Media Agency · 215+ Brands Since 2008',
    description: 'Principal-led social media for 215+ brands across 5 continents. AI-augmented, senior-run. Retainers from $1.5K/mo. Same-day response.',
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
                  alternateName: ['Fifty and Five', 'Fifty & Five Agency'],
                  url: 'https://fiftyandfive.com',
                  logo: 'https://fiftyandfive.com/logo.svg',
                  image: 'https://fiftyandfive.com/opengraph-image',
                  description: 'The boutique agency Fortune 500s call. Senior-led social media and content for 215+ brands across 5 continents since 2008.',
                  foundingDate: '2008',
                  email: 'lucas@fiftyandfive.com',
                  founder: {
                    '@type': 'Person',
                    '@id': 'https://fiftyandfive.com/#founder',
                    name: 'Lucas Vandenberg',
                    jobTitle: 'Founding Principal',
                    url: 'https://fiftyandfive.com/about',
                    sameAs: ['https://www.linkedin.com/in/LucasV/'],
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Orlando',
                    addressRegion: 'FL',
                    postalCode: '32801',
                    addressCountry: 'US',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 28.5383,
                    longitude: -81.3792,
                  },
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                      opens: '09:00',
                      closes: '18:00',
                    },
                  ],
                  areaServed: [
                    { '@type': 'Country', name: 'United States' },
                    { '@type': 'Country', name: 'Canada' },
                    { '@type': 'Country', name: 'United Kingdom' },
                    { '@type': 'Country', name: 'Italy' },
                    { '@type': 'Country', name: 'Germany' },
                    { '@type': 'Country', name: 'Australia' },
                    { '@type': 'Country', name: 'New Zealand' },
                    { '@type': 'Country', name: 'Hong Kong' },
                    { '@type': 'Country', name: 'South Korea' },
                    { '@type': 'Country', name: 'Macau' },
                    { '@type': 'Country', name: 'Philippines' },
                    { '@type': 'Country', name: 'Bahamas' },
                  ],
                  serviceType: [
                    'Social Media Management',
                    'Content Strategy',
                    'Community Management',
                    'Paid Social Advertising',
                    'Influencer Marketing',
                    'Brand Strategy',
                  ],
                  priceRange: '$1,500–$50,000+/mo',
                  numberOfEmployees: { '@type': 'QuantitativeValue', value: '1-10' },
                  slogan: 'The boutique agency Fortune 500s call.',
                  sameAs: [
                    'https://www.linkedin.com/company/fiftyandfive',
                    'https://www.linkedin.com/in/LucasV/',
                    'https://www.instagram.com/fiftyandfive/',
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
                    'Tech Brand Marketing',
                    'Healthcare Marketing',
                    'Real Estate Marketing',
                    'Automotive Marketing',
                    'Entertainment Marketing',
                    'Fitness Marketing',
                    'Retail Marketing',
                    'Boutique Agency Operations',
                    'Senior-Led Account Management',
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
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ff-bg text-ff-paper antialiased font-body">
        <NoiseOverlay />
        <Navigation />
        <main className="relative z-[2]">{children}</main>
        <Footer />
        <StickyCtaButton />
        <Analytics />
      </body>
    </html>
  );
}
