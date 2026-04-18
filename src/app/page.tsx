import { ArrowRight, Compass, ShieldCheck, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/site/button-link";
import { CtaSection } from "@/components/site/cta-section";
import { FaqList } from "@/components/site/faq-list";
import { HomeCapabilityShowcase } from "@/components/site/home-capability-showcase";
import { ImmersiveHomeHero } from "@/components/site/immersive-home-hero";
import { MediaComposition } from "@/components/site/media-composition";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { StructuredData } from "@/components/site/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { siteImages } from "@/lib/site-images";
import {
  caseStudies,
  featuredServiceIndexes,
  homeFaqs,
  homeHero,
  processSteps,
  sectorStripItems,
  services,
  siteConfig,
} from "@/lib/site-data";

export const metadata = buildMetadata({
  title: siteConfig.title,
  description:
    "Aksora Labs plans, designs, and builds websites, apps, and internal tools with clear scope and solid execution.",
  path: "/",
});

const trustPillars = [
  {
    title: "Senior-led",
    body: "The people making product and engineering calls stay close to the work itself.",
    icon: Compass,
  },
  {
    title: "Clear progress",
    body: "You can see what is moving, what is blocked, and what comes next.",
    icon: Workflow,
  },
  {
    title: "Built to last",
    body: "We build for launch and for the months after launch, not just the handoff day.",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  const featuredServices = featuredServiceIndexes.map((index) => services[index]);
  const processPreview = processSteps.slice(0, 4);

  const heroSlides = [
    {
      id: "websites",
      label: "Websites",
      title: "Websites that explain the business and leave a better first impression.",
      description:
        "For companies whose site feels vague, outdated, or not useful enough in sales conversations.",
      imageSrc: siteImages.home.hero.websites,
      imageAlt: "Website and product design review environment",
      highlights: [
        "Messaging architecture",
        "Editorial page systems",
        "CMS-ready build",
      ],
    },
    {
      id: "products",
      label: "Web products",
      title: "Web products that stay understandable as roles, rules, and data pile up.",
      description:
        "For dashboards, portals, and workflow-heavy products where people need clarity every day.",
      imageSrc: siteImages.home.hero.webapps,
      imageAlt: "Cinematic software strategy environment with product dashboards",
      highlights: [
        "Product UX",
        "Role-based workflows",
        "Reliable delivery",
      ],
    },
    {
      id: "systems",
      label: "Internal systems",
      title: "Internal tools that make the work easier to run.",
      description:
        "For teams stuck in manual updates, scattered information, and reporting no one fully trusts.",
      imageSrc: siteImages.home.hero.systems,
      imageAlt: "Cinematic internal systems and operations control environment",
      highlights: [
        "Workflow mapping",
        "Admin systems",
        "Reporting visibility",
      ],
    },
  ];

  const capabilityItems = [
    {
      id: "websites",
      eyebrow: "Custom websites",
      title: "Sites that make the business easier to understand.",
      service: featuredServices[0],
      imageSrc: siteImages.home.capabilities.websites,
      imageAlt: "Premium website presentation on a desktop monitor",
      note: "Useful when the current site looks fine on the surface but is not helping trust or sales.",
      signal: "Clear story",
      href: "/services",
    },
    {
      id: "products",
      eyebrow: "Web applications",
      title: "Web apps people can actually work in.",
      service: featuredServices[1],
      imageSrc: siteImages.home.capabilities.webapps,
      imageAlt: "Web application dashboard review environment",
      note: "For growing workflows, messy permissions, and data that needs structure.",
      signal: "Less friction",
      href: "/services",
    },
    {
      id: "mobile",
      eyebrow: "Mobile products",
      title: "Mobile apps that feel clear in the hand.",
      service: featuredServices[2],
      imageSrc: siteImages.home.capabilities.mobile,
      imageAlt: "Mobile app review on phones and tablets",
      note: "Built for customers, staff, and field teams who need to move quickly.",
      signal: "Fewer steps",
      href: "/services",
    },
    {
      id: "systems",
      eyebrow: "Internal systems",
      title: "Internal tools people stop fighting with.",
      service: featuredServices[3],
      imageSrc: siteImages.home.capabilities.systems,
      imageAlt: "Enterprise workflow and systems environment",
      note: "Useful when the team is buried in spreadsheets, follow-ups, and disconnected reporting.",
      signal: "Better visibility",
      href: "/services",
    },
  ];

  const processCards = [
    {
      step: processPreview[0],
      imageSrc: siteImages.home.process.discovery,
      imageAlt: processPreview[0].title,
    },
    {
      step: processPreview[1],
      imageSrc: siteImages.home.process.shaping,
      imageAlt: processPreview[1].title,
    },
    {
      step: processPreview[2],
      imageSrc: siteImages.home.process.design,
      imageAlt: processPreview[2].title,
    },
    {
      step: processPreview[3],
      imageSrc: siteImages.home.process.build,
      imageAlt: processPreview[3].title,
    },
  ];

  const homeWorkShowcase = [
    {
      study: caseStudies[0],
      title: "Investor reporting portal",
      summary: "Secure reporting hub for a regional private capital firm.",
      imageSrc: siteImages.home.work.investorReporting,
      imageAlt: "Investor reporting portal environment",
      highlight: "4x faster reporting cadence",
    },
    {
      study: caseStudies[1],
      title: "Patient booking and care coordination",
      summary: "Simpler booking and scheduling for a multi-site healthcare group.",
      imageSrc: siteImages.home.work.patientBooking,
      imageAlt: "Patient booking platform environment",
      highlight: "Simplified patient journey",
    },
    {
      study: caseStudies[2],
      title: "Field operations suite",
      summary: "Dispatch, mobile workflows, and reporting in one system.",
      imageSrc: siteImages.home.work.fieldOperations,
      imageAlt: "Field operations suite environment",
      highlight: "Real-time dispatch visibility",
    },
  ];

  const featuredWork = homeWorkShowcase[0];
  const secondaryWork = homeWorkShowcase.slice(1);

  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: siteConfig.name,
            url: siteConfig.url,
            email: siteConfig.email,
            telephone: siteConfig.phoneNumber,
            description: siteConfig.description,
            serviceType: services.map((service) => service.title),
            areaServed: "Worldwide",
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.title,
            })),
          },
        ]}
      />

      <ImmersiveHomeHero
        eyebrow={homeHero.eyebrow}
        title={homeHero.title}
        description={homeHero.description}
        primaryCta={homeHero.primaryCta}
        secondaryCta={homeHero.secondaryCta}
        proofPoints={homeHero.proofPoints}
        slides={heroSlides}
        marqueeItems={sectorStripItems}
      />

      <SectionShell className="home-dark-section home-dark-section--plain py-12 text-white sm:py-16 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What we build across web, product, mobile, and internal tools."
            description="Strategy, design, and engineering stay in the same conversation from the start."
            align="center"
            tone="light"
          />
        </Reveal>

        <div className="mt-8 sm:mt-10 lg:mt-14">
          <HomeCapabilityShowcase
            items={capabilityItems.map((item) => ({
              id: item.id,
              eyebrow: item.eyebrow,
              title: item.title,
              description: item.service.description,
              deliverables: item.service.deliverables,
              imageSrc: item.imageSrc,
              imageAlt: item.imageAlt,
              note: item.note,
              signal: item.signal,
              href: item.href,
            }))}
          />
        </div>
      </SectionShell>

      <SectionShell className="home-dark-section home-dark-section--top py-12 text-white sm:py-16 lg:py-24">
        <div className="grid gap-7 sm:gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Work that makes the problem, the choices, and the result easy to follow."
            description="Enough detail to see what changed and why it mattered."
            tone="light"
          />
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="flex lg:justify-end">
              <ButtonLink
                href="/work"
                variant="inverse"
              >
                View Our Work
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="home-work-showcase mt-8 sm:mt-10">
          <Reveal variant="up" delay={140}>
            <article className="home-work-feature group">
              <div className="home-work-feature__media">
                <Image
                  src={featuredWork.imageSrc}
                  alt={featuredWork.imageAlt}
                  fill
                  sizes="(max-width: 1279px) 100vw, 58vw"
                  className="media-drift object-cover object-center"
                />
                <div className="home-work-feature__media-overlay" />
                <div className="home-work-feature__media-note">
                  {featuredWork.study.clientType}
                </div>
              </div>

              <div className="home-work-feature__panel">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.18em] text-white/72 uppercase">
                    {featuredWork.study.badge}
                  </span>
                  <span className="text-sm text-white/46">
                    {featuredWork.study.industry}
                  </span>
                </div>

                <h3 className="home-work-feature__title">
                  {featuredWork.title}
                </h3>
                <p className="home-work-feature__summary">
                  {featuredWork.summary}
                </p>

                <div className="home-work-feature__metrics">
                  {featuredWork.study.metrics.map((metric) => (
                    <div key={metric.label} className="home-work-feature__metric">
                      <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-white/40 uppercase">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/84">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <ButtonLink
                    href={`/work/${featuredWork.study.slug}`}
                    variant="inverse"
                  >
                    View case study
                  </ButtonLink>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="home-work-teasers">
            {secondaryWork.map((item, index) => (
              <Reveal key={item.study.slug} delay={170 + index * 70}>
                <Link
                  href={`/work/${item.study.slug}`}
                  className="home-work-teaser group"
                >
                  <div className="home-work-teaser__media">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1279px) 100vw, 36vw"
                      className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="home-work-teaser__overlay" />
                    <span className="home-work-teaser__chip">
                      {item.highlight}
                    </span>
                  </div>
                  <div className="home-work-teaser__content">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-white/52 uppercase">
                        {item.study.badge}
                      </p>
                      <span className="text-sm text-white/38">
                        {item.study.industry}
                      </span>
                    </div>
                    <h4 className="home-work-teaser__title">
                      {item.title}
                    </h4>
                    <p className="home-work-teaser__summary">
                      {item.summary}
                    </p>
                    <div className="home-work-teaser__cta">
                      Open case study
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="home-dark-section home-dark-section--plain py-12 text-white sm:py-16 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="A process that keeps the work moving without hiding the messy bits."
            description="You can see the decisions, the progress, and what happens next."
            align="center"
            tone="light"
          />
        </Reveal>

        <div className="process-runway mt-8 sm:mt-10 lg:mt-14">
          <div className="process-runway__line" />
          {processCards.map((item, index) => (
            <Reveal key={item.step.title} delay={index * 80}>
              <article className={`process-runway__card ${index % 2 === 1 ? "process-runway__card--offset" : ""}`}>
                <div className="process-runway__node" />
                <div className="relative aspect-[1.08/0.82] overflow-hidden rounded-[24px]">
                  <MediaComposition
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    compactStage
                    stageVariant={index === 0 ? "services" : index === 1 ? "process" : index === 2 ? "work" : "contact"}
                    stageWidthClassName="w-[36%] min-w-[120px] max-w-[170px]"
                    heightClassName="h-full"
                    className="h-full border-none bg-transparent p-0"
                  />
                </div>
                <div className="process-runway__body">
                  <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-white/42 uppercase">
                    {`Step ${index + 1}`}
                  </p>
                  <h3 className="mt-4 font-[family:var(--font-heading)] text-[2rem] font-normal leading-[0.98] text-white">
                    {item.step.title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-7 text-white/64">
                    {item.step.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.step.outputs.map((output) => (
                      <span
                        key={output}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[0.72rem] font-medium text-white/66"
                      >
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="home-dark-section home-dark-section--right py-12 text-white sm:py-16 lg:py-24">
        <div className="grid gap-7 sm:gap-9 xl:grid-cols-[0.7fr_1.3fr] xl:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Why Aksora"
              title="What it is like to work with us."
              description="Clear decisions, visible progress, and software that still makes sense after launch."
              tone="light"
            />

            <div className="mt-6 sm:mt-8 border-t border-white/10">
              {trustPillars.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 70}>
                    <article className="trust-signal-row">
                      <div className="flex items-start gap-4">
                        <span className="icon-emblem border-white/14 bg-white/8 text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-[family:var(--font-heading)] text-[1.8rem] leading-none text-white">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-[0.98rem] leading-7 text-white/66">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>

          <Reveal variant="up" delay={120}>
            <div className="faq-observatory">
              <SectionHeading
                eyebrow="FAQ"
                title="Questions clients often ask early."
                description="Straight answers before the first call save everyone time."
                tone="light"
              />
              <div className="mt-8">
                <FaqList items={homeFaqs} tone="dark" />
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="home-dark-section home-dark-section--plain pb-8 pt-12 sm:pt-16 lg:pt-24">
        <CtaSection
          eyebrow="Next Step"
          title="If the current site, product, or workflow is not doing its job, let's look at it properly."
          description="The first conversation is for getting clear on the problem, the constraints, and the best next step."
          imageSrc={siteImages.home.cta}
          imageAlt="Premium software strategy environment"
          stageVariant="contact"
          points={[
            "Get clear on scope before spending more",
            "Keep product, design, and engineering aligned",
            "Leave with a sensible next step",
          ]}
        />
      </SectionShell>
    </>
  );
}
