'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/data/blogPosts';

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? BLOG_POSTS.filter((p) => p.category === activeCategory)
    : BLOG_POSTS;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            The Fifty & Five Blog
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            Social media strategy, AI automation, video content, and brand
            storytelling — from an agency that&apos;s managed 130+ brands since 2008.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !activeCategory
                ? 'bg-white text-black'
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            }`}
          >
            All Posts
          </button>
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Post Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/30 transition-all"
            >
              {/* Hero Image */}
              <div className="aspect-video relative overflow-hidden bg-white/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.heroImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-white/40 mb-3">
                  <span className="bg-white/10 px-2 py-1 rounded">{post.category}</span>
                  <span>{formatDate(post.date)}</span>
                  <span>{post.minutesToRead} min read</span>
                </div>
                <h2 className="text-lg font-semibold leading-snug group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-white/50 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
