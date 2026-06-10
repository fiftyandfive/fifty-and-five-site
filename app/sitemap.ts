import type { MetadataRoute } from 'next';
import { CASE_STUDIES } from '@/lib/data/caseStudies';
import { VERTICALS } from '@/lib/data/verticals';
import { BLOG_POSTS } from '@/lib/data/blogPosts';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiftyandfive.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/orlando-social-media-agency`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/franchise-social-media-agency`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];

  const caseRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${baseUrl}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const verticalRoutes: MetadataRoute.Sitemap = VERTICALS.map((v) => ({
    url: `${baseUrl}/verticals/${v.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseRoutes, ...verticalRoutes, ...blogRoutes];
}
