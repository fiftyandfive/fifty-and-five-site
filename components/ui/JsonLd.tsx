/**
 * Reusable JSON-LD component for structured data.
 * Usage: <BreadcrumbJsonLd items={[{ name: 'Work', url: '/work' }]} />
 */

type BreadcrumbItem = { name: string; url: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fiftyandfive.com' },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `https://fiftyandfive.com${item.url}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function CaseStudyJsonLd({
  name,
  description,
  url,
  industry,
  services,
}: {
  name: string;
  description: string;
  url: string;
  industry: string;
  services: string[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${name} — Social Media Case Study`,
    description,
    url: `https://fiftyandfive.com${url}`,
    author: { '@id': 'https://fiftyandfive.com/#organization' },
    about: {
      '@type': 'Organization',
      name,
      industry,
    },
    keywords: services.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
