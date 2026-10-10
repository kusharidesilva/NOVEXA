import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "About", description: "Learn how NOVEXA helps businesses build clear brands, useful websites, and focused digital experiences." };

export default function AboutPage() {
  return <main id="main"><section className="inner-hero"><div className="shell"><Eyebrow>About NOVEXA</Eyebrow><h1>Creative partnership for <em>meaningful growth.</em></h1><p>We help businesses turn ideas into clear brands, useful digital experiences, and practical ways to reach the people who matter.</p></div></section><section className="section about-detail"><div className="shell about-detail-grid"><div><span className="large-index">01 / 03</span><h2>Built around your goals.</h2></div><div><p>Every project starts with understanding your business, your audience, and the outcome you need. That context guides the strategy, the design, and every decision that follows.</p><p>We bring branding, web design, development, and digital marketing into one focused process, with clear communication from the first conversation to launch.</p></div></div></section><section className="section about-values"><div className="shell"><Eyebrow>What drives us</Eyebrow><div className="value-grid"><article><span>01</span><h3>Clarity</h3><p>Make the goal clear before choosing the solution.</p></article><article><span>02</span><h3>Creativity</h3><p>Create work that feels distinct, relevant, and true to the brand.</p></article><article><span>03</span><h3>Collaboration</h3><p>Listen closely, communicate openly, and build together.</p></article></div></div></section><section className="inner-cta"><div className="shell"><h2>Let&apos;s build a stronger digital presence.</h2><Link href="/contact" className="button button-primary">Start a project <ArrowUpRight size={18} /></Link></div></section></main>;
}
