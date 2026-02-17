import React from "react";
import { ArrowRight, Trophy } from "lucide-react";

export const Partners = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
            Our Partners
          </span>
          <h2 className="text-[#0F172A] text-4xl font-bold">Trusted by Industry Leaders</h2>
        </div>

        {/* Tiers */}
        <div className="space-y-16">
            
            {/* Strategic */}
            <div className="text-center">
                <div className="text-[#16A34A] font-bold text-xs uppercase tracking-[0.2em] mb-6">Strategic Partner</div>
                <div className="flex justify-center">
                    <div className="h-20 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 flex items-center justify-center">
                         <span className="text-5xl font-bold text-green-600">OPPO</span>
                    </div>
                </div>
            </div>

            <div className="w-24 h-px bg-gray-100 mx-auto"></div>

            {/* Diamond */}
            <div className="text-center">
                <div className="text-blue-900 font-bold text-xs uppercase tracking-[0.2em] mb-6">Diamond Sponsor</div>
                <div className="flex justify-center">
                     <div className="h-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 flex items-center justify-center">
                         <span className="text-3xl font-bold text-blue-900">UC Developments</span>
                    </div>
                </div>
            </div>

            <div className="w-24 h-px bg-gray-100 mx-auto"></div>

             {/* Gold */}
             <div className="text-center">
                <div className="text-[#D97706] font-bold text-xs uppercase tracking-[0.2em] mb-6">Gold Sponsor</div>
                <div className="flex justify-center">
                     <div className="h-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 flex items-center justify-center">
                         <span className="text-3xl font-bold text-[#D97706]">Pasta Regina</span>
                    </div>
                </div>
            </div>

            <div className="w-24 h-px bg-gray-100 mx-auto"></div>

            {/* Official Partners */}
            <div className="text-center">
                <div className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em] mb-6">Official Partners</div>
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
                    <span className="text-xl font-bold text-gray-400">Americana Foods</span>
                    <span className="text-xl font-bold text-gray-400">Emerald Education</span>
                </div>
            </div>

            {/* European Club Partners */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 mt-12">
                <div className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em] mb-8 text-center">European Club Partners</div>
                <div className="flex justify-center gap-16 items-center">
                     <div className="text-center">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-500 font-bold">EP</div>
                        <div className="font-bold text-[#0F172A]">Enosis Paralimni</div>
                        <div className="text-xs text-gray-500">Cyprus</div>
                     </div>
                     <div className="w-px h-16 bg-gray-200"></div>
                     <div className="text-center">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-gray-500 font-bold">SCF</div>
                        <div className="font-bold text-[#0F172A]">SC Farense</div>
                        <div className="text-xs text-gray-500">Portugal</div>
                     </div>
                </div>
            </div>

            {/* As Seen In */}
             <div className="text-center pt-8">
                <div className="text-gray-300 font-bold text-xs uppercase tracking-[0.2em] mb-4">As Seen In</div>
                <div className="flex flex-wrap justify-center gap-8 text-gray-300 font-bold">
                    <span>ON TIME SPORTS</span>
                    <span>YALLAKORA</span>
                    <span>FILGOAL</span>
                </div>
            </div>

            <div className="text-center">
                <a href="/contact" className="inline-flex items-center text-[#16A34A] font-bold hover:underline">
                    Become a Partner <ArrowRight size={16} className="ml-2" />
                </a>
            </div>

        </div>
      </div>
    </section>
  );
};
