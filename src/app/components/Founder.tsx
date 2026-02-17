import React from "react";
import { ArrowRight } from "lucide-react";
const founderImg = "https://i.ibb.co/fVZT5FCD/2c4779bd-eb40-4305-bfac-2363462551fb.jpg";

export const Founder = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#0F172A] relative">
      <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-full">
          <img
            src={founderImg}
            alt="Ahmed Hossam Mido"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-[#16A34A]/20 mix-blend-multiply" />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-[#0F172A]">
          <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase mb-6">
            From The Founder
          </span>
          
          <blockquote className="text-white text-2xl md:text-[32px] italic leading-relaxed font-light mb-8">
            "I had all the talent but I wasn’t listening. The Maker exists so the next generation won’t make my mistakes."
          </blockquote>

          <div className="mt-auto">
            <div className="text-[#16A34A] font-bold text-lg">
              — Ahmed Hossam ‘Mido’
            </div>
            <div className="text-white/50 text-sm mt-1 mb-6">
              Former Ajax, Roma & Tottenham • Founder, The Maker
            </div>
            
            <a href="#" className="inline-flex items-center text-[#16A34A] hover:text-white transition-colors group">
              Read Mido’s Full Story 
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
