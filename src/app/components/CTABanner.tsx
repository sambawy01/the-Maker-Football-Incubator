import React from "react";
import { Link } from "./ui/Link";
import { Button } from "./ui/Button";

export const CTABanner = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-[#16A34A]">
      <img
        src="https://images.unsplash.com/photo-1556814282-3e284a7a8220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwb2YlMjBmb290YmFsbCUyMHBpdGNoJTIwc3RhZGl1bSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzEzNDI2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Stadium Aerial"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-6">Are You the Next Star?</h2>
        <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
          The Maker scouts talent from every corner of Egypt. If you dream of playing in Europe, your journey starts here.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Link to="/contact">
                 <Button variant="accent" size="lg" className="w-full sm:w-auto shadow-xl">
                    APPLY FOR TRIALS
                 </Button>
            </Link>
            <Link to="/academies">
                 <Button variant="outline-white" size="lg" className="w-full sm:w-auto">
                    ENROL IN OUR ACADEMY
                 </Button>
            </Link>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-8 text-white/70 text-sm font-medium">
             <Link to="/scouts" className="hover:text-white transition-colors underline decoration-white/30 hover:decoration-white">
                For scouts and agents: Contact our scouting department →
             </Link>
             <Link to="/contact" className="hover:text-white transition-colors underline decoration-white/30 hover:decoration-white">
                For sponsors: Partnership opportunities →
             </Link>
        </div>
      </div>
    </section>
  );
};
