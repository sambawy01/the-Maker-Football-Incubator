import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";
import { breadcrumbJsonLd } from "../../lib/jsonld";
import {
  MotionSection,
  MotionCard,
  GradientMesh,
  GrainOverlay,
} from "@/app/components/ui/motion";
import { fadeUp, fadeUpSm, stagger, useReducedMotion } from "@/lib/motion";

export const FirstTeam = () => {
  const reduced = useReducedMotion();

  const matches = [
    { id: 1, date: "Oct 5", opponent: "The Maker vs. Team 1", time: "15:00" },
    { id: 2, date: "Oct 10", opponent: "The Maker vs. Team 2", time: "15:00" },
    { id: 3, date: "Oct 15", opponent: "The Maker vs. Team 3", time: "15:00" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
        <SEO
          path="/first-team"
          title="First Team — The Maker"
          description="The Maker First Team — our debut in Egypt's 4th Division. The next step in the journey from scholarship to professional football."
          jsonLd={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "First Team", path: "/first-team" },
          ])}
        />
        {/* Hero */}
        <section
          aria-labelledby="first-team-hero-heading"
          className="relative h-[500px] flex items-center justify-center bg-[#0F172A] overflow-hidden"
        >
            <img
              src="https://i.ibb.co/xqd8CmDp/GIO-5938.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent z-10"></div>
            <GradientMesh variant="green-slate" opacity={0.4} />
            <GrainOverlay opacity={0.05} />
            <motion.div
              initial={reduced ? false : "hidden"}
              animate="visible"
              variants={fadeUp}
              className="relative z-20 text-center px-4"
            >
                <span className="text-[#D97706] font-bold tracking-widest uppercase mb-4 block">A New Era Begins</span>
                <h1 id="first-team-hero-heading" className="text-white text-6xl font-bold mb-4">The Maker First Team</h1>
                <p className="text-white/80 text-xl max-w-2xl mx-auto">Our debut in Egypt’s 4th Division — more than just competition, it’s the next step in our journey.</p>
            </motion.div>
        </section>

        <MotionSection ariaLabelledby="first-team-info-heading" className="max-w-7xl mx-auto px-4 py-20">
            <h2 id="first-team-info-heading" className="sr-only">First Team — schedule and kit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Match Schedule</h2>
                    <motion.div
                        variants={stagger}
                        initial={reduced ? false : "hidden"}
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                        {matches.map((match) => (
                            <motion.div
                                key={match.id}
                                variants={fadeUpSm}
                                className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                            >
                                <div className="text-sm text-gray-500">{match.date}</div>
                                <div className="font-bold text-[#0F172A]">{match.opponent}</div>
                                <div className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{match.time}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Official Kit</h2>
                    <MotionCard className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex items-center justify-center h-[300px]">
                        <span className="text-gray-400">Kit Preview Interactive Display</span>
                    </MotionCard>
                </div>
            </div>
        </MotionSection>
    </div>
  );
};
