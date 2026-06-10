import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { Link } from "./ui/Link";
import { Play } from "lucide-react";

// Responsive hero image variants.
import hero400 from "../../assets/hero-team-400.jpg";
import hero800 from "../../assets/hero-team-800.jpg";
import hero1280 from "../../assets/hero-team-1280.jpg";
import hero1920 from "../../assets/hero-team-1920.jpg";
import hero400Webp from "../../assets/hero-team-400.webp";
import hero800Webp from "../../assets/hero-team-800.webp";
import hero1280Webp from "../../assets/hero-team-1280.webp";
import hero1920Webp from "../../assets/hero-team-1920.webp";

// Final saturation targets for the count-up. Kept identical to the previous
// behavior so the visual end-state is unchanged.
const TARGETS = {
  scholars: 110,
  cities: 16,
  trials: 100000,
  pillars: 4,
  partners: 2,
  mission: 1,
} as const;

const ZERO_COUNTS = {
  scholars: 0,
  cities: 0,
  trials: 0,
  pillars: 0,
  partners: 0,
  mission: 0,
};

// Ease-out cubic.
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const DURATION_MS = 1500;

export const Hero = () => {
  const [counts, setCounts] = useState(ZERO_COUNTS);

  useEffect(() => {
    // Respect reduced-motion: jump straight to final values, no RAF.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setCounts({ ...TARGETS });
      return;
    }

    let rafId = 0;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start;
      const t = Math.min(elapsed / DURATION_MS, 1);
      const e = easeOutCubic(t);

      setCounts({
        scholars: Math.round(TARGETS.scholars * e),
        cities: Math.round(TARGETS.cities * e),
        trials: Math.round(TARGETS.trials * e),
        pillars: Math.round(TARGETS.pillars * e),
        partners: Math.round(TARGETS.partners * e),
        mission: Math.round(TARGETS.mission * e),
      });

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        // Snap to exact targets to avoid any rounding drift.
        setCounts({ ...TARGETS });
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            type="image/webp"
            srcSet={`${hero400Webp} 400w, ${hero800Webp} 800w, ${hero1280Webp} 1280w, ${hero1920Webp} 1920w`}
            sizes="100vw"
          />
          <img
            src={hero1920}
            srcSet={`${hero400} 400w, ${hero800} 800w, ${hero1280} 1280w, ${hero1920} 1920w`}
            sizes="100vw"
            alt="The Maker Football Incubator players training"
            width={1920}
            height={1281}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col justify-center h-full pt-20">
        <div className="max-w-3xl">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block mb-2">WE DON'T JUST TRAIN PLAYERS.</span>
            <span className="block text-[#16A34A]">WE BUILD FUTURES.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
            Egypt's first homegrown football incubator. Scouting talent from 16 cities. A talent-first incubator system offering full scholarships to high-potential players regardless of financial background.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/programme"><Button variant="primary" size="lg">
              DISCOVER OUR PROGRAMME
            </Button></Link>
            <Button variant="outline-white" size="lg" className="group">
              <Play size={20} className="mr-2 fill-current" /> WATCH OUR STORY
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-8 left-4 right-4 md:left-8 md:right-8">
            <div className="bg-[#1E293B]/90 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl overflow-x-auto">
                <div className="flex justify-between items-center min-w-[800px] gap-8">
                    <div className="flex flex-col items-center">
                        <span className="text-[#D97706] font-mono text-3xl font-bold">{counts.scholars}+</span>
                        <span className="text-white text-sm uppercase tracking-wider">Scholars</span>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-[#D97706] font-mono text-3xl font-bold">{counts.cities}</span>
                        <span className="text-white text-sm uppercase tracking-wider">Cities</span>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-[#D97706] font-mono text-3xl font-bold">{(counts.trials/1000).toFixed(0)}k+</span>
                        <span className="text-white text-sm uppercase tracking-wider">Trials</span>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-[#D97706] font-mono text-3xl font-bold">{counts.pillars}</span>
                        <span className="text-white text-sm uppercase tracking-wider">Pillars</span>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-[#D97706] font-mono text-3xl font-bold">{counts.partners}</span>
                        <span className="text-white text-sm uppercase tracking-wider">European Partners</span>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-[#D97706] font-mono text-3xl font-bold">{counts.mission}</span>
                        <span className="text-white text-sm uppercase tracking-wider">Mission</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
