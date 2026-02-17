import React from "react";
import { Button } from "../components/ui/Button";

export const Scouts = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#0F172A] text-white">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">FOR SCOUTS & AGENTS</h1>
        <p className="text-xl text-gray-400 mb-12">Access Egypt’s most promising young talent through our professional scouting network and direct European partnerships.</p>
      </section>

      {/* Why The Maker */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
                { title: "Holistic Development", text: "4-pillar methodology producing complete players." },
                { title: "English Speakers", text: "Dedicated language programme for international readiness." },
                { title: "Culturally Prepared", text: "Education, psychology, and life skills for Europe." },
                { title: "Direct Pipeline", text: "Partnerships with Enosis Paralimni & SC Farense." }
            ].map((card, i) => (
                <div key={i} className="bg-[#1E293B] p-6 rounded-xl border-t-4 border-[#16A34A]">
                    <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                    <p className="text-gray-400 text-sm">{card.text}</p>
                </div>
            ))}
         </div>
      </section>

      {/* European Network */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Our European Network</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1E293B] p-8 rounded-xl border border-white/10 flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center font-bold">EP</div>
                  <div>
                      <h3 className="text-2xl font-bold">Enosis Paralimni</h3>
                      <p className="text-gray-400 text-sm">Mido serves as Sporting Director — a direct bridge to Europe.</p>
                  </div>
              </div>
               <div className="bg-[#1E293B] p-8 rounded-xl border border-white/10 flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center font-bold">SCF</div>
                  <div>
                      <h3 className="text-2xl font-bold">SC Farense</h3>
                      <p className="text-gray-400 text-sm">Access to Portuguese methodologies and markets.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Request Access</h2>
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="bg-[#0F172A] border border-white/20 rounded p-3 text-white w-full" />
                    <input type="text" placeholder="Organization" className="bg-[#0F172A] border border-white/20 rounded p-3 text-white w-full" />
                </div>
                 <div className="grid grid-cols-2 gap-4">
                    <input type="email" placeholder="Email" className="bg-[#0F172A] border border-white/20 rounded p-3 text-white w-full" />
                    <input type="text" placeholder="Phone" className="bg-[#0F172A] border border-white/20 rounded p-3 text-white w-full" />
                </div>
                <textarea placeholder="Message / Players of Interest" rows={4} className="bg-[#0F172A] border border-white/20 rounded p-3 text-white w-full"></textarea>
                <Button className="w-full">Submit Request</Button>
            </form>
            <p className="text-center text-gray-500 text-sm mt-4">All enquiries responded to within 48 hours.</p>
        </div>
      </section>
    </div>
  );
};
