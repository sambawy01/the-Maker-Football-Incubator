import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { cn } from "../../lib/utils"; 
import { useLocation } from "react-router-dom";
import { NavLink } from "./ui/Link";

// --- Types ---
type DropdownItem = {
  label: string;
  href: string;
};

type NavItem = {
  type: 'link' | 'dropdown';
  label: string;
  href?: string; // for links
  items?: DropdownItem[]; // for dropdowns
  id?: string; // unique id for dropdowns
};

// --- Configuration ---
const NAV_ITEMS: NavItem[] = [
  { type: 'link', label: 'Home', href: '/' },
  { type: 'link', label: 'About', href: '/about' },
  { 
    type: 'dropdown', 
    label: 'Our Offerings', 
    id: 'offerings',
    items: [
      { label: 'Programme', href: '/programme' },
      { label: 'Football Academy', href: '/academies' },
      { label: 'Schools Programme', href: '/schools' },
    ]
  },
  { type: 'link', label: 'Players', href: '/players' },
  { 
    type: 'dropdown', 
    label: 'Competitions', 
    id: 'competitions',
    items: [
      { label: 'Tournaments', href: '/tournaments' },
      { label: 'First Team', href: '/first-team' },
      { label: 'Camps', href: '/camps' },
    ]
  },
  { 
    type: 'dropdown', 
    label: 'Media', 
    id: 'media',
    items: [
      { label: 'Podcast', href: '/podcast' },
      { label: 'News & Updates', href: '/news' },
    ]
  },
  { type: 'link', label: 'For Scouts', href: '/scouts' },
];

// --- Sub-components ---

const DesktopDropdown = ({ 
  label, 
  items, 
  isOpen, 
  onToggle, 
  onClose 
}: { 
  label: string; 
  items: DropdownItem[]; 
  isOpen: boolean; 
  onToggle: () => void;
  onClose: () => void;
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close if clicking outside THIS specific dropdown
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        type="button"
        onClick={() => {
          onToggle();
        }}
        className={cn(
          "text-white font-medium text-xs tracking-[0.5px] hover:text-[#16A34A] transition-colors flex items-center gap-1 uppercase py-4 cursor-pointer outline-none select-none",
          isOpen && "text-[#16A34A]"
        )}
      >
        {label} 
        <ChevronDown 
          size={12} 
          className={cn("transition-transform duration-200", isOpen ? "rotate-180" : "")} 
        />
      </button>

      {/* Dropdown Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 w-64 bg-[#1E293B] rounded-lg shadow-xl border border-white/5 origin-top-left z-[9999]",
          "transition-all duration-200 ease-out",
          isOpen 
            ? "opacity-100 visible translate-y-0 scale-100" 
            : "opacity-0 invisible translate-y-2 scale-95 pointer-events-none"
        )}
      >
        <div className="py-2">
          {items.map((item) => (
            <NavLink 
              key={item.href}
              to={item.href} 
              className="block px-4 py-3 text-white text-sm hover:text-[#16A34A] hover:bg-white/5 transition-colors"
              onClick={() => onClose()} // Close when a link is clicked
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdownId(null);
  }, [location]);

  return (
    <div>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px]",
          isScrolled
            ? "bg-[#0F172A] shadow-lg"
            : "bg-[#0F172A]/95 backdrop-blur-md" 
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 relative z-[51]">
            <NavLink to="/">
                <Logo />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6 relative z-[52]">
            {NAV_ITEMS.map((item) => {
              if (item.type === 'link') {
                return (
                  <NavLink 
                    key={item.label}
                    to={item.href} 
                    className={({isActive}: any) => cn(
                      "text-white font-medium text-xs tracking-[0.5px] hover:text-[#16A34A] transition-colors relative group uppercase", 
                      isActive && "text-[#16A34A]"
                    )}
                  >
                    {item.label}
                  </NavLink>
                );
              } else {
                return (
                  <DesktopDropdown 
                    key={item.label}
                    label={item.label}
                    items={item.items || []}
                    isOpen={activeDropdownId === item.id}
                    onToggle={() => setActiveDropdownId(current => current === item.id ? null : item.id!)}
                    onClose={() => setActiveDropdownId(null)}
                  />
                );
              }
            })}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0 relative z-[51]">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs hover:bg-white/20 transition-colors border border-white/20">
              <Globe size={14} />
              <span>EN</span>
              <span className="opacity-50">|</span>
              <span className="font-arabic">عربي</span>
            </button>
            <NavLink to="/contact">
              <Button variant="primary" size="sm" className="rounded-md">
                APPLY NOW
              </Button>
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-white z-[60] relative"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Drawer */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 w-[300px] bg-[#0F172A] z-[61] shadow-2xl flex flex-col p-6 overflow-y-auto border-l border-white/10 transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <button
            className="text-white hover:text-[#16A34A] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col gap-4">
          {NAV_ITEMS.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              {item.type === 'link' ? (
                <NavLink 
                  to={item.href} 
                  className="text-white text-lg font-bold hover:text-[#16A34A] uppercase"
                >
                  {item.label}
                </NavLink>
              ) : (
                <>
                  <div className="text-[#D97706] text-xs font-bold uppercase tracking-widest mt-2 border-b border-white/10 pb-2">
                    {item.label}
                  </div>
                  {item.items?.map(subItem => (
                    <NavLink 
                      key={subItem.href}
                      to={subItem.href} 
                      className="text-gray-300 text-base ml-4 hover:text-white transition-colors py-1"
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </>
              )}
            </div>
          ))}
          
          <div className="h-px w-full bg-white/10 my-4" />
          <NavLink to="/contact" className="w-full">
            <Button className="w-full">APPLY NOW</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};