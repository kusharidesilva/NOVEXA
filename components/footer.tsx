import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./ui";

const pages = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Work", "/work"], ["Contact", "/contact"]];
const serviceLinks = ["Digital marketing", "Branding", "Web development", "UI/UX design", "SEO"];

export function Footer() {
  return <footer className="site-footer">
    <div className="shell footer-main">
      <div className="footer-brand"><Logo /><p>Helping businesses build stronger brands, connect with the right audience, and grow in the digital world.</p><span>Create. Connect. Grow.</span></div>
      <div className="footer-column"><h3>Explore</h3>{pages.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</div>
      <div className="footer-column"><h3>Services</h3>{serviceLinks.map(label => <Link key={label} href="/services">{label}</Link>)}</div>
      <div className="footer-column"><h3>Get in touch</h3><Link href="/contact">Start a project <ArrowUpRight size={15} /></Link><p>Contact details and social profiles will be added when supplied.</p></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} NOVEXA. All rights reserved.</span><span>Ideas built for what&apos;s next.</span><Link href="#home">Back to top ↑</Link></div>
  </footer>;
}
