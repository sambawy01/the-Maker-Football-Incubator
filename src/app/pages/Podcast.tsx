import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SEO } from "../components/SEO";
import { breadcrumbJsonLd } from "../../lib/jsonld";
import {
  MotionSection,
  MarqueeStrip,
  GradientMesh,
  GrainOverlay,
} from "@/app/components/ui/motion";
import { fadeUp, fadeUpSm, stagger, scaleIn, useReducedMotion } from "@/lib/motion";

export const Podcast = () => {
  const reduced = useReducedMotion();

  const episodes = [
    { id: 1, guest: "Guest Name Here", teaser: "A deep dive into the career of..." },
    { id: 2, guest: "Guest Name Here", teaser: "A deep dive into the career of..." },
    { id: 3, guest: "Guest Name Here", teaser: "A deep dive into the career of..." },
  ];

  const marqueeTopics = [
    "Loyalty & Passion",
    "From Cairo to Europe",
    "The Scout's Eye",
    "Inside the Academy",
    "Coaching Philosophy",
    "Stories Untold",
    "Mido on Mentorship",
    "Egyptian Football's Future",
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#1E293B]">
        <SEO
          path="/podcast"
          title="Podcast — The Maker"
          description="Authentic stories from the heart of Egyptian football. The Maker Podcast, hosted by Mido and Yousra El Leithy."
          jsonLd={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Podcast", path: "/podcast" },
          ])}
        />
        <section
          aria-labelledby="podcast-hero-heading"
          className="relative overflow-hidden"
        >
            <GradientMesh variant="green-slate" opacity={0.55} />
            <GrainOverlay opacity={0.05} />
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 text-white">
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <motion.div
                      initial={reduced ? false : "hidden"}
                      animate="visible"
                      variants={fadeUp}
                      className="w-full md:w-1/2"
                    >
                        <span className="text-[#D97706] font-bold tracking-widest uppercase mb-2 block">The Maker Podcast</span>
                        <h1 id="podcast-hero-heading" className="text-5xl font-bold mb-6">Authentic stories from the heart of Egyptian football.</h1>
                        <p className="text-gray-400 text-lg mb-8">Hosted by Mido &amp; Yousra El Leithy.</p>
                        <div className="flex gap-4">
                            <motion.button
                                whileHover={reduced ? undefined : { scale: 1.03 }}
                                whileTap={reduced ? undefined : { scale: 0.98 }}
                                className="bg-white text-[#0F172A] px-6 py-3 rounded-full font-bold flex items-center gap-2"
                            >
                                <Play size={20} fill="currentColor" /> Watch Latest Episode
                            </motion.button>
                        </div>
                    </motion.div>
                    <motion.div
                      initial={reduced ? false : "hidden"}
                      animate="visible"
                      variants={scaleIn}
                      className="w-full md:w-1/2"
                    >
                        <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-sm">
                            <span className="text-gray-500">Featured Episode Thumbnail</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Topic marquee */}
        <div className="border-y border-white/10 bg-black/20">
            <MarqueeStrip
                ariaLabel="Podcast episode topics"
                speed={45}
                className="py-6 text-white/70"
                gap="3rem"
            >
                {marqueeTopics.map((t) => (
                    <span
                        key={t}
                        className="text-sm md:text-base font-semibold tracking-widest uppercase flex items-center gap-12 whitespace-nowrap"
                    >
                        {t}
                        <span aria-hidden="true" className="text-[#16A34A]">●</span>
                    </span>
                ))}
            </MarqueeStrip>
        </div>

        <MotionSection ariaLabelledby="episode-list-heading" className="max-w-7xl mx-auto px-4 py-16 text-white">
            <h2 id="episode-list-heading" className="text-2xl font-bold mb-8">Recent Episodes</h2>
            <motion.div
                variants={stagger}
                initial={reduced ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {episodes.map((ep) => (
                    <motion.div
                        key={ep.id}
                        variants={fadeUpSm}
                        whileHover={reduced ? undefined : { y: -4 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden group hover:border-[#16A34A] transition-colors"
                    >
                        <div className="aspect-video bg-black/30 relative">
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                <Play size={48} className="text-white" fill="currentColor" />
                             </div>
                        </div>
                        <div className="p-4">
                            <div className="text-[#D97706] text-xs font-bold mb-1">Episode {ep.id}</div>
                            <h3 className="font-bold text-lg mb-2">{ep.guest}</h3>
                            <div className="text-gray-400 text-sm">{ep.teaser}</div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </MotionSection>
    </div>
  );
};
