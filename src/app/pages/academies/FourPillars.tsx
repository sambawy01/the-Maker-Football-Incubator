import React from "react";
import { Link } from "../../components/ui/Link";
import { Activity, BookOpen, Apple, Users, ArrowRight } from "lucide-react";

interface Pillar {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean;
  }>;
  title: string;
  description: string;
}

// Compact teaser of the four pillars. Copy mirrors src/app/components/
// Pillars.tsx so the visible language stays consistent with what the user
// authored on /programme — we tease + redirect, not duplicate.
const PILLARS: Pillar[] = [
  {
    icon: Activity,
    title: "Technical & Tactical",
    description:
      "Structured daily training focused on technical excellence, tactical intelligence, and modern game understanding.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Education",
    description:
      "Structured e-learning through Nagwa Classes, English language, and academic support sessions.",
  },
  {
    icon: Apple,
    title: "Personalized Nutrition",
    description:
      "Custom meal plans by sports nutritionists with body composition tracking and quarterly medical screenings.",
  },
  {
    icon: Users,
    title: "Psychology & Culture",
    description:
      "Individual and group sessions building confidence, resilience, and decision-making under pressure.",
  },
];

export const FourPillars: React.FC = () => {
  return (
    <section
      id="pillars"
      aria-labelledby="four-pillars-heading"
      tabIndex={-1}
      className="scroll-mt-24 bg-white py-20 md:py-24 focus:outline-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            The Holistic System
          </span>
          <h2
            id="four-pillars-heading"
            className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-4"
          >
            Four pillars. One complete player.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Football is one part of the system. The academy works because all
            four pillars run in parallel, year-round. Quick summary here —
            deep-dive on the Programme page.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <li
                key={p.title}
                className="bg-[#F8FAFC] rounded-xl border border-gray-100 p-6 transition-all hover:border-[#16A34A]/40 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#16A34A]/10 text-[#16A34A] mb-4">
                  <Icon size={24} aria-hidden={true} />
                </div>
                <h3 className="text-[#0F172A] font-bold text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.description}
                </p>
              </li>
            );
          })}
        </ul>

        <Link
          to="/programme"
          className="inline-flex items-center gap-2 text-[#15803D] font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 rounded"
        >
          Read the full curriculum on the Programme page
          <ArrowRight size={16} aria-hidden={true} />
        </Link>
      </div>
    </section>
  );
};

export default FourPillars;
