/**
 * "How did you hear about us?" options for the contact form.
 *
 * Nov 2 2026: an earlier version (lead-screen.ts) held a keyword screen that tried to tell vendor
 * pitches from real leads. Two independent validation passes showed regex
 * cannot do it (it flagged 53% of realistic prospect messages, because buyers
 * describe their own businesses in seller language), so it was removed. Do not
 * bring back keyword screening for leads; it hides real prospects.
 */

export type LeadSource =
  | 'referral'
  | 'google'
  | 'ai_assistant'
  | 'linkedin'
  | 'directory'
  | 'event'
  | 'other';

/** Options for the "How did you hear about us?" field, in display order. */
export const LEAD_SOURCE_OPTIONS: ReadonlyArray<{ value: LeadSource; label: string }> = [
  { value: 'referral', label: 'Referral from someone' },
  { value: 'google', label: 'Google search' },
  { value: 'ai_assistant', label: 'ChatGPT or another AI assistant' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'directory', label: 'Clutch or another directory' },
  { value: 'event', label: 'An event or talk' },
  { value: 'other', label: 'Something else' },
];

const SOURCE_VALUES = new Set<string>(LEAD_SOURCE_OPTIONS.map((o) => o.value));

/** Returns the source if it is one we offer, else null. Never trusts the client. */
export function normalizeLeadSource(raw: unknown): LeadSource | null {
  if (typeof raw !== 'string') return null;
  const v = raw.trim().toLowerCase();
  return SOURCE_VALUES.has(v) ? (v as LeadSource) : null;
}

export function leadSourceLabel(source: LeadSource | null): string {
  if (!source) return 'Not given';
  return LEAD_SOURCE_OPTIONS.find((o) => o.value === source)?.label ?? 'Not given';
}
