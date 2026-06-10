import React from "react";
import { Button } from "../../components/ui/Button";
import { Clock, ShieldCheck, MapPin } from "lucide-react";
import { GradientMesh, MagneticButton } from "../../components/ui/motion";

export const FinalCTA: React.FC = () => {
  return (
    <section
      aria-labelledby="academies-final-cta-heading"
      className="relative bg-[#0F172A] py-20 md:py-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#15803D]/10 via-transparent to-transparent"
      />
      {/* Tech-modernity ambience layered above the static accent. */}
      <GradientMesh variant="green" animate opacity={0.4} />
      <div className="relative max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2
          id="academies-final-cta-heading"
          className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight"
        >
          Ready to join Egypt's premier youth football academy?
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
          Every application reviewed personally by our coaching staff — no
          auto-replies, no chatbots. Scholarship-funded for selected scholars.
        </p>

        <MagneticButton>
          <Button
            as="a"
            href="#apply"
            variant="primary"
            size="lg"
            aria-label="Jump to the academy application form"
          >
            Apply to the Academy
          </Button>
        </MagneticButton>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-300">
          <li className="inline-flex items-center gap-2">
            <Clock size={16} aria-hidden={true} className="text-[#16A34A]" />
            14-day response
          </li>
          <li className="inline-flex items-center gap-2">
            <ShieldCheck
              size={16}
              aria-hidden={true}
              className="text-[#16A34A]"
            />
            Free assessment
          </li>
          <li className="inline-flex items-center gap-2">
            <MapPin
              size={16}
              aria-hidden={true}
              className="text-[#16A34A]"
            />
            Open to all 16 governorates
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FinalCTA;
