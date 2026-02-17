import React from "react";
import { Button } from "../components/ui/Button";

export const FirstTeam = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="relative h-[500px] flex items-center justify-center bg-[#0F172A] overflow-hidden">
            <img src="https://i.ibb.co/xqd8CmDp/GIO-5938.jpg" alt="First Team" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent z-10"></div>
            <div className="relative z-20 text-center px-4">
                <span className="text-[#D97706] font-bold tracking-widest uppercase mb-4 block">A New Era Begins</span>
                <h1 className="text-white text-6xl font-bold mb-4">The Maker First Team</h1>
                <p className="text-white/80 text-xl max-w-2xl mx-auto">Our debut in Egypt’s 4th Division — more than just competition, it’s the next step in our journey.</p>
            </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Match Schedule</h2>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        {[1,2,3].map((match) => (
                            <div key={match} className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50">
                                <div className="text-sm text-gray-500">Oct {match * 5}</div>
                                <div className="font-bold text-[#0F172A]">The Maker vs. Team {match}</div>
                                <div className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">15:00</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Official Kit</h2>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex items-center justify-center h-[300px]">
                        <span className="text-gray-400">Kit Preview Interactive Display</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
