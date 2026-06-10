import React from "react";
import { Button } from "../../components/ui/Button";
import { GraduationCap } from "lucide-react";

/**
 * AcademiesHero — visual hero for the year-round academy programme. Uses
 * the same brand-gradient + dot-grid background we shipped on /scouts and
 * /camps (no third-party CDN photo, no LCP risk, no privacy leak).
 *
 * Dual CTAs both render as <a> via Button polymorphism so the rendered
 * markup is a single anchor — never <a><button> — preserving valid
 * interactive tree semantics for assistive tech.
 */
export const AcademiesHero: React.FC = () => {
  return (
    <section
      aria-labelledby="academies-hero-heading"
      className="relative w-full min-h-[640px] md:min-h-[720px] flex items-center overflow-hidden bg-[#0F172A]"
    >
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
          <span className="inline-flex items-center gap-2 text-[#16A34A] font-bold text-xs md:text-sm tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            <GraduationCap size={14} aria-hidden="true" />
            For Egypt's Committed Young Talent
          </span>

          <h1
            id="academies-hero-heading"
            className="text-white text-4xl md:text-6xl font-bold leading-tight mb-5"
          >
            A Football Academy{" "}
            <span className="text-[#16A34A]">Built to Build Futures</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-9 leading-relaxed font-light">
            Year-round, scholarship-first training, education, nutrition, and
            culture. Designed by Mido for U-10 to U-18 players ready to commit.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <Button
              as="a"
              href="#apply"
              variant="primary"
              size="lg"
              aria-label="Jump to the academy application form"
            >
              Apply to the Academy
            </Button>
            <Button
              as="a"
              href="#pillars"
              variant="outline-white"
              size="lg"
              aria-label="Jump to the four pillars section"
            >
              See the 4 Pillars
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-white/70">
            <span className="font-bold uppercase tracking-wider text-white/50">
              Trusted by Egyptian families
            </span>
            <span className="text-white font-bold">150+ active scholars</span>
            <span aria-hidden="true" className="text-white/30">
              ·
            </span>
            <span>16 governorates</span>
            <span aria-hidden="true" className="text-white/30">
              ·
            </span>
            <span className="text-white font-bold">
              0 cost for selected scholars
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademiesHero;
