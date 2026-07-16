import type { Metadata } from 'next';
import { BlogPageContent } from '@/components/pages/BlogPageContent';

export const metadata: Metadata = {
  title: 'Blog | Social Strategy & AI Insights',
  description:
    'Social media strategy, AI automation, AEO, and brand-storytelling insights from the senior team behind 222+ brands, five continents, since 2008. No hype.',
  alternates: {
    canonical: 'https://fiftyandfive.com/blog',
  },
  openGraph: {
    title: 'Blog | Social Strategy & AI Insights | Fifty & Five',
    description:
      'Social media strategy, AI automation, AEO, and brand-storytelling insights from the senior team behind 222+ brands, five continents, since 2008. No hype.',
    url: 'https://fiftyandfive.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Social Strategy & AI Insights | Fifty & Five',
    description:
      'Social media strategy, AI automation, AEO, and brand-storytelling insights from the senior team behind 222+ brands, five continents, since 2008. No hype.',
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
