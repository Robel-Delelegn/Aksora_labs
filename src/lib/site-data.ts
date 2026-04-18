export const siteConfig = {
  name: "Aksora Labs",
  shortName: "Aksora",
  title: "Aksora Labs | Websites, Apps, and Internal Tools",
  description:
    "Aksora Labs helps teams plan, design, and build websites, apps, and internal tools that are easier to use, easier to run, and easier to maintain.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://aksoralabs.com",
  email: "samsonamanuelsima@gmail.com",
  phoneNumber: "+251980405252",
  whatsappNumber: "+251980405252",
  whatsappMessage:
    "Hi Aksora Labs, I'd like to talk about a website or product project.",
  responseWindow: "Usually replies within one business day",
  location: "Remote team working with clients in different time zones",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/process" },
  { label: "Selected Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const announcementBar = {
  text: "Open for new website, product, and modernization work.",
  ctaLabel: "Book a Call",
  ctaHref: "/contact",
};

export const homeHero = {
  eyebrow: "Aksora Labs",
  title:
    "Websites, apps, and internal tools built with clear thinking.",
  description:
    "We work with teams that need a site, product, or internal system to do its job well now and keep doing it after launch.",
  primaryCta: { label: "Book a Call", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/work" },
  proofPoints: [
    "Websites",
    "Web applications",
    "Mobile products",
    "Internal systems",
  ],
  calloutTitle: "What we usually help with",
  calloutItems: [
    "Company websites that explain the business clearly.",
    "Products and dashboards that stay usable as they grow.",
    "Internal tools that cut busywork and give teams better visibility.",
  ],
};

export const homeOverview = [
  {
    title: "Scope",
    description:
      "Start with the real problem, not a wish list.",
  },
  {
    title: "Design",
    description:
      "Make the product easy to understand and easy to trust.",
  },
  {
    title: "Engineering",
    description:
      "Build cleanly so change does not get expensive later.",
  },
  {
    title: "Stewardship",
    description:
      "Keep improving the work after launch.",
  },
];

export const trustSignals = [
  "Custom websites",
  "Web applications",
  "Mobile products",
  "Internal systems",
  "Backend and API work",
  "Ongoing support",
];

export const sectorStripItems = [
  "Finance",
  "Healthcare",
  "Operations",
  "Commerce",
  "SaaS",
  "Professional services",
  "Internal operations",
  "Web platforms",
  "Mobile products",
  "Booking flows",
  "Admin systems",
  "Workflow tooling",
];

export type Service = {
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    title: "Custom websites",
    description:
      "Marketing and company websites built to explain what you do, earn trust, and bring in the right leads.",
    deliverables: [
      "Content structure",
      "Page design system",
      "Reusable CMS components",
    ],
  },
  {
    title: "Web application development",
    description:
      "Web apps for dashboards, portals, and day-to-day workflows that need to stay clear as they grow.",
    deliverables: [
      "Frontend architecture",
      "Role-based workflows",
      "Production-ready build",
    ],
  },
  {
    title: "Mobile app development",
    description:
      "Mobile apps for customers, staff, and field teams working in the real world.",
    deliverables: [
      "Cross-platform product design",
      "Offline-aware journeys",
      "Release planning",
    ],
  },
  {
    title: "UI/UX design",
    description:
      "Interface design that helps people find their way quickly and use the product without friction.",
    deliverables: [
      "User flows",
      "Design systems",
      "Detailed UI design",
    ],
  },
  {
    title: "Product strategy",
    description:
      "Useful when the problem is clear but the team needs help deciding what to build first.",
    deliverables: [
      "Feature prioritization",
      "MVP definition",
      "Roadmap outline",
    ],
  },
  {
    title: "Internal tools and business systems",
    description:
      "Internal tools that remove repetitive work and help teams see what is going on.",
    deliverables: [
      "Workflow mapping",
      "Admin systems",
      "Automation planning",
    ],
  },
  {
    title: "Maintenance and support",
    description:
      "Support after launch for fixes, improvements, and the next round of work.",
    deliverables: [
      "Monitoring and fixes",
      "Enhancement backlog",
      "Release support",
    ],
  },
  {
    title: "Performance optimization",
    description:
      "Targeted speed and UX improvements when the product feels slower or harder to use than it should.",
    deliverables: [
      "Performance audits",
      "Frontend optimization",
      "UX clean-up",
    ],
  },
  {
    title: "API and backend development",
    description:
      "Backend services and integrations that keep the product dependable as usage and complexity grow.",
    deliverables: [
      "API design",
      "Integration architecture",
      "Data modeling",
    ],
  },
  {
    title: "E-commerce and booking platforms",
    description:
      "Booking and commerce flows where confusion costs sales and slow handoffs create extra work.",
    deliverables: [
      "Checkout and booking flows",
      "Back-office controls",
      "Platform integrations",
    ],
  },
];

export const featuredServiceIndexes = [0, 1, 2, 5];

export const whyAksora = [
  {
    title: "The business problem stays in view",
    description: "Product decisions, UX choices, and engineering tradeoffs stay tied to what the business actually needs.",
  },
  {
    title: "Important decisions are not pushed down the chain",
    description: "Strategy, design, and engineering decisions stay close to the people doing the work.",
  },
  {
    title: "The work looks considered",
    description: "The product should feel trustworthy without relying on marketing fluff.",
  },
  {
    title: "The build can handle change",
    description: "Architecture, content, and code should still make sense when the product grows or changes hands.",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
  outputs: string[];
};

export const processSteps: ProcessStep[] = [
  {
    title: "Understand the problem",
    description:
      "Start with the business, the users, the constraints, and what can go wrong.",
    outputs: ["Clear scope", "Known risks", "Recommended approach"],
  },
  {
    title: "Shape the right version",
    description:
      "Turn goals into priorities, user flows, and a sensible technical plan.",
    outputs: ["Feature priorities", "User flow map", "Technical approach"],
  },
  {
    title: "Design the experience",
    description:
      "Design the screens, patterns, and visual rules so the product feels consistent from end to end.",
    outputs: ["Wireframes", "Detailed UI", "Design rules"],
  },
  {
    title: "Build in steady steps",
    description:
      "Build in focused cycles with clear updates and regular review points.",
    outputs: ["Working releases", "Weekly updates", "QA checkpoints"],
  },
  {
    title: "Launch carefully",
    description:
      "Prepare the release, test the edge cases, and hand the product over cleanly.",
    outputs: ["Launch checklist", "Documentation", "Monitoring setup"],
  },
  {
    title: "Support and extend",
    description:
      "Fix what needs fixing, improve what matters, and plan the next phase without guesswork.",
    outputs: ["Improvement backlog", "Support plan", "Next-phase priorities"],
  },
];

export type CaseStudy = {
  slug: string;
  badge: string;
  title: string;
  summary: string;
  clientType: string;
  industry: string;
  problem: string;
  solution: string;
  features: string[];
  outcomes: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  detailNarrative: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "investor-reporting-portal",
    badge: "Secure web platform",
    title: "Investor reporting portal for a regional private capital firm",
    summary:
      "The firm needed a better way to share reports with investors and internal teams.",
    clientType: "Regional private capital firm",
    industry: "Finance",
    problem:
      "Reporting relied on fragmented spreadsheets, PDF packs, and manual status gathering. It was slow, hard to control, and weak in presentation.",
    solution:
      "Aksora Labs designed a secure reporting portal with role-based dashboards, document distribution, portfolio views, and cleaner information architecture.",
    features: [
      "Role-based dashboards for investors and internal stakeholders",
      "Secure document vault with structured monthly reporting",
      "Portfolio performance overview with drill-down views",
      "Admin controls for publishing, versioning, and permissions",
      "Responsive experience built for boardroom and mobile access",
    ],
    outcomes: [
      "Reporting cycles moved from fragmented manual consolidation to a same-day publishing workflow.",
      "Investor-facing materials became easier to navigate and more credible at first glance.",
      "Internal teams gained a clearer single source of truth for portfolio reporting.",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    metrics: [
      { label: "Reporting cadence", value: "4x faster publishing workflow" },
      { label: "Access model", value: "Single secure portal" },
      { label: "Operations", value: "Clear version control" },
    ],
    detailNarrative: [
      "The portal needed to improve internal reporting while looking credible in front of investors.",
      "The result was a secure, calmer reporting surface with clearer ownership and faster publishing.",
    ],
  },
  {
    slug: "patient-booking-platform",
    badge: "Booking and care platform",
    title: "Patient booking and care coordination platform for a multi-site healthcare group",
    summary:
      "The healthcare group needed booking to feel easier for patients and less messy for staff.",
    clientType: "Multi-site healthcare provider",
    industry: "Healthcare",
    problem:
      "Patients faced inconsistent booking flows, while staff carried heavy phone traffic and disconnected coordination work.",
    solution:
      "Aksora Labs created a unified booking experience with internal scheduling controls and clearer operational visibility.",
    features: [
      "Location-aware booking and service selection",
      "Patient intake flows with clear step-by-step guidance",
      "Staff dashboard for scheduling exceptions and approvals",
      "Integrated notifications and reminders",
      "Analytics view for appointment demand and operational bottlenecks",
    ],
    outcomes: [
      "Patients experienced a clearer path from service discovery to completed booking.",
      "Staff handled fewer avoidable scheduling calls and manual follow-ups.",
      "Leadership gained better visibility into high-friction services and site-level demand.",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Twilio"],
    metrics: [
      { label: "Booking friction", value: "Simplified patient journey" },
      { label: "Staff load", value: "Fewer manual scheduling touches" },
      { label: "Visibility", value: "Site-level demand tracking" },
    ],
    detailNarrative: [
      "The platform had to feel calm for patients and practical for staff.",
      "The result was a clearer booking journey and a more usable operating layer behind it.",
    ],
  },
  {
    slug: "field-operations-suite",
    badge: "Operations and mobile suite",
    title: "Field operations suite for a logistics and service management business",
    summary:
      "The company needed one place to handle dispatch, field work, and reporting.",
    clientType: "Logistics and field operations company",
    industry: "Operations",
    problem:
      "Supervisors lacked a reliable live view, technicians worked across disconnected tools, and leadership struggled to trust the data.",
    solution:
      "Aksora Labs designed a web and mobile product suite with dispatch controls, offline-capable task flows, and operational analytics.",
    features: [
      "Dispatch dashboard with status overview and exception handling",
      "Mobile workflows for on-site task completion",
      "Offline-first sync logic for unreliable network environments",
      "Photo, note, and checklist capture for field evidence",
      "Leadership reporting for throughput and completion quality",
    ],
    outcomes: [
      "Managers gained stronger visibility into work in progress and stalled jobs.",
      "Field teams completed tasks through a more consistent and reliable workflow.",
      "Operational reporting became easier to trust and act on.",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
    ],
    metrics: [
      { label: "Execution speed", value: "Faster field task completion" },
      { label: "Reliability", value: "Offline-capable workflows" },
      { label: "Management", value: "Real-time dispatch visibility" },
    ],
    detailNarrative: [
      "For field teams, elegance means reliability under imperfect conditions.",
      "The result was one operating environment instead of another disconnected toolset.",
    ],
  },
];

export const industries = [
  {
    title: "SaaS and technology",
    description:
      "For product companies that need clearer onboarding, a stronger product surface, or more buyer confidence.",
  },
  {
    title: "Healthcare and care operations",
    description:
      "For patient, staff, and admin workflows where confusion creates stress and delays.",
  },
  {
    title: "Finance and regulated services",
    description:
      "For firms that need clean, trustworthy systems in front of clients, partners, and regulated teams.",
  },
  {
    title: "Logistics and field operations",
    description:
      "For distributed teams that rely on reliable workflows, clear dispatching, and useful reporting.",
  },
  {
    title: "Commerce and booking-driven businesses",
    description:
      "For businesses where a clumsy booking or checkout flow directly hurts revenue.",
  },
  {
    title: "Professional services and internal ops",
    description:
      "For companies that need a better web presence, cleaner internal processes, or both.",
  },
];

export const engagementModels = [
  {
    title: "Launch",
    description:
      "For new products, new websites, and first versions that need a clear scope and a sensible path to launch.",
  },
  {
    title: "Modernize",
    description:
      "For redesigns, rebuilds, and older systems that need better performance, cleaner UX, or a healthier codebase.",
  },
  {
    title: "Extend",
    description:
      "For teams that already have something running and need help improving it without losing momentum.",
  },
];

export const deliveryPrinciples = [
  "Senior product, design, and engineering oversight",
  "Visible scope, milestones, and decision points",
  "Accessible, performance-aware frontend work",
  "Maintainable architecture and useful documentation",
  "Post-launch support and a clean handover",
];

export const aboutPrinciples = [
  {
    title: "Get clear before moving fast",
    description:
      "Speed only helps when the team is pointed at the right problem in the right order.",
  },
  {
    title: "Keep communication calm",
    description:
      "Regular updates, direct decisions, and a delivery rhythm people can actually follow.",
  },
  {
    title: "Fix quality at the source",
    description:
      "Products are easier to support when design, code, content, and architecture are treated as one piece of work.",
  },
  {
    title: "Build for what comes next",
    description:
      "The work should still make sense when the product grows, the team changes, or the next phase starts.",
  },
];

export const disciplineAreas = [
  "Product strategy and scoping",
  "UI and UX design systems",
  "Frontend engineering",
  "Backend architecture and integrations",
  "Mobile application delivery",
  "QA, launch planning, and post-launch support",
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaqs: FaqItem[] = [
  {
    question: "What kinds of projects are the best fit for Aksora Labs?",
    answer:
      "Websites, products, and internal tools that matter to the business and need more than a quick cosmetic pass.",
  },
  {
    question: "Do you work only with startups?",
    answer:
      "No. We work with startups, smaller companies, and larger teams. The way we work changes, but the bar does not.",
  },
  {
    question: "How do you reduce project risk?",
    answer:
      "By getting the scope clear early, keeping tradeoffs visible, and treating UX, architecture, and implementation as connected decisions.",
  },
  {
    question: "Can you work with our internal team?",
    answer:
      "Yes. We can lead the work, plug into an internal team, or take ownership of a focused stream.",
  },
  {
    question: "Do you handle strategy as well as execution?",
    answer:
      "Yes. If strategy, scoping, or technical direction will help the project go better, we include it.",
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "Are services sold as separate line items or combined engagements?",
    answer:
      "Most real projects mix strategy, design, and engineering. The list shows what we cover, but the work is shaped around the outcome you need.",
  },
  {
    question: "Can Aksora Labs improve an existing product instead of rebuilding it?",
    answer:
      "Yes. Some projects are about fixing, simplifying, or extending what is already there rather than starting over.",
  },
  {
    question: "Do you support CMS-driven websites?",
    answer:
      "Yes. We can set up reusable sections and a content workflow your team can manage without calling a developer for every change.",
  },
  {
    question: "Can you handle backend and integration work too?",
    answer:
      "Yes. If the project needs APIs, backend services, integrations, or data modeling, we can cover that too.",
  },
];

export const processFaqs: FaqItem[] = [
  {
    question: "How much involvement is needed from our side?",
    answer:
      "Enough to make good decisions at the right moments. We keep your input focused so it does not turn into constant meetings.",
  },
  {
    question: "How do you handle changing requirements?",
    answer:
      "We call out the tradeoffs directly. If scope changes, we make the impact on time, budget, and priorities clear before moving ahead.",
  },
  {
    question: "How often do we get updates?",
    answer:
      "Regularly. You should always know what is moving, what needs a decision, and what could slow things down.",
  },
  {
    question: "Do you document what is built?",
    answer:
      "Yes. We include the context and documentation needed so your team is not left guessing after handoff.",
  },
];

export const contactFaqs: FaqItem[] = [
  {
    question: "What is helpful to include in the inquiry?",
    answer:
      "The goal, the users, what is not working today, the rough timeline, and anything sensitive or technically awkward.",
  },
  {
    question: "Can we reach out before the scope is fully defined?",
    answer:
      "Yes. A lot of useful projects start before the scope is fully nailed down.",
  },
  {
    question: "Do you work under NDA?",
    answer:
      "Yes. If the work is sensitive, we can start with an NDA and handle details more tightly.",
  },
  {
    question: "Do you offer ongoing support after the first project?",
    answer:
      "Yes. We can keep supporting the product after launch if that is useful for your team.",
  },
];

export const footerCredibility = [
  "Senior-led work",
  "Accessibility in the build",
  "Performance handled early",
  "Code that stays maintainable",
];
