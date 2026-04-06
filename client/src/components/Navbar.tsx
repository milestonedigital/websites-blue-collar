/*
 * DESIGN: Bold Modernism — Dark Agency Aesthetic
 * Sticky navbar with blur backdrop, logo on left, nav links center/right
 * Active section highlight, smooth scroll to sections
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ["home", "work", "about", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1B2A]/90 backdrop-blur-md border-b border-[#1E3A5F]/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 group"
        >
          <span className="font-display font-bold text-white text-lg tracking-tight">
            Websites <span className="text-gradient">Blue Collar</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-mono-label ${
                activeSection === link.href.replace("#", "")
                  ? "text-white bg-[#2563EB]/20 border border-[#2563EB]/40"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:joshwebsitesbluecollar@gmail.com"
            aria-label="Contact Websites Blue Collar"
            className="ml-4 px-5 py-2 rounded-lg agency-gradient text-white text-sm font-semibold font-mono-label shadow-lg hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D1B2A]/95 backdrop-blur-md border-b border-[#1E3A5F]/50 px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:joshwebsitesbluecollar@gmail.com"
            className="block w-full text-center mt-3 px-5 py-3 rounded-lg agency-gradient text-white font-semibold"
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
}
