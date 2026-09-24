import fs from 'fs';
import path from 'path';

/**
 * Reads the Privacy Policy and Terms straight out of the approved source file,
 * fiftyandfive-sms-compliance.md, at build time. The pages hold no copy of the
 * text, so the site cannot drift from what was approved: edit the file and the
 * pages follow on the next build.
 *
 * Format expected in each section: a `Page title:` line, a `Meta description:`
 * line, then the policy as a blockquote where a line that is only **bold** is a
 * heading, a blank `>` line ends a paragraph, and consecutive lines inside one
 * paragraph are kept as separate lines (the contact block relies on that).
 */

export type LegalBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; lines: string[] };

export type LegalDoc = {
  title: string;
  metaDescription: string;
  heading: string;
  blocks: LegalBlock[];
};

const SOURCE = path.join(process.cwd(), 'fiftyandfive-sms-compliance.md');

const SECTION_HEADINGS = {
  privacy: '## 2. Privacy Policy',
  terms: '## 3. Terms of Service',
} as const;

export function getLegalDoc(which: keyof typeof SECTION_HEADINGS): LegalDoc {
  const src = fs.readFileSync(SOURCE, 'utf8');
  const start = src.indexOf(SECTION_HEADINGS[which]);
  if (start < 0) throw new Error(`compliance-copy: section "${SECTION_HEADINGS[which]}" not found`);
  const rest = src.slice(start + SECTION_HEADINGS[which].length);
  const next = rest.search(/\n## \d+\. /);
  const section = next < 0 ? rest : rest.slice(0, next);

  const title = (section.match(/^Page title: (.+)$/m) || [])[1]?.trim();
  const metaDescription = (section.match(/^Meta description: (.+)$/m) || [])[1]?.trim();
  if (!title || !metaDescription) throw new Error(`compliance-copy: ${which} is missing its title or meta description`);

  const quoted = section
    .split('\n')
    .filter((l) => l.startsWith('>'))
    .map((l) => l.replace(/^> ?/, ''));

  const paragraphs: string[][] = [];
  let current: string[] = [];
  for (const line of quoted) {
    if (line.trim() === '') {
      if (current.length) paragraphs.push(current);
      current = [];
    } else {
      current.push(line.trimEnd());
    }
  }
  if (current.length) paragraphs.push(current);

  const bold = /^\*\*(.+)\*\*$/;
  const blocks: LegalBlock[] = paragraphs.map((p) =>
    p.length === 1 && bold.test(p[0])
      ? { type: 'heading', text: p[0].replace(bold, '$1') }
      : { type: 'paragraph', lines: p },
  );

  // The first heading is the document title, rendered as the page H1.
  const first = blocks[0];
  if (!first || first.type !== 'heading') throw new Error(`compliance-copy: ${which} must open with a bold title`);

  return { title, metaDescription, heading: first.text, blocks: blocks.slice(1) };
}
