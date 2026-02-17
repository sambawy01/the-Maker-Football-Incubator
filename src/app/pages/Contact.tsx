import React from "react";
import { Link } from "../components/ui/Link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/Button";

export const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
       
       {/* Hero Map Placeholder */}
       <div className="bg-gray-100 h-[400px] w-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0F172A]/80 z-10 flex items-center justify-center">
                 <h1 className="text-5xl font-bold text-white">GET IN TOUCH</h1>
            </div>
            {/* Abstract map graphic would go here */}
       </div>

       <div className="max-w-[1440px] mx-auto px-4 md:px-8 -mt-20 relative z-20 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Parents */}
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#16A34A]">
                    <h3 className="font-bold text-[#0F172A] text-xl mb-4">For Parents & Players</h3>
                    <p className="text-gray-500 text-sm mb-6">Learn about our scholarship track or enrol in our academy.</p>
                    <div className="space-y-3">
                         <a href="#" className="flex items-center gap-2 text-[#16A34A] font-bold text-sm">
                             <MessageCircle size={16} /> WhatsApp Us
                         </a>
                         <a href="mailto:admissions@themaker.eg" className="flex items-center gap-2 text-gray-600 hover:text-[#16A34A] text-sm">
                             <Mail size={16} /> admissions@themaker.eg
                         </a>
                    </div>
                </div>

                {/* Scouts */}
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#D97706]">
                    <h3 className="font-bold text-[#0F172A] text-xl mb-4">For Scouts & Agents</h3>
                    <p className="text-gray-500 text-sm mb-6">Access our player catalogue and discuss talent opportunities.</p>
                     <div className="space-y-3">
                         <Link to="/scouts" className="flex items-center gap-2 text-[#D97706] font-bold text-sm">
                             Go to Scouts Portal →
                         </Link>
                         <a href="mailto:scouting@themaker.eg" className="flex items-center gap-2 text-gray-600 hover:text-[#D97706] text-sm">
                             <Mail size={16} /> scouting@themaker.eg
                         </a>
                    </div>
                </div>

                {/* Sponsors */}
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
                    <h3 className="font-bold text-[#0F172A] text-xl mb-4">For Sponsors</h3>
                    <p className="text-gray-500 text-sm mb-6">Explore sponsorship tiers from Strategic Partner to Bronze.</p>
                    <div className="space-y-3">
                         <a href="mailto:partners@themaker.eg" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 text-sm">
                             <Mail size={16} /> partners@themaker.eg
                         </a>
                         <Button variant="outline-white" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full text-xs h-8">
                             Download Press Kit
                         </Button>
                    </div>
                </div>

                {/* Schools */}
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-600">
                    <h3 className="font-bold text-[#0F172A] text-xl mb-4">For Schools</h3>
                    <p className="text-gray-500 text-sm mb-6">Bring The Maker’s training methodology to your school.</p>
                    <Link to="/schools" className="flex items-center gap-2 text-teal-600 font-bold text-sm">
                         Schools Programme →
                    </Link>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-gray-100 h-[300px] rounded-xl flex items-center justify-center text-gray-400">
                    Google Map Embed Placeholder
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Visit Our HQ</h2>
                    <div className="space-y-4 text-gray-600">
                        <div className="flex gap-4">
                            <MapPin className="text-[#16A34A] shrink-0" />
                            <div>
                                <span className="font-bold block text-[#0F172A]">The Maker Headquarters</span>
                                Street 90, New Cairo<br/>Cairo, Egypt
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Phone className="text-[#16A34A] shrink-0" />
                            <div>+20 100 000 0000</div>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-100">
                        <h3 className="font-bold text-[#0F172A] mb-2">European Enquiries</h3>
                        <p className="text-sm text-gray-500">For matters related to Enosis Paralimni or SC Farense partnerships, please contact our International Relations department.</p>
                    </div>
                </div>
            </div>
       </div>

       {/* Floating WhatsApp */}
       <div className="fixed bottom-6 right-6 z-50">
           <div className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
               <MessageCircle size={32} />
           </div>
       </div>
    </div>
  );
};
