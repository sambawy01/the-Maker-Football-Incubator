import React from "react";
import { Hero } from "../components/Hero";
import { Founder } from "../components/Founder";
import { Pillars } from "../components/Pillars";
import { PlayerCarousel } from "../components/PlayerCarousel";
import { Partners } from "../components/Partners";
import { News } from "../components/News";
import { CTABanner } from "../components/CTABanner";
import { MapPin, Globe, ArrowRight, Activity, BookOpen, Brain, Heart, Mic, Trophy, Users } from "lucide-react";

// New Component: European Pathway
const EuropeanPathway = () => {
    return (
        <section className="py-24 bg-[#0F172A] relative overflow-hidden">
             {/* Map Watermark Effect - simplified with CSS radial gradient for now */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>
            
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
                        International Ties
                    </span>
                    <h2 className="text-white text-4xl font-bold">From Egypt to Europe. The Bridge is Built.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Enosis Card */}
                    <div className="bg-[#1E293B] rounded-xl p-8 border-l-4 border-[#16A34A] relative group hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">
                                {/* Placeholder for Club Crest */}
                                E.P
                            </div>
                            <div>
                                <h3 className="text-white text-2xl font-bold">Enosis Paralimni FC</h3>
                                <div className="text-gray-400 text-sm flex items-center gap-2">
                                    <Globe size={12} /> Cyprus
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Mido serves as Sporting Director and part-owner, creating a direct pathway for Egyptian talent to train and compete in European football.
                        </p>
                    </div>

                    {/* Farense Card */}
                    <div className="bg-[#1E293B] rounded-xl p-8 border-l-4 border-[#16A34A] relative group hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">
                                {/* Placeholder for Club Crest */}
                                S.C.F
                            </div>
                            <div>
                                <h3 className="text-white text-2xl font-bold">SC Farense</h3>
                                <div className="text-gray-400 text-sm flex items-center gap-2">
                                    <Globe size={12} /> Portugal
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                             Collaboration giving players access to advanced Portuguese football methodologies and exposure to top European markets.
                        </p>
                    </div>
                </div>

                {/* Pathway Graphic Visualization (Simplified CSS) */}
                <div className="flex items-center justify-center gap-4 md:gap-12 text-white/50 text-sm font-mono mb-12 flex-wrap">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#16A34A] rounded-full"></span> Egypt (The Maker)
                    </div>
                    <div className="h-px w-12 bg-dashed border-t border-white/20"></div>
                    <div className="flex items-center gap-2">
                         <span className="w-2 h-2 bg-white rounded-full"></span> Cyprus
                    </div>
                     <div className="h-px w-12 bg-dashed border-t border-white/20"></div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span> Portugal
                    </div>
                    <div className="h-px w-12 bg-dashed border-t border-white/20"></div>
                     <div className="flex items-center gap-2 text-white font-bold">
                        <span className="w-2 h-2 bg-[#D97706] rounded-full"></span> Professional Career
                    </div>
                </div>

                <div className="text-center">
                    <a href="#" className="inline-flex items-center text-[#16A34A] hover:text-white transition-colors font-bold uppercase tracking-wider text-sm border-b border-[#16A34A] pb-1">
                        Learn About Our European Network <ArrowRight size={16} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

// New Component: Offerings Overview
const OfferingsOverview = () => {
    const offerings = [
        { icon: Activity, title: "Football Incubator", desc: "Scholarship-based elite development.", color: "text-[#0F172A]" },
        { icon: Heart, title: "Sports Science Center", desc: "Medical, nutrition, & psychology.", color: "text-purple-600" },
        { icon: Users, title: "Football Academy", desc: "Pay-to-play ages 4–16 across 3 locations.", color: "text-[#16A34A]" },
        { icon: Trophy, title: "Tournaments", desc: "Schools tournaments and Ramadan events.", color: "text-teal-600" },
        { icon: MapPin, title: "Camps", desc: "Sahel summer & international camps.", color: "text-green-500" },
        { icon: Globe, title: "First Team", desc: "Competing in Egypt’s 4th Division.", color: "text-[#0F172A]" },
        { icon: Mic, title: "Podcast", desc: "Conversations with football legends.", color: "text-gray-500" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                 <div className="text-center mb-16">
                    <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
                        Our Ecosystem
                    </span>
                    <h2 className="text-[#0F172A] text-4xl font-bold mb-4">More Than an Academy.</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        The Maker is a complete football development ecosystem — from scouting and incubation to competitive play and international exposure.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {offerings.map((offering, i) => (
                        <div key={i} className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
                            <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors ${offering.color}`}>
                                <offering.icon size={24} />
                            </div>
                            <h3 className="text-[#0F172A] font-bold text-lg mb-2">{offering.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{offering.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Home = () => {
  return (
    <div className="animate-fade-in-up">
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
