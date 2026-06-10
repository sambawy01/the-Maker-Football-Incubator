import React from "react";
import { Button } from "../../components/ui/Button";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import type { Camp } from "../../../lib/camps";

interface CampCardProps {
  camp: Camp;
}

// Season pill colour mapping. We keep them on-brand (green/slate) rather
// than chasing a rainbow palette — readability beats decoration here.
const SEASON_PILL: Record<Camp["season"], string> = {
  Winter: "bg-[#16A34A]/10 text-[#15803D] border-[#15803D]/30",
  Summer: "bg-[#15803D]/15 text-white border-[#15803D]/60",
  International: "bg-[#0F172A] text-white border-[#0F172A]/60",
  "Year-Round": "bg-gray-100 text-[#0F172A] border-gray-200",
};

/**
 * Single camp card surface — used inside the FeaturedCamps grid.
 *
 * Compositionally: season pill, name, tagline, meta row (dates/location/
 * duration), spots-remaining progress bar (a real <progressbar> role for
 * AT), price-from, top-4 inclusions, CTA. Highlight ribbon renders only
 * when `camp.highlight` is set.
 */
export const CampCard: React.FC<CampCardProps> = ({ camp }) => {
  const spotsPct = Math.max(
    0,
    Math.min(100, Math.round((camp.spotsRemaining / camp.totalSpots) * 100)),
  );
  // Scarcity colouring — red when under 25% spots left.
  const scarce = spotsPct <= 25;

  return (
    <article
      className="relative group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-200 hover:border-[#16A34A] hover:-translate-y-1 hover:shadow-xl flex flex-col"
    >
      {camp.highlight && (
        <div
          className="absolute top-0 right-0 z-10 px-3 py-1.5 rounded-bl-2xl bg-[#15803D] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md"
          aria-label={`${camp.highlight} camp`}
        >
          <Sparkles size={12} aria-hidden={true} />
          {camp.highlight}
        </div>
      )}

      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Season pill + age groups */}
        <div className="flex items-center flex-wrap gap-2 mb-4">
          <span
            className={`inline-block px-2.5 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${SEASON_PILL[camp.season]}`}
          >
            {camp.season}
          </span>
          <span className="text-xs text-gray-600 font-medium">
            {camp.ageGroups.join(" · ")}
          </span>
        </div>

        <h3 className="text-[#0F172A] text-xl md:text-2xl font-bold leading-tight mb-2">
          {camp.name}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
          {camp.tagline}
        </p>

        {/* Meta row — dates / location / duration */}
        <ul className="space-y-2 text-sm text-gray-700 mb-5">
          <li className="flex items-center gap-2">
            <Calendar size={14} aria-hidden={true} className="text-[#15803D] flex-shrink-0" />
            <span>{camp.dates}</span>
          </li>
          <li className="flex items-center gap-2">
            <MapPin size={14} aria-hidden={true} className="text-[#15803D] flex-shrink-0" />
            <span>{camp.location}</span>
          </li>
          <li className="flex items-center gap-2">
            <Clock size={14} aria-hidden={true} className="text-[#15803D] flex-shrink-0" />
            <span>{camp.duration}</span>
          </li>
        </ul>

        {/* Spots remaining — real progressbar role */}
        <div className="mb-5">
          <div className="flex items-center justify-between text-xs font-medium text-gray-700 mb-1.5">
            <span className="inline-flex items-center gap-1.5">
              <Users size={12} aria-hidden={true} />
              {camp.spotsRemaining} of {camp.totalSpots} spots left
            </span>
            {scarce && (
              <span className="text-red-600 font-bold uppercase tracking-wider">
                Filling fast
              </span>
            )}
          </div>
          <div
            className="h-2 rounded-full bg-gray-100 overflow-hidden"
            role="progressbar"
            aria-valuenow={camp.totalSpots - camp.spotsRemaining}
            aria-valuemin={0}
            aria-valuemax={camp.totalSpots}
            aria-label={`${camp.spotsRemaining} of ${camp.totalSpots} spots remaining`}
          >
            <div
              className={`h-full rounded-full transition-all ${scarce ? "bg-red-500" : "bg-[#16A34A]"}`}
              style={{ width: `${100 - spotsPct}%` }}
            />
          </div>
        </div>

        {/* Price */}
        <div className="mb-5">
          <span className="text-xs text-gray-600 uppercase tracking-wider font-medium">
            From
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[#0F172A] text-2xl md:text-3xl font-bold">
              {camp.priceFrom.toLocaleString("en-EG")}
            </span>
            <span className="text-sm text-gray-600 font-medium">
              EGP
              {camp.season === "Year-Round" ? " / month" : ""}
            </span>
          </div>
        </div>

        {/* Inclusions — top 4 only on the card */}
        <ul className="space-y-1.5 mb-6">
          {camp.inclusions.slice(0, 4).map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-gray-700"
            >
              <CheckCircle2
                size={14}
                aria-hidden={true}
                className="text-[#16A34A] flex-shrink-0 mt-0.5"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Button
          as="a"
          href={`#register?camp=${camp.id}`}
          variant="primary"
          className="w-full mt-auto"
          aria-label={`Apply for ${camp.name}`}
        >
          Apply for this camp
        </Button>
      </div>
    </article>
  );
};

export default CampCard;
