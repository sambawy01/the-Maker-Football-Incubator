import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "./ui/Link";

export const Pillars = () => {
  const pillars = [
    {
      title: "Football Skills",
      desc: "Advanced technical and tactical training inspired by European methodologies.",
      icon: "⚽",
    },
    {
      title: "Education",
      desc: "English language courses + comprehensive academic curriculum.",
      icon: "📚",
    },
    {
      title: "Mental Strength",
      desc: "1-on-1 and group psychology sessions led by specialists.",
      icon: "🧠",
    },
    {
      title: "Physical Development",
      desc: "Personalized nutrition plans + quarterly medical screenings.",
      icon: "💪",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
            Our Methodology
          </span>
          <h2 className="text-[#0F172A] text-4xl font-bold">Four Pillars. One Complete Player.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border-l-4 border-transparent hover:border-l-[#16A34A]">
              <div className="w-16 h-16 bg-[#16A34A]/10 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-[#16A34A] group-hover:text-white transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-[#0F172A] text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/programme" className="inline-flex items-center text-[#16A34A] font-bold hover:underline">
            Explore Our Full Programme <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
