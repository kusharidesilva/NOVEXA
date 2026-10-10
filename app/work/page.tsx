import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = { title: "Work", description: "Explore live websites, marketplaces, and browser-based tools created by NOVEXA." };

export default function WorkPage() {
  return <main id="main"><section className="inner-hero"><div className="shell"><Eyebrow>Selected work</Eyebrow><h1>Ideas with a <em>purpose.</em></h1><p>Explore live websites and digital tools shaped around real audiences, clear journeys, and useful outcomes.</p><span className="work-disclosure">8 live projects · Website and product work</span></div></section><section className="section work-page-section"><div className="shell"><WorkGrid /></div></section></main>;
}
