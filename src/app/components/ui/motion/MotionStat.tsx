import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export interface MotionStatProps {
  /** Target final value. */
  value: number;
  /** Optional prefix (e.g., "$" or "+"). */
  prefix?: string;
  /** Optional suffix (e.g., "%", "+", "K"). */
  suffix?: string;
  /** Count-up duration in ms. Default 1600. */
  duration?: number;
  /** Decimal places to format. Default 0. */
  decimals?: number;
  /** Accessible label describing the stat — required for SR. */
  label: string;
  /** Visible className for the numeric span. */
  className?: string;
  /** Visible className for the label. Pass empty string to hide visually. */
  labelClassName?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function formatNumber(n: number, decimals: number) {
  return n.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Animated number counter that starts when scrolled into view. Uses
 * Intersection Observer (via framer-motion's useInView) and
 * requestAnimationFrame with ease-out cubic. Respects
 * `prefers-reduced-motion` (jumps directly to final value).
 *
 * Includes a visually-hidden label so screen readers always get full context.
 */
export function MotionStat({
  value,
  prefix = "",
  suffix = "",
  duration = 1600,
  decimals = 0,
  label,
  className = "",
  labelClassName = "",
}: MotionStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      setDisplay(value * easeOutCubic(t));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduced]);

  return (
    <span ref={ref} className="inline-flex flex-col items-baseline">
      <span className={className} aria-hidden="true">
        {prefix}
        {formatNumber(display, decimals)}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {formatNumber(value, decimals)}
        {suffix} {label}
      </span>
      {labelClassName !== "" && (
        <span aria-hidden="true" className={labelClassName}>
          {label}
        </span>
      )}
    </span>
  );
}
