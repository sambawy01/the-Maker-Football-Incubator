import React from "react";
import { Button } from "../components/ui/Button";

// Renamed from DreamLeague to Tournaments to match the prompt
export const DreamLeague = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
        
        {/* Hero */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#0F172A]">
            <img 
                src="https://images.unsplash.com/photo-1526234577630-77b606b3421b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHNvY2NlciUyMHBsYXllcnMlMjBjZWxlYnJhdGluZyUyMHRvdXJuYW1lbnQlMjB3aW58ZW58MXx8fHwxNzcxMzM2OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tournament Celebration"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative z-10 text-center px-4">
                 <h1 className="text-white text-5xl font-bold mb-4">THE MAKER TOURNAMENTS</h1>
                 <p className="text-white/80 text-xl">Bringing competition, discovery, and community together.</p>
            </div>
        </section>

        {/* Schools Tournament */}
        <section className="py-24 bg-white">
             <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
                        In Partnership with Emerald Education & Ministry of Education
                    </span>
                    <h2 className="text-[#0F172A] text-4xl font-bold mb-6">The Maker Schools Tournament</h2>
                </div>

                {/* Stats Banner */}
                <div className="bg-[#16A34A] rounded-xl p-8 mb-12 text-white flex flex-wrap justify-between items-center text-center gap-8">
                    <div>
                        <div className="text-4xl font-bold mb-1">60+</div>
                        <div className="text-sm opacity-80 uppercase tracking-wider">Schools</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-1">1,600</div>
                        <div className="text-sm opacity-80 uppercase tracking-wider">Players</div>
                    </div>
                     <div>
                        <div className="text-4xl font-bold mb-1">160</div>
                        <div className="text-sm opacity-80 uppercase tracking-wider">Teams</div>
                    </div>
                     <div>
                        <div className="text-4xl font-bold mb-1">4,500+</div>
                        <div className="text-sm opacity-80 uppercase tracking-wider">Attendees</div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            Launched in February, The Maker Schools Tournament is the first major school event of its kind, starting a long-term mission to nurture grassroots talent directly from the playground.
                        </p>
                        <div className="flex gap-4">
                            <Button>Register Your School</Button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="h-48 bg-gray-200 rounded-lg"></div>
                        <div className="h-48 bg-gray-200 rounded-lg"></div>
                    </div>
                </div>

                <div className="mt-12 flex items-center justify-center gap-12 grayscale opacity-60">
                    <span className="font-bold text-2xl">OPPO</span>
                    <span className="font-bold text-xl">Americana Foods</span>
                </div>
             </div>
        </section>

        {/* Ramadan Tournament */}
        <section className="py-24 bg-[#F8FAFC]">
             <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                 <h2 className="text-[#0F172A] text-4xl font-bold mb-6">Ramadan Tournament</h2>
                 <p className="text-gray-500 max-w-2xl mx-auto mb-8">
                     Our annual Ramadan event draws strong participation, media coverage, and football icons including Mido leading his own team.
                 </p>
                 <Button variant="outline-white" className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white">
                     Stay Tuned For This Year's Edition
                 </Button>
             </div>
        </section>
    </div>
  );
};
