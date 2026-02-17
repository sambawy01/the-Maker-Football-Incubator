import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FounderStrip() {
  return (
    <section className="flex flex-col md:flex-row w-full bg-[#0F172A] overflow-hidden">
      {/* Left Image Side */}
      <div className="w-full md:w-1/2 relative h-[500px]">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695619358712-3f19cf62e5df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJpb3VzJTIwZm9vdGJhbGwlMjBjb2FjaCUyHBvcnRyYWl0JTIwZGFyayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcxMzM2MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Ahmed Hossam Mido"
            className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-[#16A34A]/20 mix-blend-multiply z-10" />
        </div>
      </div>

      {/* Right Content Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 md:py-0 bg-[#0F172A] border-t md:border-t-0 border-white/10 relative">
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="text-[#D97706] text-sm font-bold uppercase tracking-widest mb-6">From The Founder</div>
          <blockquote className="text-white text-2xl md:text-3xl italic font-light leading-relaxed mb-8 border-l-4 border-[#16A34A] pl-6">
            “I had all the talent but I wasn’t listening. The Maker exists so the next generation won’t make my mistakes.”
          </blockquote>
          
          <div className="mb-8 pl-6">
            <div className="text-[#16A34A] font-bold text-lg mb-1">— Ahmed Hossam ‘Mido’</div>
            <div className="text-white/40 text-sm font-medium">Former Ajax, Roma & Tottenham • Founder, The Maker</div>
          </div>

          <a href="#" className="text-[#16A34A] font-bold hover:text-white transition-colors flex items-center gap-2 group pl-6">
            Read Mido’s Full Story 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
