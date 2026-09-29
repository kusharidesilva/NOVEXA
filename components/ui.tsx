import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`logo-link ${light ? "logo-light" : ""}`} aria-label="NOVEXA home"><span className="logo-window"><Image src="/logo.png" alt="NOVEXA — Create. Connect. Grow." width={150} height={100} priority className="logo-image" /></span></Link>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span className="eyebrow-dot" />{children}</span>;
}

export function ArrowLink({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return <Link href={href} className={`arrow-link ${dark ? "arrow-link-dark" : ""}`}>{children}<ArrowUpRight size={17} strokeWidth={1.8} /></Link>;
}

export function SectionIntro({ eyebrow, title, description, light = false }: { eyebrow: string; title: ReactNode; description?: string; light?: boolean }) {
  return <div className={`section-intro ${light ? "section-intro-light" : ""}`}><Eyebrow light={light}>{eyebrow}</Eyebrow><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
