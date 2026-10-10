"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const stories = [
  {
    heading: "Clear, professional, and easy to work with",
    body: "NOVEXA understood our vision and turned it into a professional travel website. Communication was clear throughout, and the final result makes it easier for travellers to explore our services and contact us.",
    client: "HerShy Travels",
    service: "Client recommendation · Travel website",
    initial: "H"
  },
  {
    heading: "They understood the character of our brand",
    body: "NOVEXA captured the adventurous character of our brand and presented our tours beautifully. They listened to our ideas, kept the process smooth, and delivered a website we are proud to share.",
    client: "Beyond Wild & Tours",
    service: "Client recommendation · Tourism website",
    initial: "B"
  },
  {
    heading: "Our vision was brought to life beautifully",
    body: "NOVEXA brought our vision to life with a clean, elegant website that feels right for our studio. They were responsive, patient, and attentive to the details that mattered to us.",
    client: "Lunea Nail Art Studio",
    service: "Client recommendation · Beauty website",
    initial: "L"
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = stories[index];
  return <div className="testimonial-panel">
    <div className="testimonial-top"><span className="placeholder-tag">CLIENT RECOMMENDATION</span><BadgeCheck size={35} strokeWidth={1.2} /></div>
    <AnimatePresence mode="wait"><motion.div key={index} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: .25 }}><h3>{item.heading}</h3><blockquote className="testimonial-story">“{item.body}”</blockquote><div className="testimonial-person"><span className="avatar-placeholder">{item.initial}</span><div><strong>{item.client}</strong><small>{item.service}</small></div></div></motion.div></AnimatePresence>
    <div className="carousel-controls"><span>{String(index + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}</span><div><button type="button" aria-label="Previous client recommendation" onClick={() => setIndex((index - 1 + stories.length) % stories.length)}><ArrowLeft size={18} /></button><button type="button" aria-label="Next client recommendation" onClick={() => setIndex((index + 1) % stories.length)}><ArrowRight size={18} /></button></div></div>
  </div>;
}
