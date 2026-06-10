export interface GrainOverlayProps {
  /** Opacity 0–1. Default 0.03. */
  opacity?: number;
  /** className applied to the absolute-positioned overlay. */
  className?: string;
  /** Blend mode. Defaults to "overlay" for natural film grain feel. */
  blendMode?: "overlay" | "soft-light" | "multiply" | "normal";
}

/**
 * Subtle SVG film-grain overlay. Mount inside a `relative` parent. Pointer
 * events disabled so it never blocks clicks. Aria-hidden.
 *
 * Pure SVG noise filter — no JS, no animation — so reduced-motion is a no-op.
 */
export function GrainOverlay({
  opacity = 0.03,
  className = "",
  blendMode = "overlay",
}: GrainOverlayProps) {
  // Inline SVG noise via fractalNoise turbulence. The filter renders once;
  // the browser tiles the resulting raster as a CSS background image.
  // baseFrequency 0.9 = fine grain, numOctaves 2 = soft.
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>`;
  const url = `data:image/svg+xml;utf8,${svg.replace(/#/g, "%23")}`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `url("${url}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
        opacity,
        mixBlendMode: blendMode,
      }}
    />
  );
}
