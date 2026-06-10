import React from "react";
import { camps } from "../../../lib/camps";
import { CampCard } from "./CampCard";

/**
 * FeaturedCamps — the catalogue grid. Lives under #upcoming-camps so the
 * hero "See Upcoming Dates" CTA can deep-link to it. The grid is 1-col on
 * mobile and 2-col on tablet+; we cap at 2-up to give each card room to
 * breathe (lots of meta on each).
 */
export const FeaturedCamps: React.FC = () => {
  return (
    <section
      id="upcoming-camps"
      aria-labelledby="upcoming-camps-heading"
      tabIndex={-1}
      className="scroll-mt-24 bg-white py-20 md:py-24 focus:outline-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-14">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            Upcoming Camps
          </span>
          <h2
            id="upcoming-camps-heading"
            className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-3"
          >
            Pick the camp that fits your season.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            All camps are led by Maker incubator coaching staff. Prices are
            from-prices — full quotes are shared at confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {camps.map((camp) => (
            <CampCard key={camp.id} camp={camp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCamps;
