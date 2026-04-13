import Link from 'next/link';
import { FOOTER_VERTICALS, NAV_LINKS, SITE } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="relative bg-bg-secondary border-t border-glass-border mt-32">
      <div className="container-edge py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-serif text-[28px] tracking-[-0.03em] text-text-primary lowercase"
            >
              {SITE.wordmark}
            </Link>
            <p className="mt-4 text-meta text-text-secondary max-w-[220px]">{SITE.tagline}</p>
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

        <div className="mt-14 pt-6 border-t border-glass-border flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-caption text-text-tertiary">
          <div>© 2026 Fifty &amp; Five LLC</div>
          <div>Built on too many glasses of wine and 18 years of strong opinions.</div>
        </div>
      </div>
    </footer>
  );
}
