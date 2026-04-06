/**
 * DESIGN: Bold Modernism — Dark Agency Aesthetic
 * Project grid with category filter tabs
 * Clean hover effects: scale + shadow only, no 3D tilt
 */

import { useState } from "react";
import { ExternalLink, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categoryMap } from "@/lib/projects";

const FILTER_CATEGORIES = [
  "All", "HVAC", "Plumbing", "Roofing", "Landscaping", "Painting",
  "Electrical", "Concrete", "Pest Control", "Carpentry", "Flooring",
  "Construction", "Solar", "Other",
];

function getDomainInitial(url: string) {
  try {
    const domain = new URL(url).hostname.replace("www.", "");
    return domain[0].toUpperCase();
  } catch { return "W"; }
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
      className="group relative rounded-xl overflow-hidden border border-[#1E3A5F]/60 bg-[#162032] hover:border-[#2563EB]/70 hover:shadow-[0_20px_40px_-8px_rgba(37,99,235,0.35)] cursor-pointer transition-all duration-300 hover:-translate-y-1"
    >
      {/* Screenshot Preview */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0D1B2A]">
        {!imgError ? (
          <>
            {!imgLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full agency-gradient flex items-center justify-center text-white font-display font-bold text-lg">
                  {getDomainInitial(project.url)}
                </div>
              </div>
            )}
            <img
              src={project.screenshot}
              alt={project.name}
              className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              loading="lazy"
            />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#162032] to-[#0D1B2A]">
            <Globe size={32} className="text-[#2563EB] mb-2" />
            <span className="text-slate-400 text-sm">{project.category}</span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg agency-gradient text-white text-sm font-semibold shadow-lg hover:opacity-90 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} />
            View Live Site
          </a>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md bg-[#0D1B2A]/80 backdrop-blur-sm text-[#06B6D4] text-xs font-mono border border-[#1E3A5F]/60">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-white text-sm mb-1 truncate">
          {project.name}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => {
        const cats = categoryMap[activeFilter] || [];
        return cats.includes(p.category) || p.category === activeFilter;
      });

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setVisibleCount(12);
  };

  return (
    <section id="work" className="py-24 bg-[#0D1B2A]">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#06B6D4] font-mono text-sm tracking-widest uppercase">Portfolio</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#2563EB]/40 to-transparent" />
          </div>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            700+ websites built for blue collar businesses across the United States. Every site is custom-designed
            to convert visitors into paying customers.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 ${
                activeFilter === cat
                  ? "agency-gradient text-white shadow-lg shadow-[#2563EB]/20"
                  : "bg-[#162032] text-slate-400 border border-[#1E3A5F]/60 hover:text-white hover:border-[#2563EB]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((v) => v + 12)}
              className="px-8 py-4 rounded-xl border border-[#2563EB]/40 text-[#2563EB] font-semibold hover:bg-[#2563EB]/10 transition-all hover:border-[#2563EB] hover:-translate-y-0.5"
            >
              Load More Projects
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <Globe size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
