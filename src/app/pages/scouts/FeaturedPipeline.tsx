import React, { useMemo } from "react";
import { Link } from "../../components/ui/Link";
import { Button } from "../../components/ui/Button";
import { players, type Player } from "../../../lib/players";
import { PipelineCard } from "./PipelineCard";

/**
 * Score a player by the mean of their stats radar — used to surface
 * the top performers for the featured pipeline grid.
 */
function score(p: Player): number {
  if (!p.stats.length) return 0;
  return p.stats.reduce((sum, s) => sum + s.A, 0) / p.stats.length;
}

export const FeaturedPipeline: React.FC = () => {
  const featured = useMemo(() => {
    return [...players].sort((a, b) => score(b) - score(a)).slice(0, 4);
  }, []);

  return (
    <section
      id="pipeline"
      aria-labelledby="featured-pipeline-heading"
      className="scroll-mt-24 bg-white py-20 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[#D97706] font-bold text-xs md:text-sm tracking-widest uppercase block mb-3">
              Active Pipeline Preview
            </span>
            <h2
              id="featured-pipeline-heading"
              className="text-[#0F172A] text-3xl md:text-4xl font-bold mb-3"
            >
              Featured scholars available for scouting now.
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              A preview of our top-rated current scholars. Verified scouts get
              the full pipeline with video, full radar charts, and contact.
            </p>
          </div>
          <Link
            to="/players"
            className="hidden md:inline-block text-sm font-bold text-[#16A34A] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 rounded"
          >
            View all 12 scholars →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <PipelineCard key={p.id} player={p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/players">
            <Button variant="primary" size="lg">
              View Full Pipeline ({players.length} Scholars)
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPipeline;
