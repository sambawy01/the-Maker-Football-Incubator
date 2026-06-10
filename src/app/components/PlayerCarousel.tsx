import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Link } from "./ui/Link";
import { Button } from "./ui/Button";
import { players } from "../../lib/players";
import { fadeUp, stagger, defaultViewport } from "@/lib/motion";

export const PlayerCarousel = () => {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";
  const featured = players.slice(0, 6);

  return (
    <section
      aria-labelledby="players-heading"
      className="py-24 bg-[#F8FAFC] border-t border-gray-100"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#15803D] font-bold text-sm tracking-widest uppercase block mb-2">
              Rising Stars
            </span>
            <h2
              id="players-heading"
              className="text-[#0F172A] text-4xl font-bold"
            >
              Meet Our Scholars
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous scholars"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#16A34A] hover:text-[#16A34A] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next scholars"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#16A34A] hover:text-[#16A34A] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={stagger}
          initial={initial}
          whileInView="visible"
          viewport={defaultViewport}
        >
          {featured.map((player) => (
            <motion.div
              key={player.id}
              variants={fadeUp}
              whileHover={reduced ? undefined : { y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="block"
            >
              <Link to={`/players/${player.id}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group h-[480px] relative">
                  <div className="h-[60%] relative overflow-hidden">
                    <img
                      src={player.thumbnail}
                      alt={`${player.name}, ${player.position} from ${player.gov}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                  </div>
                  <div className="p-6 absolute bottom-0 left-0 w-full h-[45%] flex flex-col justify-end bg-gradient-to-t from-white via-white to-transparent">
                    <div className="mb-auto">
                      <span className="bg-[#16A34A] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                        {player.position}
                      </span>
                    </div>
                    <h3 className="text-[#0F172A] text-2xl font-bold mb-1">
                      {player.name}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {player.gov}
                      </span>
                      <span>•</span>
                      <span>{player.age} Years</span>
                    </div>
                    <p className="text-gray-600 italic text-sm border-l-2 border-[#16A34A] pl-3">
                      {player.ageGroup} • #{player.number}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link to="/players">
            <Button className="w-64">VIEW ALL 150+ SCHOLARS</Button>
          </Link>
          <Link
            to="/scouts"
            className="text-[#15803D] font-bold hover:underline"
          >
            For Scouts: Download Player Catalogue (PDF) →
          </Link>
        </div>
      </div>
    </section>
  );
};
