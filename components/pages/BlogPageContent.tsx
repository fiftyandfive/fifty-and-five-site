'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/data/blogPosts';
import { MagneticButton } from '@/components/ui/MagneticButton';

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

export function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const sortedPosts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const filteredPosts = activeCategory
    ? sortedPosts.filter((p) => p.category === activeCategory)
    : sortedPosts;

  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <>
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
          style={{ fontSize: 'clamp(40px, 6vw, 84px)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.0, maxWidth: 760 }}
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
            className="group grid md:grid-cols-2 gap-0 overflow-hidden transition-colors duration-300 hover:border-ink-black"
            style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--glass-border)' }}
          >
            {/* Image — tall, cover */}
            <div className="relative overflow-hidden" style={{ minHeight: 360, background: 'var(--color-bg-tertiary)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.heroImage}
                alt={featured.title}
                className="w-full h-full"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
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
                style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--color-text-primary)' }}
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
                className="group flex flex-col overflow-hidden transition-colors duration-300 hover:border-ink-black"
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--glass-border)',
                }}
              >
                {/* Image — cover, taller for hi-res photos */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ height: 240, background: 'var(--color-bg-tertiary)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-[1.04]"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
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
                      fontSize: 18,
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25,
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

      {/* CTA */}
      <section className="container-edge pb-28 text-center">
        <div
          className="relative overflow-hidden p-10 md:p-14"
          style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--glass-border)' }}
        >
          <div className="relative z-10">
            <h2
              className="font-serif"
              style={{ fontSize: 'clamp(28px, 4vw, 54px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05 }}
            >
              Want strategy like this for your brand?
            </h2>
            <p className="mt-4 text-body text-text-secondary max-w-md mx-auto">
              Senior-led social media management from an agency that's been doing this since 2008.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <MagneticButton href="/contact" variant="primary" size="large">
                Start a Conversation →
              </MagneticButton>
              <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
                Typical response: same day
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
