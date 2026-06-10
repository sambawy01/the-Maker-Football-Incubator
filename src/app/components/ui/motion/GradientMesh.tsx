import { useReducedMotion } from "framer-motion";

export interface GradientMeshProps {
  /** Mesh palette. Default "green". */
  variant?: "green" | "green-slate" | "slate";
  /** Subtly drift the mesh over time. Default true. */
  animate?: boolean;
  /** className applied to the absolute-positioned mesh container. */
  className?: string;
  /** Opacity 0–1. Default 0.5. */
  opacity?: number;
}

const variantGradients: Record<NonNullable<GradientMeshProps["variant"]>, string> = {
  // Brand greens — #15803D / #16A34A, with slate undertones.
  green: [
    "radial-gradient(circle at 12% 18%, rgba(22, 163, 74, 0.35) 0%, transparent 45%)",
    "radial-gradient(circle at 85% 22%, rgba(21, 128, 61, 0.30) 0%, transparent 50%)",
    "radial-gradient(circle at 50% 78%, rgba(22, 163, 74, 0.22) 0%, transparent 55%)",
    "radial-gradient(circle at 78% 88%, rgba(34, 197, 94, 0.18) 0%, transparent 50%)",
  ].join(", "),
  "green-slate": [
    "radial-gradient(circle at 18% 22%, rgba(22, 163, 74, 0.28) 0%, transparent 50%)",
    "radial-gradient(circle at 82% 18%, rgba(71, 85, 105, 0.30) 0%, transparent 55%)",
    "radial-gradient(circle at 55% 82%, rgba(21, 128, 61, 0.22) 0%, transparent 55%)",
    "radial-gradient(circle at 12% 85%, rgba(30, 41, 59, 0.25) 0%, transparent 50%)",
  ].join(", "),
  slate: [
    "radial-gradient(circle at 20% 20%, rgba(71, 85, 105, 0.28) 0%, transparent 50%)",
    "radial-gradient(circle at 80% 25%, rgba(100, 116, 139, 0.22) 0%, transparent 55%)",
    "radial-gradient(circle at 50% 80%, rgba(30, 41, 59, 0.25) 0%, transparent 55%)",
  ].join(", "),
};

/**
 * Background gradient mesh. Renders an absolute-positioned div with multiple
 * radial gradients composed into a soft "tech ambience" backdrop.
 *
 * Mount inside a `relative` parent. Pointer events are disabled so it never
 * blocks interactive content. Add `aria-hidden` (already set).
 *
 * Respects `prefers-reduced-motion` — `animate` is forced false when reduced.
 */
export function GradientMesh({
  variant = "green",
  animate = true,
  className = "",
  opacity = 0.5,
}: GradientMeshProps) {
  const reduced = useReducedMotion();
  const shouldAnimate = animate && !reduced;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-0 ${shouldAnimate ? "mesh-drift" : ""} ${className}`}
      style={{
        backgroundImage: variantGradients[variant],
        opacity,
      }}
    />
  );
}
