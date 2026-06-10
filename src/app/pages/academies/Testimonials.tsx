import React from "react";
import { Button } from "../../components/ui/Button";
import { MessageCircleHeart } from "lucide-react";

/**
 * Testimonials — single "Coming Soon" empty-state card.
 *
 * We deliberately avoid fabricated parent quotes — that pattern reads as
 * AI slop and torches credibility with the very audience we're courting
 * (Egyptian families researching the academy). When real parent stories
 * have been recorded with consent, this section will be replaced with the
 * curated grid.
 */
export const Testimonials: React.FC = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#F8FAFC] py-20 md:py-24"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#16A34A]/10 text-[#16A34A] mb-6">
            <MessageCircleHeart size={28} aria-hidden={true} />
          </div>
          <span className="inline-block text-[#15803D] font-bold text-xs tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            Family Stories — Coming Soon
          </span>
          <h2
            id="testimonials-heading"
            className="text-[#0F172A] text-2xl md:text-3xl font-bold mb-4 leading-tight"
          >
            We're documenting our scholar families' journeys.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            If you're a Maker parent and would like to share your child's
            experience, we'd love to feature your story — with full control
            over what's published.
          </p>
          <Button
            as="a"
            href="/contact"
            variant="primary"
            size="lg"
            aria-label="Share your story with The Maker"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
