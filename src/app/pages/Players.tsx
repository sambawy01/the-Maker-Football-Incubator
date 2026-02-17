import React, { useState } from "react";
import { Link } from "../components/ui/Link";
import { Search, MapPin, Filter } from "lucide-react";
import { Button } from "../components/ui/Button";

// Mock Data
const players = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: i % 2 === 0 ? "Youssef Ibrahim" : "Omar Fayed",
  position: i % 3 === 0 ? "Goalkeeper" : i % 3 === 1 ? "Defender" : "Midfielder",
  ageGroup: i % 2 === 0 ? "U-16" : "U-18",
  gov: i % 4 === 0 ? "Cairo" : "Alexandria",
  image: `https://source.unsplash.com/random/400x500?football,player&sig=${i}`
}));

export const Players = () => {
  const [filterAge, setFilterAge] = useState("All");
  const [filterPos, setFilterPos] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPlayers = players.filter(p => {
    return (
      (filterAge === "All" || p.ageGroup === filterAge) &&
      (filterPos === "All" || p.position === filterPos) &&
      (p.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="animate-fade-in-up">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#0F172A]">
        <img 
            src="https://images.unsplash.com/photo-1752614654887-0b8d59c076b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXJzJTIwYWN0aW9uJTIwc2hvdCUyMGNvbXBvc2l0ZXxlbnwxfHx8fDE3NzEzMzc0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Players Hero"
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
                        <option value="U-10">U-10</option>
                        <option value="U-12">U-12</option>
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
        <div className="flex justify-between items-center mb-8">
            <div className="text-gray-500 text-sm">
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
                                    src={p.image} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                                    alt={p.name}
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
            <div className="text-center py-20 text-gray-500">
                No players found matching your criteria.
            </div>
        )}
      </div>

      {/* Alumni / Pathway Section */}
      <section className="bg-[#F8FAFC] py-24 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                <h2 className="text-[#0F172A] text-4xl font-bold mb-4">Where Are They Now?</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Tracking the journey of our graduates as they take their first steps into professional football in Europe and Egypt.
                </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                    <div className="bg-indigo-50 rounded-xl aspect-video flex items-center justify-center text-indigo-300 font-bold text-xl border-2 border-dashed border-indigo-100">
                        Interactive World Map Visualization
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Global Pathways</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-[#0F172A]">Karim Zaki</h4>
                                <p className="text-sm text-gray-500 mb-1">Trial at <span className="text-[#16A34A] font-semibold">Rio Ave FC (Portugal)</span></p>
                                <p className="text-xs text-gray-400 italic">"The preparation I received at The Maker made the transition seamless."</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-[#0F172A]">Mohamed Ali</h4>
                                <p className="text-sm text-gray-500 mb-1">Signed with <span className="text-[#16A34A] font-semibold">Zamalek SC U-18</span></p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-100">
                        <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">For Scouts</div>
                        <div className="flex gap-4">
                            <Button variant="primary">Download Catalogue</Button>
                            <Button variant="outline-white" className="border-gray-300 text-gray-600 hover:bg-gray-50">Contact Dept</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
