import React from "react";
import { Button } from "../../components/ui/Button";
import { Clock, ShieldCheck, BadgeCheck } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative bg-[#0F172A] py-20 md:py-24 overflow-hidden"
    >
      {/* Subtle green accent. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#16A34A]/10 via-transparent to-transparent"
      />
      <div className="relative max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2
          id="final-cta-heading"
          className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight"
        >
          Ready to scout Egypt's next generation?
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
          Verified scouts get pipeline access within 48 hours. No fee, no
          friction.
        </p>

        <a href="#request-access" aria-label="Jump to request scout access form">
          <Button variant="primary" size="lg">
            Request Scout Access
          </Button>
        </a>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-300">
          <li className="inline-flex items-center gap-2">
            <Clock size={16} aria-hidden={true} className="text-[#16A34A]" />
            48 hour response
          </li>
          <li className="inline-flex items-center gap-2">
            <BadgeCheck size={16} aria-hidden={true} className="text-[#16A34A]" />
            No fee
          </li>
          <li className="inline-flex items-center gap-2">
            <ShieldCheck size={16} aria-hidden={true} className="text-[#16A34A]" />
            Verified scouts only
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FinalCTA;
