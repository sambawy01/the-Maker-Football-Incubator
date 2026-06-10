import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

export interface ScrollProgressProps {
  /** className for the fixed bar — override color/height/z-index here. */
  className?: string;
  /** Visual height in px. Default 3. */
  height?: number;
  /** Bar color. Defaults to brand green (#16A34A). */
  color?: string;
}

/**
 * Slim brand-green progress bar fixed at the top of the viewport. Tracks
 * document scroll progress (0 → 1) via framer-motion's `useScroll`.
 *
 * Mount only on long content pages (the consumer decides). Default z-index is
 * 50 — high enough to stay above content but below most modals.
 *
 * Respects `prefers-reduced-motion` — still tracks scroll, but skips the
 * spring smoothing so motion is exactly proportional to scroll position.
 */
export function ScrollProgress({
  className = "",
  height = 3,
  color = "#16A34A",
}: ScrollProgressProps) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Spring-smooth the progress on capable devices; raw value otherwise.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });
  const scaleX = reduced ? scrollYProgress : smooth;

  return (
    <motion.div
      aria-hidden="true"
      className={`fixed inset-x-0 top-0 z-50 origin-left ${className}`}
      style={{
        height,
        background: color,
        scaleX,
      }}
    />
  );
}
