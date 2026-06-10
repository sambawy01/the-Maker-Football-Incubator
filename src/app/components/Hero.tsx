import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui/Button";
import { Play } from "lucide-react";
import {
  GradientMesh,
  GrainOverlay,
  MagneticButton,
  MotionStat,
} from "./ui/motion";
import { fadeUp, staggerSlow } from "@/lib/motion";

// Responsive hero image variants.
import hero400 from "../../assets/hero-team-400.jpg";
import hero800 from "../../assets/hero-team-800.jpg";
import hero1280 from "../../assets/hero-team-1280.jpg";
import hero1920 from "../../assets/hero-team-1920.jpg";
import hero400Webp from "../../assets/hero-team-400.webp";
import hero800Webp from "../../assets/hero-team-800.webp";
import hero1280Webp from "../../assets/hero-team-1280.webp";
import hero1920Webp from "../../assets/hero-team-1920.webp";

export const Hero = () => {
  const reduced = useReducedMotion();

  // Hero is above-the-fold — animate on mount, not on scroll.
  const initial = reduced ? "visible" : "hidden";
  const animate = "visible";

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0F172A]"
    >
      {/* Background Image — preserve LCP <picture> + srcset + fetchpriority. */}
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

        {/* Animated gradient mesh sits between the image and the dark overlay. */}
        <GradientMesh variant="green-slate" animate opacity={0.55} />

        {/* Film grain over the mesh for filmic texture. */}
        <GrainOverlay opacity={0.03} />

        {/* Existing dark gradient overlay — preserves legibility on the left. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col justify-center h-full pt-20">
        <motion.div
          className="max-w-3xl"
          variants={staggerSlow}
          initial={initial}
          animate={animate}
        >
          <h1
            id="hero-heading"
            className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <motion.span className="block mb-2" variants={fadeUp}>
              WE DON'T JUST TRAIN PLAYERS.
            </motion.span>
            <motion.span
              className="block text-[#16A34A]"
              variants={fadeUp}
            >
              WE BUILD FUTURES.
            </motion.span>
          </h1>
          <motion.p
            className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light"
            variants={fadeUp}
          >
            Egypt's first homegrown football incubator. Scouting talent from 16
            cities. A talent-first incubator system offering full scholarships
            to high-potential players regardless of financial background.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={fadeUp}>
            <MagneticButton>
              <Button as="a" href="/programme" variant="primary" size="lg">
                DISCOVER OUR PROGRAMME
              </Button>
            </MagneticButton>
            <Button variant="outline-white" size="lg" className="group">
              <Play size={20} className="mr-2 fill-current" /> WATCH OUR STORY
            </Button>
          </motion.div>
        </motion.div>

        {/* Glassmorphism Stats Bar */}
        <div className="absolute bottom-8 left-4 right-4 md:left-8 md:right-8">
          <motion.div
            className="rounded-2xl p-6 backdrop-blur-xl bg-white/5 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.35)] overflow-x-auto"
            variants={fadeUp}
            initial={initial}
            animate={animate}
            transition={{ delay: reduced ? 0 : 0.3 }}
          >
            <div className="flex justify-between items-center min-w-[800px] gap-8">
              <div className="flex flex-col items-center">
                <MotionStat
                  value={110}
                  suffix="+"
                  label="Scholars"
                  className="text-[#D97706] font-mono text-3xl font-bold"
                  labelClassName="text-white text-sm uppercase tracking-wider mt-1"
                />
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-center">
                <MotionStat
                  value={16}
                  label="Cities"
                  className="text-[#D97706] font-mono text-3xl font-bold"
                  labelClassName="text-white text-sm uppercase tracking-wider mt-1"
                />
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-center">
                <MotionStat
                  value={100}
                  suffix="k+"
                  label="Trials"
                  className="text-[#D97706] font-mono text-3xl font-bold"
                  labelClassName="text-white text-sm uppercase tracking-wider mt-1"
                />
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-center">
                <MotionStat
                  value={4}
                  label="Pillars"
                  className="text-[#D97706] font-mono text-3xl font-bold"
                  labelClassName="text-white text-sm uppercase tracking-wider mt-1"
                />
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-center">
                <MotionStat
                  value={2}
                  label="European Partners"
                  className="text-[#D97706] font-mono text-3xl font-bold"
                  labelClassName="text-white text-sm uppercase tracking-wider mt-1"
                />
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-center">
                <MotionStat
                  value={1}
                  label="Mission"
                  className="text-[#D97706] font-mono text-3xl font-bold"
                  labelClassName="text-white text-sm uppercase tracking-wider mt-1"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
