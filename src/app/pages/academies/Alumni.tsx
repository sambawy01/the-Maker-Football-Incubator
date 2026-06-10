import React from "react";
import { Plane, Trophy, ShieldCheck, Search } from "lucide-react";

interface Outcome {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean;
  }>;
  eyebrow: string;
  number: string;
  context: string;
}

// Honest, anonymised stats. We DO NOT name specific players here — many
// families have asked their child's name not be used in marketing, and
// fabricated names would torch our credibility with scouts and parents.
// Eyebrow labels (CURRENTLY / PIPELINE / CALLUPS / REACH) give the dashboard
// rhythm so the mixed value types (3 / Liga 2 / Multiple / 100K+) read
// symmetrically instead of arbitrary.
const OUTCOMES: Outcome[] = [
  {
    icon: Plane,
    eyebrow: "Currently",
    number: "3",
    context:
      "Scholars training with Enosis Paralimni FC (Cyprus 1st Division)",
  },
  {
    icon: Trophy,
    eyebrow: "Pipeline",
    number: "Liga 2",
    context:
      "Active scholarship pathway through SC Farense, Portugal",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Callups",
    number: "Multiple",
    context:
      "Egyptian national youth team callups (anonymised at family request)",
  },
  {
    icon: Search,
    eyebrow: "Reach",
    number: "100K+",
    context: "Trials reviewed across 16 governorates since 2022",
  },
];

export const Alumni: React.FC = () => {
  return (
    <section
      aria-labelledby="alumni-heading"
      className="bg-[#0F172A] py-20 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="inline-flex items-center text-[#16A34A] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            Outcomes So Far
          </span>
          <h2
            id="alumni-heading"
            className="text-white text-3xl md:text-4xl font-bold mb-4"
          >
            Where our scholars are right now.
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Anonymised by request — many of our families prefer their child not
            be named while still developing. The pathways are real and verified
            by our European partners.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {OUTCOMES.map((o) => {
            const Icon = o.icon;
            return (
              <li
                key={o.eyebrow}
                className="bg-[#1E293B] rounded-xl border border-white/10 p-6 transition-colors hover:border-[#15803D]/40"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#16A34A]/15 text-[#16A34A] mb-4">
                  <Icon size={24} aria-hidden={true} />
                </div>
                <div className="text-xs font-bold tracking-widest text-[#16A34A] uppercase mb-2">
                  {o.eyebrow}
                </div>
                <div className="text-[#16A34A] font-bold text-3xl md:text-4xl leading-tight mb-2">
                  {o.number}
                </div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  {o.context}
                </p>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-xs text-gray-400 max-w-2xl">
          Stats reflect the current academy cohort. Specific player journeys
          are shared with credentialed scouts and clubs upon{" "}
          <a
            href="/scouts"
            className="text-[#16A34A] font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] rounded"
          >
            verified scout access
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Alumni;
