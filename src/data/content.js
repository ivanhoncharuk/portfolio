export const profile = {
  name: "Ivan Honcharuk",
  firstName: "Ivan",
  role: "Full Stack & AI Developer",
  location: "Vinnytsia, Ukraine",
  timezone: "Europe/Kyiv",
  email: "honchik001@gmail.com",
  phone: "+380 50 271 0064",
  phoneHref: "+380502710064",
  linkedin: "https://www.linkedin.com/in/ivan-honcharuk-dev",
  github: "https://github.com/ivanhoncharuk",
  available: true,
  tagline: [
    "I build web applications, scalable backends and",
    "AI-driven products",
    "that people actually enjoy using.",
  ],
  summary: `Full Stack and AI Developer who builds web applications, scalable backends and
    AI-driven solutions. Skilled across frontend and backend technologies, API development,
    database architecture and cloud services.`,
  about: [
    `I'm a Full Stack and AI Developer based in Vinnytsia, Ukraine. For the last five years I've
     worked across the whole stack — designing database schemas, shipping REST and GraphQL APIs,
     and building interfaces that hold up on every screen size.`,
    `Lately most of my curiosity goes into AI: integrating LLM APIs, building chat experiences,
     writing prompts that behave predictably in production, and automating the slow parts of a
     workflow so the team can spend its time somewhere better.`,
    `I care about clean code, application efficiency and security — and about never being done
     learning. If you're building something ambitious, I'd like to hear about it.`,
  ],
};

export const stats = [
  { value: "5+", label: "Years building for the web" },
  { value: "30+", label: "Technologies in daily use" },
  { value: "Full", label: "Stack, frontend to deploy" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const marquee = [
  "TypeScript", "React", "Next.js", "Vue.js", "Node.js", "Express", "Python",
  "FastAPI", "Django", "Laravel", "PostgreSQL", "MongoDB", "GraphQL", "Docker",
  "AWS", "Tailwind CSS", "OpenAI API", "Firebase",
];

export const experience = [
  {
    company: "Delphi Software",
    role: "Full Stack & AI Developer",
    period: "Jul 2021 — Sep 2026",
    location: "Vinnytsia, Ukraine",
    summary:
      "Built and maintained production web applications end to end, then pushed the stack toward AI-assisted features and automation.",
    points: [
      "Developed and maintained web applications across the full stack, from database layer to user interface.",
      "Designed REST API endpoints and integrated third-party services to meet evolving business requirements.",
      "Built responsive interfaces and a library of reusable components shared across product surfaces.",
      "Modelled database schemas and wrote the data access layer the application reads and writes through.",
      "Explored and shipped AI capabilities — large language model integrations, chat features and workflow automation.",
      "Tested, debugged, profiled and deployed releases, improving performance and reliability in production.",
      "Partnered with designers, engineers and project managers to turn requirements into working software.",
      "Kept the codebase clean and maintainable through disciplined version control and code review.",
    ],
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Python", "OpenAI API", "Docker"],
  },
];

export const projects = [
  {
    title: "Nexoply",
    domain: "nexoply.com",
    live: "https://nexoply.com",
    kind: "AI SaaS",
    description:
      "An AI chatbot small business owners can set up themselves. They fill in a short form about the business \u2014 services, prices, hours, policies \u2014 and get a live assistant that answers website visitors in 12 languages, strictly from that information and nothing else. Anything it can't answer comes back as a new FAQ to fill in.",
    highlights: [
      "A chat widget themed to the brand: fonts, colours, shapes, start screen, live desktop and phone preview",
      "Visitors can speak, send a photo or tap an emoji instead of typing",
      "One line of code on WordPress, Shopify, Wix, Squarespace, Webflow, React or Next.js",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "LLM APIs", "Cloudflare"],
    accent: "iris",
    images: [
      { src: "/work/nexoply-hero.webp", caption: "Home \u2014 the assistant answering a live question" },
      { src: "/work/nexoply-steps.webp", caption: "How it works \u2014 form to live assistant in four steps" },
      { src: "/work/nexoply-features.webp", caption: "Features \u2014 answers grounded in the owner's own content" },
      { src: "/work/nexoply-widget.webp", caption: "Customisation \u2014 themes, fonts, shapes and start screen" },
      { src: "/work/nexoply-usecases.webp", caption: "Use cases \u2014 trades, clinics, salons, restaurants, hotels" },
      { src: "/work/nexoply-pricing.webp", caption: "Pricing \u2014 free plan, monthly or yearly upgrades" },
    ],
  },
  {
    title: "NeoAltair",
    domain: "neoaltair.com",
    live: "https://neoaltair.com",
    kind: "Studio Site",
    description:
      "The site for a design-minded, engineering-led studio building AI products, web platforms and mobile apps. It is built around the work: a portfolio index, long-form case studies, nine service pages and seven industry pages, all server-rendered and held together by a single design system.",
    highlights: [
      "Case-study pages that follow a project from brief through to launch",
      "Service and industry pages generated from one content model",
      "Server-rendered routes with structured data for search",
    ],
    stack: ["TanStack Start", "React", "Vite", "SSR", "Cloudflare"],
    accent: "mint",
    images: [
      { src: "/work/neoaltair-hero.webp", caption: "Home \u2014 \u201cWe build what\u2019s next\u201d" },
      { src: "/work/neoaltair-work.webp", caption: "Work \u2014 the portfolio index" },
      { src: "/work/neoaltair-casestudy.webp", caption: "Case study \u2014 the Nexoply build, start to finish" },
      { src: "/work/neoaltair-services.webp", caption: "Services \u2014 nine disciplines under one roof" },
      { src: "/work/neoaltair-process.webp", caption: "Process \u2014 discovery through to delivery" },
      { src: "/work/neoaltair-industries.webp", caption: "Industries \u2014 built around how each sector works" },
    ],
  },
  {
    title: "Vamos Calafate",
    domain: "vamoscalafate.com",
    live: "https://vamoscalafate.com",
    kind: "Booking Platform",
    description:
      "A booking platform for Patagonia travel out of El Calafate \u2014 glacier excursions, catamaran navigations on Lago Argentino and trekking in El Chalt\u00e9n. Visitors search by date, category and difficulty, open a tour page with photo galleries, itinerary and live availability, and book online.",
    highlights: [
      "Search across experiences by date, category, duration and difficulty",
      "Tour pages with galleries, what's included, pricing and real-time availability",
      "A travel guide and destination library that feeds the catalogue",
    ],
    stack: ["Next.js", "React", "Server rendering", "ISR caching", "Nginx"],
    accent: "iris",
    images: [
      { src: "/work/vamoscalafate-hero.webp", caption: "Home \u2014 hero carousel over the experience search" },
      { src: "/work/vamoscalafate-tours.webp", caption: "Catalogue \u2014 excursions filtered by category and effort" },
      { src: "/work/vamoscalafate-tour.webp", caption: "Tour detail \u2014 Minitrekking on the Perito Moreno glacier" },
      { src: "/work/vamoscalafate-navegacion.webp", caption: "Booking \u2014 gallery, logistics and live availability" },
      { src: "/work/vamoscalafate-destinations.webp", caption: "Destinations \u2014 the region, explained place by place" },
      { src: "/work/vamoscalafate-blog.webp", caption: "Travel guide \u2014 practical, verifiable local advice" },
    ],
  },
  {
    title: "IKROL",
    domain: "ikrol.com.mx",
    live: "https://ikrol.com.mx",
    kind: "Corporate / Logistics",
    description:
      "The site for a Mexican freight forwarder with more than twenty years in foreign trade. Six service lines \u2014 ocean, air and ground freight, oversized cargo, customs brokerage and cargo insurance \u2014 each get a page of their own, alongside a coverage map spanning ports, borders and airports across all 32 states.",
    highlights: [
      "A service page per freight mode, each with scope, documentation and a quote path",
      "Coverage laid out by ports, land borders and airports",
      "Quote requests routed to one dedicated account executive per shipment",
    ],
    stack: ["TanStack Start", "React", "Vite", "Tailwind CSS", "Netlify"],
    accent: "mint",
    images: [
      { src: "/work/ikrol-hero.webp", caption: "Home \u2014 \u201cConectamos lo que mueve al mundo\u201d" },
      { src: "/work/ikrol-services.webp", caption: "Services \u2014 every mode of moving cargo" },
      { src: "/work/ikrol-ocean.webp", caption: "Ocean freight \u2014 FCL, LCL, reefer and hazardous cargo" },
      { src: "/work/ikrol-oversize.webp", caption: "Oversized cargo \u2014 break bulk, RO-RO and flat rack" },
      { src: "/work/ikrol-coverage.webp", caption: "Coverage \u2014 ports, borders and airports nationwide" },
      { src: "/work/ikrol-about.webp", caption: "About \u2014 an operator, not an intermediary" },
    ],
  },
  {
    title: "ComHub AI",
    domain: "comhubai.com",
    live: "https://comhubai.com",
    kind: "AI Platform",
    description:
      "An EU-hosted conversation agent that handles customer messages across WhatsApp, RCS, SMS, email and a web widget, carrying the full context wherever the conversation moves. The site splits into three audiences \u2014 sales, marketing and operations \u2014 and answers questions inline through an assistant of its own.",
    highlights: [
      "One agent replacing chatbots, campaign tools and shared inboxes",
      "Separate journeys for sales, marketing and operations teams",
      "GDPR-native positioning, with EU hosting and security made explicit",
    ],
    stack: ["Astro", "Islands architecture", "Tailwind CSS", "i18n", "Nginx"],
    accent: "iris",
    images: [
      { src: "/work/comhub-hero.webp", caption: "Home \u2014 one AI for every customer conversation" },
      { src: "/work/comhub-channels.webp", caption: "Channels \u2014 WhatsApp, RCS, SMS, email and web widget" },
      { src: "/work/comhub-sales.webp", caption: "For sales \u2014 every lead gets an answer and a next step" },
      { src: "/work/comhub-marketing.webp", caption: "For marketing \u2014 campaigns that answer back" },
      { src: "/work/comhub-operations.webp", caption: "For operations \u2014 fewer tickets, more resolved cases" },
      { src: "/work/comhub-pricing.webp", caption: "Pricing \u2014 start free, pay for real conversations" },
    ],
  },
];

export const skills = [
  {
    title: "AI & Automation",
    blurb: "Making language models useful inside real products.",
    items: [
      "LLM API integration", "OpenAI API", "AI chatbots", "Prompt engineering",
      "AI-assisted workflows", "RAG fundamentals",
    ],
  },
  {
    title: "Frontend",
    blurb: "Interfaces that stay fast, accessible and consistent.",
    items: [
      "JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js",
      "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
    ],
  },
  {
    title: "Backend",
    blurb: "APIs and services built to be read a year from now.",
    items: [
      "Node.js", "Express.js", "Python", "FastAPI", "Django",
      "PHP", "Laravel", "REST APIs", "GraphQL",
    ],
  },
  {
    title: "Databases",
    blurb: "Schemas designed before the first query is written.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "DevOps & Cloud",
    blurb: "From local container to deployed, monitored release.",
    items: [
      "Git", "GitHub", "Docker", "Linux", "Ubuntu Server",
      "AWS", "Vercel", "Netlify", "CI/CD fundamentals",
    ],
  },
  {
    title: "Additional",
    blurb: "The details that separate shipped from finished.",
    items: [
      "Responsive design", "Authentication", "Third-party integrations",
      "Debugging", "Performance optimization", "Security",
    ],
  },
];

export const education = [
  {
    school: "Vinnytsia National Technical University",
    degree: "Bachelor's Degree in Software Engineering",
    period: "2017 — 2021",
    location: "Vinnytsia, Ukraine",
    detail:
      "Software engineering, programming, algorithms, database systems, software architecture and application development.",
  },
  {
    school: "Vinnytsia Vocational College of Digital Technologies and Entrepreneurship",
    degree: "College-Level Technical Education",
    period: "2013 — 2017",
    location: "Vinnytsia, Ukraine",
    detail:
      "Information technology, computer systems, programming fundamentals and software applications.",
  },
];
