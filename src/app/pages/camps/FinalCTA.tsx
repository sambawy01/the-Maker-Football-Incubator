import React from "react";
import { Button } from "../../components/ui/Button";
import { Clock, RotateCcw, MessageSquare } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section
      aria-labelledby="camps-final-cta-heading"
      className="relative bg-[#0F172A] py-20 md:py-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#15803D]/10 via-transparent to-transparent"
      />
      <div className="relative max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2
          id="camps-final-cta-heading"
          className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight"
        >
          Ready to give your player a real season?
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
          Apply for a Maker camp today. Personally reviewed by our coaching
          staff — no marketing chatbot, no auto-reply.
        </p>

        <Button
          as="a"
          href="#register"
          variant="primary"
          size="lg"
          aria-label="Jump to the camp application form"
        >
          Apply for a Camp
        </Button>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-300">
          <li className="inline-flex items-center gap-2">
            <Clock size={16} aria-hidden={true} className="text-[#16A34A]" />
            72 hour response
          </li>
          <li className="inline-flex items-center gap-2">
            <RotateCcw
              size={16}
              aria-hidden={true}
              className="text-[#16A34A]"
            />
            Full refund up to 14 days before
          </li>
          <li className="inline-flex items-center gap-2">
            <MessageSquare
              size={16}
              aria-hidden={true}
              className="text-[#16A34A]"
            />
            Parent line during camp
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FinalCTA;
