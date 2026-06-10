import React from "react";
import { Link, NavLink } from "./ui/Link";
import { Logo } from "./ui/Logo";
import { Instagram, Facebook, Linkedin, Youtube, Music2, MapPin, Mail, Phone } from "lucide-react";

const SOCIAL_LINKS = [
  { Icon: Instagram, href: "https://www.instagram.com/themaker.eg/", label: "Follow on Instagram" },
  { Icon: Facebook, href: "https://www.facebook.com/themaker.eg/", label: "Follow on Facebook" },
  { Icon: Youtube, href: "https://www.youtube.com/channel/UCcN8N56wyeXMpQhYohTHUGQ", label: "Subscribe on YouTube" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/the-maker-eg", label: "Connect on LinkedIn" },
  { Icon: Music2, href: "https://www.tiktok.com/@themaker.eg", label: "Follow on TikTok" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-8 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
                 <Logo />
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Egypt’s Football Incubator.<br/>Make Your Mark.
            </p>
            <div className="flex gap-3 mb-4">
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                    <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                    >
                        <Icon size={14} />
                    </a>
                ))}
            </div>
            <div className="text-[#16A34A] font-bold text-sm">365K+ followers</div>
          </div>

          {/* Col 2: Programme */}
          <div>
            <h4 className="font-bold text-white mb-6">PROGRAMME</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-[#16A34A] transition-colors">About Us</Link></li>
                <li><Link to="/programme" className="hover:text-[#16A34A] transition-colors">Our Methodology</Link></li>
                <li><Link to="/players" className="hover:text-[#16A34A] transition-colors">Player Development</Link></li>
                <li><Link to="/programme" className="hover:text-[#16A34A] transition-colors">Scholarship Track</Link></li>
                <li><Link to="/programme" className="hover:text-[#16A34A] transition-colors">Sports Science Center</Link></li>
                <li><Link to="/schools" className="hover:text-[#16A34A] transition-colors">Schools Programme</Link></li>
            </ul>
          </div>

          {/* Col 3: Competitions */}
          <div>
            <h4 className="font-bold text-white mb-6">COMPETITIONS & CAMPS</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link to="/tournaments" className="hover:text-[#16A34A] transition-colors">Tournaments</Link></li>
                <li><Link to="/first-team" className="hover:text-[#16A34A] transition-colors">First Team</Link></li>
                <li><Link to="/camps" className="hover:text-[#16A34A] transition-colors">Sahel Summer Camp</Link></li>
                <li><Link to="/camps" className="hover:text-[#16A34A] transition-colors">International Camp</Link></li>
                <li><Link to="/tournaments" className="hover:text-[#16A34A] transition-colors">Ramadan Tournament</Link></li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4 className="font-bold text-white mb-6">CONNECT</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link to="/scouts" className="hover:text-[#16A34A] transition-colors">For Scouts & Agents</Link></li>
                <li><Link to="/contact" className="hover:text-[#16A34A] transition-colors">For Parents</Link></li>
                <li><Link to="/contact" className="hover:text-[#16A34A] transition-colors">For Sponsors</Link></li>
                <li><Link to="/contact" className="hover:text-[#16A34A] transition-colors">Careers</Link></li>
                <li><Link to="/news" className="hover:text-[#16A34A] transition-colors">Press Kit</Link></li>
                <li><Link to="/podcast" className="hover:text-[#16A34A] transition-colors">The Maker Podcast</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">CONTACT</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex gap-3">
                    <Mail size={16} className="text-[#16A34A] shrink-0" />
                    info@themaker.eg
                </li>
                <li className="flex gap-3">
                    <Phone size={16} className="text-[#16A34A] shrink-0" />
                    +20 109 404 5658
                </li>
                <li className="flex gap-3">
                    <MapPin size={16} className="text-[#16A34A] shrink-0" />
                    <span>
                        The Maker HQ<br/>
                        New Cairo, Egypt
                    </span>
                </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">European Partners</div>
                <div className="flex gap-4">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-[8px] font-bold">EP</div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-[8px] font-bold">SCF</div>
                </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div>&copy; 2026 The Maker Football Incubator. All rights reserved.</div>
            <div className="flex gap-6">
                <NavLink to="/privacy" className="hover:text-white">Privacy Policy</NavLink>
                <NavLink to="/terms" className="hover:text-white">Terms of Service</NavLink>
            </div>
        </div>
      </div>
    </footer>
  );
};
