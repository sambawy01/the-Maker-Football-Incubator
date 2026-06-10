import React from "react";
import { UserCheck, MapPin, Heart, GraduationCap } from "lucide-react";

interface Qualification {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean;
  }>;
  title: string;
  description: string;
}

const QUALIFICATIONS: Qualification[] = [
  {
    icon: UserCheck,
    title: "Age & Stage",
    description:
      "U-10 to U-18, all positions, all ability brackets that meet our selection criteria. Boys and girls.",
  },
  {
    icon: MapPin,
    title: "Anywhere in Egypt",
    description:
      "Active scouting in all 16 core governorates. Transport stipend is included for selected scholars based outside Cairo.",
  },
  {
    icon: Heart,
    title: "Commitment-First",
    description:
      "This is a year-round programme, not a seasonal camp. Academic balance is prioritised — education is one of the four pillars.",
  },
  {
    icon: GraduationCap,
    title: "No-Cost Pathway",
    description:
      "Selected scholars receive a fully-funded place: training, kit, meals, transport stipend, and education support — all included.",
  },
];

export const WhoCanJoin: React.FC = () => {
  return (
    <section
      aria-labelledby="who-can-join-heading"
      className="bg-[#F8FAFC] py-20 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            Who Can Join
          </span>
          <h2
            id="who-can-join-heading"
            className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-4"
          >
            Built for committed young players across Egypt.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Four straightforward criteria. We assess each application
            individually — there's no quota, only fit.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {QUALIFICATIONS.map((q) => {
            const Icon = q.icon;
            return (
              <li
                key={q.title}
                className="bg-white rounded-xl border border-gray-100 p-6 transition-all hover:border-[#16A34A]/40 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#16A34A]/10 text-[#16A34A] mb-4">
                  <Icon size={24} aria-hidden={true} />
                </div>
                <h3 className="text-[#0F172A] font-bold text-lg mb-2">
                  {q.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {q.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WhoCanJoin;
