"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { categories, projects } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

export function WorkGrid({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = projects.filter(project => active === "All" || project.category === active || (active === "Social Media" && project.services.includes("Social design")) || (active === "Advertising" && project.services.includes("Paid media")));
  return <>
    <div className="work-filters" aria-label="Filter projects">{categories.map(category => <button key={category} type="button" className={active === category ? "active" : ""} aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>)}</div>
    <motion.div className={`work-grid ${compact ? "work-grid-compact" : ""}`} layout>
      <AnimatePresence mode="popLayout">{filtered.map((project) => <motion.article className="project-card" key={project.slug} layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: .3 }}>
        <Link href={`/work/${project.slug}`} className="project-image-link" aria-label={`View ${project.title} case study`}><ProjectVisual project={project} /><span className="project-round-arrow"><ArrowUpRight size={24} /></span></Link>
        <div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.year}</span></div>
        <div className="project-title-row"><div><h3>{project.title}</h3><p>{project.description}</p></div><Link href={`/work/${project.slug}`} className="text-link">View case study <ArrowUpRight size={16} /></Link></div>
      </motion.article>)}</AnimatePresence>
    </motion.div>
    {filtered.length === 0 && <p className="empty-filter">No sample concepts in this category yet. Explore another category.</p>}
  </>;
}
