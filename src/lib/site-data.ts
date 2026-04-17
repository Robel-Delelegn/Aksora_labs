export const siteConfig = {
  name: "Aksora Labs",
  shortName: "Aksora",
  title: "Aksora Labs | Premium Software Design and Engineering Partner",
  description:
    "Aksora Labs designs and builds premium websites, web apps, mobile apps, and internal systems for startups, SMEs, and enterprise teams that need serious execution.",
  url: "https://aksoralabs.com",
  email: "hello@aksoralabs.com",
  responseWindow: "Clear first response and discovery planning",
  location: "Remote-first, serving teams internationally",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "#",
      note: "",
    },
    {
      label: "GitHub",
      href: "#",
      note: "",
    },
    {
      label: "Dribbble",
      href: "#",
      note: "",
    },
  ],
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
  text: "Now booking web, product, and modernization engagements.",
  ctaLabel: "Book a Call",
  ctaHref: "/contact",
};

export const homeHero = {
  eyebrow: "Aksora Labs",
  title:
    "Websites, apps, and internal systems for businesses that expect a higher standard.",
  description:
    "Aksora Labs designs and engineers premium digital products for teams that need sharp presentation, reliable delivery, and software that holds up after launch.",
  primaryCta: { label: "Book a Call", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/work" },
  proofPoints: [
    "Websites",
    "Web applications",
    "Mobile products",
    "Internal systems",
  ],
  calloutTitle: "What Aksora Labs takes on",
  calloutItems: [
    "Flagship websites that need to signal competence fast.",
    "Products and platforms that need clarity and reliability.",
    "Internal systems that remove drag and improve visibility.",
  ],
};

export const homeOverview = [
  {
    title: "Scope",
    description:
      "Start with the business need, not a guessed feature list.",
  },
  {
    title: "Design",
    description:
      "Make trust and usability obvious in seconds.",
  },
  {
    title: "Engineering",
    description:
      "Ship fast without building something brittle.",
  },
  {
    title: "Stewardship",
    description:
      "Support the product after launch, not just the handoff.",
  },
];

export const trustSignals = [
  "Custom websites",
  "Web applications",
  "Mobile products",
  "Internal systems",
  "API and backend platforms",
  "Long-term support",
];

export const clientLogoPlaceholders = [
  "Startups",
  "SMEs",
  "Enterprise teams",
  "Finance",
  "Healthcare",
  "Operations",
  "Commerce",
  "SaaS",
  "Internal systems",
  "Web platforms",
  "Mobile products",
  "Long-term partnerships",
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
      "Premium marketing and corporate websites built to signal competence and convert serious buyers.",
    deliverables: [
      "Messaging architecture",
      "Editorial page design",
      "CMS-friendly component systems",
    ],
  },
  {
    title: "Web application development",
    description:
      "Browser-based products for dashboards, portals, and multi-role workflows.",
    deliverables: [
      "Frontend architecture",
      "Role-based workflows",
      "Production-ready delivery",
    ],
  },
  {
    title: "Mobile app development",
    description:
      "Mobile products for customers, field teams, and operational workflows.",
    deliverables: [
      "Cross-platform product design",
      "Offline-aware flows",
      "Release planning",
    ],
  },
  {
    title: "UI/UX design",
    description:
      "Interfaces and design systems that make software easier to trust and easier to use.",
    deliverables: [
      "User flows",
      "Design systems",
      "High-fidelity interface design",
    ],
  },
  {
    title: "Product strategy",
    description:
      "Scoping and prioritization for teams that need sharper direction before building.",
    deliverables: [
      "Feature prioritization",
      "MVP definition",
      "Roadmap framing",
    ],
  },
  {
    title: "Internal tools and business systems",
    description:
      "Operational platforms that reduce manual work and improve visibility.",
    deliverables: [
      "Workflow mapping",
      "Admin systems",
      "Automation planning",
    ],
  },
  {
    title: "Maintenance and support",
    description:
      "Post-launch improvement, stabilization, and feature expansion.",
    deliverables: [
      "Monitoring and fixes",
      "Enhancement backlog",
      "Release support",
    ],
  },
  {
    title: "Performance optimization",
    description:
      "Technical and UX improvements that reduce friction and improve speed.",
    deliverables: [
      "Performance audits",
      "Frontend optimization",
      "Conversion-focused polish",
    ],
  },
  {
    title: "API and backend development",
    description:
      "Backend systems and integrations that keep product logic reliable and scalable.",
    deliverables: [
      "API design",
      "Integration architecture",
      "Data modeling",
    ],
  },
  {
    title: "E-commerce and booking platforms",
    description:
      "Commerce and scheduling experiences where trust, clarity, and speed affect revenue.",
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
    title: "Business and product alignment",
    description: "Business context, UX quality, and engineering decisions stay connected.",
  },
  {
    title: "Senior attention on the work",
    description: "Important decisions stay close to strategy, design, and engineering.",
  },
  {
    title: "Design that signals competence",
    description: "Presentation shapes trust before buyers read every line.",
  },
  {
    title: "Systems built for change",
    description: "Architecture is shaped to survive growth, iteration, and handover.",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
  outputs: string[];
};

export const processSteps: ProcessStep[] = [
  {
    title: "Diagnose the opportunity",
    description:
      "Start with business context, constraints, users, and risk.",
    outputs: ["Scope clarity", "Risk flags", "Recommended delivery path"],
  },
  {
    title: "Shape the product",
    description:
      "Translate goals into priorities, flows, and technical direction.",
    outputs: ["Feature priorities", "Experience architecture", "Technical approach"],
  },
  {
    title: "Design the system",
    description:
      "Create the visual language and reusable patterns that make the product coherent.",
    outputs: ["Wireframes", "High-fidelity UI", "Design system rules"],
  },
  {
    title: "Build with discipline",
    description:
      "Engineer in focused cycles with visible progress and quality gates.",
    outputs: ["Working increments", "Weekly reporting", "QA and review checkpoints"],
  },
  {
    title: "Launch with confidence",
    description:
      "Prepare the release path, validate edge cases, and handoff cleanly.",
    outputs: ["Launch checklist", "Documentation", "Monitoring-ready release"],
  },
  {
    title: "Support and extend",
    description:
      "Improve the product deliberately instead of letting ad hoc requests drive the roadmap.",
    outputs: ["Improvement backlog", "Support coverage", "Scalable next-phase planning"],
  },
];

export type CaseStudy = {
  slug: string;
  badge: string;
  title: string;
  summary: string;
  clientName: string;
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
      "A regional private capital firm needed a more credible and efficient way to deliver reporting to investors and portfolio teams.",
    clientName: "Private capital firm",
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
      "A multi-site healthcare group needed a calmer digital front door for patients and staff.",
    clientName: "Healthcare group",
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
      "A field operations business needed one platform for dispatch, mobile task execution, and management visibility.",
    clientName: "Field operations business",
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
      "For product-led businesses that need sharper onboarding and stronger buyer trust.",
  },
  {
    title: "Healthcare and care operations",
    description:
      "For patient, staff, and admin workflows where clarity and reassurance matter.",
  },
  {
    title: "Finance and regulated services",
    description:
      "For firms that need interfaces and systems that feel credible in front of high-stakes users.",
  },
  {
    title: "Logistics and field operations",
    description:
      "For distributed teams that depend on reliable workflows and real-time visibility.",
  },
  {
    title: "Commerce and booking-driven businesses",
    description:
      "For brands where speed, usability, and conversion quality affect revenue.",
  },
  {
    title: "Professional services and internal ops",
    description:
      "For companies that need stronger digital presence and cleaner internal systems.",
  },
];

export const engagementModels = [
  {
    title: "Launch",
    description:
      "For MVPs, flagship websites, and new products that need clear positioning and a disciplined delivery path.",
  },
  {
    title: "Modernize",
    description:
      "For redesigns, replatforms, and legacy systems that need stronger performance and a cleaner technical base.",
  },
  {
    title: "Extend",
    description:
      "For teams that need a premium partner to ship features, improve systems, and support growth without chaos.",
  },
];

export const deliveryPrinciples = [
  "Senior product, design, and engineering oversight",
  "Visible scope, milestones, and decision checkpoints",
  "Accessible, performance-aware frontend implementation",
  "Maintainable architecture and sensible documentation",
  "Post-launch support without lock-in language",
];

export const aboutPrinciples = [
  {
    title: "Clarity before momentum",
    description:
      "Fast execution matters only when the team is building the right thing in the right order.",
  },
  {
    title: "Calm communication",
    description:
      "Stakeholders should not need to chase status to understand where the work stands.",
  },
  {
    title: "Quality at the source",
    description:
      "Good products are easier to support when design, code, content, and architecture act as one system.",
  },
  {
    title: "Long-term partnership thinking",
    description:
      "The work should make the next phase easier, not leave the client dependent on fragile implementation.",
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
      "Premium websites, customer products, internal tools, and digital systems that carry real business weight.",
  },
  {
    question: "Do you work only with startups?",
    answer:
      "No. Aksora Labs works with startups, SMEs, and larger organizations. The delivery model changes, but the standard stays high.",
  },
  {
    question: "How do you reduce project risk?",
    answer:
      "By removing ambiguity early, keeping scope visible, and treating architecture, UX, and implementation quality as one system.",
  },
  {
    question: "Can you work with our internal team?",
    answer:
      "Yes. Aksora Labs can lead delivery, complement an internal team, or own a focused product stream.",
  },
  {
    question: "Do you handle strategy as well as execution?",
    answer:
      "Yes. Strategy, scope definition, and technical direction are part of the engagement when they improve decision-making.",
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "Are services sold as separate line items or combined engagements?",
    answer:
      "Most serious projects combine strategy, design, and engineering. The service list shows capability; the engagement is shaped around the outcome.",
  },
  {
    question: "Can Aksora Labs improve an existing product instead of rebuilding it?",
    answer:
      "Yes. Some engagements focus on redesign, modernization, stabilization, or extending a product that already has traction.",
  },
  {
    question: "Do you support CMS-driven websites?",
    answer:
      "Yes. Website builds can include flexible content systems and reusable components for internal teams.",
  },
  {
    question: "Can you handle backend and integration work too?",
    answer:
      "Yes. API design, backend services, integrations, and data modeling are part of the scope when needed.",
  },
];

export const processFaqs: FaqItem[] = [
  {
    question: "How much involvement is needed from our side?",
    answer:
      "Enough to make good decisions quickly. The process is structured so client input stays focused.",
  },
  {
    question: "How do you handle changing requirements?",
    answer:
      "By making tradeoffs explicit. When the scope changes, the impact on timeline, budget, and priorities is surfaced directly.",
  },
  {
    question: "How often do we get updates?",
    answer:
      "The delivery rhythm uses regular progress visibility, milestone reviews, and clear decision checkpoints.",
  },
  {
    question: "Do you document what is built?",
    answer:
      "Yes. Documentation and handover context matter because the product should still make sense to the next team that touches it.",
  },
];

export const contactFaqs: FaqItem[] = [
  {
    question: "What should we include in the inquiry?",
    answer:
      "Share the business goal, users, current pain points, rough timeline, and any technical or stakeholder constraints.",
  },
  {
    question: "Can we reach out before the scope is fully defined?",
    answer:
      "Yes. Many useful conversations start when the team knows the problem but not the exact product shape.",
  },
  {
    question: "Do you work under NDA?",
    answer:
      "Yes. Sensitive projects can start with confidentiality protections and tighter information handling.",
  },
  {
    question: "Do you offer ongoing support after the first project?",
    answer:
      "Yes. Aksora Labs can continue as a long-term product, design, and engineering partner.",
  },
];

export const footerCredibility = [
  "Senior-led delivery",
  "Accessibility-minded implementation",
  "Performance-conscious frontend",
  "Long-term maintainability",
];
