import { forwardRef, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/motion";

export interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** ARIA label for the section. Use this OR ariaLabelledby. */
  ariaLabel?: string;
  /** ID of the heading that labels this section. Preferred over ariaLabel. */
  ariaLabelledby?: string;
  /** framer-motion variants. Defaults to fadeUp. */
  variants?: Variants;
  /** Fraction of section visible before triggering. Default 0.2. */
  amount?: number;
  /** Animate only on first enter. Default true. */
  once?: boolean;
  /** Role override. Defaults to native <section>. */
  role?: string;
}

/**
 * Scroll-triggered animated <section>. Drop-in replacement for `<section>` that
 * fades up its contents as it enters the viewport. Respects
 * `prefers-reduced-motion` — when reduced motion is active, renders a plain
 * section with no animation (children appear at final state immediately).
 */
export const MotionSection = forwardRef<HTMLElement, MotionSectionProps>(
  function MotionSection(
    {
      children,
      className,
      id,
      ariaLabel,
      ariaLabelledby,
      variants = fadeUp,
      amount = defaultViewport.amount,
      once = defaultViewport.once,
      role,
    },
    ref,
  ) {
    const reduced = useReducedMotion();

    if (reduced) {
      return (
        <section
          ref={ref}
          id={id}
          className={className}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          role={role}
        >
          {children}
        </section>
      );
    }

    return (
      <motion.section
        ref={ref}
        id={id}
        className={className}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        role={role}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
      >
        {children}
      </motion.section>
    );
  },
);
