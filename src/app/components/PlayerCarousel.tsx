import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Link } from "./ui/Link";
import { Button } from "./ui/Button";

const players = [
  {
    id: 1,
    name: "Youssef Ibrahim",
    position: "Midfielder",
    age: "16",
    city: "Cairo",
    quote: "The Maker taught me that football is played with the mind first.",
    image: "https://images.unsplash.com/photo-1674941136150-aa2f2df3e128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHNvY2NlciUyMHBsYXllciUyMGFjdGlvbiUyMHNob3QlMjBpbnRlbnNlJTIwZ2FtZXxlbnwxfHx8fDE3NzEzMzYzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "Omar Fayed",
    position: "Defender",
    age: "15",
    city: "Alexandria",
    quote: "Every training session pushes me closer to my European dream.",
    image: "https://images.unsplash.com/photo-1612607700962-424524700884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBydW5uaW5nfGVufDF8fHx8MTc3MTMzNjM5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    position: "Forward",
    age: "14",
    city: "Mansoura",
    quote: "They care about my education as much as my goals.",
    image: "https://images.unsplash.com/photo-1650327987377-90bf6c9789fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBiYWxsJTIwb24lMjBncmFzc3xlbnwxfHx8fDE3NzEzMzYzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "Karim Zaki",
    position: "Goalkeeper",
    age: "17",
    city: "Giza",
    quote: "The specialized goalkeeper training here is world-class.",
    image: "https://images.unsplash.com/flagged/photo-1568127539877-487e4825ec58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHNvY2NlciUyMHBsYXllciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTMzNzQyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export const PlayerCarousel = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
           <div>
              <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
                Rising Stars
              </span>
              <h2 className="text-[#0F172A] text-4xl font-bold">Meet Our Scholars</h2>
           </div>
           <div className="flex gap-2">
               <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#16A34A] hover:text-[#16A34A] transition-colors">
                   <ChevronLeft size={20} />
               </button>
               <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#16A34A] hover:text-[#16A34A] transition-colors">
                   <ChevronRight size={20} />
               </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {players.map((player) => (
                <div key={player.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-[480px] relative">
                    <div className="h-[60%] relative overflow-hidden">
                        <img src={player.image} alt={player.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                    </div>
                    <div className="p-6 absolute bottom-0 left-0 w-full h-[45%] flex flex-col justify-end bg-gradient-to-t from-white via-white to-transparent">
                        <div className="mb-auto">
                            <span className="bg-[#16A34A] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                                {player.position}
                            </span>
                        </div>
                        <h3 className="text-[#0F172A] text-2xl font-bold mb-1">{player.name}</h3>
                        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                            <span className="flex items-center gap-1"><MapPin size={12} /> {player.city}</span>
                            <span>•</span>
                            <span>{player.age} Years</span>
                        </div>
                        <p className="text-gray-500 italic text-sm border-l-2 border-[#D97706] pl-3">
                            "{player.quote}"
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-16 text-center flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/players">
                <Button className="w-64">VIEW ALL 150+ SCHOLARS</Button>
            </Link>
            <Link to="/scouts" className="text-[#D97706] font-bold hover:underline">
                For Scouts: Download Player Catalogue (PDF) →
            </Link>
        </div>
      </div>
    </section>
  );
};
