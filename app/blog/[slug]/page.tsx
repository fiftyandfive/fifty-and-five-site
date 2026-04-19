import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS, getBlogPost } from '@/lib/data/blogPosts';

// ── SEO: Generate metadata for each post ────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://fiftyandfive.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://fiftyandfive.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Lucas Vandenberg'],
      images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  };
}

// ── SEO: Generate static paths for all posts ────────────────────────────────
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

// ── JSON-LD Schema ──────────────────────────────────────────────────────────
function BlogPostJsonLd({ post }: { post: typeof BLOG_POSTS[0] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.heroImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Lucas Vandenberg',
      url: 'https://fiftyandfive.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fifty & Five',
      url: 'https://fiftyandfive.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fiftyandfive.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://fiftyandfive.com/blog/${post.slug}`,
    },
    wordCount: post.minutesToRead * 250,
    articleSection: post.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbJsonLd({ post }: { post: typeof BLOG_POSTS[0] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fiftyandfive.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fiftyandfive.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://fiftyandfive.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Helper ──────────────────────────────────────────────────────────────────
function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// ── Page Component ──────────────────────────────────────────────────────────
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  // Find related posts (same category, excluding current)
  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 3);

  return (
    <>
      <BlogPostJsonLd post={post} />
      <BreadcrumbJsonLd post={post} />

      <main className="min-h-screen bg-black text-white">
        {/* Hero Image — full width, no text overlay */}
        <section className="w-full">
          <div className="w-full max-h-[560px] overflow-hidden bg-neutral-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-auto object-contain max-h-[560px]"
            />
          </div>
        </section>

        {/* Title + Meta — clean dark background, always readable */}
        <section className="px-6 pt-10 pb-8">
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/60">{post.category}</span>
            </nav>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/50">
              <span>By Lucas Vandenberg</span>
              <span className="hidden sm:inline">•</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="hidden sm:inline">•</span>
              <span>{post.minutesToRead} min read</span>
            </div>

            <div className="mt-6 h-px bg-white/10" />
          </div>
        </section>

        {/* Article Body */}
        <article className="px-6 pb-16">
          <div className="mx-auto max-w-3xl prose prose-invert prose-lg">
            <p className="text-xl text-white/70 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </article>

        {/* CTA */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-3xl p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
            <h2 className="text-xl font-semibold mb-2">Need help with your social strategy?</h2>
            <p className="text-white/50 mb-6 max-w-lg mx-auto">
              Fifty &amp; Five has managed social for 130+ brands since 2008. Let&apos;s talk about what&apos;s next for yours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </section>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="px-6 pb-24">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/30 transition-all"
                  >
                    <div className="overflow-hidden bg-black/40">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.heroImage}
                        alt={r.title}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                        {r.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/40">{formatDate(r.date)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
