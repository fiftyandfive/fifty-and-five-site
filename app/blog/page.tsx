'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/data/blogPosts';

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  'AI & Automation': '#C41E3A',
  'Wine & Beverage': '#9B2335',
  'Travel & Hospitality': '#0D9488',
  'Restaurant': '#EA580C',
  'Social Media Strategy': '#E2334F',
  'Case Studies': '#F59E0B',
  'Agency': '#C41E3A',
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? BLOG_POSTS.filter((p) => p.category === activeCategory)
    : BLOG_POSTS;

  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <main className="min-h-screen" style={{ background: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What topics does the Fifty & Five blog cover?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The Fifty & Five blog covers social media strategy, AI and automation in marketing, wine and beverage marketing, travel and hospitality social, restaurant marketing, and case studies from the agency\'s 222+ brand portfolio.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does Fifty & Five publish original research?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Fifty & Five publishes original insights on social media strategy, answer engine optimization (AEO), and AI-driven marketing based on 18 years of managing social for 222+ brands across 12 verticals.',
                },
              },
              {
                '@type': 'Question',
                name: 'How often does Fifty & Five publish new content?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fifty & Five publishes new blog posts and strategy insights on a regular basis, covering trends in social media, AI marketing, and vertical-specific strategies for wine, hospitality, fitness, and tech brands.',
                },
              },
            ],
          }),
        }}
      />

      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <section className="container-edge pt-36 md:pt-44 pb-14">
        <div
          className="font-mono uppercase mb-4"
          style={{ fontSize: 11, letterSpacing: '0.15em', color: 'var(--color-accent-light)' }}
        >
          Insights &amp; Strategy
        </div>
        <h1
          className="font-serif"
          style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.08, maxWidth: 680 }}
        >
          The Fifty &amp; Five Blog
        </h1>
        <p className="mt-5" style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--color-text-secondary)', maxWidth: 520 }}>
          Social strategy, AI automation, and brand storytelling from an agency that&apos;s managed 222+ brands since 2008.
        </p>

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className="px-4 py-2 rounded-full transition-all"
            style={{
              fontSize: 13,
              fontWeight: 500,
              background: !activeCategory ? 'var(--color-accent)' : 'var(--glass-bg)',
              border: `1px solid ${!activeCategory ? 'var(--color-accent)' : 'var(--glass-border)'}`,
              color: !activeCategory ? '#fff' : 'var(--color-text-secondary)',
              cursor: 'pointer',
            }}
          >
            All Posts
          </button>
          {BLOG_CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            const color = CATEGORY_COLORS[cat] ?? 'var(--color-accent)';
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full transition-all"
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  background: active ? `${color}22` : 'var(--glass-bg)',
                  border: `1px solid ${active ? `${color}66` : 'var(--glass-border)'}`,
                  color: active ? color : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Featured Post ────────────────────────────────────────────────── */}
      {featured && (
        <section className="container-edge pb-12">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-0 rounded-[20px] overflow-hidden transition-all duration-300"
            style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--glass-border)' }}
          >
            {/* Image — fixed height, cover */}
            <div className="relative overflow-hidden flex items-center justify-center" style={{ height: 320, background: 'var(--color-bg-tertiary)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.heroImage}
                alt={featured.title}
                className="w-full h-full"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: `${CATEGORY_COLORS[featured.category] ?? '#C41E3A'}22`,
                    border: `1px solid ${CATEGORY_COLORS[featured.category] ?? '#C41E3A'}44`,
                    color: CATEGORY_COLORS[featured.category] ?? 'var(--color-accent-light)',
                  }}
                >
                  {featured.category}
                </span>
                <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>
                  {featured.minutesToRead} min read
                </span>
              </div>
              <h2
                className="font-serif transition-colors group-hover:text-accent"
                style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--color-text-primary)' }}
              >
                {featured.title}
              </h2>
              <p className="mt-3 line-clamp-3" style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--color-text-secondary)' }}>
                {featured.excerpt}
              </p>
              <div className="mt-6" style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>
                {formatDate(featured.date)}
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── Post Grid ────────────────────────────────────────────────────── */}
      <section className="container-edge pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => {
            const color = CATEGORY_COLORS[post.category] ?? '#C41E3A';
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-[16px] overflow-hidden transition-all duration-300"
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--glass-border)',
                }}
              >
                {/* Fixed-height image box — object-contain shows full image */}
                <div className="relative overflow-hidden flex-shrink-0 flex items-center justify-center" style={{ height: 210, background: 'var(--color-bg-tertiary)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full"
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                    loading="lazy"
                  />
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5"
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        background: `${color}18`,
                        color: color === '#C41E3A' ? 'var(--color-accent-light)' : color,
                        border: `1px solid ${color}33`,
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--color-text-tertiary)' }}>
                      {post.minutesToRead} min
                    </span>
                  </div>

                  <h2
                    className="font-serif leading-snug flex-1 transition-colors"
                    style={{
                      fontSize: 15,
                      fontWeight: 900,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.3,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {post.title}
                  </h2>

                  <p className="mt-2 line-clamp-2" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--color-text-tertiary)' }}>
                    {post.excerpt}
                  </p>

                  <div
                    className="mt-4 pt-4 flex items-center justify-between"
                    style={{ borderTop: '1px solid var(--glass-border)', fontSize: 11, color: 'var(--color-text-tertiary)' }}
                  >
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span
                      className="transition-colors group-hover:text-accent-light"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
