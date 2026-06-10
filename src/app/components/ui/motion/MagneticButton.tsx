import {
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface MagneticButtonProps {
  /** A single interactive child (Button, Link, anchor). */
  children: ReactNode;
  /** Max pixel offset on either axis. Default 6 (subtle). */
  strength?: number;
  /** className for the wrapper (inline-block by default). */
  className?: string;
}

/**
 * Subtle magnetic-hover wrapper. The wrapped child translates a few pixels
 * toward the cursor while it hovers, then springs back on leave. Use on
 * primary CTAs to add tactile polish.
 *
 * DOES NOT replace your Button — wrap it:
 *
 *   <MagneticButton>
 *     <Button as="a" href="/apply">Apply</Button>
 *   </MagneticButton>
 *
 * Respects `prefers-reduced-motion` — renders an inert wrapper with no motion.
 */
export function MagneticButton({
  children,
  strength = 6,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (reduced || !ref.current) return;
    // Only react to mouse / pen — let touch fall through to native press.
    if (e.pointerType === "touch") return;

    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setOffset({
      x: Math.max(-1, Math.min(1, dx)) * strength,
      y: Math.max(-1, Math.min(1, dy)) * strength,
    });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const style: CSSProperties = { display: "inline-block" };

  if (reduced) {
    return (
      <span className={className} style={style}>
        {children}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={className}
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <motion.span
        style={{ display: "inline-block" }}
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      >
        {children}
      </motion.span>
    </span>
  );
}
