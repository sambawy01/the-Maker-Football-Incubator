import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { ShieldCheck } from "lucide-react";
import {
  GradientMesh,
  GrainOverlay,
  MagneticButton,
} from "../../components/ui/motion";
import { fadeUp, staggerSlow } from "../../../lib/motion";

/**
 * ScoutsHero — full-bleed dark hero with a brand-gradient + subtle dot pattern
 * background (no external photo), an eyebrow tag, dual CTAs (anchor-only
 * smooth scroll within /scouts), and a trust strip.
 *
 * The CTAs use Button polymorphism (as="a") so the rendered markup is a
 * single <a> — never <a><button> — which keeps the interactive tree valid
 * for screen readers and keyboard users.
 *
 * Motion: layered GradientMesh + GrainOverlay on top of the existing dark
 * gradient + dot grid for tech-modernity polish. Headline lines and CTAs
 * fade-up with a slow stagger on load. Primary CTA wrapped in
 * MagneticButton for tactile hover. All primitives respect
 * prefers-reduced-motion.
 */
export const ScoutsHero: React.FC = () => {
  const reduced = useReducedMotion();
  return (
    <motion.section
      aria-labelledby="scouts-hero-heading"
      className="relative w-full min-h-[640px] md:min-h-[720px] flex items-center overflow-hidden bg-[#0F172A]"
      initial={reduced ? "visible" : "hidden"}
      animate="visible"
      variants={staggerSlow}
    >
      {/* Brand-green to slate gradient + subtle dot grid. Local, no network
          fetch, no LCP risk, no privacy leak from hot-linked Unsplash. */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #0F172A 0%, #15803D 100%)",
          }}
        />
        {/* Low-opacity dot grid for texture. */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Tech ambience — animated mesh layered subtly over the base gradient. */}
        <GradientMesh variant="green-slate" animate opacity={0.45} />
        {/* Filmic grain for texture. */}
        <GrainOverlay opacity={0.04} />
        {/* Vignette overlay for left-side legibility. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30"
          >
            <ShieldCheck size={14} aria-hidden="true" />
            For Scouts, Recruiters & Academy Directors
          </motion.span>

          <h1
            id="scouts-hero-heading"
            className="text-white text-4xl md:text-6xl font-bold leading-tight mb-5"
          >
            <motion.span variants={fadeUp} className="block">
              Discover Egypt's Next
            </motion.span>
            <motion.span variants={fadeUp} className="block">
              <span className="text-[#16A34A]">European-Bound</span> Talent
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="text-white/90 text-lg md:text-xl max-w-2xl mb-9 leading-relaxed font-light"
          >
            Credentialed scout access to The Maker's 110+ scholars, identified
            from over 100,000 trialists across 16 Egyptian governorates.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 md:gap-4">
            <MagneticButton>
              <Button
                as="a"
                href="#request-access"
                variant="primary"
                size="lg"
                aria-label="Jump to request scout access form"
              >
                Request Scout Access
              </Button>
            </MagneticButton>
            <Button
              as="a"
              href="#pipeline"
              variant="outline-white"
              size="lg"
              aria-label="Jump to active player pipeline"
            >
              View Active Pipeline
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-white/70"
          >
            <span className="font-bold uppercase tracking-wider text-white/50">
              Trusted by
            </span>
            <span className="text-white font-bold">Enosis Paralimni</span>
            <span aria-hidden="true" className="text-white/30">
              ·
            </span>
            <span className="text-white font-bold">SC Farense</span>
            <span aria-hidden="true" className="text-white/30">
              ·
            </span>
            <span>100,000+ trials reviewed</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ScoutsHero;
