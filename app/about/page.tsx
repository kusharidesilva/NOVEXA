import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "About", description: "Meet NOVEXA, a creative digital agency combining strategy, creativity, and technology." };

export default function AboutPage() {
  return <main id="main"><section className="inner-hero"><div className="shell"><Eyebrow>About NOVEXA</Eyebrow><h1>New ideas for <em>what&apos;s next.</em></h1><p>NOVEXA is a creative digital agency helping businesses create stronger brands, connect with the right audience, and grow in the digital world.</p></div></section><section className="section about-detail"><div className="shell about-detail-grid"><div><span className="large-index">01 / 03</span><h2>Created to move brands forward.</h2></div><div><p>Our name brings together <strong>Nova</strong>, a new burst of ideas, and <strong>Next</strong>, the momentum to keep moving. That thinking guides how we approach every brief: listen carefully, find the right idea, and build with purpose.</p><p>We connect brand thinking, design, technology, and marketing so each part of the experience works together.</p></div></div></section><section className="section about-values"><div className="shell"><Eyebrow>What drives us</Eyebrow><div className="value-grid"><article><span>01</span><h3>Clarity</h3><p>Understand the real problem before designing the answer.</p></article><article><span>02</span><h3>Creativity</h3><p>Bring original thinking to every moment a brand meets its audience.</p></article><article><span>03</span><h3>Momentum</h3><p>Make work that helps a business take its next step.</p></article></div></div></section><section className="inner-cta"><div className="shell"><h2>Let&apos;s make your next move count.</h2><Link href="/contact" className="button button-primary">Start a project <ArrowUpRight size={18} /></Link></div></section></main>;
}
