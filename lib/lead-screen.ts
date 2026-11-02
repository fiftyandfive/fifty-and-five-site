/**
 * Lead screening for the contact and audit forms.
 *
 * Most junk on this site is not bots (the honeypot already handles those).
 * It is people selling to us: VA staffing, offshore dev and SEO shops,
 * "publish your feature" media. This sorts a submission into a real lead or
 * a likely vendor pitch so that:
 *   - Lucas still gets every email, with vendor pitches tagged in the subject,
 *   - only real leads fire the GA4 `generate_lead` key event.
 * Everyone, vendor or not, still gets the auto-reply, so a misread prospect
 * loses nothing they can see.
 *
 * Deliberately conservative: only seller language counts. A missed vendor costs
 * one extra lead event; a misread prospect costs a conversion we never see.
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

/**
 * Seller language only. Every pattern is first person and pointed at us
 * ("we offer", "for agencies", "$6/hr", "here is my portfolio"). Topic words
 * a buyer also uses about their own business ("outsource", "virtual
 * assistant", "white label", "first page of Google", "grant access") are
 * deliberately NOT patterns: the Nov 2 validator showed each one flags real
 * prospects. One match is enough; there are no weak signals.
 */
const PITCH: ReadonlyArray<[RegExp, string]> = [
  [/\b(help|helps|helping|serve|serving|for) (digital |marketing |creative )?agencies\b/i, 'sells to agencies'],
  [/\bagencies like yours\b/i, 'sells to agencies'],
  [
    /\bwe (offer|provide|deliver|specialize in) (affordable |dedicated |professional |expert |reliable |top[- ]quality )?(seo|ppc|smm|web|website|app|wordpress|shopify|development|design|virtual assistan|va |staffing|outsourc|link building|backlink|lead generation|appointment)/i,
    'offers own services',
  ],
  [/\boffering [\w ,&/-]{0,40}\bservices\b/i, 'offers own services'],
  [/(starting at|starts at|from|only|just)\s*\$\s?\d+(\.\d+)?\s*(\/|per\s)\s*(hr|hour)\b/i, 'quotes own hourly rate'],
  [/\bwe (can )?(book|set|deliver) \d+\+? (qualified )?(meetings|appointments|calls)\b/i, 'appointment setting pitch'],
  [/\b(i am|i'm) a freelance\b/i, 'freelancer pitch'],
  [/\b(here is|here's|see) my portfolio\b/i, 'freelancer pitch'],
  [
    /\b(our team|our developers|our designers|we) can (redesign|rebuild|improve|fix|speed up) (it|your (website|site|(google )?rankings|seo))\b/i,
    'website fix pitch',
  ],
  [/\bwe (can|will) (rank|get) your (website|site|business|company)\b/i, 'SEO ranking pitch'],
  [/\bnoticed (some|a few|several|a couple of) (issues|errors|problems) (on|with) your (website|site)\b/i, 'website fix pitch'],
  [/\b(free|complimentary) (seo |website |site )?(report|audit) (for you|of your (website|site))\b/i, 'website fix pitch'],
  [/\b(send|share|provide)( us| me)? (the |your )?email (address )?(you use|associated)\b/i, 'account access request'],
  [/\bfeature (you|your company|your agency) in our (upcoming |next )?(issue|edition|magazine|publication|list)\b/i, 'paid media feature pitch'],
];

export function screenSubmission(input: ScreenInput): ScreenResult {
  // Message only: company and person names ("Offshore Fishing Charters",
  // "Virtual Team Co") say nothing about whether someone is selling.
  const text = input.message || '';
  if (!text.trim()) return { verdict: 'lead', reasons: [] };
  const reasons = Array.from(new Set(PITCH.filter(([re]) => re.test(text)).map(([, why]) => why)));
  return { verdict: reasons.length > 0 ? 'vendor' : 'lead', reasons };
}
