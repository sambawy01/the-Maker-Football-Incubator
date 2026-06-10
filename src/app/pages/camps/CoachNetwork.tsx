import React from "react";
import { User, Star } from "lucide-react";

interface Coach {
  name: string;
  role: string;
  credential: string;
  bio: string;
}

const COACHES: Coach[] = [
  {
    name: "Ahmed 'Mido' Hossam",
    role: "Founder & Programme Director",
    credential: "Former Egypt international · Ex-Tottenham, Roma, Ajax",
    bio: "AFCON top scorer. Built and runs the Maker pathway personally. Attends key sessions and selection days.",
  },
  {
    name: "Hossam Hassan",
    role: "Head of Coaching",
    credential: "UEFA A licence · 12 years youth football",
    bio: "Designs the weekly periodisation across all camps. Oversees session quality and player progression.",
  },
  {
    name: "Dr. Yasmin Adel",
    role: "Performance Lead",
    credential: "FIFA-certified S&C · MSc Sports Science",
    bio: "Runs strength, conditioning, recovery, and on-site medical for every camp cohort.",
  },
];

/**
 * CoachNetwork — staff credentials block. We render abstract avatar tiles
 * (User icon inside a brand-green circle) because we don't have rights-
 * cleared photos of every coach. When real photography lands, swap the
 * placeholder for an <img> with proper alt text.
 */
export const CoachNetwork: React.FC = () => {
  return (
    <section
      aria-labelledby="coach-network-heading"
      className="bg-white py-20 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-14">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            Meet the Coaching Staff
          </span>
          <h2
            id="coach-network-heading"
            className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-4"
          >
            Real credentials. Real careers. Real time on the pitch.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Camps are led by the same incubator staff who run our year-round
            programme — not seasonal hires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {COACHES.map((coach) => (
            <article
              key={coach.name}
              className="bg-[#F8FAFC] rounded-2xl border border-gray-100 p-6 md:p-8 transition-all hover:border-[#16A34A]/40 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Avatar tile — abstract placeholder, replaceable with photo. */}
              <div
                aria-hidden="true"
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#16A34A]/10 text-[#16A34A] mb-5"
              >
                <User size={32} />
              </div>
              <h3 className="text-[#0F172A] text-xl font-bold mb-1">
                {coach.name}
              </h3>
              <p className="text-[#15803D] text-sm font-bold uppercase tracking-wide mb-3">
                {coach.role}
              </p>
              <p className="flex items-start gap-1.5 text-xs text-gray-700 font-medium mb-3 leading-relaxed">
                <Star
                  size={12}
                  aria-hidden={true}
                  className="text-[#16A34A] flex-shrink-0 mt-0.5"
                />
                <span>{coach.credential}</span>
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {coach.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachNetwork;
