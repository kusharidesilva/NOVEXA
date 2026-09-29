import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return ["", "/about", "/services", "/work", "/contact", ...projects.map(project => `/work/${project.slug}`)].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : .6 }));
}
