/*
 * DESIGN: Bold Modernism — Dark Agency Aesthetic
 * Footer with logo, nav links, legal links, and copyright
 */

import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060E18] border-t border-[#1E3A5F]/40 py-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white text-lg">
              Websites <span className="text-gradient">Blue Collar</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            {[
              { label: "Home", id: "home" },
              { label: "Work", id: "work" },
              { label: "About", id: "about" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.id)}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Legal Links + Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4 text-sm text-slate-500">
              <Link href="/privacy-policy">
                <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              </Link>
              <span className="text-slate-700">·</span>
              <Link href="/terms">
                <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              </Link>
            </div>
            <div className="text-slate-600 text-sm font-mono-label">
              © {currentYear} Websites Blue Collar
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
