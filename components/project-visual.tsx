import type { Project } from "@/data/projects";
import Image from "next/image";

export function ProjectVisual({ project }: { project: Project }) {
  return <div className="project-visual project-photo"><Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 700px" style={{ objectFit: "cover", objectPosition: project.image.position || "center" }} /></div>;
}
