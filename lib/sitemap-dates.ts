/**
 * Last substantive content change per route, as a plain ISO date.
 *
 * Why this file exists: the sitemap previously stamped every static route,
 * case study and vertical with `new Date()` at build time. That made 44 of
 * 109 URLs re-date themselves on every deploy whether or not their content
 * changed. Search engines only honour `lastmod` while it stays consistently
 * accurate, so a field that moves on every deploy teaches them to discount it
 * across the whole sitemap, including the blog URLs where the date is real.
 *
 * Maintenance: when a page's content genuinely changes, bump its date here.
 * `scripts/verify-content.mjs` cross-checks these against git history and
 * fails the build when a route's source files are newer than the date
 * recorded below, so this cannot silently rot. The check skips itself when
 * git history is unavailable (a shallow CI clone), because being unable to
 * prove a date is not the same as the date being wrong.
 *
 * The DEPS map records which files produce each route, so the dates can be
 * re-derived rather than guessed at.
 */

/** Files whose content is rendered into each static route. */
export const ROUTE_DEPS: Record<string, string[]> = {
  '/': ['app/page.tsx', 'components/pages/HomePageContent.tsx', 'lib/data/caseStudies.ts', 'lib/data/verticals.ts'],
  '/work': ['app/work/page.tsx', 'components/pages/WorkPageContent.tsx', 'lib/data/caseStudies.ts'],
  '/services': ['app/services/page.tsx', 'lib/data/verticals.ts'],
  '/fractional-cmo': ['app/fractional-cmo/page.tsx'],
  '/ways-to-work': ['app/ways-to-work/page.tsx'],
  '/audit': ['app/audit/page.tsx', 'components/ui/AuditForm.tsx'],
  '/about': ['app/about/page.tsx', 'components/pages/AboutPageContent.tsx'],
  '/contact': ['app/contact/page.tsx', 'components/ui/ContactForm.tsx'],
  '/blog': ['app/blog/page.tsx', 'components/pages/BlogPageContent.tsx', 'lib/data/blogPosts.ts'],
  '/orlando-social-media-agency': ['app/orlando-social-media-agency/page.tsx'],
  '/franchise-social-media-agency': ['app/franchise-social-media-agency/page.tsx'],
  '/fractional-cmo-orlando': ['app/fractional-cmo-orlando/page.tsx'],
  '/social-media-marketing-agency-florida': ['app/social-media-marketing-agency-florida/page.tsx'],
  '/hospitality-social-media-agency': ['app/hospitality-social-media-agency/page.tsx'],
  '/wine-social-media-marketing-agency': ['app/wine-social-media-marketing-agency/page.tsx'],
  '/press': ['app/press/page.tsx'],
  '/audit-checklist': ['app/audit-checklist/page.tsx', 'components/pages/AuditChecklistContent.tsx'],
  '/privacy': ['app/privacy/page.tsx', 'fiftyandfive-sms-compliance.md'],
  '/terms': ['app/terms/page.tsx', 'fiftyandfive-sms-compliance.md'],
};

/** Last substantive content change per static route. */
export const PAGE_UPDATED: Record<string, string> = {
  '/': '2026-09-15',
  '/work': '2026-09-15',
  '/services': '2026-09-15',
  '/fractional-cmo': '2026-09-15',
  '/ways-to-work': '2026-09-15',
  '/audit': '2026-09-15',
  '/about': '2026-09-15',
  '/contact': '2026-09-24',
  '/blog': '2026-09-15',
  '/orlando-social-media-agency': '2026-09-15',
  '/franchise-social-media-agency': '2026-09-15',
  '/fractional-cmo-orlando': '2026-09-15',
  '/social-media-marketing-agency-florida': '2026-09-15',
  '/hospitality-social-media-agency': '2026-09-15',
  '/wine-social-media-marketing-agency': '2026-09-15',
  '/press': '2026-09-15',
  '/audit-checklist': '2026-09-15',
  '/privacy': '2026-09-24',
  '/terms': '2026-09-24',
};

/**
 * Case studies and verticals render from one shared data file plus one shared
 * template each, so they move together. A per-slug override belongs in the
 * matching OVERRIDES map when a single entry is edited on its own.
 */
export const CASE_STUDY_DEPS = ['lib/data/caseStudies.ts', 'app/work/[slug]/page.tsx', 'components/ui/ProseSection.tsx'];
export const CASE_STUDY_UPDATED = '2026-09-15';
export const CASE_STUDY_UPDATED_OVERRIDES: Record<string, string> = {};

export const VERTICAL_DEPS = ['lib/data/verticals.ts', 'app/verticals/[slug]/page.tsx'];
export const VERTICAL_UPDATED = '2026-09-15';
export const VERTICAL_UPDATED_OVERRIDES: Record<string, string> = {};

/** Used only if a route is added to the sitemap without a date recorded here. */
export const FALLBACK_UPDATED = '2026-09-15';

export function pageUpdated(route: string): string {
  return PAGE_UPDATED[route] ?? FALLBACK_UPDATED;
}

export function caseStudyUpdated(slug: string): string {
  return CASE_STUDY_UPDATED_OVERRIDES[slug] ?? CASE_STUDY_UPDATED;
}

export function verticalUpdated(slug: string): string {
  return VERTICAL_UPDATED_OVERRIDES[slug] ?? VERTICAL_UPDATED;
}
