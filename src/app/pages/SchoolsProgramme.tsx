import React from "react";
import { Button } from "../components/ui/Button";

export const SchoolsProgramme = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
        <section className="bg-[#0F172A] text-white py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold mb-6">The Maker Schools Programme</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">Bringing The Maker’s methodology into Egypt’s classrooms and playgrounds.</p>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Overview</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        The Maker is introducing its Training Programme across selected schools in Egypt. Through this initiative, we manage and develop football programmes within school environments — helping student-athletes grow while embracing The Maker’s philosophy of empowering both sports and education.
                    </p>
                    <div className="p-6 bg-[#F0FDF4] rounded-xl border border-[#16A34A]/20 mb-8">
                        <h3 className="font-bold text-[#16A34A] mb-2">Emerald Education Partnership</h3>
                        <p className="text-sm text-[#0F172A]/80">A strategic partnership giving us access to thousands of students nationwide.</p>
                    </div>
                    <Button>Request a Consultation</Button>
                </div>
                 <div className="bg-gray-100 rounded-xl h-[400px] flex items-center justify-center text-gray-400">
                    <img src="https://i.ibb.co/xKg9957Q/IMG-6942.jpg" alt="Schools Programme" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
        </section>
    </div>
  );
};
