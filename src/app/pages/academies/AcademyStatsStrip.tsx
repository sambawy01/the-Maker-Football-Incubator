import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  MapPin,
  GraduationCap,
  Layers,
  CalendarDays,
  Globe2,
} from "lucide-react";
import { MotionStat } from "../../components/ui/motion";
import { fadeUpSm, stagger } from "../../../lib/motion";

interface StatCard {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean;
  }>;
  /** Numeric value for the count-up. If absent, falls back to `text`. */
  numeric?: { value: number; suffix?: string; prefix?: string };
  /** Text fallback (for non-numeric stats like "7 yrs"). */
  text?: string;
  label: string;
}

// Six credibility numbers, sized to a 2×3 / 3×2 / 6×1 grid (parity with
// /scouts and /camps). Numbers are public-facing claims The Maker has made
// in prior batches — preserved here.
const STATS: StatCard[] = [
  { icon: Users, numeric: { value: 150, suffix: "+" }, label: "Active scholars" },
  { icon: MapPin, numeric: { value: 16 }, label: "Governorates covered" },
  { icon: GraduationCap, numeric: { value: 100, suffix: "%" }, label: "Scholarship pathway" },
  { icon: Layers, numeric: { value: 4 }, label: "Holistic pillars" },
  { icon: CalendarDays, text: "7 yrs", label: "Operating" },
  { icon: Globe2, numeric: { value: 2 }, label: "European partners" },
];

export const AcademyStatsStrip: React.FC = () => {
  const reduced = useReducedMotion();
  return (
    <section
      aria-labelledby="academy-stats-heading"
      className="bg-white border-y border-gray-100 py-16 md:py-20"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 id="academy-stats-heading" className="sr-only">
          The Maker Academy at a glance
        </h2>
        <motion.ul
          role="list"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          variants={stagger}
          initial={reduced ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.li
                key={stat.label}
                variants={fadeUpSm}
                className="bg-[#F8FAFC] rounded-xl border border-gray-100 p-5 md:p-6 text-center transition-colors hover:border-[#16A34A]/40"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#16A34A]/10 text-[#16A34A] mb-3">
                  <Icon size={20} aria-hidden={true} />
                </div>
                {stat.numeric ? (
                  <MotionStat
                    value={stat.numeric.value}
                    prefix={stat.numeric.prefix}
                    suffix={stat.numeric.suffix}
                    label={stat.label}
                    className="text-[#0F172A] font-bold text-2xl md:text-3xl leading-tight"
                    labelClassName="mt-1 text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wide"
                  />
                ) : (
                  <>
                    <div className="text-[#0F172A] font-bold text-2xl md:text-3xl leading-tight">
                      {stat.text}
                    </div>
                    <div className="mt-1 text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default AcademyStatsStrip;
