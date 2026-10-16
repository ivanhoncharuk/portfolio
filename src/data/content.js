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

// ─────────────────────────────────────────────────────────────────────────────
// EDIT ME: replace these with your real projects. `live` and `repo` are
// optional — leave them out and the card simply renders without that button.
// ─────────────────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "AI Knowledge Assistant",
    kind: "AI / RAG",
    year: "2026",
    description:
      "A retrieval-augmented chat assistant that answers questions over a company's own documents, with streamed responses, citation links back to the source, and a prompt layer tuned to keep answers grounded.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "OpenAI API"],
    accent: "iris",
    featured: true,
  },
  {
    title: "Analytics Dashboard Platform",
    kind: "Full Stack",
    year: "2025",
    description:
      "A multi-tenant dashboard where teams connect data sources and build their own views. Role-based auth, a cached aggregation layer and a component library that keeps every chart consistent.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    accent: "mint",
    featured: true,
  },
  {
    title: "Workflow Automation Engine",
    kind: "Backend / Automation",
    year: "2024",
    description:
      "A rules engine that watches for events and chains together API calls, notifications and AI summarisation steps — turning a recurring manual process into something that runs by itself.",
    stack: ["Python", "Django", "Celery", "Redis", "Docker"],
    accent: "iris",
  },
  {
    title: "Headless Commerce API",
    kind: "API / Architecture",
    year: "2023",
    description:
      "A GraphQL commerce backend covering catalogue, cart, checkout and webhooks, with payment provider integrations and a deployment pipeline that ships to production on every merge.",
    stack: ["Node.js", "GraphQL", "PostgreSQL", "AWS", "CI/CD"],
    accent: "mint",
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
