import React from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

// Exported so Academies.tsx can feed the same Q&A list into faqPageJsonLd —
// the visible FAQ and the schema.org FAQPage stay in lock-step.
export const FAQS: FAQ[] = [
  {
    q: "How much does the academy cost?",
    a: "Selected scholars receive a fully-funded place — there is no fee for training, kit, daily meals, transport stipend, or education support. The assessment process itself (interest form, footage review, trial) is also free. We never charge a deposit before a scholarship offer.",
  },
  {
    q: "Where is the academy located?",
    a: "The Maker HQ is in Ezbet Fahmy, El Basatin, Cairo Governorate. All training, education, and recovery sessions happen at HQ. Scouting and trials happen across all 16 core Egyptian governorates so families don't need to be in Cairo to apply.",
  },
  {
    q: "What's the time commitment?",
    a: "The academy is year-round, not seasonal. Scholars train through the academic year with periodised blocks and rest weeks. Education is one of the four pillars — we coordinate carefully with each family's school schedule and academic calendar.",
  },
  {
    q: "What if my child isn't selected?",
    a: "Every family receives written feedback from the coaching staff and can re-apply in a future intake. Our seasonal camps are an alternative pathway — strong camp performers are regularly invited to re-trial for the academy.",
  },
  {
    q: "What about education during the programme?",
    a: "Education is the second pillar of the system. Scholars continue their school curriculum through Nagwa Classes e-learning, on-campus academic support, English language sessions, and structured study time. The schedule is built around academic balance, not against it.",
  },
];

export const AcademiesFAQ: React.FC = () => {
  return (
    <section
      aria-labelledby="academies-faq-heading"
      className="bg-[#F8FAFC] py-20 md:py-24"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            Frequently Asked
          </span>
          <h2
            id="academies-faq-heading"
            className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-3"
          >
            Common family questions
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Honest answers to what parents ask most.
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

export default AcademiesFAQ;
