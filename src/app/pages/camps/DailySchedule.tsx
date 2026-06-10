import React from "react";
import {
  Sunrise,
  Dumbbell,
  Apple,
  Utensils,
  ClipboardList,
  Trophy,
  Moon,
  Bed,
} from "lucide-react";

interface Slot {
  time: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
}

// One representative day at camp. Times are training-camp realistic and
// designed to surface "this is serious, not a holiday" — but also to
// reassure parents (real meals, real recovery, real bedtime).
const SLOTS: Slot[] = [
  {
    time: "07:00",
    title: "Wake & Breakfast",
    description: "Balanced breakfast prepped by our sports nutritionist.",
    icon: Sunrise,
  },
  {
    time: "08:30",
    title: "Morning Session — Technical",
    description: "First touch, passing patterns, finishing under pressure.",
    icon: Dumbbell,
  },
  {
    time: "11:00",
    title: "Recovery & Snack",
    description: "Stretch, hydrate, refuel. Cold therapy on training days.",
    icon: Apple,
  },
  {
    time: "13:00",
    title: "Lunch",
    description: "Hot meal with the squad. Coaches eat with the players.",
    icon: Utensils,
  },
  {
    time: "14:30",
    title: "Tactical Chalk Talk",
    description: "Video review of yesterday plus today's tactical theme.",
    icon: ClipboardList,
  },
  {
    time: "16:00",
    title: "Afternoon Session — Games",
    description: "Small-sided games applying the morning's technical work.",
    icon: Trophy,
  },
  {
    time: "19:30",
    title: "Dinner & Wind-Down",
    description: "Family-style dinner. Then quiet hour with phones away.",
    icon: Moon,
  },
  {
    time: "21:30",
    title: "Lights Out",
    description: "Sleep is part of the programme. Coaches enforce it.",
    icon: Bed,
  },
];

export const DailySchedule: React.FC = () => {
  return (
    <section
      aria-labelledby="daily-schedule-heading"
      className="bg-[#0F172A] py-20 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-14">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            A Day at Camp
          </span>
          <h2
            id="daily-schedule-heading"
            className="text-white text-3xl md:text-4xl font-bold mb-4"
          >
            What a typical training day looks like.
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Two pitch sessions, structured recovery, tactical study, and real
            sleep. We treat youth football like the pro game it leads to.
          </p>
        </div>

        {/* Timeline list. The left rail (vertical line + dots) is purely
            decorative; AT users get a plain ordered list with time and
            title. */}
        <ol className="relative space-y-4 md:space-y-5">
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10 hidden sm:block"
          />
          {SLOTS.map((slot) => {
            const Icon = slot.icon;
            return (
              <li
                key={slot.time}
                className="relative bg-[#1E293B] rounded-xl border border-white/10 p-4 md:p-5 flex items-start gap-4 transition-colors hover:border-[#15803D]/40"
              >
                <div
                  aria-hidden="true"
                  className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#16A34A]/15 text-[#16A34A] z-10"
                >
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-1">
                    <span className="font-mono text-[#16A34A] font-bold text-sm md:text-base">
                      {slot.time}
                    </span>
                    <h3 className="text-white font-bold text-base md:text-lg leading-tight">
                      {slot.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {slot.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default DailySchedule;
