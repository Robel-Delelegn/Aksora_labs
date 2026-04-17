import {
  EditorialCarousel,
  type EditorialCarouselItem,
} from "@/components/site/editorial-carousel";
import { CtaSection } from "@/components/site/cta-section";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { buildMetadata } from "@/lib/metadata";
import { industries } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Industries | Aksora Labs",
  description:
    "Aksora Labs works with startups, SMEs, and enterprise teams across SaaS, healthcare, finance, operations, commerce, and professional services.",
  path: "/industries",
});

export default function IndustriesPage() {
  const industryCards: EditorialCarouselItem[] = [
    {
      id: industries[0].title,
      eyebrow: "SaaS and technology",
      title: industries[0].title,
      description: industries[0].description,
      imageSrc: "/images/service-webapp-editorial-v1.png",
      imageAlt: industries[0].title,
      href: "/contact",
      linkLabel: "Discuss your sector",
    },
    {
      id: industries[1].title,
      eyebrow: "Healthcare",
      title: industries[1].title,
      description: industries[1].description,
      imageSrc: "/images/hero-studio-editorial-v1.png",
      imageAlt: industries[1].title,
      href: "/contact",
      linkLabel: "Discuss your sector",
    },
    {
      id: industries[2].title,
      eyebrow: "Finance",
      title: industries[2].title,
      description: industries[2].description,
      imageSrc: "/images/operations-control-editorial-v1.png",
      imageAlt: industries[2].title,
      href: "/contact",
      linkLabel: "Discuss your sector",
    },
    {
      id: industries[3].title,
      eyebrow: "Operations",
      title: industries[3].title,
      description: industries[3].description,
      imageSrc: "/images/service-systems-editorial-v1.png",
      imageAlt: industries[3].title,
      href: "/contact",
      linkLabel: "Discuss your sector",
    },
    {
      id: industries[4].title,
      eyebrow: "Commerce",
      title: industries[4].title,
      description: industries[4].description,
      imageSrc: "/images/service-website-editorial-v1.png",
      imageAlt: industries[4].title,
      href: "/contact",
      linkLabel: "Discuss your sector",
    },
    {
      id: industries[5].title,
      eyebrow: "Professional services",
      title: industries[5].title,
      description: industries[5].description,
      imageSrc: "/images/editorial-banner-studio-v1.png",
      imageAlt: industries[5].title,
      href: "/contact",
      linkLabel: "Discuss your sector",
    },
  ];

  return (
    <>
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="Industries"
          title="Different sectors. Different constraints. The same standard of execution."
          description="Aksora Labs adapts the delivery lens to the buyer, the users, and the operational context."
          badges={["Startups", "SMEs", "Enterprise", "Operational software"]}
          stageVariant="industries"
          mediaSrc="/images/operations-control-editorial-v1.png"
          mediaAlt="Editorial enterprise operations environment"
          mediaNote="Different buying contexts demand different signals of trust and control."
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-[var(--border-strong)] pt-6">
          <SectionHeading
            eyebrow="Focus Areas"
            title="Where clarity, reliability, and digital credibility matter."
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={industryCards}
            theme="light"
            variant="stacked"
            columns={{ tablet: 2, desktop: 3 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-[var(--border-strong)] pt-6">
          <SectionHeading
            eyebrow="Buyer Context"
            title="How the buying lens changes."
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Startup founders",
              body: "Need speed, product judgment, and a partner who can help shape scope.",
            },
            {
              title: "SME leadership teams",
              body: "Need systems that improve credibility and reduce operational drag.",
            },
            {
              title: "Enterprise stakeholders",
              body: "Need reliability, governance, and confidence inside larger constraints.",
            },
          ].map((item) => (
            <article key={item.title} className="editorial-note-panel p-8">
              <h3 className="relative font-[family:var(--font-heading)] text-[2rem] font-normal leading-[0.98] text-slate-950">
                {item.title}
              </h3>
              <p className="relative mt-4 text-[0.98rem] leading-8 text-slate-600">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-8 pt-24">
        <CtaSection
          eyebrow="Get Specific"
          title="The best projects start when the business context is discussed as seriously as the software."
          description="If the product has to work inside a specific buyer environment, that should shape the discovery conversation early."
          imageSrc="/images/operations-control-editorial-v1.png"
          imageAlt="Enterprise operations and planning environment"
          stageVariant="industries"
          points={[
            "Align the solution with stakeholder reality",
            "Reduce operational and approval friction",
            "Design around how the business actually runs",
          ]}
        />
      </SectionShell>
    </>
  );
}
