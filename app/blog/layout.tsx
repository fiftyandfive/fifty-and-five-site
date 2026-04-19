import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Social Media Strategy, AI & Content Marketing',
  description:
    'Insights on social media strategy, AI automation, video content, and brand storytelling from Fifty & Five — a digital marketing agency with 130+ brand clients since 2008.',
  alternates: {
    canonical: 'https://fiftyandfive.com/blog',
  },
  openGraph: {
    title: 'Blog | Fifty & Five — Social Media & Content Agency',
    description:
      'Expert insights on social media strategy, AI tools, video content, and hospitality marketing from an agency that\'s managed 130+ brands.',
    url: 'https://fiftyandfive.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Fifty & Five',
    description: 'Social media strategy, AI automation & content marketing insights.',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
