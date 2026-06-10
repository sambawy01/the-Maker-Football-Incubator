import React from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: "Are scholars under contract with The Maker?",
    a: "Most are on multi-year incubator agreements. We facilitate introductions to clubs and agents directly, and any transfer is negotiated transparently with the scholar's family.",
  },
  {
    q: "Can I scout remotely?",
    a: "Yes. Verified scouts get access to our video library, tagged match film, and weekly highlight reels — alongside live trials in Cairo when you can travel.",
  },
  {
    q: "What's the typical age range of scholars?",
    a: "Our active pipeline spans U-14 to U-18, with the strongest depth in U-16 and U-18 brackets where placement decisions are most often made.",
  },
  {
    q: "Is there a scouting fee?",
    a: "No. There is no fee for credentialed scouts, recruiters, agents, or club officials. We earn from successful placements, not gatekeeping access.",
  },
];

export const ScoutsFAQ: React.FC = () => {
  return (
    <section
      aria-labelledby="scouts-faq-heading"
      className="bg-[#F8FAFC] py-20 md:py-24"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            Frequently Asked
          </span>
          <h2
            id="scouts-faq-heading"
            className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-3"
          >
            Common scout questions
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Quick answers to what scouts ask most.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <details
              key={faq.q}
              className="group bg-white rounded-xl border border-gray-100 overflow-hidden open:border-[#16A34A]/40 open:shadow-sm"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 py-4 font-bold text-[#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 rounded-xl">
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  aria-hidden={true}
                  className="flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180 group-open:text-[#16A34A]"
                />
              </summary>
              <div className="px-5 pb-5 -mt-1 text-gray-600 text-sm md:text-base leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScoutsFAQ;
