/*
 * DESIGN: Bold Modernism — Dark Agency Aesthetic
 * Full-width showcase section with device mockup image
 * Positioned between hero and work sections
 */

import { useEffect, useRef, useState } from "react";

const SHOWCASE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/L2BPNsAlnEjbjeW7F4RwaB/sandbox/frbXFZEyU7jYe321ZadQM8-img-3_1772153757000_na1fn_d29yay1zaG93Y2FzZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTDJCUE5zQWxuRWpiamVXN0Y0UndhQi9zYW5kYm94L2ZyYlhGWkV5VTdqWWUzMjFaYWRRTTgtaW1nLTNfMTc3MjE1Mzc1NzAwMF9uYTFmbl9kMjl5YXkxemFHOTNZMkZ6WlEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FgkrYIME~nPAryUSN-UJogQ-QIEt9W-ShnMzpG-ops3-hoSIBYHmNIA20aUF~TH9YKQOHvoTcWOIAO1cwKQeAXIiWKSR4dLuiTgpBriqdHEoAVb3o~8rr6Vmn4fwf2aDKIMvrRdJ5UIlpw~btCgmI9ksZ5kcKJi9hLaz~up0FqtLIa7wh3Iik~lPdJqGyVTMT1JKxIUIWbmt2UX2CmlnnncRoDGF9sNkzmEi-h4A087CToAIQdEpXN8DrczZnDh~uDlbczhZNQsOsrlgR46n1i2MbiOlljnav23Il39SVKhLSE5Dcoe4TC6Wen48pFz-pbDUKibGDcZ0f10PL9T8hg__";

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#0A1520] relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] via-[#0A1520] to-[#0D1B2A]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Text */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#2563EB]/40" />
            <span className="text-[#06B6D4] font-mono-label text-sm tracking-widest uppercase">
              Responsive Design
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#2563EB]/40" />
          </div>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
            Looks Great on <span className="text-gradient">Every Device</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every website I build is fully responsive — optimized for desktop, tablet, and mobile.
          </p>
        </div>

        {/* Showcase Image */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          {/* Glow effect behind image */}
          <div className="absolute inset-x-1/4 -inset-y-4 bg-[#2563EB]/10 blur-3xl rounded-full" />
          <img
            src={SHOWCASE_IMG}
            alt="Websites displayed on multiple devices"
            className="relative z-10 w-full max-w-5xl mx-auto rounded-2xl shadow-2xl shadow-black/40"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
