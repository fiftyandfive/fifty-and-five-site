import './globals.css';
import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { StickyCtaButton } from '@/components/ui/StickyCtaButton';
import { ExitIntentBar } from '@/components/ui/ExitIntentBar';
import { Analytics } from '@/components/layout/Analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://fiftyandfive.com'),
  title: {
    default: 'Fifty & Five | Senior-Led Social Media Agency | 215+ Brands Since 2008',
    template: '%s | Fifty & Five',
  },
  description:
    'Senior-led social and content strategy for 215+ brands since 2008 — Microsoft, Kendall-Jackson, Enterprise Holdings, Blaze Pizza. Principal-led, specialist-backed, zero junior handoffs.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,400..900,0..100;1,9..144,400..900,0..100&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased font-sans">
        <NoiseOverlay />
        <Navigation />
        <main className="relative z-[2]">{children}</main>
        <Footer />
        <StickyCtaButton />
        <ExitIntentBar />
        <Analytics />
      </body>
    </html>
  );
}
