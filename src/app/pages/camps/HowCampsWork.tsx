import React from "react";
import {
  Search,
  ClipboardCheck,
  CreditCard,
  CalendarCheck2,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Choose Your Camp",
    description:
      "Winter, summer, or international. Pick by age group and dates that fit your schedule.",
    icon: Search,
  },
  {
    number: "02",
    title: "Apply & Get Assessed",
    description:
      "Short application form. Our coaches review and confirm your spot within 72 hours.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Secure Your Spot",
    description:
      "Payment, medical form, and waiver. We send a welcome pack with the kit list and arrivals info.",
    icon: CreditCard,
  },
  {
    number: "04",
    title: "Show Up & Train",
    description:
      "Cairo HQ or partner venue. Daily training, recovery, video review, and progression tracking.",
    icon: CalendarCheck2,
  },
];

export const HowCampsWork: React.FC = () => {
  return (
    <section
      aria-labelledby="how-camps-work-heading"
      className="bg-[#F8FAFC] py-20 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            How Maker Camps Work
          </span>
          <h2
            id="how-camps-work-heading"
            className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-4"
          >
            From application to camp day in under a week.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            A transparent four-step process designed for parents — clear
            timelines, clear costs, clear next steps.
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

export default HowCampsWork;
