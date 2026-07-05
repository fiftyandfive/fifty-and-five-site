import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS, getBlogPost } from '@/lib/data/blogPosts';
import { getBlogContent } from '@/lib/data/blogContent';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SITE } from '@/lib/constants';

// ── Pull quote extraction + injection ───────────────────────────────────────
function processContent(rawHtml: string): string {
  const candidates: string[] = [];

  // Strategy 1: <strong> text inside <p> that looks like a key statement
  const strongRe = /<p[^>]*>(?:[^<]|<(?!\/p))*?<strong>([^<]{55,240})<\/strong>(?:[^<]|<(?!\/p))*?<\/p>/gs;
  let m: RegExpExecArray | null;
  while ((m = strongRe.exec(rawHtml)) !== null) {
    candidates.push(m[1].trim());
  }

  // Strategy 2: plain <p> with 90–300 chars, no inner tags
  if (candidates.length < 2) {
    const plainRe = /<p>([A-Z][^<]{90,300}[.!?])<\/p>/g;
    while ((m = plainRe.exec(rawHtml)) !== null) {
      candidates.push(m[1].trim());
    }
  }

  const quotes = [...new Set(candidates)].slice(0, 2);
  if (quotes.length === 0) return rawHtml;

  // Collect all </p> end positions
  const closes: number[] = [];
  const closeRe = /<\/p>/g;
  while ((m = closeRe.exec(rawHtml)) !== null) {
    closes.push(m.index + m[0].length);
  }
  if (closes.length < 5) return rawHtml;

  const pqHtml = (q: string) => `<div class="blog-pull-quote">${q}</div>`;
  let html = rawHtml;

  // Inject first quote after ~33% of paragraphs
  if (quotes[0]) {
    const pos = closes[Math.floor(closes.length * 0.33)];
    html = html.slice(0, pos) + pqHtml(quotes[0]) + html.slice(pos);
  }

  // Recalculate, inject second at ~67%
  if (quotes[1]) {
    const closes2: number[] = [];
    const re2 = /<\/p>/g;
    while ((m = re2.exec(html)) !== null) closes2.push(m.index + m[0].length);
    if (closes2.length >= 6) {
      const pos2 = closes2[Math.floor(closes2.length * 0.67)];
      html = html.slice(0, pos2) + pqHtml(quotes[1]) + html.slice(pos2);
    }
  }

  return html;
}

// ── SEO metadata ────────────────────────────────────────────────────────────
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
    alternates: { canonical: `https://fiftyandfive.com/blog/${post.slug}` },
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

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Category → accent color map (matches site verticals)
const CATEGORY_COLORS: Record<string, string> = {
  'AI & Automation': '#C41E3A',
  'Wine & Beverage': '#9B2335',
  'Travel & Hospitality': '#0D9488',
  'Restaurant': '#EA580C',
  'Social Media Strategy': '#E2334F',
  'Case Studies': '#F59E0B',
  'Agency': '#C41E3A',
};

function extractFaqs(html: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const faqRe = /<h3>(?!FAQ)(.*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g;
  let started = false;
  let m: RegExpExecArray | null;
  while ((m = faqRe.exec(html)) !== null) {
    const q = m[1].replace(/<[^>]*>/g, '').trim();
    const a = m[2].replace(/<[^>]*>/g, '').trim();
    if (q.endsWith('?')) started = true;
    if (started && q.endsWith('?') && a.length > 10) {
      faqs.push({ question: q, answer: a });
    }
  }
  return faqs;
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const rawContent = getBlogContent(post.wixSlug);
  const bodyHtml = rawContent
    ? processContent(rawContent)
    : `<p class="text-xl">${post.excerpt}</p>`;

  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug,
  ).slice(0, 3);

  const categoryColor = CATEGORY_COLORS[post.category] ?? '#C41E3A';
  const faqs = rawContent ? extractFaqs(rawContent) : [];
  const plainText = rawContent
    ? rawContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
    : post.excerpt;
  const wordCount = plainText.split(/\s+/).length;

  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            author: { '@type': 'Person', name: 'Lucas Vandenberg', url: 'https://fiftyandfive.com/about' },
            publisher: { '@id': 'https://fiftyandfive.com/#organization' },
            mainEntityOfPage: `https://fiftyandfive.com/blog/${post.slug}`,
            image: post.heroImage,
            inLanguage: 'en-US',
            wordCount,
            articleBody: plainText.slice(0, 500),
            keywords: [post.category, 'social media', 'Fifty & Five'].join(', '),
          }),
        }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
            }),
          }}
        />
      )}

      <main className="min-h-screen" style={{ background: 'var(--color-bg-primary)' }}>

        {/* ── Hero Image ──────────────────────────────────────────────────── */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: 'clamp(260px, 38vw, 480px)', background: 'var(--color-bg-secondary)' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* gradient fade to page bg */}
          <div
            className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--color-bg-primary))' }}
          />
        </div>

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <header className="container-edge pt-10 pb-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-6" style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-sans)' }}>
            <Link href="/" className="hover:text-ink-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-ink-black transition-colors">Blog</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>{post.category}</span>
          </nav>

          {/* Category pill */}
          <div className="mb-5">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white"
              style={{
                background: `${categoryColor}22`,
                border: `1px solid ${categoryColor}44`,
                fontSize: 11,
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: categoryColor === '#C41E3A' ? 'var(--color-accent-light)' : categoryColor,
              }}
            >
              <span
                className="inline-block rounded-full w-1.5 h-1.5"
                style={{ background: categoryColor }}
              />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(34px, 5.5vw, 72px)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              lineHeight: 1.02,
              color: 'var(--color-text-primary)',
              maxWidth: '960px',
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt / lede */}
          <p
            className="mt-5"
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: 'var(--color-text-secondary)',
              maxWidth: '680px',
            }}
          >
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1"
            style={{ fontSize: 13, color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-sans)' }}
          >
            <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>
              Lucas Vandenberg
            </span>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.minutesToRead} min read</span>
          </div>

          {/* Hairline */}
          <div className="mt-8" style={{ height: 1, background: 'var(--glass-border)' }} />
        </header>

        {/* ── Article Body ─────────────────────────────────────────────────── */}
        <article className="container-edge pb-20">
          <div
            className="blog-prose"
            style={{ maxWidth: 700 }}
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        </article>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="container-edge pb-20">
          <div
            className="relative overflow-hidden p-10 md:p-14 text-center"
            style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--glass-border)',
            }}
          >
            <div className="relative z-10">
              <div
                className="font-mono uppercase mb-4"
                style={{ fontSize: 11, letterSpacing: '0.15em', color: 'var(--color-accent-light)' }}
              >
                Fifty &amp; Five
              </div>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(28px, 4vw, 54px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: 'var(--color-text-primary)',
                  maxWidth: 620,
                  marginInline: 'auto',
                }}
              >
                Ready to work with an agency that&apos;s done this 222 times?
              </h2>
              <p
                className="mt-4"
                style={{
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: 'var(--color-text-secondary)',
                  maxWidth: 440,
                  marginInline: 'auto',
                }}
              >
                No pitch deck until we know it&apos;s a fit. Let&apos;s start with a conversation.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="flex flex-wrap items-center justify-center gap-3.5">
                  <MagneticButton href="/contact" variant="primary" size="large">
                    Get a senior strategist on your brand →
                  </MagneticButton>
                  <MagneticButton href={SITE.calendly} variant="secondary" size="large">
                    Run the numbers →
                  </MagneticButton>
                </div>
                <p
                  className="font-mono uppercase"
                  style={{ fontSize: 11, letterSpacing: '0.12em', color: 'var(--color-text-tertiary)' }}
                >
                  Typical response: same day
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Posts ─────────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="container-edge pb-28">
            <div
              className="font-mono uppercase mb-8"
              style={{ fontSize: 11, letterSpacing: '0.15em', color: 'var(--color-text-tertiary)' }}
            >
              More in {post.category}
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block overflow-hidden transition-colors duration-300 hover:border-ink-black"
                  style={{
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  <div className="overflow-hidden" style={{ maxHeight: 180, background: 'var(--color-bg-tertiary)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.heroImage}
                      alt={r.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ maxHeight: 180 }}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div
                      className="font-mono uppercase mb-2"
                      style={{ fontSize: 10, letterSpacing: '0.12em', color: 'var(--color-text-tertiary)' }}
                    >
                      {r.minutesToRead} min read
                    </div>
                    <h3
                      className="font-serif leading-snug transition-colors group-hover:text-accent"
                      style={{
                        fontSize: 18,
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {r.title}
                    </h3>
                    <p
                      className="mt-2 line-clamp-2"
                      style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--color-text-tertiary)' }}
                    >
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
