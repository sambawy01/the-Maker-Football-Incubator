import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Hero } from "../components/Hero";
import { Founder } from "../components/Founder";
import { Pillars } from "../components/Pillars";
import { PlayerCarousel } from "../components/PlayerCarousel";
import { Partners } from "../components/Partners";
import { News } from "../components/News";
import { CTABanner } from "../components/CTABanner";
import { SEO } from "../components/SEO";
import { NavLink } from "../components/ui/Link";
import { MotionSection, ScrollProgress } from "../components/ui/motion";
import { fadeUp, stagger, defaultViewport } from "@/lib/motion";
import {
  organizationJsonLd,
  webSiteJsonLd,
  breadcrumbJsonLd,
} from "../../lib/jsonld";
import { MapPin, Globe, ArrowRight, Activity, BookOpen, Brain, Heart, Mic, Trophy, Users } from "lucide-react";

// New Component: European Pathway
const EuropeanPathway = () => {
    const reduced = useReducedMotion();
    const initial = reduced ? "visible" : "hidden";

    return (
        <MotionSection
          ariaLabelledby="european-pathway-heading"
          className="py-24 bg-[#0F172A] relative overflow-hidden"
        >
             {/* Map Watermark Effect - simplified with CSS radial gradient for now */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
                        International Ties
                    </span>
                    <h2 id="european-pathway-heading" className="text-white text-4xl font-bold">From Egypt to Europe. The Bridge is Built.</h2>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                    variants={stagger}
                    initial={initial}
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    {/* Enosis Card */}
                    <motion.div
                        className="bg-[#1E293B] rounded-xl p-8 border-l-4 border-[#16A34A] relative group transition-transform duration-300"
                        variants={fadeUp}
                        whileHover={reduced ? undefined : { y: -8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">
                                E.P
                            </div>
                            <div>
                                <h3 className="text-white text-2xl font-bold">Enosis Paralimni FC</h3>
                                <div className="text-gray-200 text-sm flex items-center gap-2">
                                    <Globe size={12} /> Cyprus
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-200 leading-relaxed">
                            Mido serves as Sporting Director and part-owner, creating a direct pathway for Egyptian talent to train and compete in European football.
                        </p>
                    </motion.div>

                    {/* Farense Card */}
                    <motion.div
                        className="bg-[#1E293B] rounded-xl p-8 border-l-4 border-[#16A34A] relative group transition-transform duration-300"
                        variants={fadeUp}
                        whileHover={reduced ? undefined : { y: -8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">
                                S.C.F
                            </div>
                            <div>
                                <h3 className="text-white text-2xl font-bold">SC Farense</h3>
                                <div className="text-gray-200 text-sm flex items-center gap-2">
                                    <Globe size={12} /> Portugal
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-200 leading-relaxed">
                             Collaboration giving players access to advanced Portuguese football methodologies and exposure to top European markets.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Pathway Graphic Visualization (Simplified CSS) */}
                <div className="flex items-center justify-center gap-4 md:gap-12 text-white/70 text-sm font-mono mb-12 flex-wrap">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#16A34A] rounded-full"></span> Egypt (The Maker)
                    </div>
                    <div className="h-px w-12 bg-dashed border-t border-white/30"></div>
                    <div className="flex items-center gap-2">
                         <span className="w-2 h-2 bg-white rounded-full"></span> Cyprus
                    </div>
                     <div className="h-px w-12 bg-dashed border-t border-white/30"></div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span> Portugal
                    </div>
                    <div className="h-px w-12 bg-dashed border-t border-white/30"></div>
                     <div className="flex items-center gap-2 text-white font-bold">
                        <span className="w-2 h-2 bg-[#D97706] rounded-full"></span> Professional Career
                    </div>
                </div>

                <div className="text-center">
                    <NavLink to="/about" className="inline-flex items-center text-[#16A34A] hover:text-white transition-colors font-bold uppercase tracking-wider text-sm border-b border-[#16A34A] pb-1">
                        Learn About Our European Network <ArrowRight size={16} className="ml-2" />
                    </NavLink>
                </div>
            </div>
        </MotionSection>
    );
};

// New Component: Offerings Overview
const OfferingsOverview = () => {
    const reduced = useReducedMotion();
    const initial = reduced ? "visible" : "hidden";

    const offerings = [
        { icon: Activity, title: "Football Incubator", desc: "Scholarship-based elite development.", color: "text-[#0F172A]" },
        { icon: Heart, title: "Sports Science Center", desc: "Medical, nutrition, & psychology.", color: "text-purple-600" },
        { icon: Users, title: "Football Academy", desc: "Pay-to-play ages 4–16 across 3 locations.", color: "text-[#16A34A]" },
        { icon: Trophy, title: "Tournaments", desc: "Schools tournaments and Ramadan events.", color: "text-teal-600" },
        { icon: MapPin, title: "Camps", desc: "Sahel summer & international camps.", color: "text-green-500" },
        { icon: Globe, title: "First Team", desc: "Competing in Egypt’s 4th Division.", color: "text-[#0F172A]" },
        { icon: Mic, title: "Podcast", desc: "Conversations with football legends.", color: "text-gray-600" },
    ];

    return (
        <MotionSection
          ariaLabelledby="offerings-heading"
          className="py-24 bg-white"
        >
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                 <div className="text-center mb-16">
                    <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
                        Our Ecosystem
                    </span>
                    <h2 id="offerings-heading" className="text-[#0F172A] text-4xl font-bold mb-4">More Than an Academy.</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        The Maker is a complete football development ecosystem — from scouting and incubation to competitive play and international exposure.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    variants={stagger}
                    initial={initial}
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    {offerings.map((offering, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={reduced ? undefined : { y: -4 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow group"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors ${offering.color}`}>
                                <offering.icon size={24} />
                            </div>
                            <h3 className="text-[#0F172A] font-bold text-lg mb-2">{offering.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{offering.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </MotionSection>
    );
};

export const Home = () => {
  return (
    <div className="animate-fade-in-up">
      <ScrollProgress />
      <SEO
        path="/"
        title="The Maker Football Incubator | Egypt's Premium Youth Football Academy"
        description="Egypt's first homegrown football incubator. A talent-first scholarship academy preparing youth players for European football, founded by Ahmed 'Mido' Hossam."
        jsonLd={[
          organizationJsonLd,
          webSiteJsonLd,
          breadcrumbJsonLd([{ name: "Home", path: "/" }]),
        ]}
      />
      {/*
        Hero is above-the-fold; its <section> animates on mount (not on scroll),
        so we don't wrap it in MotionSection. Every other section is wrapped or
        already animates internally.
      */}
      <Hero />
      <Founder />
      <Pillars />
      <EuropeanPathway />
      <PlayerCarousel />
      <OfferingsOverview />
      <Partners />
      <News />
      <CTABanner />
    </div>
  );
};
