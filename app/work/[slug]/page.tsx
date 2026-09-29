import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui";
import { ProjectVisual } from "@/components/project-visual";
import Image from "next/image";
import { projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = projects.find(item => item.slug === slug); return project ? { title: project.title, description: `${project.description} Sample concept case study by NOVEXA.` } : {}; }

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex(item => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return <main id="main"><section className="case-hero"><div className="shell"><Link href="/work" className="back-link"><ArrowLeft size={16} /> All work</Link><Eyebrow>Concept case study / {project.number}</Eyebrow><h1>{project.title}</h1><p>{project.description}</p><div className="case-meta"><div><span>Client</span><strong>{project.client}</strong></div><div><span>Industry</span><strong>{project.industry}</strong></div><div><span>Services</span><strong>{project.services.join(", ")}</strong></div><div><span>Year</span><strong>{project.year}</strong></div></div><div className="case-cover"><ProjectVisual project={project} /></div><p className="case-disclaimer">This is an editorial concept, created as sample portfolio content. It does not describe an actual NOVEXA client engagement.</p></div></section><section className="section case-story"><div className="shell"><div className="story-row"><span>01 / The challenge</span><h2>{project.challenge}</h2></div><div className="story-row"><span>02 / Our approach</span><h2>{project.approach}</h2></div><div className="story-row"><span>03 / Creative solution</span><h2>{project.solution}</h2></div><div className="story-row"><span>04 / Outcome</span><h2>{project.result}</h2></div></div></section><section className="section case-gallery-section"><div className="shell"><Eyebrow>Creative direction</Eyebrow><h2>Inside the concept.</h2><div className="case-gallery">{project.gallery?.length ? project.gallery.map(image => <div className="case-gallery-image" key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 100vw, 50vw" style={{ objectFit: "cover" }} /></div>) : <><div className="case-gallery-image"><ProjectVisual project={project} /></div><div className="case-gallery-note"><span>CONCEPT / {project.number}</span><strong>{project.title}</strong><p>Approved project photography, mockups, and process imagery can replace these concept visuals.</p></div></>}</div><div className="case-feedback"><span>Client feedback</span><p>Approved client feedback can be added when a real project is published.</p></div></div></section><section className="next-project"><div className="shell"><span>Next concept</span><Link href={`/work/${next.slug}`}>{next.title}<ArrowUpRight size={32} /></Link></div></section></main>;
}
