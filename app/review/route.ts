import { NextResponse } from 'next/server';

/**
 * /review: 302 to the Google Business Profile "write a review" URL.
 * Set GBP_REVIEW_URL in the environment (Vercel project settings). When it is
 * unset the route falls back to /contact so the link never dead-ends.
 * No review or rating schema is emitted anywhere on the site.
 */
export const dynamic = 'force-dynamic';

export function GET(request: Request) {
  const target = process.env.GBP_REVIEW_URL?.trim();
  const destination = target && /^https:\/\//.test(target) ? target : new URL('/contact', request.url).toString();
  return NextResponse.redirect(destination, 302);
}
