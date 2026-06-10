import React from "react";
import { Button } from "../../components/ui/Button";
import { ShieldCheck } from "lucide-react";

/**
 * ScoutsHero — full-bleed dark hero with action photo, eyebrow tag,
 * dual CTA (anchors to in-page sections), and a trust strip.
 *
 * The CTAs are anchor-only (smooth scroll within /scouts), so we use
 * native <a href="#..."> rather than the router <Link>.
 */
export const ScoutsHero: React.FC = () => {
  return (
    <section
      aria-labelledby="scouts-hero-heading"
      className="relative w-full min-h-[640px] md:min-h-[720px] flex items-center overflow-hidden bg-[#0F172A]"
    >
      {/* Background image: stable Unsplash football scouting photo. */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1920&q=70"
          srcSet="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=800&q=70 800w, https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1280&q=70 1280w, https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1920&q=70 1920w"
          sizes="100vw"
          alt="Youth footballers in training under floodlights"
          width={1920}
          height={1280}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay + green accent gradient for legibility and brand. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 text-[#16A34A] font-bold text-xs md:text-sm tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full bg-[#16A34A]/10 border border-[#16A34A]/30">
            <ShieldCheck size={14} aria-hidden="true" />
            For Scouts, Recruiters & Academy Directors
          </span>

          <h1
            id="scouts-hero-heading"
            className="text-white text-4xl md:text-6xl font-bold leading-tight mb-5"
          >
            Discover Egypt's Next{" "}
            <span className="text-[#16A34A]">European-Bound</span> Talent
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-9 leading-relaxed font-light">
            Credentialed scout access to The Maker's 110+ scholars, identified
            from over 100,000 trialists across 16 Egyptian governorates.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <a href="#request-access" aria-label="Jump to request scout access form">
              <Button variant="primary" size="lg">
                Request Scout Access
              </Button>
            </a>
            <a href="#pipeline" aria-label="Jump to active player pipeline">
              <Button variant="outline-white" size="lg">
                View Active Pipeline
              </Button>
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-white/70">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoutsHero;
