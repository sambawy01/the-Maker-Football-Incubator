import React from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

// Exported so Camps.tsx can feed the same Q&A list into faqPageJsonLd —
// the visible FAQ and the schema.org FAQPage stay in lock-step.
export const FAQS: FAQ[] = [
  {
    q: "What's included in the camp fee?",
    a: "Training kit, daily meals, recovery and sports science, insurance, end-of-camp report, and a closing tournament. Sleep-away camps (Sahel, Cyprus) also include accommodation and transfers. Full quote shared at confirmation — no hidden extras.",
  },
  {
    q: "What if my child is brand new to football?",
    a: "Day 1 includes an assessment session run by our coaching staff. We place each player into the appropriate technical group so confident and new players both get the right level of challenge. No one is left behind.",
  },
  {
    q: "Can players from outside Egypt join?",
    a: "Yes. Our international and summer camps are designed for travelling players. We help coordinate flights, transfers, and accommodation, and we maintain direct communication with the parent throughout the trip.",
  },
  {
    q: "Is there a scholarship for top performers?",
    a: "Yes. Standout players are invited to interview for the year-round Maker Football Incubator, which is fully scholarship-funded. Selection is run by Mido and the coaching team — see the Programme page for details.",
  },
  {
    q: "What about safety and medical care?",
    a: "Every camp has on-site medical staff and a documented emergency protocol. Insurance is included. Supervision ratios are 1:8 or better, and parents get a direct WhatsApp line to the head coach throughout camp.",
  },
];

export const CampsFAQ: React.FC = () => {
  return (
    <section
      aria-labelledby="camps-faq-heading"
      className="bg-[#F8FAFC] py-20 md:py-24"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            Frequently Asked
          </span>
          <h2
            id="camps-faq-heading"
            className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-3"
          >
            Common parent questions
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Quick answers to what parents ask most.
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

export default CampsFAQ;
