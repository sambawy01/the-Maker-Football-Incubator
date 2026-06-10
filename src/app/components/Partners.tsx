import React from "react";
import { ArrowRight } from "lucide-react";
import { MarqueeStrip } from "./ui/motion";

interface PartnerEntry {
  name: string;
  tier: string;
  tierColor: string;
  textColor: string;
}

// Duplicated in source so the marquee loop reads as a long ribbon even before
// MarqueeStrip's internal duplication kicks in.
const partners: PartnerEntry[] = [
  { name: "OPPO", tier: "Strategic Partner", tierColor: "text-[#15803D]", textColor: "text-[#15803D]" },
  { name: "UC Developments", tier: "Diamond Sponsor", tierColor: "text-[#0F172A]", textColor: "text-[#0F172A]" },
  { name: "Regina Pasta", tier: "Gold Sponsor", tierColor: "text-[#15803D]", textColor: "text-[#15803D]" },
  { name: "Nagwa Classes", tier: "Education Sponsor", tierColor: "text-[#15803D]", textColor: "text-[#15803D]" },
];

export const Partners = () => {
  return (
    <section
      aria-labelledby="partners-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#15803D] font-bold text-sm tracking-widest uppercase block mb-2">
            Our Partners
          </span>
          <h2
            id="partners-heading"
            className="text-[#0F172A] text-4xl font-bold"
          >
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Sponsor Marquee */}
        <MarqueeStrip
          ariaLabel="Sponsor and partner organisations"
          speed={40}
          pauseOnHover
          className="py-8"
          gap="4rem"
          as="ul"
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center justify-center px-8 min-w-[220px]"
            >
              <span
                className={`${p.tierColor} font-bold text-[10px] uppercase tracking-[0.2em] mb-3`}
              >
                {p.tier}
              </span>
              <span
                className={`${p.textColor} text-3xl md:text-4xl font-bold whitespace-nowrap grayscale hover:grayscale-0 transition-all duration-500`}
              >
                {p.name}
              </span>
            </div>
          ))}
        </MarqueeStrip>

        {/* European Club Partners (kept as a focal stat) */}
        <div className="bg-[#F8FAFC] rounded-2xl p-8 mt-16">
          <div className="text-gray-600 font-bold text-xs uppercase tracking-[0.2em] mb-8 text-center">
            European Club Partners
          </div>
          <div className="flex justify-center gap-16 items-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-700 font-bold">
                EP
              </div>
              <div className="font-bold text-[#0F172A]">Enosis Paralimni</div>
              <div className="text-xs text-gray-600">Cyprus</div>
            </div>
            <div className="w-px h-16 bg-gray-200" />
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-700 font-bold">
                SCF
              </div>
              <div className="font-bold text-[#0F172A]">SC Farense</div>
              <div className="text-xs text-gray-600">Portugal</div>
            </div>
          </div>
        </div>

        {/* As Seen In */}
        <div className="text-center pt-12">
          <div className="text-gray-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">
            As Seen In
          </div>
          <MarqueeStrip
            ariaLabel="Featured in media outlets"
            speed={30}
            pauseOnHover
            className="py-2"
            gap="3rem"
            as="ul"
          >
            {[
              "ON TIME SPORTS",
              "YALLAKORA",
              "FILGOAL",
              "ON TIME SPORTS",
              "YALLAKORA",
              "FILGOAL",
            ].map((outlet, i) => (
              <span
                key={`${outlet}-${i}`}
                className="text-gray-600 font-bold whitespace-nowrap px-6"
              >
                {outlet}
              </span>
            ))}
          </MarqueeStrip>
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center text-[#16A34A] font-bold hover:underline"
          >
            Become a Partner <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
