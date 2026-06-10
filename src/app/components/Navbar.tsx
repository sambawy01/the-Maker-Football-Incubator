import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { cn } from "../../lib/utils";
import { useLocation } from "react-router-dom";
import { NavLink } from "./ui/Link";
import { useFocusTrap } from "../../lib/useFocusTrap";

const FOCUS_RING = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]";

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
  id,
  isOpen,
  onToggle,
  onClose
}: {
  label: string;
  items: DropdownItem[];
  id: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = `dropdown-menu-${id}`;

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

  // Helper to get focusable menu items in DOM order
  const getMenuItems = (): HTMLElement[] => {
    if (!menuRef.current) return [];
    return Array.from(
      menuRef.current.querySelectorAll<HTMLElement>('[role="menuitem"]')
    );
  };

  // Trigger keyboard handler: ArrowDown opens & moves to first item;
  // ArrowUp opens & moves to last; Escape closes.
  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!isOpen) onToggle();
      // Defer focus until menu is rendered/open
      window.requestAnimationFrame(() => {
        const items = getMenuItems();
        items[0]?.focus();
      });
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen) onToggle();
      window.requestAnimationFrame(() => {
        const items = getMenuItems();
        items[items.length - 1]?.focus();
      });
    } else if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      onClose();
      triggerRef.current?.focus();
    }
  };

  // Menu items keyboard navigation
  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const items = getMenuItems();
    if (items.length === 0) return;
    const activeIndex = items.indexOf(document.activeElement as HTMLElement);

    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        const next = activeIndex < 0 ? 0 : (activeIndex + 1) % items.length;
        items[next].focus();
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        const prev = activeIndex <= 0 ? items.length - 1 : activeIndex - 1;
        items[prev].focus();
        break;
      }
      case "Home": {
        event.preventDefault();
        items[0].focus();
        break;
      }
      case "End": {
        event.preventDefault();
        items[items.length - 1].focus();
        break;
      }
      case "Escape": {
        event.preventDefault();
        onClose();
        triggerRef.current?.focus();
        break;
      }
      case "Tab": {
        // Closing on Tab so focus moves naturally to the next nav item.
        onClose();
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          onToggle();
        }}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        className={cn(
          "text-white font-medium text-xs tracking-[0.5px] hover:text-[#16A34A] transition-colors flex items-center gap-1 uppercase py-4 cursor-pointer outline-none select-none",
          FOCUS_RING,
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
        ref={menuRef}
        id={menuId}
        role="menu"
        aria-label={label}
        onKeyDown={handleMenuKeyDown}
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
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              className={cn(
                "block px-4 py-3 text-white text-sm hover:text-[#16A34A] hover:bg-white/5 transition-colors",
                FOCUS_RING
              )}
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
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);

  // Trap focus inside the mobile drawer while it's open
  useFocusTrap(mobileDrawerRef, isMobileMenuOpen);

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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  // Escape key closes the mobile drawer and returns focus to the trigger
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        mobileTriggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <div>
      {/* Skip to main content link (visually hidden until focused) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#16A34A] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
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
                      FOCUS_RING,
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
                    id={item.id!}
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
            <NavLink to="/contact" className={cn("rounded-md", FOCUS_RING)}>
              <Button variant="primary" size="sm" className="rounded-md">
                APPLY NOW
              </Button>
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            ref={mobileTriggerRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-drawer"
            className={cn(
              "xl:hidden text-white z-[60] relative rounded-md",
              FOCUS_RING
            )}
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
        id="mobile-menu-drawer"
        ref={mobileDrawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={cn(
          "fixed inset-y-0 right-0 w-[300px] bg-[#0F172A] z-[61] shadow-2xl flex flex-col p-6 overflow-y-auto border-l border-white/10 transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            className={cn(
              "text-white hover:text-[#16A34A] transition-colors rounded-md",
              FOCUS_RING
            )}
            onClick={() => {
              setIsMobileMenuOpen(false);
              mobileTriggerRef.current?.focus();
            }}
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
                  className={cn(
                    "text-white text-lg font-bold hover:text-[#16A34A] uppercase rounded-md",
                    FOCUS_RING
                  )}
                >
                  {item.label}
                </NavLink>
              ) : (
                <>
                  <div className="text-[#16A34A] text-xs font-bold uppercase tracking-widest mt-2 border-b border-white/10 pb-2">
                    {item.label}
                  </div>
                  {item.items?.map(subItem => (
                    <NavLink
                      key={subItem.href}
                      to={subItem.href}
                      className={cn(
                        "text-gray-300 text-base ml-4 hover:text-white transition-colors py-1 rounded-md",
                        FOCUS_RING
                      )}
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </>
              )}
            </div>
          ))}

          <div className="h-px w-full bg-white/10 my-4" />
          <NavLink to="/contact" className={cn("w-full rounded-md", FOCUS_RING)}>
            <Button className="w-full">APPLY NOW</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
