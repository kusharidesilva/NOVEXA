export type Project = {
  slug: string;
  number: string;
  title: string;
  client: string;
  industry: string;
  category: "E-commerce" | "Travel" | "Beauty" | "Web Apps";
  year: string;
  url: string;
  description: string;
  services: string[];
  challenge: string;
  approach: string;
  solution: string;
  result: string;
  visual: "identity" | "website" | "campaign" | "app";
  image: { src: string; alt: string; position?: string };
  gallery?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "shopora",
    number: "01",
    title: "Shopora",
    client: "Shopora",
    industry: "Online retail",
    category: "E-commerce",
    year: "Live",
    url: "https://shopora-2zw.pages.dev/",
    description: "A modern storefront for discovering fashion, electronics, beauty, home essentials, and more.",
    services: ["UI/UX design", "Frontend development", "Responsive design"],
    challenge: "Present a broad product catalogue through a shopping journey that stays clear and easy to explore.",
    approach: "Organize discovery around search, categories, new arrivals, and best sellers with a restrained visual system.",
    solution: "A responsive commerce interface with focused navigation, product discovery, favourites, and cart actions.",
    result: "A live frontend shopping experience designed for quick, confident browsing.",
    visual: "website",
    image: { src: "/projects/shopora.webp", alt: "Shopora online shopping website homepage" }
  },
  {
    slug: "hershy-travels",
    number: "02",
    title: "HerShy Travels",
    client: "HerShy Travels",
    industry: "Travel and tourism",
    category: "Travel",
    year: "Live",
    url: "https://hershytravels.com/",
    description: "A destination-led travel website for discovering Sri Lankan tours and planning memorable journeys.",
    services: ["Web design", "Frontend development", "Responsive design"],
    challenge: "Bring travel packages, tour planning, and direct contact into one inviting digital experience.",
    approach: "Lead with immersive destination imagery and keep journey planning and messaging within easy reach.",
    solution: "A responsive tourism website with package discovery, tour plans, multilingual navigation, and WhatsApp contact.",
    result: "A live travel platform that turns Sri Lankan destinations into clear paths to inquiry.",
    visual: "website",
    image: { src: "/projects/hershy-travels.webp", alt: "HerShy Travels Sri Lanka travel website homepage", position: "left center" }
  },
  {
    slug: "beyond-wild-tours",
    number: "03",
    title: "Beyond Wild & Tours",
    client: "Beyond Wild & Tours",
    industry: "Wildlife tourism",
    category: "Travel",
    year: "Live",
    url: "https://www.beyondwildtours.com/",
    description: "An immersive tourism website presenting curated Sri Lankan wildlife and safari experiences.",
    services: ["Web design", "Frontend development", "Booking journey"],
    challenge: "Communicate the atmosphere of a premium safari while keeping packages and booking simple to find.",
    approach: "Use large-format wildlife imagery, minimal navigation, and direct booking calls to action.",
    solution: "A cinematic website with package discovery, a visual gallery, multilingual access, and booking entry points.",
    result: "A live tourism presence that gives the wildlife experience a strong visual identity.",
    visual: "website",
    image: { src: "/projects/beyond-wild.webp", alt: "Beyond Wild and Tours wildlife safari website homepage" }
  },
  {
    slug: "lunea-nail-art-studio",
    number: "04",
    title: "Lunea Nail Art Studio",
    client: "Lunea Nail Art Studio",
    industry: "Beauty and wellness",
    category: "Beauty",
    year: "Live",
    url: "https://nail-art-web.kusharidesilva3.workers.dev/",
    description: "An elegant salon website for exploring nail services, designs, pricing, and appointment options.",
    services: ["Web design", "Frontend development", "Responsive design"],
    challenge: "Present nail care and creative services with the polish and warmth expected from a beauty brand.",
    approach: "Pair editorial typography with soft colour, detailed imagery, and clear booking actions.",
    solution: "A responsive studio website with services, gallery, pricing, and appointment pathways.",
    result: "A live beauty website that makes the studio offering easy to understand and book.",
    visual: "website",
    image: { src: "/projects/lunea-nail-art.webp", alt: "Lunea Nail Art Studio website homepage" }
  },
  {
    slug: "skill-swap-hub",
    number: "05",
    title: "Skill Swap Hub",
    client: "Skill Swap Hub",
    industry: "Student marketplace",
    category: "Web Apps",
    year: "Live",
    url: "https://dev10.d3pibkcqsyhg6d.amplifyapp.com",
    description: "A student marketplace for offering skills, finding trusted providers, and requesting services.",
    services: ["Product design", "Frontend development", "Marketplace UX"],
    challenge: "Make skill exchange between university students feel approachable, searchable, and trustworthy.",
    approach: "Center the experience on verified providers, clear matching, and direct skill search.",
    solution: "A responsive marketplace interface with skill discovery, provider trust signals, and onboarding paths.",
    result: "A live platform that gives student skills a structured place to be discovered and exchanged.",
    visual: "app",
    image: { src: "/projects/skill-swap-hub.webp", alt: "Skill Swap Hub student marketplace homepage" }
  },
  {
    slug: "folio-resume-builder",
    number: "06",
    title: "Folio Resume Builder",
    client: "Folio",
    industry: "Career tools",
    category: "Web Apps",
    year: "Live",
    url: "https://parawickramarathne.github.io/Resume_Builder/",
    description: "A private, account-free resume builder for creating, customizing, and printing polished resumes.",
    services: ["Product design", "Frontend development", "Print experience"],
    challenge: "Help people build a professional resume without sign-up friction or a complicated editor.",
    approach: "Keep the workflow focused on the user’s content, template choices, and a clear path to print.",
    solution: "A browser-based resume builder with editable sections, thoughtful templates, and local-first privacy.",
    result: "A live career tool that helps users move from personal details to a finished resume in one focused flow.",
    visual: "app",
    image: { src: "/projects/folio-resume-builder.webp", alt: "Folio private resume builder homepage" }
  },
  {
    slug: "pixelmuse",
    number: "07",
    title: "PixelMuse",
    client: "PixelMuse",
    industry: "Creative tools",
    category: "Web Apps",
    year: "Live",
    url: "https://parawickramarathne.github.io/PixelMuse/",
    description: "A browser-based image tool for compressing, resizing, and converting files privately.",
    services: ["Product design", "Frontend development", "Browser processing"],
    challenge: "Make everyday image optimization simple while keeping files on the user’s device.",
    approach: "Separate the core tasks clearly and surface useful controls without overwhelming the workspace.",
    solution: "A responsive browser tool with compression, resize, conversion, quality controls, and private local processing.",
    result: "A live creative utility that handles common image tasks through a clear, lightweight interface.",
    visual: "app",
    image: { src: "/projects/pixelmuse.webp", alt: "PixelMuse browser image optimization tool" }
  },
  {
    slug: "quotecraft",
    number: "08",
    title: "QuoteCraft",
    client: "QuoteCraft",
    industry: "Business tools",
    category: "Web Apps",
    year: "Live",
    url: "https://parawickramarathne.github.io/quotecraft/",
    description: "A structured quotation builder for creating professional, branded client estimates in the browser.",
    services: ["Product design", "Frontend development", "Document workflow"],
    challenge: "Turn a multi-step business quotation into a workflow that feels organized and easy to review.",
    approach: "Break the document into familiar sections while keeping totals, styling, and preview actions visible.",
    solution: "A browser-based quotation studio with business details, client data, items, tax, notes, branding, and preview.",
    result: "A live business tool that brings quotation setup and review into one practical workspace.",
    visual: "app",
    image: { src: "/projects/quotecraft.webp", alt: "QuoteCraft business quotation builder workspace" }
  }
];

export const categories = ["All", "E-commerce", "Travel", "Beauty", "Web Apps"] as const;
