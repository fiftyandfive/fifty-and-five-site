import type { Metadata } from 'next';
import { BlogPageContent } from '@/components/pages/BlogPageContent';

export const metadata: Metadata = {
  title: 'Blog | Social Strategy & AI Insights',
  description:
    'Social media strategy, AI automation, and brand storytelling insights from an agency that has managed 222+ brands since 2008.',
  alternates: {
    canonical: 'https://fiftyandfive.com/blog',
  },
  openGraph: {
    title: 'Blog | Social Strategy & AI Insights | Fifty & Five',
    description:
      'Social media strategy, AI automation, and brand storytelling insights from an agency that has managed 222+ brands since 2008.',
    url: 'https://fiftyandfive.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Social Strategy & AI Insights | Fifty & Five',
    description:
      'Social media strategy, AI automation, and brand storytelling insights from an agency that has managed 222+ brands since 2008.',
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
