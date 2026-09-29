"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const samples = [
  { heading: "A story about clarity", body: "An approved client quote about the challenge, collaboration, and outcome can be added here.", service: "Branding" },
  { heading: "A story about connection", body: "An approved client quote about the creative process and audience response can be added here.", service: "Digital marketing" },
  { heading: "A story about growth", body: "An approved client quote about the website experience and business goals can be added here.", service: "Web development" }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = samples[index];
  return <div className="testimonial-panel">
    <div className="testimonial-top"><span className="placeholder-tag">TESTIMONIAL PLACEHOLDER</span><Quote size={35} strokeWidth={1.2} /></div>
    <AnimatePresence mode="wait"><motion.div key={index} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: .25 }}><h3>{item.heading}</h3><blockquote>“{item.body}”</blockquote><div className="testimonial-person"><span className="avatar-placeholder">—</span><div><strong>Client name to be added</strong><small>Role and company to be added · {item.service}</small></div></div></motion.div></AnimatePresence>
    <div className="carousel-controls"><span>{String(index + 1).padStart(2, "0")} / {String(samples.length).padStart(2, "0")}</span><div><button type="button" aria-label="Previous testimonial" onClick={() => setIndex((index - 1 + samples.length) % samples.length)}><ArrowLeft size={18} /></button><button type="button" aria-label="Next testimonial" onClick={() => setIndex((index + 1) % samples.length)}><ArrowRight size={18} /></button></div></div>
  </div>;
}
