export type Project = {
  slug: string;
  number: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  year: string;
  description: string;
  services: string[];
  challenge: string;
  approach: string;
  solution: string;
  result: string;
  visual: "identity" | "website" | "campaign" | "app";
  image?: { src: string; alt: string };
  gallery?: { src: string; alt: string }[];
};

// Editorial concepts only. Replace with approved client work before launch.
export const projects: Project[] = [
  {
    slug: "brand-identity-concept", number: "01", title: "A brand made to move", client: "Concept project", industry: "Lifestyle", category: "Branding", year: "Concept",
    description: "A flexible identity system designed to feel confident across digital and physical touchpoints.",
    services: ["Brand strategy", "Visual identity", "Social design"],
    challenge: "Explore how a new lifestyle brand could build recognition from its first impression.",
    approach: "Start with a clear positioning idea, then develop a visual system that works across formats.",
    solution: "A bold typographic identity, adaptable compositions, and a focused social design language.",
    result: "Concept only. No client engagement or measured outcome is represented.", visual: "identity"
  },
  {
    slug: "digital-platform-concept", number: "02", title: "A clearer digital home", client: "Concept project", industry: "Professional services", category: "Web Design", year: "Concept",
    description: "A streamlined website concept that turns a complex offer into a simple, welcoming journey.",
    services: ["UX strategy", "Web design", "Development"],
    challenge: "Make a broad service offering easy to understand and navigate.",
    approach: "Organize content around visitor questions and design a direct route to inquiry.",
    solution: "A responsive editorial layout with concise service paths and clear calls to action.",
    result: "Concept only. No live website or measured outcome is represented.", visual: "website"
  },
  {
    slug: "growth-campaign-concept", number: "03", title: "A campaign with momentum", client: "Concept project", industry: "Consumer brand", category: "Marketing", year: "Concept",
    description: "A campaign direction built around one idea, expressed consistently across channels.",
    services: ["Campaign strategy", "Content", "Paid media"],
    challenge: "Show how a single message could translate into a connected launch campaign.",
    approach: "Define the audience, message hierarchy, and a small set of repeatable creative formats.",
    solution: "A modular launch concept for social, landing pages, and paid placements.",
    result: "Concept only. No advertising spend or performance results are represented.", visual: "campaign"
  },
  {
    slug: "mobile-experience-concept", number: "04", title: "A more intuitive everyday", client: "Concept project", industry: "Technology", category: "UI/UX", year: "Concept",
    description: "A mobile product concept with simple flows, useful hierarchy, and a calm interface.",
    services: ["Product strategy", "UX design", "Interface design"],
    challenge: "Reduce friction in a frequently used mobile task.",
    approach: "Map essential actions and remove steps that do not serve the user.",
    solution: "An accessible mobile interface with clear states and confident visual rhythm.",
    result: "Concept only. No released product or user outcome is represented.", visual: "app"
  }
];

export const categories = ["All", "Branding", "Social Media", "Web Design", "UI/UX", "Marketing", "Advertising"] as const;
