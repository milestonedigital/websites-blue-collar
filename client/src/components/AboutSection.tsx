/**
 * DESIGN: Bold Modernism — Dark Agency Aesthetic
 * About / Founder section — clean fade and slide-in animations only, no 3D tilt
 */

import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const FOUNDER_IMG = "/josh-weaver.jpg";

const credentials = [
  "Specialized in blue collar & contractor websites",
  "Mobile-first, SEO-optimized designs",
  "High-converting landing pages & lead funnels",
  "Fast delivery — sites live in days, not months",
  "Ongoing support & unlimited updates",
];

const highlights = [
  { icon: Award, label: "700+ Projects", desc: "Websites delivered" },
  { icon: Users, label: "15+ Industries", desc: "Blue collar niches served" },
  { icon: TrendingUp, label: "100% Satisfaction", desc: "Client retention rate" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0A1520] relative overflow-hidden">
      {/* Static background glow orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#06B6D4]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#06B6D4] font-mono text-sm tracking-widest uppercase">About</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#2563EB]/40 to-transparent" />
          </div>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl">
            Meet the <span className="text-gradient">Founder</span>
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glow border */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#2563EB]/40 to-[#06B6D4]/20 blur-sm" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={FOUNDER_IMG}
                alt="Josh Weaver — Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0D1B2A] to-transparent" />
              {/* Name badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#0D1B2A]/80 backdrop-blur-sm rounded-xl p-4 border border-[#1E3A5F]/60">
                  <div className="font-display font-bold text-white text-xl">Josh Weaver</div>
                  <div className="text-[#06B6D4] text-sm font-mono mt-0.5">
                    Founder & Lead Web Designer
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -right-4 top-8 hidden lg:block">
              <div className="bg-[#162032] border border-[#2563EB]/30 rounded-xl p-4 shadow-xl shadow-[#2563EB]/10">
                <div className="text-2xl font-display font-bold text-white">700+</div>
                <div className="text-slate-400 text-xs font-mono">Websites Built</div>
              </div>
            </div>
          </motion.div>

          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-white text-3xl mb-6">
              Building the Digital Presence<br />
              <span className="text-gradient">Blue Collar Businesses Deserve</span>
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Josh Weaver is a web designer with a passion for helping blue collar businesses — contractors,
              plumbers, HVAC technicians, landscapers, and more — establish a powerful online presence that
              drives real leads and revenue.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              After building over 700 websites across 15+ industries, Websites Blue Collar has developed a
              deep understanding of what works for blue collar businesses. Our sites are mobile-first, SEO-optimized,
              and designed with one goal in mind: turning website visitors into paying customers.
            </p>

            {/* Credentials */}
            <div className="space-y-3 mb-10">
              {credentials.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-[#06B6D4] flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Highlight Stats */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="bg-[#162032] rounded-xl p-4 border border-[#1E3A5F]/60 text-center cursor-default hover:scale-[1.03] hover:-translate-y-1 transition-transform duration-200"
                >
                  <Icon size={20} className="text-[#2563EB] mx-auto mb-2" />
                  <div className="font-display font-bold text-white text-sm">{label}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
