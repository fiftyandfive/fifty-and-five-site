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
        'glass rounded-glass relative overflow-hidden transition-colors duration-300',
        padded ? 'p-8' : '',
        interactive
          ? 'hover:border-ink-black'
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
