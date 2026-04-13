export function ScrollIndicator() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-tertiary"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
      <svg
        className="animate-chevron-pulse"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
