import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "./ui/Link";
import { fadeUp, stagger, defaultViewport } from "@/lib/motion";

export const Pillars = () => {
  const reduced = useReducedMotion();

  const pillars = [
    {
      title: "Technical & Tactical",
      desc: "Structured daily training focused on technical excellence, tactical intelligence, and modern game understanding.",
      icon: "⚽",
    },
    {
      title: "Comprehensive Education",
      desc: "Structured e-learning through Nagwa Classes, English language, and academic support sessions.",
      icon: "📚",
    },
    {
      title: "Psychology Sessions",
      desc: "Individual and group sessions building confidence, resilience, and decision-making under pressure.",
      icon: "🧠",
    },
    {
      title: "Personalized Nutrition",
      desc: "Custom meal plans by sports nutritionists with body composition tracking and medical screenings.",
      icon: "💪",
    },
  ];

  const cardBase =
    "bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group border-l-4 border-transparent hover:border-l-[#16A34A]";

  return (
    <section
      aria-labelledby="pillars-heading"
      className="py-24 bg-[#F8FAFC]"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#15803D] font-bold text-sm tracking-widest uppercase block mb-2">
            Our Methodology
          </span>
          <h2
            id="pillars-heading"
            className="text-[#0F172A] text-4xl font-bold"
          >
            Four Pillars. One Complete Player.
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={stagger}
          initial={reduced ? "visible" : "hidden"}
          whileInView="visible"
          viewport={defaultViewport}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              className={cardBase}
              variants={fadeUp}
              whileHover={reduced ? undefined : { y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="w-16 h-16 bg-[#16A34A]/10 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-[#16A34A] group-hover:text-white transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-[#0F172A] text-xl font-bold mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            to="/programme"
            className="inline-flex items-center text-[#16A34A] font-bold hover:underline"
          >
            Explore Our Full Programme{" "}
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
