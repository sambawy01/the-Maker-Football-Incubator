import React from "react";
import { Button } from "../components/ui/Button";

export const Camps = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">THE MAKER CAMPS</h1>
        <p className="text-xl text-gray-400 mb-12">Football meets adventure. Training meets vacation.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-2">Sahel Summer Camp</h3>
                <p className="text-gray-400 mb-4">Two-week football camp on the North Coast combining vacation with professional training and mentorship from Mido.</p>
                <Button className="w-full">Register Now</Button>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-[#D97706] text-white text-xs px-2 py-1 rounded">Coming Soon</div>
                <h3 className="text-2xl font-bold mb-2">Red Sea Schools Camp</h3>
                <p className="text-gray-400 mb-4">Competition, friendship, and culture in a tropical resort setting.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-[#D97706] text-white text-xs px-2 py-1 rounded">Coming Soon</div>
                <h3 className="text-2xl font-bold mb-2">International Camp</h3>
                <p className="text-gray-400 mb-4">European exposure in Cyprus, Portugal, and Belgium.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
