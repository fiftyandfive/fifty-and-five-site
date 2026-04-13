import Script from 'next/script';

export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  return (
    <Script
      strategy="afterInteractive"
      src="https://plausible.io/js/script.tagged-events.outbound-links.js"
      data-domain={domain}
    />
  );
}

// Helper for firing custom Plausible events from client components
export function trackEvent(name: string, props?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined') return;
  const p = (window as unknown as { plausible?: (n: string, o?: { props?: object }) => void })
    .plausible;
  p?.(name, props ? { props } : undefined);
}
