/**
 * DESIGN: Bold Modernism — Dark Agency Aesthetic
 * Full-viewport hero with clean fade-in animations and subtle background parallax
 * No 3D tilt or mouse tracking effects
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/L2BPNsAlnEjbjeW7F4RwaB/sandbox/frbXFZEyU7jYe321ZadQM8-img-1_1772153745000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTDJCUE5zQWxuRWpiamVXN0Y0UndhQi9zYW5kYm94L2ZyYlhGWkV5VTdqWWUzMjFaYWRRTTgtaW1nLTFfMTc3MjE1Mzc0NTAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CK8oZfarbhzPo3kCEiqEXjxCumgXIPdbZqJb6eRKpZIcfj86LbpAeHV5CLnLyZXxbVnqipDz4-spkVBKn6X42~q~jBgYH~Osj687Nw42yFNpSGyBzkvZzgW-WTkJAGPRzkOlOjkM-8auG-8F~Tf~PuxrVRaNXBkbzkG124jyf-FwLpJBRoElfAKlm5DGPeE4S69y4n1VeClPafYCR4Fmk1VeGEbB8izUHlwqg6OrzyQv-WSkIfLjapG9mTKjy0J7KqYgbi~G0GZgW5rS8CrJ-TE2szzttZcMZ7APhXGLVkHJqSM59QXnR11T0NnOBl2VVd-pX3Oa0oZpICmvONRjMA__";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 700, suffix: "+", label: "Websites Built" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

function CountUp({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, start]);
  return <span>{count}{suffix}</span>;
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle background-only parallax on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToWork = () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with subtle parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})`, y: bgY, scale: bgScale }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#0D1B2A]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent" />

      {/* Static glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 max-w-7xl pt-20"
        style={{ opacity: contentOpacity }}
      >
        <div className="max-w-4xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            className="font-display font-bold text-white leading-[1.05] mb-6"
          >
            Websites That{" "}
            <span className="text-gradient">Win Customers</span>
            <br />
            For Blue Collar Businesses
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-xl leading-relaxed max-w-2xl mb-10"
          >
            Led by <strong className="text-white">Josh Weaver</strong>,{" "}
            <strong className="text-white">Websites Blue Collar</strong> builds high-converting
            websites for blue collar businesses, tradespeople, and service companies across the United States.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button
              onClick={scrollToWork}
              className="group flex items-center gap-2 px-8 py-4 rounded-xl agency-gradient text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-all hover:scale-105"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all"
            >
              <ExternalLink size={18} />
              Start Your Project
            </button>
          </motion.div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} start={statsVisible} />
                </div>
                <div className="text-slate-400 text-sm font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
