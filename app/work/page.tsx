import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = { title: "Work", description: "Explore NOVEXA's clearly labeled concept portfolio across branding, web, marketing, and UI/UX." };

export default function WorkPage() {
  return <main id="main"><section className="inner-hero"><div className="shell"><Eyebrow>Selected work</Eyebrow><h1>Ideas with a <em>purpose.</em></h1><p>Explore sample concepts showing the kind of thinking and craft NOVEXA brings to brand and digital challenges.</p><span className="work-disclosure">These are concept projects, not commissioned client work.</span></div></section><section className="section work-page-section"><div className="shell"><WorkGrid /></div></section></main>;
}
