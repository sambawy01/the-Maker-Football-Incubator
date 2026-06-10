import React from "react";
import {
  ClipboardEdit,
  Video,
  Mail,
  Eye,
  Award,
  Sparkles,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean;
  }>;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Submit Interest",
    description:
      "Quick form with player basics and an optional footage link. Five minutes, no fee.",
    icon: ClipboardEdit,
  },
  {
    number: "02",
    title: "Footage Review",
    description:
      "Coaching staff review your video within 14 days. Every application read by a human.",
    icon: Video,
  },
  {
    number: "03",
    title: "Trial Invitation",
    description:
      "Selected players are invited to a regional or HQ trial. Travel guidance shared.",
    icon: Mail,
  },
  {
    number: "04",
    title: "Holistic Assessment",
    description:
      "Technical, character, academic potential, and family fit — all four pillars matter.",
    icon: Eye,
  },
  {
    number: "05",
    title: "Scholarship Decision",
    description:
      "Letter of acceptance with full programme details, dorm option, and stipend breakdown.",
    icon: Award,
  },
  {
    number: "06",
    title: "Onboarding",
    description:
      "Intake day, parent orientation, and a first-week welcome programme for new scholars.",
    icon: Sparkles,
  },
];

export const ApplicationProcess: React.FC = () => {
  return (
    <section
      aria-labelledby="application-process-heading"
      className="bg-white py-20 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            The Application Process
          </span>
          <h2
            id="application-process-heading"
            className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-4"
          >
            Six steps, designed to be honest with every family.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            More rigorous than a camp — because the commitment runs year-round.
            We tell every family where they stand at every stage.
          </p>
        </div>

        <ol
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className="relative bg-[#F8FAFC] rounded-xl border border-gray-100 p-6 transition-all hover:border-[#16A34A]/40 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#16A34A]/10 text-[#16A34A]">
                    <Icon size={24} aria-hidden={true} />
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-mono font-bold text-2xl text-gray-300"
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

export default ApplicationProcess;
