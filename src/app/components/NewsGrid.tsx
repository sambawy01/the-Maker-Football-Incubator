import React from 'react';
import { ArrowRight, Calendar, User, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const newsItems = [
  {
    category: 'PLAYER JOURNEY',
    title: 'From Aswan to Amsterdam: Youssef’s Story',
    date: 'February 15, 2026',
    excerpt: 'How one scholar overcame adversity and a 12-hour train journey to impress European scouts at The Maker.',
    image: 'https://images.unsplash.com/photo-1761258772695-6a6838715110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZvb3RiYWxsJTIwcGxheWVyJTIwYWN0aW9uJTIwc2hvdHxlbnwxfHx8fDE3NzEzMzYwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
  },
  {
    category: 'PARTNERSHIP',
    title: 'The Maker Signs Historic Deal with OPPO',
    date: 'January 28, 2026',
    excerpt: 'New technology partnership to bring AI-driven performance analysis to our scholars.',
    image: 'https://images.unsplash.com/photo-1712321963320-bd2ac6471bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbG93JTIwYW5nbGV8ZW58MXx8fHwxNzcxMzM2MDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
  },
  {
    category: 'TOURNAMENT',
    title: 'U17 Squad Takes Gold in Cairo Cup',
    date: 'January 10, 2026',
    excerpt: 'A dominant performance sees our academy team lift their first major trophy of the season.',
    image: 'https://images.unsplash.com/photo-1757031301094-598bdbe0cd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRlYW0lMjBjZWxlYnJhdGlvbiUyMGh1ZGRsZXxlbnwxfHx8fDE3NzEzMzYwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
  },
];

export function NewsGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="text-[#D97706] font-bold tracking-widest uppercase mb-2 text-sm">Latest News</div>
            <h2 className="text-[#0F172A] text-4xl font-bold">Stories from The Maker</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#16A34A] font-bold hover:text-[#15803d] transition-colors group">
            VIEW ALL NEWS 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-[600px]">
          {/* Featured Item */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-full">
            <ImageWithFallback
              src={newsItems[0].image}
              alt={newsItems[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <span className="inline-block bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                {newsItems[0].category}
              </span>
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight group-hover:text-[#16A34A] transition-colors">
                {newsItems[0].title}
              </h3>
              <p className="text-gray-300 text-lg mb-6 line-clamp-2 max-w-[80%]">
                {newsItems[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-gray-400 text-sm font-medium">
                <span className="flex items-center gap-2"><Calendar size={16} /> {newsItems[0].date}</span>
                <span className="flex items-center gap-2 group-hover:text-white transition-colors underline decoration-[#16A34A] decoration-2 underline-offset-4">Read Story <ArrowRight size={16} /></span>
              </div>
            </div>
          </div>

          {/* Side Items */}
          <div className="lg:col-span-1 flex flex-col gap-8 h-full">
            {newsItems.slice(1).map((item, index) => (
              <div key={index} className="flex-1 bg-white rounded-2xl overflow-hidden shadow-md group border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-[#16A34A] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide shadow-md">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-[#0F172A] text-xl font-bold mb-3 leading-tight group-hover:text-[#16A34A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-gray-400 text-xs flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                    <span className="text-[#16A34A] text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read More <ArrowRight size={12} /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
