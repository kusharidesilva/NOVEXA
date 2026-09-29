import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);
const manrope = localFont({ src: "../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2", variable: "--font-manrope", display: "swap", weight: "200 800" });

export const metadata: Metadata = {
  title: { default: "NOVEXA | Create. Connect. Grow.", template: "%s | NOVEXA" },
  description: "NOVEXA is a creative digital agency helping businesses build stronger brands, connect with the right audience and grow through digital marketing, branding, web development and creative digital solutions.",
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: { title: "NOVEXA | Create. Connect. Grow.", description: "Creative thinking, connected experiences and digital growth.", type: "website", images: ["/logo.png"] },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.png" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "NOVEXA", url: siteUrl, logo: siteUrl ? `${siteUrl}/logo.png` : undefined, description: "Creative digital agency specializing in branding, marketing, and digital experiences." };
  return <html lang="en"><body className={manrope.variable}><a className="skip-link" href="#main">Skip to content</a><MotionProvider><Navbar />{children}<Footer /></MotionProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} /></body></html>;
}
