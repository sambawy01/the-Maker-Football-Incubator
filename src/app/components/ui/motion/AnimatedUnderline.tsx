import type { ReactNode } from "react";

export interface AnimatedUnderlineProps {
  children: ReactNode;
  /** className for the wrapper span. */
  className?: string;
  /** Underline color. Default brand green. */
  color?: string;
  /** Underline thickness in px. Default 2. */
  thickness?: number;
}

/**
 * Inline wrapper that draws an animated underline on hover / focus. Pure CSS,
 * no framer-motion. The underline grows from left to right via a
 * background-size transition — works well in RTL too (browser flips).
 *
 * Usage:
 *   <AnimatedUnderline><a href="/about">About</a></AnimatedUnderline>
 *
 * Pair with an actual interactive child (link / button). The underline is
 * decorative; rely on the child's native focus styling for keyboard a11y.
 */
export function AnimatedUnderline({
  children,
  className = "",
  color = "#16A34A",
  thickness = 2,
}: AnimatedUnderlineProps) {
  return (
    <span
      className={`animated-underline ${className}`}
      style={{
        // CSS vars consumed by motion.css
        ["--au-color" as string]: color,
        ["--au-thickness" as string]: `${thickness}px`,
      }}
    >
      {children}
    </span>
  );
}
