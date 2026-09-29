"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{faqs.map((item, index) => <div className={`faq-item ${open === index ? "faq-open" : ""}`} key={item.question}>
    <h3><button type="button" aria-expanded={open === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpen(open === index ? null : index)}><span>{item.question}</span><Plus size={22} className="faq-plus" /></button></h3>
    <AnimatePresence initial={false}>{open === index && <motion.div id={`faq-answer-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }} className="faq-answer"><p>{item.answer}</p></motion.div>}</AnimatePresence>
  </div>)}</div>;
}
