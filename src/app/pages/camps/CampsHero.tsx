import React from "react";
import { Button } from "../../components/ui/Button";
import { Flame } from "lucide-react";

/**
 * CampsHero — full-bleed dark hero with the same brand-gradient + dot pattern
 * we shipped on /scouts. No external photo (no LCP risk, no privacy leak),
 * eyebrow chip, dual CTAs anchored to #register and #upcoming-camps, and a
 * trust strip aimed at parents (Cairo HQ, limited spots, nutrition + gear
 * included).
 *
 * CTAs use Button polymorphism (as="a") so the rendered markup is a single
 * <a> — preserving valid interactive tree semantics for AT.
 */
export const CampsHero: React.FC = () => {
  return (
    <section
      aria-labelledby="camps-hero-heading"
      className="relative w-full min-h-[640px] md:min-h-[720px] flex items-center overflow-hidden bg-[#0F172A]"
    >
      {/* Brand-green to slate gradient + low-opacity dot grid. */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #0F172A 0%, #15803D 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            <Flame size={14} aria-hidden="true" />
            For players aged 10 to 18
          </span>

          <h1
            id="camps-hero-heading"
            className="text-white text-4xl md:text-6xl font-bold leading-tight mb-5"
          >
            Train Like the Pros{" "}
            <span className="text-[#16A34A]">This Season</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-9 leading-relaxed font-light">
            Elite-coached football camps for committed players across Egypt.
            Winter, summer, and international programmes designed by Mido's
            incubator staff.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <Button
              as="a"
              href="#register"
              variant="primary"
              size="lg"
              aria-label="Jump to the camp application form"
            >
              Apply for a Camp
            </Button>
            <Button
              as="a"
              href="#upcoming-camps"
              variant="outline-white"
              size="lg"
              aria-label="Jump to upcoming camp dates"
            >
              See Upcoming Dates
            </Button>
          </div>

          {/* Trust strip — parent-relevant signals (location, scarcity, value). */}
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-white/70">
            <span className="font-bold uppercase tracking-wider text-white/50">
              Trusted by Egyptian parents
            </span>
            <span className="text-white font-bold">Cairo HQ</span>
            <span aria-hidden="true" className="text-white/30">
              ·
            </span>
            <span>Limited spots per camp</span>
            <span aria-hidden="true" className="text-white/30">
              ·
            </span>
            <span>Full nutrition &amp; gear included</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampsHero;
