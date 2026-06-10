import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "./ui/Link";
import { MotionCard } from "./ui/motion";
import { slideInLeft, slideInRight, defaultViewport } from "@/lib/motion";

const founderImg = "https://i.ibb.co/fVZT5FCD/2c4779bd-eb40-4305-bfac-2363462551fb.jpg";

export const Founder = () => {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section
      aria-labelledby="founder-heading"
      className="w-full max-w-[1440px] mx-auto bg-[#0F172A] relative"
    >
      <MotionCard
        glass="dark"
        noHover
        className="flex flex-col md:flex-row h-auto md:h-[500px] overflow-hidden rounded-none"
      >
        {/* Left: Image — slide in from the left */}
        <motion.div
          className="w-full md:w-1/2 relative h-[400px] md:h-full"
          variants={slideInLeft}
          initial={initial}
          whileInView="visible"
          viewport={defaultViewport}
        >
          <img
            src={founderImg}
            alt="Ahmed Hossam Mido"
            className="w-full h-full object-cover object-top"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[#16A34A]/20 mix-blend-multiply" />
        </motion.div>

        {/* Right: Content — slide in from the right */}
        <motion.div
          className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-[#0F172A]"
          variants={slideInRight}
          initial={initial}
          whileInView="visible"
          viewport={defaultViewport}
        >
          <span
            id="founder-heading"
            className="text-[#16A34A] font-bold text-sm tracking-widest uppercase mb-6"
          >
            From The Founder
          </span>

          <blockquote className="text-white text-2xl md:text-[32px] italic leading-relaxed font-light mb-8">
            "I had all the talent but I wasn't listening. The Maker exists so
            the next generation won't make my mistakes."
          </blockquote>

          <div className="mt-auto">
            <div className="text-[#16A34A] font-bold text-lg">
              — Ahmed Hossam 'Mido'
            </div>
            <div className="text-white/70 text-sm mt-1 mb-6">
              Former Ajax, Roma & Tottenham • Founder, The Maker
            </div>

            <NavLink
              to="/about"
              className="inline-flex items-center text-[#16A34A] hover:text-white transition-colors group"
            >
              Read Mido's Full Story
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </NavLink>
          </div>
        </motion.div>
      </MotionCard>
    </section>
  );
};
