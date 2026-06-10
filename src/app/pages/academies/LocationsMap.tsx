import React from "react";
import { Button } from "../../components/ui/Button";
import { MapPin, Building2 } from "lucide-react";
import { CORE_SCOUTING_GOVERNORATES } from "../../../lib/governorates";

/**
 * LocationsMap — HQ + 16-governorate footprint.
 *
 * Stylised chip cloud, not a rendered Egypt map — that keeps the bundle
 * lightweight and avoids licensing concerns around real geographic SVGs.
 * The HQ address mirrors localBusinessJsonLd / organizationJsonLd exactly
 * so the visible copy and the schema.org graph stay in lock-step.
 */
export const LocationsMap: React.FC = () => {
  return (
    <section
      aria-labelledby="locations-heading"
      className="bg-[#F8FAFC] py-20 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="inline-flex items-center text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#15803D]/30">
            Where We Operate
          </span>
          <h2
            id="locations-heading"
            className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-4"
          >
            One home in Cairo. Scouts across all of Egypt.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Training and education run at the Maker HQ in El Basatin, Cairo.
            Trials and scouting reach every corner of the country.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* HQ card */}
          <article
            aria-labelledby="hq-heading"
            className="lg:col-span-5 bg-white rounded-2xl border border-gray-100 p-6 md:p-8"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#16A34A]/10 text-[#16A34A] mb-5">
              <Building2 size={24} aria-hidden={true} />
            </div>
            <h3
              id="hq-heading"
              className="text-[#0F172A] text-xl md:text-2xl font-bold mb-2"
            >
              Maker HQ — El Basatin, Cairo
            </h3>
            <address className="not-italic text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Ezbet Fahmy, El Basatin
              <br />
              Cairo Governorate, 11431
              <br />
              Egypt
            </address>

            <ul role="list" className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#16A34A] flex-shrink-0"
                />
                Daily training, education, and recovery sessions
              </li>
              <li className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#16A34A] flex-shrink-0"
                />
                On-site dormitories for scholars from outside Cairo
              </li>
              <li className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#16A34A] flex-shrink-0"
                />
                Family visits welcomed by appointment
              </li>
            </ul>

            <Button
              as="a"
              href="/contact"
              variant="primary"
              size="default"
              aria-label="Plan a visit to Maker HQ"
            >
              Plan a Visit
            </Button>
          </article>

          {/* Scouting footprint — chip cloud */}
          <div
            aria-labelledby="footprint-heading"
            className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 p-6 md:p-8"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#16A34A]/10 text-[#16A34A] mb-5">
              <MapPin size={24} aria-hidden={true} />
            </div>
            <h3
              id="footprint-heading"
              className="text-[#0F172A] text-xl md:text-2xl font-bold mb-2"
            >
              Scouting footprint — 16 governorates
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Our coaching staff and partner scouts actively assess players
              across these governorates. Trials happen regionally and at HQ.
            </p>

            <ul role="list" className="flex flex-wrap gap-2 mb-6">
              {CORE_SCOUTING_GOVERNORATES.map((gov) => (
                <li
                  key={gov}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#F8FAFC] border border-gray-200 text-[#0F172A] text-xs md:text-sm font-medium hover:border-[#16A34A]/40 transition-colors"
                >
                  {gov}
                </li>
              ))}
            </ul>

            <p className="text-xs text-gray-500 leading-relaxed">
              Live in another Egyptian governorate? We still accept applications
              — just note your location on the form and we'll coordinate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;
