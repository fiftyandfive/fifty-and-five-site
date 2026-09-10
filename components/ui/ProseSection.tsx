import { SimpleReveal } from '@/components/ui/AnimatedHeadline';

export type ProseBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

export type ProseSectionData = { h2: string; blocks: ProseBlock[] };

/**
 * Renders a long-form body section from data: one H2 plus paragraphs, lists,
 * and tables. Used by the deepened money pages so the copy lives as data and
 * the markup stays consistent across them.
 */
export function ProseSection({ h2, blocks, eyebrow }: ProseSectionData & { eyebrow?: string }) {
  return (
    <section className="container-edge py-16 md:py-24">
      <div className="max-w-3xl">
        {eyebrow && (
          <div className="font-mono text-caption uppercase text-accent tracking-[0.15em]">
            {eyebrow}
          </div>
        )}
        <h2 className="mt-4 font-serif text-h2 tracking-[-0.02em]">{h2}</h2>
      </div>
      <div className="mt-8 max-w-3xl space-y-6">
        {blocks.map((b, i) => {
          if (b.type === 'p') {
            return (
              <p key={i} className="text-body-lg text-text-secondary leading-[1.75]">
                {b.text}
              </p>
            );
          }
          if (b.type === 'ul') {
            return (
              <ul key={i} className="space-y-3 pl-5 list-disc marker:text-accent">
                {b.items.map((it, n) => (
                  <li key={n} className="text-body text-text-secondary leading-[1.65]">
                    {it}
                  </li>
                ))}
              </ul>
            );
          }
          if (b.type === 'ol') {
            return (
              <ol key={i} className="space-y-3 pl-5 list-decimal marker:text-accent marker:font-mono">
                {b.items.map((it, n) => (
                  <li key={n} className="text-body text-text-secondary leading-[1.65]">
                    {it}
                  </li>
                ))}
              </ol>
            );
          }
          return (
            <div key={i} className="overflow-x-auto -mx-1 px-1">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr>
                    {b.headers.map((h) => (
                      <th
                        key={h}
                        className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em] pb-3 pr-5 border-b border-glass-border align-bottom"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((row, n) => (
                    <tr key={n}>
                      {row.map((cell, m) => (
                        <td
                          key={m}
                          className={`py-4 pr-5 border-b border-glass-border align-top text-body ${
                            m === 0 ? 'text-text-primary font-medium' : 'text-text-secondary'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ProseSections({ sections }: { sections: ProseSectionData[] }) {
  return (
    <>
      {sections.map((s, i) => (
        <SimpleReveal key={s.h2} delay={Math.min(i * 0.04, 0.2)}>
          <ProseSection {...s} />
        </SimpleReveal>
      ))}
    </>
  );
}
