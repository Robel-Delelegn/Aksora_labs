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
import { engagementModels, services, servicesFaqs } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Services | Aksora Labs",
  description:
    "Custom websites, web apps, mobile apps, product strategy, UI/UX, internal systems, and premium engineering from Aksora Labs.",
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
      description: "Flagship sites that strengthen trust before the first call happens.",
      imageSrc: "/images/service-website-editorial-v1.png",
      imageAlt: "Website design presentation on a monitor",
      href: "/contact",
      linkLabel: "Discuss this service",
      meta: coreServices[0].deliverables.slice(0, 2).join(" · "),
    },
    {
      id: coreServices[1].title,
      eyebrow: "Web products",
      title: coreServices[1].title,
      description: "Browser products for operations, dashboards, portals, and structured workflows.",
      imageSrc: "/images/service-webapp-editorial-v1.png",
      imageAlt: "Web application dashboard workspace",
      href: "/contact",
      linkLabel: "Discuss this service",
      meta: coreServices[1].deliverables.slice(0, 2).join(" · "),
    },
    {
      id: coreServices[2].title,
      eyebrow: "Mobile apps",
      title: coreServices[2].title,
      description: "Mobile products designed for real users, real environments, and long-term maintainability.",
      imageSrc: "/images/service-mobile-editorial-v1.png",
      imageAlt: "Mobile product review with phone and tablet",
      href: "/contact",
      linkLabel: "Discuss this service",
      meta: coreServices[2].deliverables.slice(0, 2).join(" · "),
    },
    {
      id: coreServices[3].title,
      eyebrow: "Interface systems",
      title: coreServices[3].title,
      description: "UI systems and product flows that make software feel clearer and more credible.",
      imageSrc: "/images/strategy-wall-editorial-v1.png",
      imageAlt: "Interface and design system workspace",
      href: "/contact",
      linkLabel: "Discuss this service",
      meta: coreServices[3].deliverables.slice(0, 2).join(" · "),
    },
    {
      id: coreServices[4].title,
      eyebrow: "Product direction",
      title: coreServices[4].title,
      description: "Sharper scoping and prioritization before a team commits to the wrong build.",
      imageSrc: "/images/process-artifacts-editorial-v1.png",
      imageAlt: "Product strategy and planning workspace",
      href: "/contact",
      linkLabel: "Discuss this service",
      meta: coreServices[4].deliverables.slice(0, 2).join(" · "),
    },
    {
      id: coreServices[5].title,
      eyebrow: "Internal systems",
      title: coreServices[5].title,
      description: "Operational software that removes manual work and improves decision visibility.",
      imageSrc: "/images/service-systems-editorial-v1.png",
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
      description: "Post-launch care that keeps the product stable and moving.",
      imageSrc: "/images/editorial-banner-studio-v1.png",
      imageAlt: "Studio workspace details",
      href: "/contact",
      linkLabel: "Discuss support",
    },
    {
      id: supportingServices[1].title,
      eyebrow: "Optimization",
      title: supportingServices[1].title,
      description: "Speed, UX, and conversion improvements that make the product work harder.",
      imageSrc: "/images/hero-studio-editorial-v1.png",
      imageAlt: "Premium studio workspace",
      href: "/contact",
      linkLabel: "Discuss optimization",
    },
    {
      id: supportingServices[2].title,
      eyebrow: "Backend",
      title: supportingServices[2].title,
      description: "Reliable APIs and application logic built to scale with the product.",
      imageSrc: "/images/operations-control-editorial-v1.png",
      imageAlt: "Backend and systems environment",
      href: "/contact",
      linkLabel: "Discuss backend",
    },
    {
      id: supportingServices[3].title,
      eyebrow: "Commerce",
      title: supportingServices[3].title,
      description: "Booking and revenue flows where clarity and trust affect conversion directly.",
      imageSrc: "/images/service-website-editorial-v1.png",
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
          title="Capabilities built to move serious digital work forward."
          description="Aksora Labs designs, builds, modernizes, and extends websites, products, and internal systems."
          badges={["Web", "Product", "Mobile", "Systems", "Support"]}
          tone="dark"
          stageVariant="services"
          mediaSrc="/images/strategy-wall-editorial-v1.png"
          mediaAlt="Strategy workspace with pinned wireframes and interface artifacts"
          mediaNote="Strategy, design, and engineering working as one practice."
          mediaPosition="object-center"
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Core Services"
            title="The work clients most often bring in."
            description="The essential capabilities most teams come looking for first."
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
            title="Additional coverage that keeps delivery complete."
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
            title="Launch, modernize, or extend."
            description="The shape of the engagement should follow the business need."
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
            title="Service questions, answered clearly."
            description="Enough detail to remove friction. No filler."
            tone="light"
          />
          <FaqList items={servicesFaqs} tone="dark" />
        </div>
      </SectionShell>

      <SectionShell className="pb-8 pt-24">
        <CtaSection
          eyebrow="Next Step"
          title="Start with the business need. Shape the delivery around that."
          description="Start with the business need, then shape the right scope, team, and delivery path."
          imageSrc="/images/strategy-wall-editorial-v1.png"
          imageAlt="Premium strategy workspace"
          stageVariant="services"
          points={[
            "Choose the right scope before cost expands",
            "Keep design and engineering aligned",
            "Build with one accountable partner",
          ]}
        />
      </SectionShell>
    </div>
  );
}
