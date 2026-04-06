/**
 * DESIGN: Bold Modernism — Dark Agency Aesthetic
 * Services section — clean hover effects only, no 3D tilt
 */

import { Monitor, Search, Zap, Smartphone, BarChart, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Monitor,
    title: "Custom Web Design",
    description:
      "Fully custom websites built from scratch — no templates, no shortcuts. Every site is designed specifically for your blue collar business and target market.",
    color: "#2563EB",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Rank higher on Google for local searches. We optimize every page for the keywords your customers are actually searching for in your service area.",
    color: "#06B6D4",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Hosting",
    description:
      "Lightning-fast load times with secure, managed hosting. Your site stays online 24/7 with automatic backups and SSL security included.",
    color: "#7C3AED",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Over 70% of your customers search on mobile. Every site we build looks and performs perfectly on phones, tablets, and desktops.",
    color: "#059669",
  },
  {
    icon: BarChart,
    title: "Lead Generation",
    description:
      "Strategic calls-to-action, contact forms, and click-to-call buttons designed to convert visitors into leads and booked jobs.",
    color: "#D97706",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Unlimited updates, content changes, and technical support. We're your long-term digital partner, not just a one-time vendor.",
    color: "#DC2626",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative bg-[#162032] rounded-2xl p-6 border border-[#1E3A5F]/60 hover:border-[#2563EB]/60 hover:shadow-[0_20px_40px_-8px_rgba(37,99,235,0.3)] cursor-default transition-all duration-300 hover:-translate-y-2"
    >
      {/* Subtle inner glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}12 0%, transparent 70%)` }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${service.color}20`,
          border: `1px solid ${service.color}30`,
        }}
      >
        <Icon size={22} style={{ color: service.color }} />
      </div>

      <h3 className="font-display font-bold text-white text-xl mb-3">
        {service.title}
      </h3>
      <p className="text-slate-400 leading-relaxed text-sm relative z-10">
        {service.description}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${service.color}60, transparent)` }}
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0D1B2A] relative">
      {/* Diagonal divider top */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 64L1440 0V64H0Z" fill="#0A1520" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl pt-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#2563EB]/40" />
            <span className="text-[#06B6D4] font-mono text-sm tracking-widest uppercase">Services</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#2563EB]/40" />
          </div>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            What We <span className="text-gradient">Deliver</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything your blue collar business needs to dominate online — from design to launch to ongoing growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
