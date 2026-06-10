import React from "react";
import { ClipboardCheck, BadgeCheck, LayoutDashboard, CalendarCheck2 } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Apply for Access",
    description:
      "Submit the short request form below. We respond within 48 hours.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Verified Credentials",
    description:
      "We verify your club, academy, or agency affiliation before opening access.",
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "Get Pipeline Dashboard",
    description:
      "Encrypted access to scholar profiles, stats radars, match film, and the trial calendar.",
    icon: LayoutDashboard,
  },
  {
    number: "04",
    title: "Schedule Live Trials",
    description:
      "Watch live at our Cairo HQ or via tagged match film — your choice.",
    icon: CalendarCheck2,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-[#F8FAFC] py-20 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            How Scouting Access Works
          </span>
          <h2
            id="how-it-works-heading"
            className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-4"
          >
            From request to live trial in under two weeks.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            A transparent four-step process designed for professional scouts and
            recruiters with real timelines, real verification, and real access.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className="relative bg-white rounded-xl border border-gray-100 p-6 transition-all hover:border-[#16A34A]/40 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#16A34A]/10 text-[#16A34A]">
                    <Icon size={24} aria-hidden={true} />
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-mono font-bold text-2xl text-gray-200"
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="text-[#0F172A] font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
