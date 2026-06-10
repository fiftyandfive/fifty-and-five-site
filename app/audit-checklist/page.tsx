import type { Metadata } from 'next';
import { AuditChecklistContent } from '@/components/pages/AuditChecklistContent';

export const metadata: Metadata = {
  title: '5-Minute Social Media Audit Checklist',
  description:
    '10-point social media audit checklist. Profile audit, content-market fit, engagement ratio, competitor gap, conversion path, and more. Free, printable.',
  alternates: {
    canonical: 'https://fiftyandfive.com/audit-checklist',
  },
  openGraph: {
    title: '5-Minute Social Media Audit Checklist | Fifty & Five',
    description:
      '10-point social media audit you can run in 5 minutes. Free, printable checklist from Fifty & Five.',
    url: 'https://fiftyandfive.com/audit-checklist',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5-Minute Social Media Audit Checklist | Fifty & Five',
    description:
      '10-point social media audit you can run in 5 minutes. Free, printable checklist from Fifty & Five.',
  },
};

export default function AuditChecklistPage() {
  return <AuditChecklistContent />;
}
