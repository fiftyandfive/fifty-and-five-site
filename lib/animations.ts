// Motion variants + spring configs
// Framer Motion rebranded to "motion" — import from 'motion/react'

export const springSnappy = { stiffness: 400, damping: 25, mass: 0.5 };
export const springSmooth = { stiffness: 100, damping: 20, mass: 0.8 };
export const springBouncy = { stiffness: 300, damping: 15, mass: 0.5 };

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease },
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export const staggerChild = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease },
};

export const clipReveal = {
  initial: { clipPath: 'inset(0 50% 0 50%)' },
  animate: { clipPath: 'inset(0 0% 0 0%)' },
  transition: { duration: 1, ease },
};

export const viewportOnce = { once: true, margin: '-10%' } as const;
