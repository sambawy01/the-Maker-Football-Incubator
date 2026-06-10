import React from "react";
import { ShieldCheck, BarChart3, Globe } from "lucide-react";

interface ValueProp {
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  title: string;
  description: string;
}

const PROPS: ValueProp[] = [
  {
    icon: ShieldCheck,
    title: "Verified Talent Pipeline",
    description:
      "Every scholar tracked since intake. Full data trail — scouting source, trial scores, attribute progression, coach notes.",
  },
  {
    icon: BarChart3,
    title: "Performance-First Reporting",
    description:
      "Live stats, video library, match tagging, and attribute progression — not a marketing brochure.",
  },
  {
    icon: Globe,
    title: "Direct European Pathway",
    description:
      "Active partnerships with Enosis Paralimni (Cyprus) and SC Farense (Portugal). Real placement, not promises.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-white py-20 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-[#D97706] font-bold text-xs md:text-sm tracking-widest uppercase block mb-3">
            Why Scouts Choose The Maker
          </span>
          <h2
            id="why-choose-heading"
            className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-4"
          >
            Three things we won't compromise on.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PROPS.map((prop) => {
            const Icon = prop.icon;
            return (
              <div
                key={prop.title}
                className="bg-[#F8FAFC] rounded-2xl border border-gray-100 p-6 md:p-8 transition-all hover:border-[#16A34A]/40 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#16A34A]/10 text-[#16A34A] mb-5">
                  <Icon size={28} aria-hidden={true} />
                </div>
                <h3 className="text-[#0F172A] text-xl font-bold mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
