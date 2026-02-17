import React, { useState } from "react";
import { Check, ArrowRight, Activity, Heart, Brain, Monitor, Globe, BookOpen } from "lucide-react";
import { Button } from "../components/ui/Button";

// Existing Pillars (Keep but check content)
const pillars = [
  {
    id: "01",
    title: "Football Skills Development",
    desc: "Our Ajax-inspired philosophy is adapted for individual technical mastery and tactical intelligence.",
    points: ["Technical mastery & ball control", "Tactical intelligence & positional play", "Position-specific training programmes", "Match simulation & competitive play", "Video analysis (Technical & Performance)"],
    img: "https://images.unsplash.com/photo-1569242595722-23f071ac6991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRyYWluaW5nJTIwc2Vzc2lvbiUyMGRyaWxsJTIwY29uZXN8ZW58MXx8fHwxNzcxMzM2OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    layout: "left"
  },
  {
    id: "02",
    title: "Academic Excellence & Language",
    desc: "We believe an educated player is a better player. Fluency in English and strong academics are mandatory.",
    points: ["English language courses for international readiness", "Comprehensive academic curriculum", "Cultural preparation for Europe", "Life skills workshops"],
    img: "https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGluJTIwY2xhc3Nyb29tJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcxMzM2OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    layout: "right"
  },
  {
    id: "03",
    title: "Mental Resilience & Wellbeing",
    desc: "Led by specialist psychologists, we build the character required for the pressures of professional football.",
    points: ["Sports psychology (1-on-1 & group)", "Mental resilience & stress management", "Emotional intelligence training", "Family support programme"],
    img: "https://images.unsplash.com/photo-1757773866965-014fa57ad096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBwc3ljaG9sb2d5JTIwc2Vzc2lvbiUyMGZvb3RiYWxsJTIwcGxheWVyfGVufDF8fHx8MTc3MTMzNjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    layout: "left"
  },
  {
    id: "04",
    title: "Physical Conditioning & Nutrition",
    desc: "Data-driven physical development ensuring our players can compete with European athletes.",
    points: ["Personalized nutrition programme", "Quarterly medical check-ups", "Growth monitoring & injury prevention", "Football technology integration"],
    img: "https://images.unsplash.com/photo-1666183701139-2dd760d462df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBsYXllciUyMGd5bSUyMHdvcmtvdXQlMjBmaXRuZXNzJTIwdGVzdGluZ3xlbnwxfHx8fDE3NzEzMzY5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    layout: "right"
  }
];

// NEW: Sports Science Center
const SportsScience = () => {
    return (
        <section className="py-24 bg-purple-50/30 border-t border-purple-100">
             <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                 <div className="text-center mb-16">
                    <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
                        Football Backed By Science
                    </span>
                    <h2 className="text-[#0F172A] text-4xl font-bold mb-4">The Maker Sports Science Center</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Our Sports Science Center supports player development through a full-circle approach, utilizing data and medical expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { icon: Activity, title: "Medical Screening", text: "Quarterly check-ups to track health and guide safe training." },
                        { icon: Heart, title: "Nutrition", text: "Basics of nutrition to boost performance, recovery, and long-term health." },
                        { icon: Brain, title: "Psychology", text: "Building focus, confidence, and mental strength." },
                        { icon: Monitor, title: "Technology", text: "Introducing modern football tech to prepare for pro environments." },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-purple-600 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                                <item.icon size={24} />
                            </div>
                            <h3 className="font-bold text-[#0F172A] text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
};

// NEW: Player Pathway
const PlayerPathway = () => {
    return (
        <section className="py-24 bg-[#F8FAFC]">
             <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
                        From Scout to Professional
                    </span>
                    <h2 className="text-[#0F172A] text-4xl font-bold">The Maker Player Journey</h2>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                     {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#16A34A]/20 -z-0"></div>

                    {[
                        { title: "Scouting", desc: "100,000+ assessed", step: 1 },
                        { title: "Selection", desc: "Multi-stage trials", step: 2 },
                        { title: "Development", desc: "3-5 year programme", step: 3 },
                        { title: "Exposure", desc: "European Stints", step: 4 },
                        { title: "Professional", desc: "The Dream Realized", step: 5 },
                    ].map((step, i) => (
                        <div key={i} className="relative z-10 bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center w-full md:w-56 h-48 flex flex-col items-center justify-center group hover:-translate-y-2 transition-transform">
                             <div className="w-10 h-10 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold mb-4 border-4 border-white shadow-sm">
                                {step.step}
                             </div>
                             <h3 className="font-bold text-[#0F172A] text-lg mb-1">{step.title}</h3>
                             <p className="text-gray-500 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-500 mt-12 text-sm max-w-2xl mx-auto">
                    Mido’s role as Sporting Director of Enosis Paralimni creates a direct bridge from The Maker to European competition.
                </p>
             </div>
        </section>
    );
};

// NEW: Holistic Experience
const HolisticExperience = () => {
    return (
         <section className="py-24 bg-white">
             <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
                        A Holistic Experience
                    </span>
                    <h2 className="text-[#0F172A] text-4xl font-bold">More Than Training. A Home.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {[
                        { icon: Globe, title: "On-Site Dormitories", text: "A home-away-from-home reducing homesickness and building community." },
                        { icon: Heart, title: "Personalized Nutrition", text: "Tailored programmes supporting optimal health and peak performance." },
                        { icon: Brain, title: "Mental Health Support", text: "Building mental resilience and emotional well-being." },
                        { icon: Globe, title: "English Language", text: "Equipping players with essential communication skills for international careers." },
                        { icon: Monitor, title: "Technical Analysis", text: "Full performance analysis through individual and group review." },
                        { icon: BookOpen, title: "Education Programme", text: "Comprehensive curriculum preparing players for success beyond the field." },
                     ].map((item, i) => (
                         <div key={i} className="flex gap-4 p-6 border border-gray-100 rounded-xl hover:border-l-4 hover:border-l-[#16A34A] transition-all bg-white shadow-sm">
                             <div className="shrink-0 text-[#16A34A]">
                                 <item.icon size={24} />
                             </div>
                             <div>
                                 <h3 className="font-bold text-[#0F172A] mb-2">{item.title}</h3>
                                 <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                             </div>
                         </div>
                     ))}
                </div>
             </div>
         </section>
    );
};

const Schedule = () => {
  const schedule = [
    { time: "06:00", activity: "Wake up & Routine", type: "mental" },
    { time: "07:00", activity: "Nutrition Breakfast", type: "physical" },
    { time: "08:00", activity: "Academic Classes", type: "education" },
    { time: "11:00", activity: "Training Session 1", type: "football" },
    { time: "13:00", activity: "Lunch & Rest", type: "physical" },
    { time: "14:00", activity: "English Class", type: "education" },
    { time: "15:30", activity: "Training Session 2", type: "football" },
    { time: "17:30", activity: "Psychology / Mental", type: "mental" },
    { time: "19:00", activity: "Dinner", type: "physical" },
    { time: "20:30", activity: "Video Analysis", type: "football" },
  ];

  const typeColors = {
    football: "bg-[#16A34A]",
    education: "bg-blue-500",
    mental: "bg-purple-500",
    physical: "bg-orange-500"
  };

  return (
    <div className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-[#0F172A] text-3xl font-bold mb-12 text-center">A Day in the Life</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4 overflow-x-auto pb-4">
          {schedule.map((slot, i) => (
            <div key={i} className="flex-1 min-w-[100px] flex flex-col items-center text-center group">
              <div className="text-gray-400 font-mono text-sm mb-3">{slot.time}</div>
              <div className={`w-4 h-4 rounded-full ${typeColors[slot.type as keyof typeof typeColors]} mb-4 ring-2 ring-white shadow-sm group-hover:scale-125 transition-transform`}></div>
              <div className="h-20 w-px bg-gray-100 mb-4 mx-auto"></div>
              <div className="text-[#0F172A] font-bold text-sm">{slot.activity}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-12 text-xs text-gray-500">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#16A34A]"></div>Football</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div>Education</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-500"></div>Mental</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-500"></div>Physical</div>
        </div>
      </div>
    </div>
  );
};

export const Programme = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero */}
      <section className="flex flex-col lg:flex-row h-auto lg:h-[550px]">
        <div className="w-full lg:w-[55%] bg-[#0F172A] p-8 lg:p-20 flex flex-col justify-center">
            <h1 className="text-white text-4xl lg:text-[48px] font-bold mb-6">THE MAKER PROGRAMME</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl mb-12">
                A comprehensive football incubator that develops every dimension of a young player’s potential — on the pitch and off it.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#16A34A] font-bold text-sm uppercase tracking-wider">
                <div>4 Pillars</div>
                <div>7 Days/Week</div>
                <div>Full Scholarship</div>
                <div>Ages 4–16</div>
            </div>
        </div>
        <div className="w-full lg:w-[45%] relative min-h-[300px]">
            <img 
                src="https://images.unsplash.com/photo-1569242595722-23f071ac6991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRyYWluaW5nJTIwc2Vzc2lvbiUyMGRyaWxsJTIwY29uZXN8ZW58MXx8fHwxNzcxMzM2OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Programme Collage" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#16A34A]/10 mix-blend-multiply"></div>
        </div>
      </section>

      {/* Pillars Deep Dive */}
      <div className="bg-white">
        {pillars.map((pillar, i) => (
            <section key={i} className="flex flex-col lg:flex-row h-auto min-h-[450px]">
                {pillar.layout === "left" ? (
                    <>
                        <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative">
                            <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center bg-white relative overflow-hidden">
                            <div className="absolute -right-10 -top-10 text-[180px] font-bold text-gray-50 opacity-50 select-none z-0">
                                {pillar.id}
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-[#0F172A] text-3xl font-bold mb-4">{pillar.title}</h2>
                                <p className="text-gray-500 mb-8 max-w-md">{pillar.desc}</p>
                                <ul className="space-y-3 mb-8">
                                    {pillar.points.map((p, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-[#0F172A]">
                                            <div className="w-5 h-5 rounded-full bg-[#16A34A]/10 flex items-center justify-center text-[#16A34A]">
                                                <Check size={12} />
                                            </div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline-white" className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white w-fit">
                                    Watch Training
                                </Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center bg-white order-2 lg:order-1 relative overflow-hidden">
                            <div className="absolute -left-10 -top-10 text-[180px] font-bold text-gray-50 opacity-50 select-none z-0">
                                {pillar.id}
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-[#0F172A] text-3xl font-bold mb-4">{pillar.title}</h2>
                                <p className="text-gray-500 mb-8 max-w-md">{pillar.desc}</p>
                                <ul className="space-y-3 mb-8">
                                    {pillar.points.map((p, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-[#0F172A]">
                                            <div className="w-5 h-5 rounded-full bg-[#16A34A]/10 flex items-center justify-center text-[#16A34A]">
                                                <Check size={12} />
                                            </div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative order-1 lg:order-2">
                            <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover" />
                        </div>
                    </>
                )}
            </section>
        ))}
      </div>
      
      <SportsScience />
      <PlayerPathway />
      <HolisticExperience />
      <Schedule />
    </div>
  );
};
