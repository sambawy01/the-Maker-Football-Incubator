import React from "react";
import { News } from "../components/News";
import { Button } from "../components/ui/Button";

export const NewsPage = () => {
    // Reusing the News component layout for now, but in a real app would be a full listing with pagination
    // Extending it here to look like a full page
  return (
    <div className="pt-24 bg-white min-h-screen">
        <div className="bg-[#0F172A] py-20 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">News & Media</h1>
            <p className="text-xl text-gray-400">Latest updates, match reports, and announcements.</p>
        </div>
        
        {/* We can reuse the component or build a more extensive grid here */}
        <News />

        <div className="max-w-7xl mx-auto px-4 pb-20 text-center">
             <Button variant="secondary" className="text-[#0F172A] border-[#0F172A] hover:bg-[#0F172A] hover:text-white">
                Load More Articles
             </Button>
        </div>
    </div>
  );
};
