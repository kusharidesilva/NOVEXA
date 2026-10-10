"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/services";

type FormErrors = Record<string, string>;

export function ContactForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});

  function toggle(value: string) { setSelected(current => current.includes(value) ? current.filter(item => item !== value) : [...current, value]); }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    const nextErrors: FormErrors = {};
    if (!String(values.name || "").trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(values.email || ""))) nextErrors.email = "Please enter a valid email address.";
    if (String(values.message || "").trim().length < 20) nextErrors.message = "Please tell us a little more (at least 20 characters).";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    const name = String(values.name || "").trim();
    const company = String(values.company || "").trim();
    const subject = `New project inquiry from ${name}${company ? ` — ${company}` : ""}`;
    const body = [
      `Full name: ${name}`,
      `Business / company: ${company || "Not provided"}`,
      `Email: ${String(values.email || "").trim()}`,
      `Phone / WhatsApp: ${String(values.phone || "").trim() || "Not provided"}`,
      `Website / social media: ${String(values.website || "").trim() || "Not provided"}`,
      `Services: ${selected.length ? selected.join(", ") : "Not selected"}`,
      `Estimated budget: ${String(values.budget || "").trim() || "Not selected"}`,
      `Project timeline: ${String(values.timeline || "").trim() || "Not selected"}`,
      "",
      "Project details:",
      String(values.message || "").trim()
    ].join("\r\n");
    const mailtoUrl = `mailto:novexadevelopers@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    form.reset();
    setSelected([]);
    setErrors({});
  }

  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-row"><label><span className="field-label">Full name <span>*</span></span><input name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} required placeholder="Your name" /></label><label>Business / company name<input name="company" autoComplete="organization" placeholder="Company name" /></label></div>
    {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
    <div className="form-row"><label><span className="field-label">Email address <span>*</span></span><input type="email" name="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} required placeholder="you@company.com" /></label><label>Phone / WhatsApp<input type="tel" name="phone" autoComplete="tel" placeholder="Optional" /></label></div>
    {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
    <label>Website / social media URL<input type="url" name="website" placeholder="https://" /></label>
    <fieldset className="service-fieldset"><legend>What do you need?</legend><div className="service-choices">{[...services.map(item => item.title), "Other"].map(service => <button type="button" key={service} className={selected.includes(service) ? "selected" : ""} aria-pressed={selected.includes(service)} onClick={() => toggle(service)}>{service}{selected.includes(service) && <Check size={14} />}</button>)}</div></fieldset>
    <div className="form-row"><label>Estimated budget<select name="budget" defaultValue=""><option value="">Select a range</option><option>Under Rs. 2,500</option><option>Rs. 2,500 – Rs. 5,000</option><option>Rs. 5,000 – Rs. 10,000</option><option>Rs. 10,000+</option><option>Let&apos;s discuss</option></select></label><label>Project timeline<select name="timeline" defaultValue=""><option value="">Select a timeline</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Just exploring</option></select></label></div>
    <label><span className="field-label">Tell us about your project <span>*</span></span><textarea name="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} required placeholder="What are you hoping to create or improve?" /></label>
    {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
    <input className="honeypot" type="text" name="website_check" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <div className="form-submit-row"><button className="button button-primary" type="submit">Start my project <ArrowUpRight size={18} /></button><small>Fields marked * are required.</small></div>
  </form>;
}
