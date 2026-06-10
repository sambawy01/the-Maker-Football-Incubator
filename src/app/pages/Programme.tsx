import React from "react";
import { motion } from "framer-motion";
import { Check, Activity, Heart, Brain, Monitor, Globe, BookOpen } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";
import {
  MotionSection,
  MotionCard,
  GradientMesh,
  GrainOverlay,
  MagneticButton,
  ScrollProgress,
} from "../components/ui/motion";
import {
  fadeUp,
  stagger,
  slideInLeft,
  slideInRight,
} from "../../lib/motion";
import { breadcrumbJsonLd } from "../../lib/jsonld";

// Existing Pillars (Keep but check content)
const pillars = [
  {
    id: "01",
    title: "Technical & Tactical Football Development",
    desc: "Structured daily training sessions focused on technical excellence, tactical intelligence, and modern game understanding aligned with international standards.",
    points: ["Ball mastery & technical execution", "Tactical awareness & game understanding", "Position-specific development", "Decision-making in match scenarios", "Speed of play & football intelligence", "Team principles & game models"],
    img: "https://images.unsplash.com/photo-1569242595722-23f071ac6991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRyYWluaW5nJTIwc2Vzc2lvbiUyMGRyaWxsJTIwY29uZXN8ZW58MXx8fHwxNzcxMzM2OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    layout: "left"
  },
  {
    id: "02",
    title: "Comprehensive Education Program",
    desc: "Academic support ensuring players continue their education alongside football, preparing them for life beyond the sport.",
    points: ["Structured e-learning through Nagwa Classes", "On-campus academic support sessions", "English language learning integrated into the program", "Time management & study discipline", "Age-appropriate learning pathways"],
    img: "https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGluJTIwY2xhc3Nyb29tJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcxMzM2OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    layout: "right"
  },
  {
    id: "03",
    title: "Psychology Sessions (Individual & Group)",
    desc: "Specialist psychologists work with each player individually and in groups to build the mental strength required for professional football careers.",
    points: ["Building confidence & self-belief", "Decision-making under pressure", "Resilience & emotional regulation", "CBT techniques for performance anxiety", "Career guidance & goal-setting sessions", "Family integration & support"],
    img: "https://images.unsplash.com/photo-1757773866965-014fa57ad096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBwc3ljaG9sb2d5JTIwc2Vzc2lvbiUyMGZvb3RiYWxsJTIwcGxheWVyfGVufDF8fHx8MTc3MTMzNjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    layout: "left"
  },
  {
    id: "04",
    title: "Personalized Nutrition Program",
    desc: "Custom meal plans designed by sports nutritionists to fuel peak performance, support growth, and build healthy habits for a professional career.",
    points: ["Custom meal plans by sports nutritionists", "Hydration strategies & recovery nutrition", "Body composition tracking", "Education on nutrition fundamentals", "Quarterly medical screenings & growth monitoring"],
    img: "https://images.unsplash.com/photo-1666183701139-2dd760d462df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBsYXllciUyMGd5bSUyMHdvcmtvdXQlMjBmaXRuZXNzJTIwdGVzdGluZ3xlbnwxfHx8fDE3NzEzMzY5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    layout: "right"
  }
];

// NEW: Sports Science Center
const SportsScience = () => {
    return (
        <MotionSection ariaLabelledby="science-heading" className="py-24 bg-purple-50/30 border-t border-purple-100">
             <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                 <div className="text-center mb-16">
                    <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
                        Football Backed By Science
                    </span>
                    <h2 id="science-heading" className="text-[#0F172A] text-4xl font-bold mb-4">The Maker Sports Science Center</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Our Sports Science Center supports player development through a full-circle approach, utilizing data and medical expertise.
                    </p>
                </div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-4 gap-6"
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                    {[
                        { icon: Activity, title: "Medical Screening", text: "Quarterly check-ups to track health and guide safe training." },
                        { icon: Heart, title: "Nutrition", text: "Basics of nutrition to boost performance, recovery, and long-term health." },
                        { icon: Brain, title: "Psychology", text: "Building focus, confidence, and mental strength." },
                        { icon: Monitor, title: "Technology", text: "Introducing modern football tech to prepare for pro environments." },
                    ].map((item, i) => (
                        <MotionCard
                          key={i}
                          variants={fadeUp}
                          className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-purple-600"
                        >
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                                <item.icon size={24} />
                            </div>
                            <h3 className="font-bold text-[#0F172A] text-lg mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.text}</p>
                        </MotionCard>
                    ))}
                </motion.div>
             </div>
        </MotionSection>
    );
};

// NEW: Player Pathway
const PlayerPathway = () => {
    return (
        <MotionSection ariaLabelledby="pathway-heading" className="py-24 bg-[#F8FAFC]">
             <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
                        From Scout to Professional
                    </span>
                    <h2 id="pathway-heading" className="text-[#0F172A] text-4xl font-bold">The Maker Player Journey</h2>
                </div>

                <motion.div
                  className="flex flex-col md:flex-row justify-between items-center gap-8 relative"
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                     {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#16A34A]/20 -z-0"></div>

                    {[
                        { title: "Scouting", desc: "100,000+ assessed", step: 1 },
                        { title: "Selection", desc: "Multi-stage trials", step: 2 },
                        { title: "Development", desc: "3-5 year programme", step: 3 },
                        { title: "Exposure", desc: "European Stints", step: 4 },
                        { title: "Professional", desc: "The Dream Realized", step: 5 },
                    ].map((step, i) => (
                        <MotionCard
                          key={i}
                          variants={fadeUp}
                          className="relative z-10 bg-white p-6 rounded-xl shadow-md border border-slate-100 text-center w-full md:w-56 h-48 flex flex-col items-center justify-center"
                        >
                             <div className="w-10 h-10 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold mb-4 border-4 border-white shadow-sm">
                                {step.step}
                             </div>
                             <h3 className="font-bold text-[#0F172A] text-lg mb-1">{step.title}</h3>
                             <p className="text-slate-600 text-sm">{step.desc}</p>
                        </MotionCard>
                    ))}
                </motion.div>
                <p className="text-center text-slate-600 mt-12 text-sm max-w-2xl mx-auto">
                    Mido’s role as Sporting Director of Enosis Paralimni creates a direct bridge from The Maker to European competition.
                </p>
             </div>
        </MotionSection>
    );
};

// NEW: Holistic Experience
const HolisticExperience = () => {
    return (
         <section className="relative bg-[#0F172A] py-24 overflow-hidden" aria-labelledby="holistic-heading">
             <GradientMesh variant="green-slate" opacity={0.35} />
             <GrainOverlay opacity={0.05} />
             <MotionSection ariaLabelledby="holistic-heading" className="relative z-10">
               <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                  <div className="text-center mb-16">
                      <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
                          A Holistic Experience
                      </span>
                      <h2 id="holistic-heading" className="text-white text-4xl font-bold">More Than Training. A Home.</h2>
                  </div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                  >
                       {[
                          { icon: Globe, title: "On-Site Dormitories", text: "A home-away-from-home reducing homesickness and building community." },
                          { icon: Heart, title: "Personalized Nutrition", text: "Tailored programmes supporting optimal health and peak performance." },
                          { icon: Brain, title: "Mental Health Support", text: "Building mental resilience and emotional well-being." },
                          { icon: Globe, title: "English Language", text: "Equipping players with essential communication skills for international careers." },
                          { icon: Monitor, title: "Technical Analysis", text: "Full performance analysis through individual and group review." },
                          { icon: BookOpen, title: "Education Programme", text: "Comprehensive curriculum preparing players for success beyond the field." },
                       ].map((item, i) => (
                           <MotionCard
                             key={i}
                             variants={fadeUp}
                             glass="dark"
                             className="flex gap-4 p-6 rounded-xl"
                           >
                               <div className="shrink-0 text-[#16A34A]">
                                   <item.icon size={24} />
                               </div>
                               <div>
                                   <h3 className="font-bold text-white mb-2">{item.title}</h3>
                                   <p className="text-slate-200 text-sm leading-relaxed">{item.text}</p>
                               </div>
                           </MotionCard>
                       ))}
                  </motion.div>
               </div>
             </MotionSection>
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
    <MotionSection ariaLabelledby="day-heading" className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 id="day-heading" className="text-[#0F172A] text-3xl font-bold mb-12 text-center">A Day in the Life</h2>
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-4 overflow-x-auto pb-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {schedule.map((slot, i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? slideInLeft : slideInRight}
              className="flex-1 min-w-[100px] flex flex-col items-center text-center group"
            >
              <div className="text-slate-500 font-mono text-sm mb-3">{slot.time}</div>
              <div className={`w-4 h-4 rounded-full ${typeColors[slot.type as keyof typeof typeColors]} mb-4 ring-2 ring-white shadow-sm group-hover:scale-125 transition-transform`}></div>
              <div className="h-20 w-px bg-slate-200 mb-4 mx-auto"></div>
              <div className="text-[#0F172A] font-bold text-sm">{slot.activity}</div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center gap-6 mt-12 text-xs text-slate-600">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#16A34A]"></div>Football</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div>Education</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-500"></div>Mental</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-500"></div>Physical</div>
        </div>
      </div>
    </MotionSection>
  );
};

// Apply CTA at bottom
const ApplyCTA = () => {
  return (
    <section className="relative bg-[#0F172A] py-24 overflow-hidden" aria-labelledby="apply-cta-heading">
      <GradientMesh variant="green-slate" opacity={0.45} />
      <GrainOverlay opacity={0.05} />
      <MotionSection ariaLabelledby="apply-cta-heading" className="relative z-10">
        <div className="max-w-[900px] mx-auto px-4 md:px-8 text-center">
          <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-3">
            Join The Cohort
          </span>
          <h2 id="apply-cta-heading" className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Think your son has what it takes?
          </h2>
          <p className="text-slate-200 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Scholarships are talent-based, not income-based. If he has the potential, we want to find him.
          </p>
          <MagneticButton>
            <Button as="a" href="/scouts" variant="primary" size="lg">
              Apply for Trials →
            </Button>
          </MagneticButton>
        </div>
      </MotionSection>
    </section>
  );
};

export const Programme = () => {
  return (
    <div className="animate-fade-in-up">
      <ScrollProgress />
      <SEO
        path="/programme"
        title="The Programme — The Maker Football Incubator"
        description="Four pillars: technical football, education, psychology, and lifestyle. The Maker's comprehensive incubator develops every dimension of a young player's potential — on the pitch and off it."
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Programme", path: "/programme" },
        ])}
      />
      {/* Hero */}
      <section className="relative flex flex-col lg:flex-row h-auto lg:h-[550px] overflow-hidden" aria-labelledby="programme-hero-heading">
        <div className="relative w-full lg:w-[55%] bg-[#0F172A] p-8 lg:p-20 flex flex-col justify-center overflow-hidden">
            <GradientMesh variant="green-slate" opacity={0.4} />
            <GrainOverlay opacity={0.05} />
            <motion.div
              className="relative z-10"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={fadeUp} id="programme-hero-heading" className="text-white text-4xl lg:text-[48px] font-bold mb-6">THE MAKER PROGRAMME</motion.h1>
              <motion.p variants={fadeUp} className="text-white/80 text-lg leading-relaxed max-w-xl mb-12">
                  A comprehensive football incubator that develops every dimension of a young player’s potential — on the pitch and off it.
              </motion.p>
              <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#16A34A] font-bold text-sm uppercase tracking-wider">
                  <div>4 Pillars</div>
                  <div>7 Days/Week</div>
                  <div>Full Scholarship</div>
                  <div>Ages 4–16</div>
              </motion.div>
            </motion.div>
        </div>
        <div className="w-full lg:w-[45%] relative min-h-[300px]">
            <img
                src="https://images.unsplash.com/photo-1569242595722-23f071ac6991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRyYWluaW5nJTIwc2Vzc2lvbiUyMGRyaWxsJTIwY29uZXN8ZW58MXx8fHwxNzcxMzM2OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Programme Collage"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
            />
            <div className="absolute inset-0 bg-[#16A34A]/10 mix-blend-multiply"></div>
            <GrainOverlay opacity={0.05} />
        </div>
      </section>

      {/* Pillars Deep Dive */}
      <div className="bg-white">
        {pillars.map((pillar, i) => {
            const headingId = `pillar-${pillar.id}-heading`;
            return (
              <MotionSection
                key={i}
                ariaLabelledby={headingId}
                className="flex flex-col lg:flex-row h-auto min-h-[450px]"
              >
                  {pillar.layout === "left" ? (
                      <>
                          <motion.div
                            variants={slideInLeft}
                            className="w-full lg:w-1/2 h-[300px] lg:h-auto relative"
                          >
                              <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                          </motion.div>
                          <motion.div
                            variants={slideInRight}
                            className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center bg-white relative overflow-hidden"
                          >
                              <div className="absolute -right-10 -top-10 text-[180px] font-bold text-slate-100 opacity-60 select-none z-0" aria-hidden="true">
                                  {pillar.id}
                              </div>
                              <div className="relative z-10">
                                  <h2 id={headingId} className="text-[#0F172A] text-3xl font-bold mb-4">{pillar.title}</h2>
                                  <p className="text-slate-600 mb-8 max-w-md">{pillar.desc}</p>
                                  <motion.ul
                                    className="space-y-3 mb-8"
                                    variants={stagger}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                  >
                                      {pillar.points.map((p, idx) => (
                                          <motion.li
                                            key={idx}
                                            variants={fadeUp}
                                            className="flex items-center gap-3 text-sm font-medium text-[#0F172A]"
                                          >
                                              <div className="w-5 h-5 rounded-full bg-[#16A34A]/10 flex items-center justify-center text-[#16A34A]">
                                                  <Check size={12} />
                                              </div>
                                              {p}
                                          </motion.li>
                                      ))}
                                  </motion.ul>
                              </div>
                          </motion.div>
                      </>
                  ) : (
                      <>
                          <motion.div
                            variants={slideInLeft}
                            className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center bg-white order-2 lg:order-1 relative overflow-hidden"
                          >
                              <div className="absolute -left-10 -top-10 text-[180px] font-bold text-slate-100 opacity-60 select-none z-0" aria-hidden="true">
                                  {pillar.id}
                              </div>
                              <div className="relative z-10">
                                  <h2 id={headingId} className="text-[#0F172A] text-3xl font-bold mb-4">{pillar.title}</h2>
                                  <p className="text-slate-600 mb-8 max-w-md">{pillar.desc}</p>
                                  <motion.ul
                                    className="space-y-3 mb-8"
                                    variants={stagger}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                  >
                                      {pillar.points.map((p, idx) => (
                                          <motion.li
                                            key={idx}
                                            variants={fadeUp}
                                            className="flex items-center gap-3 text-sm font-medium text-[#0F172A]"
                                          >
                                              <div className="w-5 h-5 rounded-full bg-[#16A34A]/10 flex items-center justify-center text-[#16A34A]">
                                                  <Check size={12} />
                                              </div>
                                              {p}
                                          </motion.li>
                                      ))}
                                  </motion.ul>
                              </div>
                          </motion.div>
                          <motion.div
                            variants={slideInRight}
                            className="w-full lg:w-1/2 h-[300px] lg:h-auto relative order-1 lg:order-2"
                          >
                              <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                          </motion.div>
                      </>
                  )}
              </MotionSection>
            );
        })}
      </div>

      <SportsScience />
      <PlayerPathway />
      <HolisticExperience />
      <Schedule />
      <ApplyCTA />
    </div>
  );
};
