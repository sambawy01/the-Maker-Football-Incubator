import React from "react";
import { TrendingUp, ShieldCheck, Trophy } from "lucide-react";

interface ValueProp {
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  title: string;
  description: string;
}

const PROPS: ValueProp[] = [
  {
    icon: TrendingUp,
    title: "Development-First Curriculum",
    description:
      "Built by ex-pros. Periodised, progression-tracked, and individualised. This is not a holiday camp with a logo.",
  },
  {
    icon: ShieldCheck,
    title: "Parent-Trusted Safety",
    description:
      "Medical staff on-site. Insurance included. Direct WhatsApp line to parents during camp. Supervision ratios published.",
  },
  {
    icon: Trophy,
    title: "Pro Pathway Access",
    description:
      "Top performers earn invitations to the year-round Maker incubator — fully scholarship-funded. European partners observe.",
  },
];

export const WhyMakerCamps: React.FC = () => {
  return (
    <section
      aria-labelledby="why-maker-camps-heading"
      className="bg-[#F8FAFC] py-20 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            Why Parents Choose Maker Camps
          </span>
          <h2
            id="why-maker-camps-heading"
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
                className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 transition-all hover:border-[#16A34A]/40 hover:-translate-y-1 hover:shadow-lg"
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

export default WhyMakerCamps;
