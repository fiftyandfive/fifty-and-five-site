const BASE = 'https://fiftyandfive.com';

export type Crumb = { name: string; path: string };

/**
 * BreadcrumbList JSON-LD. Google uses it to replace the raw URL in the result
 * with a named trail, so it belongs on every page below the homepage. The
 * detail templates (case studies, verticals, blog posts) emit their own inline
 * because their trails are built from data; this covers the fixed ones.
 *
 * Home is prepended automatically, so pass only the trail below it.
 */
export function BreadcrumbSchema({ trail }: { trail: Crumb[] }) {
  const items = [{ name: 'Home', path: '/' }, ...trail];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.name,
            item: `${BASE}${c.path}`,
          })),
        }),
      }}
    />
  );
}
