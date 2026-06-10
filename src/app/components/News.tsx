import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "./ui/Link";
import { fadeUp, stagger, defaultViewport } from "@/lib/motion";

const newsItems = [
  {
    id: 1,
    title: "Mido Appointed Sporting Director at Enosis Paralimni FC",
    date: "12 Oct 2025",
    category: "Partnership",
    color: "bg-[#16A34A]",
    image: "https://i.ibb.co/v6rbyq0F/Screenshot-2026-02-17-at-9-51-04-PM.png",
    excerpt: "A strategic move that opens a direct pathway for The Maker’s scholars to European football.",
    link: "https://www.kingfut.com/2025/06/07/mido-joins-enosis-neon-paralimniou-in-scouting-and-recruitment-role/"
  },
  {
    id: 2,
    title: "The Maker U-16 Squad Wins National Schools Tournament",
    date: "28 Sep 2025",
    category: "Tournament",
    color: "bg-[#15803D]",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHNvY2NlciUyMHRlYW0lMjBsaWZ0aW5nJTIwdHJvcGh5fGVufDF8fHx8MTc3MTM0MjYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "Dominant performance sees our young talents take home the trophy against 160 competing teams."
  },
  {
    id: 3,
    title: "New Podcast Episode: Shikabala on Loyalty and Passion",
    date: "15 Sep 2025",
    category: "Podcast",
    color: "bg-[#0F172A]",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZXxlbnwxfHx8fDE3NzEzNDI2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "The legendary Apache joins Mido and Yousra for a record-breaking episode reaching 20M views."
  }
];

export const News = () => {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section
      aria-labelledby="news-heading"
      className="py-24 bg-[#F8FAFC]"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#15803D] font-bold text-sm tracking-widest uppercase block mb-2">
              Latest News
            </span>
            <h2
              id="news-heading"
              className="text-[#0F172A] text-4xl font-bold"
            >
              Stories from The Maker
            </h2>
          </div>
          <Link
            to="/news"
            className="hidden md:flex text-[#16A34A] font-bold items-center hover:underline"
          >
            View All News <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={stagger}
          initial={initial}
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Featured Item (First) */}
          <motion.a
            href={newsItems[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-2 group cursor-pointer block"
            variants={fadeUp}
            whileHover={reduced ? undefined : { scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-sm">
              <img
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <span
                  className={`${newsItems[0].color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block`}
                >
                  {newsItems[0].category}
                </span>
                <h3 className="text-white text-3xl font-bold mb-4 leading-tight group-hover:text-[#16A34A] transition-colors">
                  {newsItems[0].title}
                </h3>
                <p className="text-white/85 text-lg mb-4 max-w-xl">
                  {newsItems[0].excerpt}
                </p>
                <div className="flex items-center text-white/75 text-sm">
                  <Calendar size={14} className="mr-2" /> {newsItems[0].date}
                </div>
              </div>
            </div>
          </motion.a>

          {/* Side Items */}
          <div className="flex flex-col gap-8">
            {newsItems.slice(1).map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow group cursor-pointer"
                variants={fadeUp}
                whileHover={reduced ? undefined : { y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${item.color} text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[#0F172A] font-bold text-lg mb-3 leading-tight group-hover:text-[#16A34A] transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-auto flex justify-between items-center border-t border-gray-100 pt-4">
                    <span className="text-gray-600 text-xs flex items-center">
                      <Calendar size={12} className="mr-1" /> {item.date}
                    </span>
                    <span className="text-[#16A34A] text-xs font-bold flex items-center">
                      Read More <ArrowRight size={12} className="ml-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 text-center md:hidden">
          <Link
            to="/news"
            className="inline-flex text-[#16A34A] font-bold items-center hover:underline"
          >
            View All News <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
