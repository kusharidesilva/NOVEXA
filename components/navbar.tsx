"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./ui";

const links = [
  ["Home", "/#home"], ["About", "/#about"], ["Services", "/#services"],
  ["Work", "/#work"], ["Process", "/#process"], ["Testimonials", "/#testimonials"], ["Contact", "/contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => { document.body.classList.toggle("menu-open", open); return () => document.body.classList.remove("menu-open"); }, [open]);
  return <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
    <div className="nav-inner shell">
      <Logo />
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav>
      <Link className="nav-cta" href="/contact">Let&apos;s work together <ArrowUpRight size={16} /></Link>
      <button className="mobile-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>
      {open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: .25 }}>
        {links.map(([label, href], i) => <motion.div key={label} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .035 }}><Link href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} /></Link></motion.div>)}
        <Link href="/contact" className="mobile-menu-cta" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={18} /></Link>
      </motion.nav>}
    </AnimatePresence>
  </header>;
}
