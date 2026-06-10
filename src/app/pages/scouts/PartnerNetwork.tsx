import React from "react";
import { MapPin } from "lucide-react";

interface Partner {
  monogram: string;
  name: string;
  country: string;
  role: string;
  outcome: string;
  accentFrom: string;
  accentTo: string;
}

const PARTNERS: Partner[] = [
  {
    monogram: "EP",
    name: "Enosis Paralimni FC",
    country: "Cyprus",
    role: "Sporting Director: Mido",
    outcome:
      "First-team scholarship pathway from Cairo to the Cypriot top flight.",
    accentFrom: "from-[#16A34A]",
    accentTo: "to-[#0F172A]",
  },
  {
    monogram: "SCF",
    name: "SC Farense",
    country: "Portugal",
    role: "Scouting Partnership",
    outcome:
      "Direct access to Portuguese youth methodology and Liga Portugal trial weeks.",
    accentFrom: "from-[#D97706]",
    accentTo: "to-[#0F172A]",
  },
];

export const PartnerNetwork: React.FC = () => {
  return (
    <section
      aria-labelledby="partner-network-heading"
      className="bg-[#0F172A] py-20 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-[#16A34A] font-bold text-xs md:text-sm tracking-widest uppercase block mb-3">
            Partner Network
          </span>
          <h2
            id="partner-network-heading"
            className="text-white text-3xl md:text-4xl font-bold mb-4"
          >
            Active European partnerships — not theoretical.
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Our scholars don't go to Europe by accident. We've built and
            maintain direct operational pathways into two professional clubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PARTNERS.map((p) => (
            <article
              key={p.name}
              className="relative bg-[#1E293B] rounded-2xl border border-white/10 p-6 md:p-8 transition-colors hover:border-[#16A34A]/40 overflow-hidden"
            >
              {/* Crest */}
              <div className="flex items-center gap-5 mb-6">
                <div
                  className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${p.accentFrom} ${p.accentTo} flex items-center justify-center text-white font-bold text-2xl shadow-lg border border-white/10`}
                  aria-hidden="true"
                >
                  {p.monogram}
                </div>
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
                    {p.name}
                  </h3>
                  <p className="flex items-center gap-1.5 text-gray-300 text-sm mt-1">
                    <MapPin size={12} aria-hidden={true} />
                    {p.country}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider">
                  {p.role}
                </span>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {p.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerNetwork;
