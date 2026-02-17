import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "../components/ui/Link";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from "recharts";
import { Play, MapPin, Ruler, Weight, Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/Button";

// Mock Data for a single player (In a real app, fetch by ID)
const playerData = {
  id: "1",
  name: "Youssef Ibrahim",
  position: "Attacking Midfielder",
  number: "10",
  age: 16,
  dob: "12 May 2008",
  gov: "Cairo",
  joined: 2023,
  height: "178 cm",
  weight: "68 kg",
  foot: "Right",
  bio: "Youssef is a technically gifted playmaker with exceptional vision and dribbling ability. scouted from a local tournament in Nasr City, he has quickly become the creative hub of the U-16 squad. His style is reminiscent of a young Mesut Özil, with a penchant for unlocking defenses with precise through balls.",
  coachNotes: "Has shown tremendous improvement in his defensive work rate this season. Needs to continue building physical strength to compete at the European level.",
  stats: [
    { subject: 'Technique', A: 9 },
    { subject: 'Speed', A: 7 },
    { subject: 'Vision', A: 9.5 },
    { subject: 'Strength', A: 6 },
    { subject: 'Discipline', A: 8 },
    { subject: 'Tactical', A: 8.5 },
  ],
  images: [
    "https://images.unsplash.com/photo-1674941136150-aa2f2df3e128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHNvY2NlciUyMHBsYXllciUyMGFjdGlvbiUyMHNob3QlMjBpbnRlbnNlJTIwZ2FtZXxlbnwxfHx8fDE3NzEzMzYzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1612607700962-424524700884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBydW5uaW5nfGVufDF8fHx8MTc3MTMzNjM5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1650327987377-90bf6c9789fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBiYWxsJTIwb24lMjBncmFzc3xlbnwxfHx8fDE3NzEzMzYzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ]
};

export const PlayerProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // In a real app, use the ID to fetch data. Using mock for now.
  const player = playerData; 
  
  // Rest of code...
  // Wait, I need to include the FULL content if I use write_tool.
  
  return (
    <div className="animate-fade-in-up pb-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0">
          <img 
            src={player.images[0]} 
            alt={player.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 h-full flex items-end pb-12">
            <div>
                <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                    <Link to="/" className="hover:text-white">Home</Link>
                    <ChevronRight size={14} />
                    <Link to="/players" className="hover:text-white">Players</Link>
                    <ChevronRight size={14} />
                    <span className="text-white">{player.name}</span>
                </div>
                <h1 className="text-white text-5xl md:text-7xl font-bold mb-2">{player.name}</h1>
                <div className="flex items-center gap-4">
                    <span className="text-[#16A34A] text-2xl md:text-3xl font-bold">{player.position}</span>
                    <span className="text-white/20 text-3xl">|</span>
                    <span className="text-white text-2xl md:text-3xl font-mono">#{player.number}</span>
                </div>
            </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="w-full lg:w-[30%] -mt-32 relative z-20">
                <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 sticky top-24">
                    <div className="aspect-[3/4] bg-gray-200 relative">
                        <img 
                            src="https://images.unsplash.com/flagged/photo-1568127539877-487e4825ec58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHNvY2NlciUyMHBsYXllciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTMzNzQyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                            alt={`${player.name} Portrait`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4">
                            <span className="bg-[#D97706] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                SCHOLAR SINCE {player.joined}
                            </span>
                        </div>
                    </div>
                    
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-2 gap-y-6">
                            <div>
                                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                                    <Calendar size={12} /> Age / DOB
                                </div>
                                <div className="font-bold text-[#0F172A]">{player.age} Years</div>
                                <div className="text-xs text-gray-500">{player.dob}</div>
                            </div>
                            <div>
                                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                                    <MapPin size={12} /> Origin
                                </div>
                                <div className="font-bold text-[#0F172A]">{player.gov}</div>
                            </div>
                            <div>
                                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                                    <Ruler size={12} /> Height
                                </div>
                                <div className="font-bold text-[#0F172A]">{player.height}</div>
                            </div>
                            <div>
                                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                                    <Weight size={12} /> Weight
                                </div>
                                <div className="font-bold text-[#0F172A]">{player.weight}</div>
                            </div>
                            <div>
                                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Preferred Foot</div>
                                <div className="font-bold text-[#0F172A]">{player.foot}</div>
                            </div>
                        </div>

                        <Button className="w-full gap-2">
                            Download Profile PDF
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-[70%]">
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
                    {["overview", "stats", "gallery", "video"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-4 font-bold text-sm uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
                                activeTab === tab 
                                ? "border-[#16A34A] text-[#16A34A]" 
                                : "border-transparent text-gray-400 hover:text-gray-600"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                    {activeTab === "overview" && (
                        <div className="space-y-8 animate-fade-in-up">
                            <div>
                                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Player Bio</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {player.bio}
                                </p>
                            </div>
                            <div className="bg-[#F0FDF4] p-6 rounded-xl border border-[#16A34A]/20">
                                <h3 className="text-[#16A34A] font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
                                    Coaching Staff Notes
                                </h3>
                                <p className="text-[#0F172A]/80 italic">
                                    "{player.coachNotes}"
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === "stats" && (
                        <div className="animate-fade-in-up">
                            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-12">
                                <div className="w-full md:w-1/2 h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={player.stats}>
                                            <PolarGrid />
                                            <PolarAngleAxis dataKey="subject" />
                                            <PolarRadiusAxis angle={30} domain={[0, 10]} />
                                            <Radar
                                                name={player.name}
                                                dataKey="A"
                                                stroke="#16A34A"
                                                fill="#16A34A"
                                                fillOpacity={0.6}
                                            />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Performance Metrics</h3>
                                    <div className="space-y-4">
                                        {player.stats.map((stat, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="font-medium text-gray-600">{stat.subject}</span>
                                                    <span className="font-bold text-[#0F172A]">{stat.A}/10</span>
                                                </div>
                                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                                    <div 
                                                        className="h-full bg-[#16A34A] rounded-full" 
                                                        style={{ width: `${stat.A * 10}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "gallery" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up">
                            {player.images.map((img, i) => (
                                <div key={i} className={`rounded-xl overflow-hidden h-64 ${i === 0 ? "md:col-span-2 md:h-96" : ""}`}>
                                    <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "video" && (
                        <div className="animate-fade-in-up">
                             <div className="aspect-video bg-black rounded-xl flex items-center justify-center group cursor-pointer relative overflow-hidden">
                                <img 
                                    src={player.images[0]} 
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" 
                                    alt="Video Thumbnail" 
                                />
                                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center absolute z-10 group-hover:scale-110 transition-transform">
                                    <Play size={32} className="text-white ml-1" fill="currentColor" />
                                </div>
                             </div>
                             <p className="text-center text-gray-500 mt-4">Highlight Reel: 2023/24 Season</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Related Players / More Scholars */}
        <div className="mt-24 border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-8">More Scholars from {player.gov}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                         <div className="h-48 overflow-hidden bg-gray-200 relative">
                            <img 
                                src={`https://source.unsplash.com/random/300x400?football,player&sig=${i}`} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                alt="Player"
                            />
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-[#0F172A] truncate">Ahmed Hassan</h4>
                            <div className="text-[#16A34A] text-xs font-medium">Defender</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};
