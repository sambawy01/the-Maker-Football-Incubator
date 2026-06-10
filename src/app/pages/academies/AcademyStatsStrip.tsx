import React from "react";
import {
  Users,
  MapPin,
  GraduationCap,
  Layers,
  CalendarDays,
  Globe2,
} from "lucide-react";

interface StatCard {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean;
  }>;
  value: string;
  label: string;
}

// Six credibility numbers, sized to a 2×3 / 3×2 / 6×1 grid (parity with
// /scouts and /camps). Numbers are public-facing claims The Maker has made
// in prior batches — preserved here.
const STATS: StatCard[] = [
  { icon: Users, value: "150+", label: "Active scholars" },
  { icon: MapPin, value: "16", label: "Governorates covered" },
  { icon: GraduationCap, value: "100%", label: "Scholarship pathway" },
  { icon: Layers, value: "4", label: "Holistic pillars" },
  { icon: CalendarDays, value: "7 yrs", label: "Operating" },
  { icon: Globe2, value: "2", label: "European partners" },
];

export const AcademyStatsStrip: React.FC = () => {
  return (
    <section
      aria-labelledby="academy-stats-heading"
      className="bg-white border-y border-gray-100 py-16 md:py-20"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 id="academy-stats-heading" className="sr-only">
          The Maker Academy at a glance
        </h2>
        <ul
          role="list"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <li
                key={stat.label}
                className="bg-[#F8FAFC] rounded-xl border border-gray-100 p-5 md:p-6 text-center transition-colors hover:border-[#16A34A]/40"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#16A34A]/10 text-[#16A34A] mb-3">
                  <Icon size={20} aria-hidden={true} />
                </div>
                <div className="text-[#0F172A] font-bold text-2xl md:text-3xl leading-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AcademyStatsStrip;
