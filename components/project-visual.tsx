import type { Project } from "@/data/projects";
import Image from "next/image";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.image) return <div className="project-visual project-photo"><Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 700px" style={{ objectFit: "cover" }} /></div>;
  return <div className={`project-visual visual-${project.visual}`} role="img" aria-label={`Illustrative visual for ${project.title}, a sample concept project`}>
    <span className="visual-grid" aria-hidden="true" />
    {project.visual === "identity" && <div className="identity-art" aria-hidden="true"><span>MOVE</span><span>WITH</span><strong>IDEAS<span className="identity-dot">.</span></strong><i>Concept identity / 01</i></div>}
    {project.visual === "website" && <div className="browser-art" aria-hidden="true"><div className="browser-top"><span /><span /><span /><i>digital.home</i></div><div className="browser-content"><small>DESIGNED FOR CLARITY</small><b>Make room<br />for what&apos;s next<span>.</span></b><div><em>Explore services</em><em>Get in touch ↗</em></div></div></div>}
    {project.visual === "campaign" && <div className="campaign-art" aria-hidden="true"><div className="campaign-orb" /><span>GOOD<br />THINGS<br /><i>GROW.</i></span><small>Campaign concept · 03</small></div>}
    {project.visual === "app" && <div className="phone-art" aria-hidden="true"><div className="phone-notch" /><small>GOOD MORNING</small><b>Make today<br />a little easier.</b><div className="phone-card"><span>Overview</span><div className="phone-bars"><i /><i /><i /><i /><i /></div></div><div className="phone-pills"><i /><i /></div></div>}
  </div>;
}
