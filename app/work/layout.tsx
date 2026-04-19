import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Social Media Case Studies — Microsoft, Blaze Pizza & More',
  description:
    'Case studies from 215+ brands: Microsoft, Kendall-Jackson, Enterprise Holdings, Blaze Pizza, Tupperware, and more. Real work, real outcomes, one person accountable.',
  alternates: {
    canonical: 'https://fiftyandfive.com/work',
  },
  openGraph: {
    title: 'Our Work | Social Media Case Studies | Fifty & Five',
    description:
      'Case studies from 215+ brands: Microsoft, Kendall-Jackson, Enterprise Holdings, Blaze Pizza. Real work, real outcomes.',
    url: 'https://fiftyandfive.com/work',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
