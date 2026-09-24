import type { Metadata } from 'next';
import { getLegalDoc } from '@/lib/compliance-copy';
import { LegalPage } from '@/components/legal/LegalPage';

// Copy is read from fiftyandfive-sms-compliance.md at build time.
export const dynamic = 'force-static';

const doc = getLegalDoc('privacy');
const url = 'https://fiftyandfive.com/privacy';

export const metadata: Metadata = {
  title: doc.title,
  description: doc.metaDescription,
  alternates: { canonical: url },
  openGraph: {
    images: ['/opengraph-image'],
    title: `${doc.title} | Fifty & Five`,
    description: doc.metaDescription,
    url,
    type: 'website',
  },
};

export default function Page() {
  return <LegalPage doc={doc} path="/privacy" />;
}
