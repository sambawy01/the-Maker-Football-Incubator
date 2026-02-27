import heroImg from "../../assets/hero-team.jpg";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { Link } from "./ui/Link";
import { Play } from "lucide-react";

export const Hero = () => {
  const [counts, setCounts] = useState({
    scholars: 0,
    cities: 0,
    trials: 0,
    pillars: 0,
    partners: 0,
    mission: 0
  });

  useEffect(() => {
    // Simple count-up animation simulation
    const interval = setInterval(() => {
      setCounts(prev => ({
        scholars: Math.min(prev.scholars + 4, 110),
        cities: Math.min(prev.cities + 1, 16),
        trials: Math.min(prev.trials + 2000, 100000),
        pillars: Math.min(prev.pillars + 1, 4),
        partners: Math.min(prev.partners + 1, 2),
        mission: 1
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Training at Golden Hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col justify-center h-full pt-20">
        <div className="max-w-3xl">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-2">
            WE DON'T JUST TRAIN PLAYERS.
          </h1>
          <h1 className="text-[#16A34A] text-5xl md:text-7xl font-bold leading-tight mb-6">
            WE BUILD FUTURES.
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
