/**
 * Motion primitives barrel. Import from here in page components:
 *
 *   import {
 *     MotionSection, MotionCard, MotionStat,
 *     MarqueeStrip, GradientMesh, GrainOverlay,
 *     MagneticButton, ScrollProgress, AnimatedUnderline,
 *   } from "@/app/components/ui/motion";
 *
 * Shared variants live in `@/lib/motion` (fadeUp, stagger, scaleIn, …).
 *
 * Each primitive respects `prefers-reduced-motion`. See README.md for
 * per-component prop docs + usage examples.
 */
export { MotionSection } from "./MotionSection";
export type { MotionSectionProps } from "./MotionSection";

export { MotionCard } from "./MotionCard";
export type { MotionCardProps } from "./MotionCard";

export { MotionStat } from "./MotionStat";
export type { MotionStatProps } from "./MotionStat";

export { MarqueeStrip } from "./MarqueeStrip";
export type { MarqueeStripProps } from "./MarqueeStrip";

export { GradientMesh } from "./GradientMesh";
export type { GradientMeshProps } from "./GradientMesh";

export { GrainOverlay } from "./GrainOverlay";
export type { GrainOverlayProps } from "./GrainOverlay";

export { MagneticButton } from "./MagneticButton";
export type { MagneticButtonProps } from "./MagneticButton";

export { ScrollProgress } from "./ScrollProgress";
export type { ScrollProgressProps } from "./ScrollProgress";

export { AnimatedUnderline } from "./AnimatedUnderline";
export type { AnimatedUnderlineProps } from "./AnimatedUnderline";
