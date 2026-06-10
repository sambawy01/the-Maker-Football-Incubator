import React from "react";
import { CheckCircle2, BadgeDollarSign } from "lucide-react";

interface Bullet {
  title: string;
  description: string;
}

const BULLETS: Bullet[] = [
  {
    title: "Fully-funded for selected scholars",
    description:
      "Training, kit, daily meals, transport stipend, and education support — all included for the duration of the scholarship.",
  },
  {
    title: "No upfront cost for application",
    description:
      "The interest form, footage review, and trial assessment are free. No deposits, no application fees, ever.",
  },
  {
    title: "Year-round commitment in exchange",
    description:
      "Scholars commit to the full four-pillar programme. We hold ourselves accountable to that — and we ask the same of every family.",
  },
];

export const Scholarships: React.FC = () => {
  return (
    <section
      aria-labelledby="scholarships-heading"
      className="bg-white py-20 md:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Header column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#16A34A]/10 text-[#16A34A] mb-5">
              <BadgeDollarSign size={28} aria-hidden={true} />
            </div>
            <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
              Scholarship-First
            </span>
            <h2
              id="scholarships-heading"
              className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-4 leading-tight"
            >
              The academy is free for selected scholars.
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We built the Maker programme around a simple promise: talent
              should not be filtered by income. When a family commits, we
              cover the cost.
            </p>
          </div>

          {/* Bullets column */}
          <ul
            aria-label="Scholarship model"
            className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-gray-100 p-6 md:p-10 space-y-6"
          >
            {BULLETS.map((b) => (
              <li key={b.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#16A34A]/10 text-[#16A34A]">
                  <CheckCircle2 size={20} aria-hidden={true} />
                </div>
                <div>
                  <h3 className="text-[#0F172A] font-bold text-base md:text-lg mb-1">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Scholarships;
