import Link from 'next/link';
import { FOOTER_VERTICALS, NAV_LINKS, SITE } from '@/lib/constants';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { NewsletterSignup } from '@/components/ui/NewsletterSignup';

export function Footer() {
  return (
    <footer className="relative bg-bg-primary border-t border-glass-border mt-32">
      <div className="container-edge py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" aria-label="Fifty & Five home">
              <BrandLogo height={26} />
            </Link>
            <p className="mt-4 text-meta text-text-primary font-medium">CMO strategy. Agency execution.<br />ROI you can defend.</p>
            <p className="mt-2 text-meta text-text-secondary max-w-[220px]">{SITE.tagline}</p>
          </div>

          <div>
            <h4 className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em] mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[...NAV_LINKS, { href: '/contact', label: 'Contact' }].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-meta text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em] mb-4">
              Verticals
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {FOOTER_VERTICALS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-meta text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em] mb-4">
              Reach Out
            </h4>
            <ul className="space-y-3 text-meta text-text-secondary">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-text-primary transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.location}</li>
              <li className="flex gap-4 pt-2">
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* The Receipt — newsletter capture */}
        <div className="mt-14 pt-10 border-t border-glass-border">
          <NewsletterSignup source="footer" className="max-w-md" />
        </div>

        {/* Oversized outlined logo — editorial poster footer, cropped top & bottom */}
        <div
          className="mt-16 md:mt-24 overflow-hidden select-none flex items-center justify-center"
          aria-hidden
          style={{ height: 'clamp(64px, 13vw, 210px)' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/logo-outline.svg"
            alt=""
            className="block w-full shrink-0"
            style={{ height: 'auto', opacity: 0.5 }}
          />
        </div>

        <div className="mt-8 md:mt-10 pt-6 border-t border-glass-border font-mono text-caption text-text-tertiary">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5">
            <Link href="/orlando-social-media-agency" className="hover:text-text-primary transition-colors">
              Orlando Social Media Agency
            </Link>
            <Link href="/franchise-social-media-agency" className="hover:text-text-primary transition-colors">
              Franchise Social Media Agency
            </Link>
            <Link href="/fractional-cmo" className="hover:text-text-primary transition-colors">
              Fractional CMO
            </Link>
            <Link href="/fractional-cmo-orlando" className="hover:text-text-primary transition-colors">
              Fractional CMO Orlando
            </Link>
            <Link href="/social-media-marketing-agency-florida" className="hover:text-text-primary transition-colors">
              Florida Social Media Agency
            </Link>
            <Link href="/hospitality-social-media-agency" className="hover:text-text-primary transition-colors">
              Hospitality Social Media Agency
            </Link>
            <Link href="/wine-social-media-marketing-agency" className="hover:text-text-primary transition-colors">
              Wine &amp; Spirits Social Media Agency
            </Link>
            <Link href="/press" className="hover:text-text-primary transition-colors">
              Press
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>© 2026 Fifty &amp; Five LLC · Orlando, FL</div>
            <div>Senior + AI · Since 2008 · 222 brands across 5 continents · Most clients 3+ years · The agency built for the next decade.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
