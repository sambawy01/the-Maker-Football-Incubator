import React from "react";
import { motion } from "framer-motion";
import { News } from "../components/News";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/SEO";
import { breadcrumbJsonLd } from "../../lib/jsonld";
import {
  MotionSection,
  MarqueeStrip,
  GradientMesh,
  GrainOverlay,
} from "@/app/components/ui/motion";
import { fadeUp, useReducedMotion } from "@/lib/motion";

// Lightweight headline ticker — sourced from the same canonical newsroom items.
// Kept local to the page so we don't mutate the shared <News /> component.
const tickerHeadlines = [
  "Mido Appointed Sporting Director at Enosis Paralimni FC",
  "U-16 Squad Wins National Schools Tournament",
  "New Podcast: Shikabala on Loyalty and Passion",
  "Scholarship Cohort Expands to 14 Governorates",
  "European Pathway Update",
  "Latest Match Report",
];

export const NewsPage = () => {
  const reduced = useReducedMotion();

  return (
    <div className="pt-24 bg-white min-h-screen">
        <SEO
          path="/news"
          title="News & Media — The Maker"
          description="Latest updates, match reports, scholar announcements, and stories from The Maker Football Incubator."
          jsonLd={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "News", path: "/news" },
          ])}
        />

        {/* Tech-style ticker — sits above the hero */}
        <div className="bg-[#0F172A] border-b border-white/10">
            <MarqueeStrip
                ariaLabel="Latest headlines ticker"
                speed={55}
                className="py-3 text-white/80"
                gap="2.5rem"
            >
                {tickerHeadlines.map((h, i) => (
                    <span
                        key={i}
                        className="text-xs md:text-sm uppercase tracking-widest font-semibold flex items-center gap-8 whitespace-nowrap"
                    >
                        <span className="text-[#16A34A]">▌</span>
                        <span>BREAKING</span>
                        <span className="text-white">{h}</span>
                    </span>
                ))}
            </MarqueeStrip>
        </div>

        {/* Hero */}
        <section
          aria-labelledby="news-hero-heading"
          className="relative bg-[#0F172A] py-20 text-center text-white overflow-hidden"
        >
            <GradientMesh variant="slate" opacity={0.5} />
            <GrainOverlay opacity={0.04} />
            <motion.div
              initial={reduced ? false : "hidden"}
              animate="visible"
              variants={fadeUp}
              className="relative z-10"
            >
                <h1 id="news-hero-heading" className="text-5xl font-bold mb-4">News &amp; Media</h1>
                <p className="text-xl text-gray-400">Latest updates, match reports, and announcements.</p>
            </motion.div>
        </section>

        {/* Reusing the shared News grid component */}
        <News />

        <MotionSection ariaLabel="More articles" className="max-w-7xl mx-auto px-4 pb-20 text-center">
             <Button variant="secondary" className="text-[#0F172A] border-[#0F172A] hover:bg-[#0F172A] hover:text-white">
                Load More Articles
             </Button>
        </MotionSection>
    </div>
  );
};
