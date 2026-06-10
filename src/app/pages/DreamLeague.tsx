import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";
import { eventJsonLd, breadcrumbJsonLd } from "../../lib/jsonld";
import {
  MotionSection,
  MotionCard,
  MotionStat,
  MarqueeStrip,
  GradientMesh,
  GrainOverlay,
  MagneticButton,
} from "../components/ui/motion";
import { fadeUp, stagger, slideInLeft } from "@/lib/motion";

// Renamed from DreamLeague to Tournaments to match the prompt
export const DreamLeague = () => {
  const reduced = useReducedMotion();
  const initial = reduced ? false : "hidden";

  const stats = [
    { value: 60, suffix: "+", label: "Schools" },
    { value: 1600, label: "Players" },
    { value: 160, label: "Teams" },
    { value: 4500, suffix: "+", label: "Attendees" },
  ];

  const sponsors = ["OPPO", "Americana Foods", "Emerald Education", "Ministry of Education"];
  const galleryImages = [
    { src: "https://i.ibb.co/SX1Kp6QD/GIO-6552.jpg", alt: "Tournament action shot" },
    { src: "https://i.ibb.co/hF6ZLKb9/GIO-6614.jpg", alt: "Tournament celebration" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <SEO
        path="/tournaments"
        title="Tournaments — The Maker"
        description="The Maker Schools Tournament and Ramadan Tournament — bringing competition, discovery, and community together across Egyptian football."
        jsonLd={[
          eventJsonLd({
            name: "The Maker Schools Tournament",
            description:
              "The first major school football event of its kind in Egypt — 60+ schools, 160 teams, 1,600 players, in partnership with Emerald Education and the Ministry of Education.",
            locationName: "Cairo, Egypt",
            url: "https://sambawy01.github.io/the-Maker-Football-Incubator/tournaments",
          }),
          eventJsonLd({
            name: "The Maker Ramadan Tournament",
            description:
              "Annual Ramadan tournament drawing strong participation, media coverage, and football icons — including founder Mido leading his own team.",
            locationName: "Cairo, Egypt",
            url: "https://sambawy01.github.io/the-Maker-Football-Incubator/tournaments",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Tournaments", path: "/tournaments" },
          ]),
        ]}
      />

      {/* Hero */}
      <section
        aria-labelledby="tournaments-hero-heading"
        className="relative h-[460px] flex items-center justify-center overflow-hidden bg-[#0F172A]"
      >
        <img
          src="https://i.ibb.co/hF6ZLKb9/GIO-6614.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <GradientMesh variant="green-slate" opacity={0.55} />
        <GrainOverlay opacity={0.05} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/30 via-transparent to-[#0F172A]/70" />

        <motion.div
          initial={initial}
          animate="visible"
          variants={fadeUp}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#16A34A] font-bold text-sm tracking-widest uppercase block mb-4">
            Competition · Discovery · Community
          </span>
          <h1
            id="tournaments-hero-heading"
            className="text-white text-5xl md:text-6xl font-bold mb-4"
          >
            THE MAKER TOURNAMENTS
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto">
            Bringing competition, discovery, and community together.
          </p>
        </motion.div>
      </section>

      {/* Schools Tournament */}
      <MotionSection
        ariaLabelledby="schools-tournament-heading"
        className="py-24 bg-white"
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#15803D] font-bold text-sm tracking-widest uppercase block mb-2">
              In Partnership with Emerald Education & Ministry of Education
            </span>
            <h2
              id="schools-tournament-heading"
              className="text-[#0F172A] text-4xl font-bold mb-6"
            >
              The Maker Schools Tournament
            </h2>
          </div>

          {/* Stats Banner — animated counters with brand-green progress feel */}
          <div className="relative overflow-hidden bg-[#16A34A] rounded-2xl p-8 mb-12 text-white">
            <GrainOverlay opacity={0.04} />
            <motion.div
              initial={initial}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="relative z-10 flex flex-wrap justify-between items-center text-center gap-8"
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeUp} className="flex-1 min-w-[120px]">
                  <MotionStat
                    value={s.value}
                    suffix={s.suffix}
                    label={s.label}
                    className="text-4xl md:text-5xl font-bold"
                    labelClassName="text-sm opacity-80 uppercase tracking-wider mt-1"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Launched in February, The Maker Schools Tournament is the first major school
                event of its kind, starting a long-term mission to nurture grassroots talent
                directly from the playground.
              </p>
              <div className="flex gap-4">
                <MagneticButton>
                  <Button>Register Your School</Button>
                </MagneticButton>
              </div>
            </div>
            <motion.div
              initial={initial}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="w-full md:w-1/2 grid grid-cols-2 gap-4"
            >
              {galleryImages.map((img) => (
                <motion.div
                  key={img.src}
                  variants={fadeUp}
                  whileHover={reduced ? undefined : { scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="h-48 rounded-xl overflow-hidden shadow-md"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Sponsor marquee */}
          <div className="mt-16">
            <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-bold mb-6">
              Partners & Sponsors
            </p>
            <MarqueeStrip
              ariaLabel="Tournament partners and sponsors"
              speed={40}
              className="py-2"
            >
              {sponsors.map((name) => (
                <span
                  key={name}
                  className="font-bold text-xl md:text-2xl text-gray-400 grayscale opacity-80 whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </MarqueeStrip>
          </div>
        </div>
      </MotionSection>

      {/* Standings preview — animated row reveals (glass cards on dark) */}
      <section
        aria-labelledby="standings-heading"
        className="relative py-24 overflow-hidden bg-[#0F172A] text-white"
      >
        <GrainOverlay opacity={0.04} />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 md:px-8">
          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <span className="text-[#16A34A] font-bold text-sm tracking-widest uppercase block mb-3">
              Live from the pitch
            </span>
            <h2 id="standings-heading" className="text-4xl font-bold mb-3">
              Standings Snapshot
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              A sample of the leaderboard from our last edition — a glimpse at the level
              of competition The Maker tournaments produce.
            </p>
          </motion.div>

          <motion.ol
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="space-y-3"
            aria-label="Sample tournament standings"
          >
            {[
              { rank: 1, team: "Emerald International School", pts: 24, w: 8 },
              { rank: 2, team: "Cairo American College", pts: 21, w: 7 },
              { rank: 3, team: "New Cairo British", pts: 19, w: 6 },
              { rank: 4, team: "Modern English School", pts: 16, w: 5 },
              { rank: 5, team: "Hayah International", pts: 14, w: 4 },
            ].map((row) => {
              const widthPct = Math.round((row.pts / 24) * 100);
              return (
                <motion.li
                  key={row.rank}
                  variants={slideInLeft}
                  className="glass-dark rounded-xl p-4 flex items-center gap-4"
                >
                  <span
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      row.rank === 1
                        ? "bg-[#0F172A] text-white ring-2 ring-[#16A34A]"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {row.rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <span className="font-bold truncate">{row.team}</span>
                      <span className="text-xs uppercase tracking-wider text-white/60 shrink-0">
                        {row.w} W · {row.pts} pts
                      </span>
                    </div>
                    <div
                      className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden"
                      role="presentation"
                    >
                      <motion.div
                        className="h-full bg-[#16A34A] rounded-full"
                        initial={reduced ? { width: `${widthPct}%` } : { width: 0 }}
                        whileInView={{ width: `${widthPct}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </section>

      {/* Past tournament gallery */}
      <MotionSection
        ariaLabelledby="gallery-heading"
        className="py-24 bg-[#F8FAFC]"
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2
              id="gallery-heading"
              className="text-[#0F172A] text-4xl font-bold mb-3"
            >
              From Past Editions
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Moments from our previous tournaments — the noise, the talent, the future.
            </p>
          </div>

          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              "https://i.ibb.co/SX1Kp6QD/GIO-6552.jpg",
              "https://i.ibb.co/hF6ZLKb9/GIO-6614.jpg",
              "https://i.ibb.co/SX1Kp6QD/GIO-6552.jpg",
              "https://i.ibb.co/hF6ZLKb9/GIO-6614.jpg",
            ].map((src, i) => (
              <MotionCard
                key={i}
                className="rounded-xl overflow-hidden h-44 md:h-56"
              >
                <img
                  src={src}
                  alt={`Tournament highlight ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </MotionCard>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      {/* Ramadan Tournament */}
      <section
        aria-labelledby="ramadan-heading"
        className="relative py-24 overflow-hidden bg-[#0F172A] text-white"
      >
        <GradientMesh variant="slate" opacity={0.5} />
        <GrainOverlay opacity={0.05} />
        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 text-center"
        >
          <span className="text-[#16A34A] font-bold text-sm tracking-widest uppercase block mb-3">
            Annual Tradition
          </span>
          <h2 id="ramadan-heading" className="text-4xl font-bold mb-6">
            Ramadan Tournament
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our annual Ramadan event draws strong participation, media coverage, and
            football icons — including Mido leading his own team.
          </p>
          <MagneticButton>
            <Button
              variant="outline-white"
              className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white"
            >
              Stay Tuned For This Year's Edition
            </Button>
          </MagneticButton>
        </motion.div>
      </section>
    </div>
  );
};
