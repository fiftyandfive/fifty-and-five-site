/**
 * Lead screening for the contact and audit forms.
 *
 * Most junk on this site is not bots (the honeypot already handles those).
 * It is people selling to us: VA staffing, offshore dev and SEO shops,
 * "publish your feature" media. This sorts a submission into a real lead or
 * a likely vendor pitch so that:
 *   - Lucas still gets every email, but vendor pitches are tagged in the subject,
 *   - vendors do not get the prospect auto-reply,
 *   - only real leads fire the GA4 `generate_lead` key event.
 *
 * Deliberately conservative: a submission is only called a vendor when its own
 * words pitch a service. A false "lead" costs nothing; a false "vendor" costs a
 * prospect their auto-reply, so the bar for "vendor" is two signals, or one
 * signal that is unmistakable on its own.
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

export type ScreenInput = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export type ScreenResult = {
  verdict: 'lead' | 'vendor';
  /** Which rules matched, for the internal email. Empty for clean leads. */
  reasons: string[];
};

/** Phrases that on their own mean "I am selling to you". */
const STRONG_PITCH: ReadonlyArray<[RegExp, string]> = [
  [/\bvirtual (assistant|assistants|staff|team)\b/i, 'virtual assistant pitch'],
  [/\b(offshore|outsourc(e|ed|ing))\b/i, 'outsourcing pitch'],
  [/\bwhite[- ]?label(ed)?\b/i, 'white label pitch'],
  [/\b(guest post|link building|backlinks?)\b/i, 'link building pitch'],
  [/\brank (your|you) (website|site|business)\b/i, 'SEO ranking pitch'],
  [/\b(first page|page one|1st page) (of|on) google\b/i, 'SEO ranking pitch'],
  [/\bgrant (us |me )?(read[- ]only )?access\b/i, 'account access request'],
  [/\bfeature (you|your company) in\b/i, 'paid media feature pitch'],
];

/** Phrases that are suspicious only in combination. */
const WEAK_PITCH: ReadonlyArray<[RegExp, string]> = [
  // Narrow on purpose: prospects also write "we are a family wine company" and
  // "our team", so only service-shop self descriptions count.
  [
    /\b(we are|we're|i am|i'm) (a|an) (leading |top |award[- ]winning |full[- ]service )?(digital|marketing|seo|web|software|development|design|staffing|outsourcing|it) (agency|company|firm|studio|team)\b/i,
    'introduces own agency',
  ],
  [/\bour (developers|designers|seo experts|virtual assistants|vas)\b/i, 'describes own staff'],
  [/\b(hourly rate|per hour|\$\d+\s?\/\s?h(ou)?r)\b/i, 'quotes own rate'],
  [/\b(free (trial|consultation|audit) for you|no obligation)\b/i, 'offers free trial'],
  [/\b(web ?development|app development|wordpress|shopify) (services|experts?|team)\b/i, 'dev shop language'],
  [/\b(lead generation|appointment setting) (services|agency)\b/i, 'lead gen pitch'],
  [/\b(partnership|collaboration) opportunit(y|ies)\b/i, 'partnership pitch'],
];

export function screenSubmission(input: ScreenInput): ScreenResult {
  const text = [input.name, input.company, input.message].filter(Boolean).join('\n');
  if (!text.trim()) return { verdict: 'lead', reasons: [] };

  const strong = STRONG_PITCH.filter(([re]) => re.test(text)).map(([, why]) => why);
  const weak = WEAK_PITCH.filter(([re]) => re.test(text)).map(([, why]) => why);
  const reasons = Array.from(new Set([...strong, ...weak]));

  const isVendor = strong.length >= 1 || weak.length >= 2;
  return { verdict: isVendor ? 'vendor' : 'lead', reasons: isVendor ? reasons : [] };
}
