import React from "react";
import {
  Users,
  MapPin,
  Eye,
  Globe2,
  CalendarDays,
  Clock,
} from "lucide-react";

interface StatCard {
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  value: string;
  label: string;
}

const STATS: StatCard[] = [
  { icon: Users, value: "110+", label: "Active Scholars" },
  { icon: MapPin, value: "16", label: "Egyptian Governorates" },
  { icon: Eye, value: "100K+", label: "Players Scouted" },
  { icon: Globe2, value: "2", label: "European Club Partners" },
  { icon: CalendarDays, value: "Year-round", label: "Rolling Trial Calendar" },
  { icon: Clock, value: "<14 days", label: "Avg. Time-to-Trial" },
];

export const StatsStrip: React.FC = () => {
  return (
    <section
      aria-labelledby="scouts-stats-heading"
      className="bg-white border-y border-gray-100 py-16 md:py-20"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 id="scouts-stats-heading" className="sr-only">
          Scouting access at a glance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
