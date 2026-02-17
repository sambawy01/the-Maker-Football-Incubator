import React from "react";
import { Play } from "lucide-react";

export const Podcast = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#1E293B]">
        <section className="max-w-7xl mx-auto px-4 py-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                <div className="w-full md:w-1/2">
                    <span className="text-[#D97706] font-bold tracking-widest uppercase mb-2 block">The Maker Podcast</span>
                    <h1 className="text-5xl font-bold mb-6">Authentic stories from the heart of Egyptian football.</h1>
                    <p className="text-gray-400 text-lg mb-8">Hosted by Mido & Yousra El Leithy.</p>
                    <div className="flex gap-4">
                        <button className="bg-white text-[#0F172A] px-6 py-3 rounded-full font-bold flex items-center gap-2">
                            <Play size={20} fill="currentColor" /> Watch Latest Episode
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center border border-white/10">
                        <span className="text-gray-500">Featured Episode Thumbnail</span>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((ep) => (
                    <div key={ep} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-[#16A34A] transition-colors">
                        <div className="aspect-video bg-black/30 relative">
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                <Play size={48} className="text-white" fill="currentColor" />
                             </div>
                        </div>
                        <div className="p-4">
                            <div className="text-[#D97706] text-xs font-bold mb-1">Episode {ep}</div>
                            <h3 className="font-bold text-lg mb-2">Guest Name Here</h3>
                            <div className="text-gray-400 text-sm">A deep dive into the career of...</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  );
};
