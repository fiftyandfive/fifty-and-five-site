import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work · 215+ Brands · Case Studies · Fifty & Five',
  description:
    'Case studies from 215+ brands across 15 verticals: Microsoft, Kendall-Jackson, Enterprise Holdings, Blaze Pizza, Tupperware. Principal-led work since 2008.',
  alternates: {
    canonical: 'https://fiftyandfive.com/work',
  },
  openGraph: {
    title: 'Work · 215+ Brands · Case Studies · Fifty & Five',
    description:
      'Case studies from 215+ brands across 15 verticals. Principal-led social media management since 2008.',
    url: 'https://fiftyandfive.com/work',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work · 215+ Brands · Case Studies · Fifty & Five',
    description:
      'Case studies from 215+ brands across 15 verticals. Principal-led social media management since 2008.',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
