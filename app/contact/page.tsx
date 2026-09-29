import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact", description: "Tell NOVEXA about your project in branding, marketing, website development, or digital growth." };

export default function ContactPage() {
  return <main id="main"><section className="contact-page"><div className="shell contact-layout"><div className="contact-copy"><Eyebrow light>Start a project</Eyebrow><h1>Have an idea?<br /><em>Let&apos;s build what&apos;s next.</em></h1><p>Tell us where you are today and where you want your business to go. We&apos;ll take it from there.</p><div className="contact-side-note"><span>Contact details</span><p>Email, phone, and social profiles will be added when supplied.</p></div></div><div className="contact-form-card"><h2>Tell us about your project</h2><p>Share a few details and we&apos;ll start a conversation.</p><ContactForm /></div></div></section></main>;
}
