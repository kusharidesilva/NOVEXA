import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services", description: "Explore NOVEXA services across digital marketing, branding, web development, UI/UX, content, SEO, and strategy." };

export default function ServicesPage() {
  return <main id="main"><section className="inner-hero"><div className="shell"><Eyebrow>Our services</Eyebrow><h1>What your brand needs to <em>move forward.</em></h1><p>Different challenges need different capabilities. We bring them together in a clear plan shaped around your goals.</p></div></section><section className="section services-page-section"><div className="shell services-directory">{services.map(service => <article key={service.number} className="directory-row"><span>{service.number}</span><h2>{service.title}</h2><p>{service.summary}</p><Link href="/contact" aria-label={`Ask about ${service.title}`}><ArrowUpRight size={22} /></Link></article>)}</div></section><section className="inner-cta"><div className="shell"><h2>Let&apos;s find the right mix for your business.</h2><Link href="/contact" className="button button-primary">Tell us what you need <ArrowUpRight size={18} /></Link></div></section></main>;
}
