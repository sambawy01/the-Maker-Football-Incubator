import React from "react";
import { Target, Eye, Shield, Linkedin, Globe, Briefcase, Award, Users } from "lucide-react";
import { Button } from "../components/ui/Button";
const founderImg = "https://i.ibb.co/fVZT5FCD/2c4779bd-eb40-4305-bfac-2363462551fb.jpg";
import aboutHeroImg from "../../assets/about-hero.jpg";

// NEW COMPONENT: WhoWeAre
const WhoWeAre = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/2">
                     <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-4">
                        Who We Are
                    </span>
                    <h2 className="text-[#0F172A] text-4xl font-bold mb-6">An Innovative, Pure Egyptian Football Training Programme.</h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                        The Maker is founded by legendary footballer Ahmed Hossam (Mido) and designed to uncover and nurture Egypt’s future football stars. Unlike traditional training programmes, The Maker scouts talented players from across Egypt and provides them with full scholarships, giving them the tools and support needed for a successful future in football. Built on Mido’s extensive knowledge from his international career and exposure to diverse football cultures, The Maker focuses on developing not only highly skilled athletes but also well-rounded individuals, empowering them to chase their biggest dreams.
                    </p>
                    <div className="flex gap-4 items-center">
                         <div className="bg-[#F8FAFC] px-6 py-4 rounded-lg border border-gray-100 text-center">
                            <div className="font-bold text-[#0F172A] text-xl">30</div>
                            <div className="text-xs text-gray-400 uppercase">Started</div>
                         </div>
                         <div className="text-gray-300">→</div>
                         <div className="bg-[#F8FAFC] px-6 py-4 rounded-lg border border-gray-100 text-center">
                            <div className="font-bold text-[#16A34A] text-xl">150+</div>
                            <div className="text-xs text-gray-400 uppercase">Scholars</div>
                         </div>
                         <div className="text-gray-300">→</div>
                         <div className="bg-[#F8FAFC] px-6 py-4 rounded-lg border border-gray-100 text-center">
                            <div className="font-bold text-[#D97706] text-xl">16</div>
                            <div className="text-xs text-gray-400 uppercase">Cities</div>
                         </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                         <img 
                            src={founderImg}
                            alt="Mido with players"
                            className="w-full h-full object-cover"
                         />
                    </div>
                </div>
            </div>
        </section>
    )
}

// NEW COMPONENT: CSR Vision
const CSRVision = () => {
    const impacts = [
        { icon: Users, title: "Supporting Families", text: "Contributing to Egypt’s CSR initiatives and supporting parents in educating their gifted children through full scholarships." },
        { icon: Briefcase, title: "Creating an Industry", text: "Creating job opportunities within football and elevating the sport from a hobby to a thriving industry." },
        { icon: Globe, title: "Foreign Currency", text: "Facilitating player transitions to professional leagues abroad, contributing to the inflow of foreign currency." },
        { icon: Award, title: "Certifications", text: "Offering licenses and certifications to coaches, administrators, and performance analysts." },
    ]

    return (
        <section className="py-24 bg-white border-t border-gray-100">
             <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/3">
                        <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-4">
                            Our Impact
                        </span>
                        <h2 className="text-[#0F172A] text-4xl font-bold mb-6">Building More Than Players. Building a Nation.</h2>
                        <Button className="mt-4">Partner With Us →</Button>
                    </div>
                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {impacts.map((item, i) => (
                            <div key={i} className="bg-white border-l-4 border-[#16A34A] p-6 shadow-sm rounded-r-xl hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-[#16A34A] mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-[#0F172A] font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
        </section>
    )
}

const Timeline = () => {
  const milestones = [
    { year: "2000", title: "The Journey Begins", desc: "Mido signs his first European contract at age 17, starting a career spanning 10 top clubs.", side: "left" },
    { year: "2013", title: "Retirement & Reflection", desc: "Mido retires at 30, shifting focus to coaching and analyzing the gaps in Egyptian development.", side: "right" },
    { year: "2022", title: "The Maker is Born", desc: "Official launch of Egypt's first football incubator with a mission to build complete players.", side: "left" },
    { year: "2023", title: "Rapid Expansion", desc: "Growth to 120+ scholars and scouting across 14 cities.", side: "right" },
    { year: "2024", title: "Strategic Growth", desc: "Shark Tank Egypt investment secured. OPPO becomes Strategic Partner. Schools Tournament launched.", side: "left" },
    { year: "2025", title: "Global & Local Reach", desc: "European partnerships with Enosis Paralimni & SC Farense. First Team enters 4th Division. Cohort hits 150+.", side: "right" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#16A34A 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      <div className="max-w-[1000px] mx-auto px-4 relative">
        <h2 className="text-[#0F172A] text-4xl font-bold text-center mb-16">Our Journey</h2>
        
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#16A34A]/20"></div>

          {milestones.map((m, i) => (
            <div key={i} className={`flex items-center justify-between mb-16 w-full ${m.side === "right" ? "flex-row-reverse" : ""}`}>
              {/* Content Side */}
              <div className={`w-[45%] ${m.side === "right" ? "text-right" : "text-left"}`}>
                <div className="text-[#D97706] text-4xl font-bold font-mono mb-2">{m.year}</div>
                <h3 className="text-[#0F172A] text-xl font-bold mb-2">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </div>

              {/* Center Dot */}
              <div className="w-[10%] flex justify-center relative z-10">
                <div className="w-4 h-4 bg-[#D97706] rounded-full ring-4 ring-white shadow-md"></div>
              </div>

              {/* Empty Side */}
              <div className="w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const leaders = [
    { name: "Ahmed Hossam ‘Mido’", role: "Founder & Director • Sporting Director, Enosis Paralimni", img: founderImg },
    { name: "Yosra Elleithy", role: "People & Culture Director • Podcast Co-Host", img: "https://i.ibb.co/0p0D2p4L/PHOTO-2026-02-17-21-16-35.jpg" },
    { name: "Tamer Wasfy", role: "Managing Director", img: "https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxMjk4Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
            <span className="text-[#16A34A] font-bold text-sm tracking-widest uppercase block mb-2">
            Leadership
            </span>
            <h2 className="text-[#0F172A] text-4xl font-bold">The Team Behind The Team</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {leaders.map((leader, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all group text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-[#16A34A] transition-colors">
                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[#0F172A] text-xl font-bold mb-1">{leader.name}</h3>
              <div className="text-[#16A34A] font-medium text-sm mb-4 h-10 flex items-center justify-center">{leader.role}</div>
              <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
                Bringing decades of experience in elite football and business management.
              </p>
              <a href="#" className="inline-flex items-center text-gray-400 hover:text-[#0077B5] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero */}
      <section className="relative h-[600px] w-full flex items-end">
        <div className="absolute inset-0">
          <img 
            src={aboutHeroImg} 
            alt="The Maker Cohort" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 pb-16">
          <div className="text-white/60 text-sm mb-4">Home &gt; About</div>
          <span className="text-[#D97706] font-bold text-sm tracking-widest uppercase block mb-2">
            About The Maker
          </span>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Building Egypt’s Football Future.<br/>From the Ground Up.
          </h1>
        </div>
      </section>

      <WhoWeAre />
      <Timeline />
      <Team />
      <CSRVision />

      {/* Mission Vision Values */}
      <section className="bg-[#0F172A] py-24 text-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                {[
                    { icon: Target, title: "MISSION", text: "To develop the whole person — not just the player — preparing Egyptian talent for professional careers in Europe through comprehensive football, education, mental health, and physical development programmes." },
                    { icon: Eye, title: "VISION", text: "To build a sustainable player development model that starts locally and reaches the global stage, producing players competing in European leagues and establishing Egypt as a recognized talent pipeline." },
                    { icon: Shield, title: "VALUES", text: "Development over results. Individual care. Egyptian pride. Honesty. Family. Holistic growth." }
                ].map((item, i) => (
                    <div key={i} className="text-center px-4">
                        <div className="w-16 h-16 rounded-full bg-[#16A34A]/20 flex items-center justify-center mx-auto mb-6 text-[#16A34A]">
                            <item.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="border-t border-white/10 pt-12 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
                {["100M+ Population", "150+ Scholars", "16 Cities", "100,000+ Trials", "365K+ Followers", "2 European Partners"].map((stat, i) => (
                    <span key={i} className="text-[#D97706] font-mono text-lg md:text-xl font-bold">
                        {stat}
                    </span>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};
