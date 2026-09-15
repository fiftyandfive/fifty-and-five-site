import type { MetadataRoute } from 'next';
import { CASE_STUDIES } from '@/lib/data/caseStudies';
import { VERTICALS } from '@/lib/data/verticals';
import { BLOG_POSTS } from '@/lib/data/blogPosts';
import { caseStudyUpdated, pageUpdated, verticalUpdated } from '@/lib/sitemap-dates';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiftyandfive.com';

// lastmod is the last substantive content change, never the build time. See
// lib/sitemap-dates.ts for why, and for how the dates are kept honest.
type StaticRoute = { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number };

const STATIC_ROUTES: StaticRoute[] = [
  { path: '/', changeFrequency: 'monthly', priority: 1.0 },
  { path: '/work', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/fractional-cmo', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/ways-to-work', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/audit', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.9 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/orlando-social-media-agency', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/franchise-social-media-agency', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/fractional-cmo-orlando', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/social-media-marketing-agency-florida', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/hospitality-social-media-agency', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/wine-social-media-marketing-agency', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/press', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/audit-checklist', changeFrequency: 'yearly', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${baseUrl}${r.path === '/' ? '/' : r.path}`,
    lastModified: new Date(pageUpdated(r.path)),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const caseRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${baseUrl}/work/${c.slug}`,
    lastModified: new Date(caseStudyUpdated(c.slug)),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const verticalRoutes: MetadataRoute.Sitemap = VERTICALS.map((v) => ({
    url: `${baseUrl}/verticals/${v.slug}`,
    lastModified: new Date(verticalUpdated(v.slug)),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseRoutes, ...verticalRoutes, ...blogRoutes];
}
