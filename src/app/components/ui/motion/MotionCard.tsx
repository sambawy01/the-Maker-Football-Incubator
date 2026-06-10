import { forwardRef, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/motion";

export interface MotionCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
  /** framer-motion variants. Defaults to fadeUp. */
  variants?: Variants;
  /** Fraction visible before triggering. Default 0.2. */
  amount?: number;
  /** Animate only on first enter. Default true. */
  once?: boolean;
  /** Add glass-morphism styling. Use `glass="dark"` on dark surfaces. */
  glass?: false | "light" | "dark";
  /** Disable the hover lift micro-interaction. Default false. */
  noHover?: boolean;
  /** Render as a different tag — useful for <li> / <article>. */
  as?: "div" | "article" | "li" | "section";
}

const glassClasses = {
  light:
    "backdrop-blur-xl bg-white/60 border border-white/40 shadow-[0_8px_32px_rgba(15,23,42,0.06)]",
  dark: "backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
} as const;

/**
 * Animated card wrapper. Fades up on scroll-in (like MotionSection) and adds
 * a subtle hover lift (-4px) for a tactile feel. Optionally adds glass
 * morphism. Respects `prefers-reduced-motion`.
 */
export const MotionCard = forwardRef<HTMLDivElement, MotionCardProps>(
  function MotionCard(
    {
      children,
      className,
      id,
      ariaLabel,
      variants = fadeUp,
      amount = defaultViewport.amount,
      once = defaultViewport.once,
      glass = false,
      noHover = false,
      as = "div",
    },
    ref,
  ) {
    const reduced = useReducedMotion();
    const glassCls = glass ? ` ${glassClasses[glass]}` : "";
    const composed = (className ?? "") + glassCls;

    const Tag = motion[as] as typeof motion.div;
    const PlainTag = as;

    if (reduced) {
      return (
        // @ts-expect-error -- runtime narrowing of `as` for plain element
        <PlainTag ref={ref} id={id} className={composed} aria-label={ariaLabel}>
          {children}
        </PlainTag>
      );
    }

    return (
      <Tag
        ref={ref}
        id={id}
        className={composed}
        aria-label={ariaLabel}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        whileHover={noHover ? undefined : { y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {children}
      </Tag>
    );
  },
);
