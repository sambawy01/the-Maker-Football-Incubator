import React, { useState } from "react";
import { Link } from "../components/ui/Link";
import { Search, MapPin, Filter } from "lucide-react";
import { players } from "../../lib/players";
import { SEO } from "../components/SEO";
import { breadcrumbJsonLd } from "../../lib/jsonld";

export const Players = () => {
  const [filterAge, setFilterAge] = useState("All");
  const [filterPos, setFilterPos] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPlayers = players.filter(p => {
    return (
      (filterAge === "All" || p.ageGroup === filterAge) &&
      (filterPos === "All" || p.positionCategory === filterPos) &&
      (p.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="animate-fade-in-up">
      <SEO
        path="/players"
        title="Our Scholars — The Maker Football Incubator"
        description="Meet the young athletes selected from 14+ Egyptian governorates, training daily at The Maker to achieve their European football dream."
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Players", path: "/players" },
        ])}
      />
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#0F172A]">
        <img
            src="https://i.ibb.co/bM7F1wGm/GIO-6493.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4">
            <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-4">
                The Future of Egyptian Football
            </span>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">OUR SCHOLARS</h1>
            <p className="text-white/80 max-w-xl mx-auto text-lg">
                Meet the talented young athletes selected from over 14 governorates, training daily to achieve their European dream.
            </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
                <div className="relative">
                    <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select 
                        className="pl-10 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                        value={filterAge}
                        onChange={(e) => setFilterAge(e.target.value)}
                    >
                        <option value="All">All Age Groups</option>
                        <option value="U-14">U-14</option>
                        <option value="U-16">U-16</option>
                        <option value="U-18">U-18</option>
                    </select>
                </div>

                <div className="relative">
                    <select 
                        className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                        value={filterPos}
                        onChange={(e) => setFilterPos(e.target.value)}
                    >
                        <option value="All">All Positions</option>
                        <option value="Goalkeeper">Goalkeeper</option>
                        <option value="Defender">Defender</option>
                        <option value="Midfielder">Midfielder</option>
                        <option value="Forward">Forward</option>
                    </select>
                </div>
            </div>

            <div className="relative w-full md:w-80">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search by name..." 
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 min-h-[600px]">
        <div className="flex justify-between items-center mb-8" aria-live="polite" aria-atomic="true">
            <div className="text-gray-600 text-sm">
                Showing <span className="font-bold text-[#0F172A]">{filteredPlayers.length}</span> Scholars
            </div>
        </div>

        {filteredPlayers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPlayers.map((p) => (
                    <Link to={`/players/${p.id}`} key={p.id} className="block group">
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative top-0 hover:-top-1 h-full flex flex-col">
                            <div className="h-[320px] overflow-hidden bg-gray-200 relative">
                                <img
                                    src={p.thumbnail}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                                    alt={`${p.name}, ${p.position} from ${p.gov}`}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                
                                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="text-[#16A34A] font-bold text-xs tracking-wider mb-1 uppercase">{p.position}</div>
                                            <h3 className="text-white font-bold text-xl leading-tight">{p.name}</h3>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white">
                                            <MapPin size={16} />
                                        </div>
                                    </div>
                                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                                        <div className="pt-4 mt-4 border-t border-white/20 flex justify-between text-white/80 text-xs">
                                            <span>{p.gov}</span>
                                            <span className="text-[#16A34A] font-bold">View Profile →</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#0F172A] text-xs font-bold px-2 py-1 rounded">
                                    {p.ageGroup}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        ) : (
            <div className="text-center py-20 text-gray-600" aria-live="polite" aria-atomic="true" role="status">
                No players found matching your criteria.
            </div>
        )}
      </div>

      {/* Alumni / Pathway Section */}
      <section className="bg-[#F8FAFC] py-24 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                <h2 className="text-[#0F172A] text-4xl font-bold mb-4">Where Our Alumni Are Now</h2>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-10 md:p-12 text-center">
                <span className="inline-block text-[#D97706] font-bold text-xs tracking-widest uppercase bg-[#D97706]/10 px-3 py-1 rounded-full mb-6">
                    Alumni Map — Coming Soon
                </span>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    We're documenting the journeys of our scholars across European clubs. Check back soon.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold px-6 py-3 rounded-lg transition-colors">
                    Get notified when we launch the alumni map
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};
