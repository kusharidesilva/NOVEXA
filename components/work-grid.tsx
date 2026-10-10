"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { categories, projects } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

export function WorkGrid({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = projects.filter(project => active === "All" || project.category === active);
  const displayed = compact ? filtered.slice(0, 4) : filtered;
  return <>
    <div className="work-filters" aria-label="Filter projects">{categories.map(category => <button key={category} type="button" className={active === category ? "active" : ""} aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>)}</div>
    <motion.div className={`work-grid ${compact ? "work-grid-compact" : ""}`} layout>
      <AnimatePresence mode="popLayout">{displayed.map((project) => <motion.article className="project-card" key={project.slug} layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: .3 }}>
        <Link href={`/work/${project.slug}`} className="project-image-link" aria-label={`View ${project.title} project details`}><ProjectVisual project={project} /><span className="project-round-arrow"><ArrowUpRight size={24} /></span></Link>
        <div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.year}</span></div>
        <div className="project-title-row"><div><h3>{project.title}</h3><p>{project.description}</p></div><a href={project.url} target="_blank" rel="noreferrer" className="text-link">Visit live site <ArrowUpRight size={16} /></a></div>
      </motion.article>)}</AnimatePresence>
    </motion.div>
    {filtered.length === 0 && <p className="empty-filter">No projects in this category yet. Explore another category.</p>}
  </>;
}
