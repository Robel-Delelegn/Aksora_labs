import {
  EditorialCarousel,
  type EditorialCarouselItem,
} from "@/components/site/editorial-carousel";
import { CtaSection } from "@/components/site/cta-section";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { buildMetadata } from "@/lib/metadata";
import { siteImages } from "@/lib/site-images";
import { industries } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Industries | Aksora Labs",
  description:
    "Aksora Labs works with teams across SaaS, healthcare, finance, operations, commerce, and professional services.",
  path: "/industries",
});

export default function IndustriesPage() {
  const industryCards: EditorialCarouselItem[] = [
    {
      id: industries[0].title,
      eyebrow: "SaaS and technology",
      title: industries[0].title,
      description: industries[0].description,
      imageSrc: siteImages.industries.cards.saas,
      imageAlt: industries[0].title,
      href: "/contact",
      linkLabel: "Discuss your sector",
    },
    {
      id: industries[1].title,
      eyebrow: "Healthcare",
      title: industries[1].title,
      description: industries[1].description,
      imageSrc: siteImages.industries.cards.healthcare,
      imageAlt: industries[1].title,
      href: "/contact",
      linkLabel: "Discuss your sector",
    },
    {
      id: industries[2].title,
      eyebrow: "Finance",
      title: industries[2].title,
      description: industries[2].description,
      imageSrc: siteImages.industries.cards.finance,
      imageAlt: industries[2].title,
      href: "/contact",
      linkLabel: "Discuss your sector",
    },
    {
      id: industries[3].title,
      eyebrow: "Operations",
      title: industries[3].title,
      description: industries[3].description,
      imageSrc: siteImages.industries.cards.operations,
      imageAlt: industries[3].title,
      href: "/contact",
      linkLabel: "Discuss your sector",
    },
    {
      id: industries[4].title,
      eyebrow: "Commerce",
      title: industries[4].title,
      description: industries[4].description,
      imageSrc: siteImages.industries.cards.commerce,
      imageAlt: industries[4].title,
      href: "/contact",
      linkLabel: "Discuss your sector",
    },
    {
      id: industries[5].title,
      eyebrow: "Professional services",
      title: industries[5].title,
      description: industries[5].description,
      imageSrc: siteImages.industries.cards.professionalServices,
      imageAlt: industries[5].title,
      href: "/contact",
      linkLabel: "Discuss your sector",
    },
  ];

  return (
    <div className="site-dark-page">
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="Industries"
          title="Same craft, different business realities."
          description="We adjust the work to the users, the stakes, and the way the business actually runs."
          badges={["Startups", "SMEs", "Enterprise", "Operational software"]}
          tone="dark"
          stageVariant="industries"
          mediaSrc={siteImages.industries.hero}
          mediaAlt="Editorial enterprise operations environment"
          mediaNote="Different teams buy differently, work differently, and need different kinds of reassurance."
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Focus Areas"
            title="Where we tend to do our best work."
            tone="light"
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={industryCards}
            theme="dark"
            variant="stacked"
            columns={{ tablet: 2, desktop: 3 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Buyer Context"
            title="How needs change by client type."
            tone="light"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Startup founders",
              body: "Usually need speed, product judgment, and help shaping scope before the runway disappears.",
            },
            {
              title: "SME leadership teams",
              body: "Usually need systems that cut operational drag and make the business easier to understand.",
            },
            {
              title: "Enterprise stakeholders",
              body: "Usually need reliability, governance, and confidence inside bigger constraints and slower approval loops.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="editorial-note-panel editorial-note-panel--dark p-8"
            >
              <h3 className="relative font-[family:var(--font-heading)] text-[2rem] font-normal leading-[0.98] text-white">
                {item.title}
              </h3>
              <p className="relative mt-4 text-[0.98rem] leading-8 text-white/66">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-8 pt-24">
        <CtaSection
          eyebrow="Get Specific"
          title="The best solution depends on how the business really works."
          description="Users, approvals, constraints, and daily operations matter just as much as the feature list."
          imageSrc={siteImages.industries.cta}
          imageAlt="Enterprise operations and planning environment"
          stageVariant="industries"
          points={[
            "Match the solution to stakeholder reality",
            "Reduce approval and operational friction",
            "Design around day-to-day work, not theory",
          ]}
        />
      </SectionShell>
    </div>
  );
}
