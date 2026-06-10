import type { Metadata } from 'next';
import { WorkPageContent } from '@/components/pages/WorkPageContent';

export const metadata: Metadata = {
  title: 'Our Work | 222+ Brands Since 2008',
  description:
    'Case studies from 222+ brands across 15 verticals. Wine & spirits, hospitality, franchise, fitness, tech, and more. Real outcomes, senior-led execution.',
  alternates: {
    canonical: 'https://fiftyandfive.com/work',
  },
  openGraph: {
    title: 'Our Work | 222+ Brands Since 2008 | Fifty & Five',
    description:
      'Case studies from 222+ brands across 15 verticals. Real outcomes, senior-led execution.',
    url: 'https://fiftyandfive.com/work',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | 222+ Brands Since 2008 | Fifty & Five',
    description:
      'Case studies from 222+ brands across 15 verticals. Real outcomes, senior-led execution.',
  },
};

export default function WorkPage() {
  return <WorkPageContent />;
}
