import React from "react";

interface Partner {
  wordmark: string;
  flag: string;
  flagLabel: string;
  context: string;
  role: string;
  outcome: string;
}

/**
 * Partner network. We don't have rights to render the real club crests,
 * so rather than fake them with monogram gradient tiles (which read as
 * AI/Figma slop), we use an intentionally-typographic treatment:
 * flag emoji + bold wordmark + league context inside a hairline frame.
 * Signals "intentional design choice", not "fake asset".
 */
const PARTNERS: Partner[] = [
  {
    wordmark: "ENOSIS PARALIMNI",
    flag: "🇨🇾",
    flagLabel: "Cyprus flag",
    context: "Cyprus · 1st Division",
    role: "Sporting Director: Mido",
    outcome:
      "First-team scholarship pathway from Cairo to the Cypriot top flight.",
  },
  {
    wordmark: "SC FARENSE",
    flag: "🇵🇹",
    flagLabel: "Portugal flag",
    context: "Portugal · Liga Portugal 2",
    role: "Scouting Partnership",
    outcome:
      "Direct access to Portuguese youth methodology and Liga Portugal trial weeks.",
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
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
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
              key={p.wordmark}
              className="relative bg-[#1E293B] rounded-2xl border border-white/10 p-6 md:p-8 transition-colors hover:border-[#15803D]/40 overflow-hidden"
            >
              {/* Wordmark block — intentional typographic treatment, not a
                  faked crest. Flag emoji is decorative (text below already
                  states the country). */}
              <div className="mb-6 border border-white/15 rounded-lg p-6">
                <div
                  className="text-3xl mb-3 leading-none"
                  aria-hidden="true"
                >
                  {p.flag}
                </div>
                <h3 className="text-white font-bold tracking-tight text-2xl leading-tight">
                  {p.wordmark}
                </h3>
                <p className="text-slate-300 text-sm mt-2">{p.context}</p>
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
