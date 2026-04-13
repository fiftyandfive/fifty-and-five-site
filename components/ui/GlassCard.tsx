import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  padded?: boolean;
  interactive?: boolean;
};

export const GlassCard = forwardRef<HTMLDivElement, Props>(function GlassCard(
  { children, className = '', padded = true, interactive = true, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={[
        'glass rounded-glass relative overflow-hidden transition-all duration-300',
        padded ? 'p-8' : '',
        interactive
          ? 'hover:[background:rgba(255,255,255,0.06)] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
});
