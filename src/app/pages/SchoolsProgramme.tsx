import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Link } from "../components/ui/Link";
import { SEO } from "../components/SEO";
import { breadcrumbJsonLd } from "../../lib/jsonld";
import {
  MotionSection,
  MotionCard,
  MotionStat,
  MarqueeStrip,
  GradientMesh,
  GrainOverlay,
  MagneticButton,
} from "../components/ui/motion";
import { fadeUp, stagger } from "@/lib/motion";

export const SchoolsProgramme = () => {
  const reduced = useReducedMotion();
  const initial = reduced ? false : "hidden";

  const benefits = [
    {
      title: "Curriculum-aligned coaching",
      body:
        "Sessions led by The Maker's coaches inside the school day — football as a structured pathway, not a hobby.",
    },
    {
      title: "Player ID & scouting",
      body:
        "Standout student-athletes are flagged into the same scouting funnel as our scholarship players.",
    },
    {
      title: "Teacher & coach upskilling",
      body:
        "We train your in-house PE staff on our methodology so the standard outlives the contract.",
    },
    {
      title: "Inter-school competition",
      body:
        "Direct entry to The Maker Schools Tournament — 60+ schools, 1,600 players, full coverage.",
    },
    {
      title: "Pathways to the academy",
      body:
        "Clear, transparent routes from playground to the Maker academy and EU partner clubs.",
    },
    {
      title: "Reporting & visibility",
      body:
        "Termly progress reports for parents and school leadership — every player's growth tracked.",
    },
  ];

  const steps = [
    {
      n: 1,
      title: "Discovery call",
      body: "We meet your leadership team and visit your facilities.",
    },
    {
      n: 2,
      title: "Methodology fit",
      body: "We map our curriculum into your school's calendar and goals.",
    },
    {
      n: 3,
      title: "On-site launch",
      body: "Coaches deployed, sessions begin, baseline assessments captured.",
    },
    {
      n: 4,
      title: "Ongoing partnership",
      body: "Termly reports, tournament entries, pathway tracking — sustained.",
    },
  ];

  const partnerSchools = [
    "Emerald International School",
    "Cairo American College",
    "New Cairo British",
    "Modern English School",
    "Hayah International",
    "British International School",
  ];

  const stats = [
    { value: 60, suffix: "+", label: "Partner Schools" },
    { value: 1600, label: "Students Reached" },
    { value: 14, label: "Governorates" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO
        path="/schools"
        title="Schools Programme — The Maker"
        description="Bringing The Maker's football methodology into Egypt's classrooms and playgrounds — a nationwide schools programme for grassroots football development."
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Schools Programme", path: "/schools" },
        ])}
      />

      {/* Hero */}
      <section
        aria-labelledby="schools-hero-heading"
        className="relative overflow-hidden bg-[#0F172A] text-white py-24 md:py-28"
      >
        <GradientMesh variant="green-slate" opacity={0.55} />
        <GrainOverlay opacity={0.05} />
        <motion.div
          initial={initial}
          animate="visible"
          variants={fadeUp}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        >
          <span className="text-[#16A34A] font-bold text-sm tracking-widest uppercase block mb-4">
            For school leaders
          </span>
          <h1
            id="schools-hero-heading"
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            The Maker Schools Programme
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Bringing The Maker's methodology into Egypt's classrooms and playgrounds —
            structured football inside the school day.
          </p>
        </motion.div>
      </section>

      {/* Overview */}
      <MotionSection
        ariaLabelledby="overview-heading"
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              id="overview-heading"
              className="text-3xl font-bold text-[#0F172A] mb-6"
            >
              Overview
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              The Maker is introducing its Training Programme across selected schools in
              Egypt. Through this initiative, we manage and develop football programmes
              within school environments — helping student-athletes grow while embracing
              The Maker's philosophy of empowering both sports and education.
            </p>
            <div className="p-6 bg-[#F0FDF4] rounded-xl border border-[#16A34A]/20 mb-8">
              <h3 className="font-bold text-[#16A34A] mb-2">
                Emerald Education Partnership
              </h3>
              <p className="text-sm text-[#0F172A]/80">
                A strategic partnership giving us access to thousands of students
                nationwide.
              </p>
            </div>
            <MagneticButton>
              <Link to="/scouts">
                <Button>Request a Consultation</Button>
              </Link>
            </MagneticButton>
          </div>
          <div className="rounded-xl overflow-hidden h-[400px] shadow-md">
            <img
              src="https://i.ibb.co/xKg9957Q/IMG-6942.jpg"
              alt="Students training under The Maker's schools programme"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </MotionSection>

      {/* Stats strip */}
      <section
        aria-label="Programme reach"
        className="relative overflow-hidden bg-[#F8FAFC] py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <MotionStat
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  className="text-5xl font-bold text-[#15803D]"
                  labelClassName="mt-2 text-sm uppercase tracking-widest text-gray-500 font-bold"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <MotionSection
        ariaLabelledby="benefits-heading"
        className="max-w-7xl mx-auto px-4 py-24"
      >
        <div className="text-center mb-14">
          <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-3">
            What schools get
          </span>
          <h2
            id="benefits-heading"
            className="text-4xl font-bold text-[#0F172A] mb-4"
          >
            Built for the modern Egyptian school
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A complete, embeddable football programme — designed to slot into your school
            calendar without disrupting academic priorities.
          </p>
        </div>

        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((b) => (
            <MotionCard
              key={b.title}
              glass="light"
              className="rounded-2xl p-6"
              as="article"
            >
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{b.body}</p>
            </MotionCard>
          ))}
        </motion.div>
      </MotionSection>

      {/* How it works */}
      <section
        aria-labelledby="howitworks-heading"
        className="relative overflow-hidden bg-[#0F172A] text-white py-24"
      >
        <GradientMesh variant="green-slate" opacity={0.4} />
        <GrainOverlay opacity={0.04} />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-[#16A34A] font-bold text-sm tracking-widest uppercase block mb-3">
              How it works
            </span>
            <h2
              id="howitworks-heading"
              className="text-4xl font-bold mb-4"
            >
              From first call to ongoing partnership
            </h2>
          </motion.div>

          <motion.ol
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((s) => (
              <motion.li
                key={s.n}
                variants={fadeUp}
                className="glass-dark rounded-2xl p-6"
              >
                <div
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center font-bold mb-4"
                >
                  {s.n}
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{s.body}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Testimonial */}
      <MotionSection
        ariaLabelledby="testimonial-heading"
        className="max-w-4xl mx-auto px-4 py-24"
      >
        <h2 id="testimonial-heading" className="sr-only">
          Partner testimonial
        </h2>
        <MotionCard
          glass="light"
          className="rounded-2xl p-8 md:p-12 border border-[#16A34A]/15"
        >
          <p className="text-xl md:text-2xl text-[#0F172A] leading-relaxed font-light mb-6">
            "Working with The Maker turned our PE sessions into a real player-development
            pipeline. Our students train with intention now — and we can see it on the
            pitch."
          </p>
          <footer className="text-sm">
            <span className="font-bold text-[#0F172A] block">
              Headteacher, Emerald International School
            </span>
            <span className="text-gray-500">Partner since 2024</span>
          </footer>
        </MotionCard>
      </MotionSection>

      {/* Partner schools marquee */}
      <section
        aria-label="Partner schools"
        className="py-16 bg-[#F8FAFC] border-y border-gray-100"
      >
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-bold mb-6">
          Partner schools
        </p>
        <MarqueeStrip
          ariaLabel="Partner schools working with The Maker"
          speed={45}
        >
          {partnerSchools.map((name) => (
            <span
              key={name}
              className="font-bold text-lg md:text-xl text-gray-500 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </MarqueeStrip>
      </section>

      {/* Final CTA */}
      <section
        aria-labelledby="cta-heading"
        className="relative overflow-hidden bg-[#0F172A] text-white py-24"
      >
        <GradientMesh variant="green" opacity={0.55} />
        <GrainOverlay opacity={0.05} />
        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="relative z-10 max-w-3xl mx-auto px-4 text-center"
        >
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Bring The Maker to your school
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">
            Book a discovery call. We'll walk you through the curriculum, the calendar
            fit, and the pathway your students unlock.
          </p>
          <MagneticButton>
            <Link to="/contact">
              <Button size="lg">Request a Consultation</Button>
            </Link>
          </MagneticButton>
        </motion.div>
      </section>
    </div>
  );
};
