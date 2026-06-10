import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'meta-externalagent', allow: '/' },
    ],
    host: 'https://fiftyandfive.com',
    sitemap: 'https://fiftyandfive.com/sitemap.xml',
  };
}
