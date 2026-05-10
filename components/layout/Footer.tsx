import Link from 'next/link';
import { SITE } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="relative bg-ff-bg border-t border-ff-fade-30 mt-0">
      <div className="container-content py-16 md:py-24 font-receipt text-ff-fade-50">
        <hr className="receipt-divider mb-10" />

        <div className="space-y-1 text-[14px] tracking-[0.02em]">
          <div className="flex justify-between">
            <span>SUBTOTAL</span>
            <span className="receipt-dots">215 brands</span>
          </div>
          <div className="flex justify-between">
            <span>GRATUITY (TIME)</span>
            <span>18 years</span>
          </div>
          <div className="flex justify-between">
            <span>TIP (PATTERNS)</span>
            <span>incalculable</span>
          </div>
        </div>

        <hr className="receipt-divider my-10" />

        <div className="text-center space-y-3">
          <div className="font-receipt text-[16px] uppercase tracking-[0.15em] text-ff-paper">
            THANK YOU FOR YOUR BUSINESS
          </div>
          <div className="font-editorial text-[28px] md:text-[36px] text-ff-paper italic tracking-[-0.01em]">
            That&rsquo;s the receipt.
          </div>
        </div>

        <hr className="receipt-divider my-10" />

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-ff-stamp text-ff-paper font-receipt text-[14px] uppercase tracking-[0.05em] px-8 py-4 rounded hover:opacity-90 transition-opacity"
          >
            {SITE.cta}
          </Link>
        </div>

        <hr className="receipt-divider my-10" />

        <div className="text-center space-y-4 text-[12px] uppercase tracking-[0.12em]">
          <div className="text-ff-fade-50">
            FF &middot; ORLANDO &middot; MMXXVI
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-ff-paper transition-colors"
            >
              {SITE.email}
            </a>
            <span className="text-ff-fade-30">&middot;</span>
            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ff-paper transition-colors"
            >
              LinkedIn ↗
            </a>
            <span className="text-ff-fade-30">&middot;</span>
            <a
              href={SITE.social.clutch}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ff-paper transition-colors"
            >
              Clutch ↗
            </a>
          </div>
        </div>

        <hr className="receipt-divider mt-10" />
      </div>
    </footer>
  );
}
