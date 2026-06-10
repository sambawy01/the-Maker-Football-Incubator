import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Linkedin, Globe, Briefcase, Award, Users } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";
import {
  MotionSection,
  MotionCard,
  MotionStat,
  GradientMesh,
  GrainOverlay,
  MagneticButton,
} from "../components/ui/motion";

// Lazy-mount ScrollProgress so framer-motion's useScroll/useSpring don't ship
// in About's initial JS graph.
const ScrollProgress = React.lazy(() =>
  import("../components/ui/motion/ScrollProgress").then((m) => ({
    default: m.ScrollProgress,
  }))
);
import {
  fadeUp,
  stagger,
  slideInLeft,
  slideInRight,
  useReducedMotion,
} from "../../lib/motion";
import { founderJsonLd, breadcrumbJsonLd } from "../../lib/jsonld";
const founderImg = "https://i.ibb.co/fVZT5FCD/2c4779bd-eb40-4305-bfac-2363462551fb.jpg";
import about400 from "../../assets/about-hero-400.jpg";
import about800 from "../../assets/about-hero-800.jpg";
import about1280 from "../../assets/about-hero-1280.jpg";
import about1920 from "../../assets/about-hero-1920.jpg";
import about400Webp from "../../assets/about-hero-400.webp";
import about800Webp from "../../assets/about-hero-800.webp";
import about1280Webp from "../../assets/about-hero-1280.webp";
import about1920Webp from "../../assets/about-hero-1920.webp";

// NEW COMPONENT: WhoWeAre
const WhoWeAre = () => {
    const reduced = useReducedMotion();
    return (
        <MotionSection ariaLabelledby="who-we-are-heading" className="py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/2">
                     <span className="text-[#15803D] font-bold text-sm tracking-widest uppercase block mb-4">
                        Who We Are
                    </span>
                    <h2 id="who-we-are-heading" className="text-[#0F172A] text-4xl font-bold mb-6">An Elite Egyptian Football Development Platform.</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        The Maker is an elite Egyptian football development platform founded by legendary international footballer Ahmed Hossam "Mido", created to identify, develop, and elevate Egypt's most promising football talent. Unlike traditional football academies that rely on pay-to-play models, The Maker operates a talent-first incubator system, scouting players from across Egypt and offering full scholarships to high-potential players regardless of their financial background. Built on Mido's extensive experience across elite European and international football environments, The Maker combines modern football methodology, mental conditioning, education, and lifestyle management to create players who are prepared for professional football and long-term career sustainability.
                    </p>
                    <motion.div
                      className="flex gap-4 items-center"
                      variants={stagger}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.4 }}
                    >
                         <motion.div variants={fadeUp} className="bg-[#F8FAFC] px-6 py-4 rounded-lg border border-slate-100 text-center">
                            <MotionStat
                              value={30}
                              label="Started"
                              className="font-bold text-[#0F172A] text-xl"
                              labelClassName="text-xs text-slate-500 uppercase"
                            />
                         </motion.div>
                         <div className="text-slate-300" aria-hidden="true">→</div>
                         <motion.div variants={fadeUp} className="bg-[#F8FAFC] px-6 py-4 rounded-lg border border-slate-100 text-center">
                            <MotionStat
                              value={110}
                              label="Scholars"
                              className="font-bold text-[#0F172A] text-xl"
                              labelClassName="text-xs text-slate-500 uppercase"
                            />
                         </motion.div>
                         <div className="text-slate-300" aria-hidden="true">→</div>
                         <motion.div variants={fadeUp} className="bg-[#F8FAFC] px-6 py-4 rounded-lg border border-slate-100 text-center">
                            <MotionStat
                              value={16}
                              label="Cities"
                              className="font-bold text-[#0F172A] text-xl"
                              labelClassName="text-xs text-slate-500 uppercase"
                            />
                         </motion.div>
                    </motion.div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                         {reduced ? (
                            <img
                              src={founderImg}
                              alt="Mido with players"
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                         ) : (
                            <motion.img
                              src={founderImg}
                              alt="Mido with players"
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                              initial={{ y: 24, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            />
                         )}
                         <GrainOverlay opacity={0.04} />
                    </div>
                </div>
            </div>
        </MotionSection>
    )
}

// NEW COMPONENT: CSR Vision
const CSRVision = () => {
    const impacts = [
        { icon: Users, title: "Supporting Families", text: "Contributing to Egypt’s CSR initiatives and supporting parents in educating their gifted children through full scholarships." },
        { icon: Briefcase, title: "Creating an Industry", text: "Creating job opportunities within football and elevating the sport from a hobby to a thriving industry." },
        { icon: Globe, title: "Foreign Currency", text: "Facilitating player transitions to professional leagues abroad, contributing to the inflow of foreign currency." },
        { icon: Award, title: "Certifications", text: "Offering licenses and certifications to coaches, administrators, and performance analysts." },
    ]

    return (
        <MotionSection ariaLabelledby="csr-heading" className="py-24 bg-white border-t border-slate-100">
             <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/3">
                        <span className="text-[#15803D] font-bold text-sm tracking-widest uppercase block mb-4">
                            Our Impact
                        </span>
                        <h2 id="csr-heading" className="text-[#0F172A] text-4xl font-bold mb-6">Building More Than Players. Building a Nation.</h2>
                        <MagneticButton>
                          <Button as="a" href="/partners" className="mt-4">Partner With Us →</Button>
                        </MagneticButton>
                    </div>
                    <motion.div
                      className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
                      variants={stagger}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                        {impacts.map((item, i) => (
                            <MotionCard
                              key={i}
                              variants={fadeUp}
                              className="bg-white border-l-4 border-[#16A34A] p-6 shadow-sm rounded-r-xl"
                            >
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-[#16A34A] mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-[#0F172A] font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.text}</p>
                            </MotionCard>
                        ))}
                    </motion.div>
                </div>
             </div>
        </MotionSection>
    )
}

const Timeline = () => {
  const milestones = [
    { year: "2000", title: "The Journey Begins", desc: "Mido signs his first European contract at age 17, starting a career spanning 10 top clubs.", side: "left" },
    { year: "2013", title: "Retirement & Reflection", desc: "Mido retires at 30, shifting focus to coaching and analyzing the gaps in Egyptian development.", side: "right" },
    { year: "2022", title: "The Maker is Born", desc: "Official launch of Egypt's first football incubator with a mission to build complete players.", side: "left" },
    { year: "2023", title: "Rapid Expansion", desc: "Growth to 120+ scholars and scouting across 14 cities.", side: "right" },
    { year: "2024", title: "Strategic Growth", desc: "Shark Tank Egypt investment secured. OPPO becomes Strategic Partner. Schools Tournament launched.", side: "left" },
    { year: "2025", title: "Global & Local Reach", desc: "European partnerships with Enosis Paralimni & SC Farense. First Team enters 4th Division. Cohort hits 150+.", side: "right" },
  ];

  return (
    <MotionSection ariaLabelledby="journey-heading" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#16A34A 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      <div className="max-w-[1000px] mx-auto px-4 relative">
        <h2 id="journey-heading" className="text-[#0F172A] text-4xl font-bold text-center mb-16">Our Journey</h2>

        <motion.div
          className="relative"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#16A34A]/20"></div>

          {milestones.map((m, i) => (
            <motion.div
              key={i}
              variants={m.side === "right" ? slideInRight : slideInLeft}
              className={`flex items-center justify-between mb-16 w-full ${m.side === "right" ? "flex-row-reverse" : ""}`}
            >
              {/* Content Side */}
              <div className={`w-[45%] ${m.side === "right" ? "text-right" : "text-left"}`}>
                <div className="text-[#15803D] text-4xl font-bold font-mono mb-2">{m.year}</div>
                <h3 className="text-[#0F172A] text-xl font-bold mb-2">{m.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </div>

              {/* Center Dot */}
              <div className="w-[10%] flex justify-center relative z-10">
                <div className="w-4 h-4 bg-[#16A34A] rounded-full ring-4 ring-white shadow-md"></div>
              </div>

              {/* Empty Side */}
              <div className="w-[45%]"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
};

const Team = () => {
  const leaders = [
    { name: "Ahmed Hossam ‘Mido’", role: "Founder & Director • Sporting Director, Enosis Paralimni", img: founderImg, linkedin: "https://www.linkedin.com/company/the-maker-eg" },
    { name: "Yosra Elleithy", role: "People & Culture Director • Podcast Co-Host", img: "https://i.ibb.co/0p0D2p4L/PHOTO-2026-02-17-21-16-35.jpg", linkedin: "https://www.linkedin.com/company/the-maker-eg" },
    { name: "Tamer Wasfy", role: "Managing Director", img: "https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxMjk4Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", linkedin: "https://www.linkedin.com/company/the-maker-eg" },
  ];

  return (
    <MotionSection ariaLabelledby="leadership-heading" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
            <span className="text-[#16A34A] font-bold text-sm tracking-widest uppercase block mb-2">
            Leadership
            </span>
            <h2 id="leadership-heading" className="text-[#0F172A] text-4xl font-bold">The Team Behind The Team</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {leaders.map((leader, i) => (
            <MotionCard
              key={i}
              variants={fadeUp}
              className="bg-white p-6 rounded-xl shadow-sm group text-center"
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-[#16A34A] transition-colors">
                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <h3 className="text-[#0F172A] text-xl font-bold mb-1">{leader.name}</h3>
              <div className="text-[#16A34A] font-medium text-sm mb-4 h-10 flex items-center justify-center">{leader.role}</div>
              <p className="text-slate-600 text-sm mb-6 max-w-xs mx-auto">
                Bringing decades of experience in elite football and business management.
              </p>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${leader.name} on LinkedIn`}
                className="inline-flex items-center text-slate-500 hover:text-[#0077B5] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
};

export const About = () => {
  return (
    <div className="animate-fade-in-up">
      <React.Suspense fallback={null}>
        <ScrollProgress />
      </React.Suspense>
      <SEO
        path="/about"
        title="About — The Maker Football Incubator"
        description="Founded by Ahmed 'Mido' Hossam, The Maker is Egypt's first talent-first football incubator — built to identify, develop, and elevate the country's most promising young players."
        jsonLd={[
          founderJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="relative h-[600px] w-full flex items-end overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0">
          <picture>
            <source
              type="image/webp"
              srcSet={`${about400Webp} 400w, ${about800Webp} 800w, ${about1280Webp} 1280w, ${about1920Webp} 1920w`}
              sizes="100vw"
            />
            <img
              src={about1920}
              srcSet={`${about400} 400w, ${about800} 800w, ${about1280} 1280w, ${about1920} 1920w`}
              sizes="100vw"
              alt="The Maker Cohort"
              width={1920}
              height={1281}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
          <GradientMesh variant="green-slate" opacity={0.35} />
          <GrainOverlay opacity={0.05} />
        </div>

        <motion.div
          className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 pb-16"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="text-white/70 text-sm mb-4">Home &gt; About</motion.div>
          <motion.span variants={fadeUp} className="text-[#16A34A] font-bold text-sm tracking-widest uppercase block mb-2">
            About The Maker
          </motion.span>
          <motion.h1 variants={fadeUp} id="about-hero-heading" className="text-white text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Building Egypt’s Football Future.<br/>From the Ground Up.
          </motion.h1>
        </motion.div>
      </section>

      <WhoWeAre />
      <Timeline />
      <Team />
      <CSRVision />

      {/* Mission Vision Values */}
      <section className="relative bg-[#0F172A] py-24 text-white overflow-hidden" aria-labelledby="mvv-heading">
        <GradientMesh variant="slate" opacity={0.4} />
        <GrainOverlay opacity={0.05} />
        <h2 id="mvv-heading" className="sr-only">Mission, Vision and Values</h2>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                {[
                    { icon: Target, title: "MISSION", text: "To develop elite football talent through a holistic program that integrates technical performance, mental strength, education, and lifestyle discipline, enabling players to compete at the highest levels of professional football." },
                    { icon: Eye, title: "VISION", text: "To become the leading football incubator in Egypt and Africa, and a recognized global source of well-developed football talent for regional and international markets." },
                    { icon: Shield, title: "VALUES", text: "Development over results. Individual care. Egyptian pride. Honesty. Family. Holistic growth." }
                ].map((item, i) => (
                    <MotionCard
                      key={i}
                      variants={fadeUp}
                      glass="dark"
                      className="text-center px-6 py-10 rounded-2xl"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#16A34A]/20 flex items-center justify-center mx-auto mb-6 text-[#16A34A]">
                            <item.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                        <p className="text-slate-200 leading-relaxed">{item.text}</p>
                    </MotionCard>
                ))}
            </motion.div>

            <motion.div
              className="border-t border-white/10 pt-12 flex flex-wrap justify-center gap-8 md:gap-16 text-center"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
                {["100M+ Population", "110 Scholars", "16 Cities", "100,000+ Trials", "365K+ Followers", "2 European Partners"].map((stat, i) => (
                    <motion.span key={i} variants={fadeUp} className="text-[#16A34A] font-mono text-lg md:text-xl font-bold">
                        {stat}
                    </motion.span>
                ))}
            </motion.div>
        </div>
      </section>
    </div>
  );
};
