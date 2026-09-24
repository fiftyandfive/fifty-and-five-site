import type { LegalDoc } from '@/lib/compliance-copy';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

/**
 * Static legal document. Plain server-rendered prose on the site's existing
 * tokens; no motion, since carrier reviewers and crawlers need the text present
 * in the initial HTML.
 */
export function LegalPage({ doc, path }: { doc: LegalDoc; path: string }) {
  const [effective, ...blocks] = doc.blocks;
  return (
    <>
      <BreadcrumbSchema trail={[{ name: doc.heading, path }]} />
      <article className="container-edge pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="max-w-3xl">
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">Legal</div>
          <h1 className="mt-4 font-serif text-h1 tracking-[-0.02em]">{doc.heading}</h1>
          {effective?.type === 'paragraph' && (
            <p className="mt-4 font-mono text-caption uppercase text-text-tertiary tracking-[0.12em]">
              {effective.lines.join(' ')}
            </p>
          )}
          <div className="mt-12 space-y-6">
            {blocks.map((b, i) =>
              b.type === 'heading' ? (
                <h2 key={i} className="pt-6 font-serif text-h3 tracking-[-0.015em] text-text-primary">
                  {b.text}
                </h2>
              ) : (
                <p key={i} className="text-body-lg text-text-secondary leading-[1.75]">
                  {b.lines.map((line, n) => (
                    <span key={n}>
                      {n > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              ),
            )}
          </div>
        </div>
      </article>
    </>
  );
}
