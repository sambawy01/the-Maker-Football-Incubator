import React from "react";
import { Link } from "../../components/ui/Link";
import { MapPin, ArrowRight } from "lucide-react";
import type { Player } from "../../../lib/players";

interface PipelineCardProps {
  player: Player;
}

/**
 * Pick the top-3 attributes (by score) from a player's stats radar.
 * Falls back gracefully if the list is shorter.
 */
function topStats(player: Player) {
  return [...player.stats].sort((a, b) => b.A - a.A).slice(0, 3);
}

export const PipelineCard: React.FC<PipelineCardProps> = ({ player }) => {
  const stats = topStats(player);

  return (
    <article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-200 hover:border-[#16A34A] hover:-translate-y-1 hover:shadow-xl flex flex-col">
      {/* Thumbnail */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={player.thumbnail}
          alt={`${player.name}, ${player.position}, age ${player.age}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-full bg-[#16A34A] text-white text-xs font-bold uppercase tracking-wider">
            {player.ageGroup}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/95 text-[#0F172A] text-xs font-bold">
            #{player.number}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="font-bold text-lg leading-tight drop-shadow-md">
            {player.name}
          </h3>
          <p className="text-xs text-white/90 mt-0.5">{player.position}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-gray-600 mb-4">
          <MapPin size={12} aria-hidden={true} />
          <span>{player.gov}</span>
          <span aria-hidden="true" className="text-gray-300">
            ·
          </span>
          <span>Age {player.age}</span>
          <span aria-hidden="true" className="text-gray-300">
            ·
          </span>
          <span>{player.foot}-footed</span>
        </div>

        {/* Mini stats bars */}
        <ul className="space-y-2.5 mb-5">
          {stats.map((s) => (
            <li key={s.subject}>
              <div className="flex items-center justify-between text-xs font-medium text-gray-700 mb-1">
                <span>{s.subject}</span>
                <span className="font-mono text-[#0F172A]">
                  {s.A.toFixed(1)}
                </span>
              </div>
              <div
                className="h-1.5 rounded-full bg-gray-100 overflow-hidden"
                role="progressbar"
                aria-valuenow={s.A}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label={`${s.subject}: ${s.A} out of 10`}
              >
                <div
                  className="h-full bg-[#16A34A] rounded-full"
                  style={{ width: `${(s.A / 10) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>

        <Link
          to={`/players/${player.id}`}
          className="mt-auto inline-flex items-center justify-center gap-1.5 text-sm font-bold text-[#16A34A] hover:text-[#14532d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 rounded-full px-4 py-2.5 border border-[#16A34A]/30 hover:bg-[#16A34A]/5 transition-colors"
          aria-label={`View full profile of ${player.name}`}
        >
          View full profile
          <ArrowRight size={14} aria-hidden={true} />
        </Link>
      </div>
    </article>
  );
};

export default PipelineCard;
