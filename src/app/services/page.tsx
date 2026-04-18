import { CtaSection } from "@/components/site/cta-section";
import {
  EditorialCarousel,
  type EditorialCarouselItem,
} from "@/components/site/editorial-carousel";
import { FaqList } from "@/components/site/faq-list";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { buildMetadata } from "@/lib/metadata";
import { siteImages } from "@/lib/site-images";
import { engagementModels, services, servicesFaqs } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Services | Aksora Labs",
  description:
    "Websites, web apps, mobile apps, product design, internal tools, and support from Aksora Labs.",
  path: "/services",
});

export default function ServicesPage() {
  const coreServices = services.slice(0, 6);
  const supportingServices = services.slice(6);

  const coreServiceCards: EditorialCarouselItem[] = [
    {
      id: coreServices[0].title,
      eyebrow: "Custom websites",
      title: coreServices[0].title,
      description: "Company sites that explain what you do and make the right first impression.",
      imageSrc: siteImages.services.core.websites,
      imageAlt: "Website design presentation on a monitor",
      href: "/contact",
      linkLabel: "Discuss this service",
      meta: coreServices[0].deliverables.slice(0, 2).join(" · "),
    },
    {
      id: coreServices[1].title,
      eyebrow: "Web products",
      title: coreServices[1].title,
      description: "Web products for operations, dashboards, portals, and workflow-heavy teams.",
      imageSrc: siteImages.services.core.webapps,
      imageAlt: "Web application dashboard workspace",
      href: "/contact",
      linkLabel: "Discuss this service",
      meta: coreServices[1].deliverables.slice(0, 2).join(" · "),
    },
    {
      id: coreServices[2].title,
      eyebrow: "Mobile apps",
      title: coreServices[2].title,
      description: "Mobile apps built for real users, real environments, and day-to-day use.",
      imageSrc: siteImages.services.core.mobile,
      imageAlt: "Mobile product review with phone and tablet",
      href: "/contact",
      linkLabel: "Discuss this service",
      meta: coreServices[2].deliverables.slice(0, 2).join(" · "),
    },
    {
      id: coreServices[3].title,
      eyebrow: "Interface systems",
      title: coreServices[3].title,
      description: "Product flows and interface systems that help people get through the work without guessing.",
      imageSrc: siteImages.services.core.uiux,
      imageAlt: "Interface and design system workspace",
      href: "/contact",
      linkLabel: "Discuss this service",
      meta: coreServices[3].deliverables.slice(0, 2).join(" · "),
    },
    {
      id: coreServices[4].title,
      eyebrow: "Product direction",
      title: coreServices[4].title,
      description: "Useful scoping and prioritization before a team spends money building the wrong thing.",
      imageSrc: siteImages.services.core.productStrategy,
      imageAlt: "Product strategy and planning workspace",
      href: "/contact",
      linkLabel: "Discuss this service",
      meta: coreServices[4].deliverables.slice(0, 2).join(" · "),
    },
    {
      id: coreServices[5].title,
      eyebrow: "Internal systems",
      title: coreServices[5].title,
      description: "Internal software that cuts manual work and gives teams a clearer view of what is happening.",
      imageSrc: siteImages.services.core.internalSystems,
      imageAlt: "Enterprise workflow and systems environment",
      href: "/contact",
      linkLabel: "Discuss this service",
      meta: coreServices[5].deliverables.slice(0, 2).join(" · "),
    },
  ];

  const supportCards: EditorialCarouselItem[] = [
    {
      id: supportingServices[0].title,
      eyebrow: "Support",
      title: supportingServices[0].title,
      description: "Support after launch to keep the product stable and moving in the right direction.",
      imageSrc: siteImages.services.support.maintenance,
      imageAlt: "Studio workspace details",
      href: "/contact",
      linkLabel: "Discuss support",
    },
    {
      id: supportingServices[1].title,
      eyebrow: "Optimization",
      title: supportingServices[1].title,
      description: "Speed and UX improvements when the product feels slower or rougher than it should.",
      imageSrc: siteImages.services.support.optimization,
      imageAlt: "Premium studio workspace",
      href: "/contact",
      linkLabel: "Discuss optimization",
    },
    {
      id: supportingServices[2].title,
      eyebrow: "Backend",
      title: supportingServices[2].title,
      description: "APIs and backend logic built to stay dependable as the product grows.",
      imageSrc: siteImages.services.support.backend,
      imageAlt: "Backend and systems environment",
      href: "/contact",
      linkLabel: "Discuss backend",
    },
    {
      id: supportingServices[3].title,
      eyebrow: "Commerce",
      title: supportingServices[3].title,
      description: "Booking and checkout flows where confusion turns into lost revenue.",
      imageSrc: siteImages.services.support.commerce,
      imageAlt: "Commerce and booking product environment",
      href: "/contact",
      linkLabel: "Discuss commerce",
    },
  ];

  return (
    <div className="site-dark-page">
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="Services"
          title="What we can help you build, fix, or improve."
          description="From websites to internal tools, we cover the planning, design, and engineering needed to get useful work out the door."
          badges={["Web", "Product", "Mobile", "Systems", "Support"]}
          tone="dark"
          stageVariant="services"
          mediaSrc={siteImages.services.hero}
          mediaAlt="Strategy workspace with pinned wireframes and interface artifacts"
          mediaNote="Planning, design, and engineering kept in the same loop."
          mediaPosition="object-center"
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Core Services"
            title="Where most projects start."
            description="The work teams usually come to us for first."
            tone="light"
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={coreServiceCards}
            theme="dark"
            variant="stacked"
            columns={{ tablet: 2, desktop: 3 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Supporting Capabilities"
            title="The rest of the work that keeps delivery complete."
            tone="light"
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={supportCards}
            theme="dark"
            variant="stacked"
            columns={{ tablet: 2, desktop: 4 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Engagement Model"
            title="Start fresh, fix what exists, or keep building."
            description="The shape of the work should match the actual problem."
            tone="light"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((model, index) => (
            <article
              key={model.title}
              className="editorial-note-panel editorial-note-panel--dark p-8"
            >
              <p className="relative text-[0.72rem] font-semibold tracking-[0.18em] text-[#d8b6bc] uppercase">
                {`0${index + 1}`}
              </p>
              <h3 className="relative mt-5 font-[family:var(--font-heading)] text-[2.2rem] font-normal leading-[0.98] text-white">
                {model.title}
              </h3>
              <p className="relative mt-4 text-[0.98rem] leading-8 text-white/66">
                {model.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Service questions, answered plainly."
            description="Enough detail to understand how we work."
            tone="light"
          />
          <FaqList items={servicesFaqs} tone="dark" />
        </div>
      </SectionShell>

      <SectionShell className="pb-8 pt-24">
        <CtaSection
          eyebrow="Next Step"
          title="Start with the problem. We can work out the right shape from there."
          description="The first step is understanding what needs to change and what kind of help actually makes sense."
          imageSrc={siteImages.services.cta}
          imageAlt="Premium strategy workspace"
          stageVariant="services"
          points={[
            "Choose the right scope before costs climb",
            "Keep design and engineering connected",
            "Work with one accountable team",
          ]}
        />
      </SectionShell>
    </div>
  );
}
