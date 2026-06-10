/**
 * Shared motion variants for framer-motion.
 *
 * Use these everywhere so motion feels consistent across the site:
 *
 *   import { fadeUp, stagger } from "@/lib/motion";
 *   <motion.div variants={fadeUp} initial="hidden" animate="visible" />
 *
 * All variants assume the consumer wraps them in a primitive that respects
 * `prefers-reduced-motion`. The primitives in
 * `src/app/components/ui/motion/` already do this — prefer them over raw
 * framer-motion calls.
 */

import type { Variants, Transition } from "framer-motion";
export { useReducedMotion } from "framer-motion";

/** Custom-cubic ease that feels "tech / native" — fast attack, soft settle. */
const easeOutExpo: Transition["ease"] = [0.22, 1, 0.36, 1];

/** Fade up from 24px below. The primary entrance for hero copy & section heads. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

/** Smaller fade-up — useful for in-list items where 24px feels heavy. */
export const fadeUpSm: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

/** Pure fade. Use when y-motion would conflict with sticky / fixed positioning. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Container that staggers its children. Pair with fadeUp on children. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

/** Slower stagger — for hero CTAs / nav reveals where rhythm matters. */
export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

/** Scale-in for cards / dialogs. Subtle — no bouncy spring. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Slide from the left. Use for marquee-style row reveals or LTR step lists. */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

/** Slide from the right. RTL-friendly mirror of slideInLeft. */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

/** Subtle blur-in. Use sparingly — reads as "filmic". */
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/** Hover micro-interaction for cards — lift + subtle shadow growth. */
export const cardHover = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

/**
 * Default viewport config for `whileInView`. Trigger once when 20% visible.
 * Mirror across all primitives so motion feels consistent on scroll.
 */
export const defaultViewport = { once: true, amount: 0.2 } as const;
