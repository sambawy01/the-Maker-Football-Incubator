import type { CSSProperties, ReactNode } from "react";

export interface MarqueeStripProps {
  children: ReactNode;
  /** Pixels per second. Default 50. */
  speed?: number;
  /** Scroll direction. Default "left". */
  direction?: "left" | "right";
  /** Pause on hover. Default true. */
  pauseOnHover?: boolean;
  /** Optional gap between repeating groups, e.g. "2rem". Default "2rem". */
  gap?: string;
  /** className for the outer wrapper (height, padding, edge fade, etc.). */
  className?: string;
  /** Set true to fade the left/right edges with a mask gradient. Default true. */
  fadeEdges?: boolean;
  /** Accessible label for the strip — required (logos, testimonials, etc.). */
  ariaLabel: string;
}

/**
 * Infinite horizontal marquee. Pure CSS (no JS) for continuous animation —
 * much more performant than framer-motion for this case. Duplicates content
 * twice so the loop is seamless.
 *
 * Respects `prefers-reduced-motion` via the global media-query guard in
 * theme.css — the `marquee` animation gets duration: 0.01ms and falls static.
 *
 * Mark the consuming `<section>` with role="region" if it carries meaning;
 * decorative marquees should set `ariaLabel` to a short descriptor.
 */
export function MarqueeStrip({
  children,
  speed = 50,
  direction = "left",
  pauseOnHover = true,
  gap = "2rem",
  className = "",
  fadeEdges = true,
  ariaLabel,
}: MarqueeStripProps) {
  // We render the children twice. Track approximate duration via a CSS
  // variable so consumers can tune speed without touching keyframes.
  // duration = (distance / speed). We translate -50% so a single group
  // distance ~= 50% of the doubled-content row width. Without measuring DOM
  // we use the CSS var as a knob; ~30s for 1500px row at 50px/s.
  const durationS = Math.max(8, 1500 / speed);

  const style: CSSProperties = {
    // CSS vars consumed by motion.css
    ["--marquee-duration" as string]: `${durationS}s`,
    ["--marquee-gap" as string]: gap,
    ["--marquee-direction" as string]: direction === "left" ? "normal" : "reverse",
  };

  const mask = fadeEdges
    ? {
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
      }
    : undefined;

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={`marquee-strip overflow-hidden ${pauseOnHover ? "marquee-pause-on-hover" : ""} ${className}`}
      style={{ ...style, ...mask }}
    >
      <div className="marquee-track" aria-hidden="false">
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
