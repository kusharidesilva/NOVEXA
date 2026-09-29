"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { services } from "@/data/services";

type FormErrors = Record<string, string>;

export function ContactForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<"idle" | "sending" | "success">("idle");
  const [serverError, setServerError] = useState("");

  function toggle(value: string) { setSelected(current => current.includes(value) ? current.filter(item => item !== value) : [...current, value]); }

  async function submit(event: FormEvent<HTMLFormElement>) {
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
    setState("sending"); setServerError("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, services: selected }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your message could not be sent. Please try again.");
      form.reset(); setSelected([]); setState("success");
    } catch (error) { setServerError(error instanceof Error ? error.message : "Your message could not be sent."); setState("idle"); }
  }

  if (state === "success") return <div className="form-success" role="status"><span className="success-icon"><Check size={30} /></span><h3>Thanks for reaching out.</h3><p>Your inquiry was sent. We&apos;ll be in touch using the email address you provided.</p><button type="button" className="text-link" onClick={() => setState("idle")}>Send another inquiry <ArrowUpRight size={17} /></button></div>;

  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-row"><label>Full name <span>*</span><input name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} required placeholder="Your name" /></label><label>Business / company name<input name="company" autoComplete="organization" placeholder="Company name" /></label></div>
    {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
    <div className="form-row"><label>Email address <span>*</span><input type="email" name="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} required placeholder="you@company.com" /></label><label>Phone / WhatsApp<input type="tel" name="phone" autoComplete="tel" placeholder="Optional" /></label></div>
    {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
    <label>Website / social media URL<input type="url" name="website" placeholder="https://" /></label>
    <fieldset className="service-fieldset"><legend>What do you need?</legend><div className="service-choices">{[...services.map(item => item.title), "Other"].map(service => <button type="button" key={service} className={selected.includes(service) ? "selected" : ""} aria-pressed={selected.includes(service)} onClick={() => toggle(service)}>{service}{selected.includes(service) && <Check size={14} />}</button>)}</div></fieldset>
    <div className="form-row"><label>Estimated budget<select name="budget" defaultValue=""><option value="">Select a range</option><option>Under $2,500</option><option>$2,500 – $5,000</option><option>$5,000 – $10,000</option><option>$10,000+</option><option>Let&apos;s discuss</option></select></label><label>Project timeline<select name="timeline" defaultValue=""><option value="">Select a timeline</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Just exploring</option></select></label></div>
    <label>Tell us about your project <span>*</span><textarea name="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} required placeholder="What are you hoping to create or improve?" /></label>
    {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
    <input className="honeypot" type="text" name="website_check" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    {serverError && <p className="form-error" role="alert">{serverError}</p>}
    <div className="form-submit-row"><button className="button button-primary" type="submit" disabled={state === "sending"}>{state === "sending" ? <>Sending <LoaderCircle className="spin" size={18} /></> : <>Start my project <ArrowUpRight size={18} /></>}</button><small>Fields marked * are required.</small></div>
  </form>;
}
