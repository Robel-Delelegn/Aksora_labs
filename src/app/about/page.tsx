import {
  EditorialCarousel,
  type EditorialCarouselItem,
} from "@/components/site/editorial-carousel";
import { CtaSection } from "@/components/site/cta-section";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { buildMetadata } from "@/lib/metadata";
import { aboutPrinciples, disciplineAreas } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "About | Aksora Labs",
  description:
    "Learn how Aksora Labs approaches premium software design, engineering, communication, and long-term product partnership.",
  path: "/about",
});

export default function AboutPage() {
  const principleCards: EditorialCarouselItem[] = [
    {
      id: aboutPrinciples[0].title,
      eyebrow: "Principle 1",
      title: aboutPrinciples[0].title,
      description: aboutPrinciples[0].description,
      imageSrc: "/images/process-artifacts-editorial-v1.png",
      imageAlt: aboutPrinciples[0].title,
      href: "/contact",
      linkLabel: "Discuss your project",
    },
    {
      id: aboutPrinciples[1].title,
      eyebrow: "Principle 2",
      title: aboutPrinciples[1].title,
      description: aboutPrinciples[1].description,
      imageSrc: "/images/hero-studio-editorial-v1.png",
      imageAlt: aboutPrinciples[1].title,
      href: "/contact",
      linkLabel: "Discuss your project",
    },
    {
      id: aboutPrinciples[2].title,
      eyebrow: "Principle 3",
      title: aboutPrinciples[2].title,
      description: aboutPrinciples[2].description,
      imageSrc: "/images/service-website-editorial-v1.png",
      imageAlt: aboutPrinciples[2].title,
      href: "/contact",
      linkLabel: "Discuss your project",
    },
    {
      id: aboutPrinciples[3].title,
      eyebrow: "Principle 4",
      title: aboutPrinciples[3].title,
      description: aboutPrinciples[3].description,
      imageSrc: "/images/editorial-banner-studio-v1.png",
      imageAlt: aboutPrinciples[3].title,
      href: "/contact",
      linkLabel: "Discuss your project",
    },
  ];

  return (
    <>
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="About Aksora Labs"
          title="A premium product and engineering partner built around clarity, taste, and durable execution."
          description="Aksora Labs exists for companies that want software to feel sharper, more trustworthy, and more commercially effective."
          badges={["Strategy", "Design", "Engineering", "Partnership"]}
          stageVariant="about"
          mediaSrc="/images/strategy-wall-editorial-v1.png"
          mediaAlt="Editorial strategy wall with product artifacts"
          mediaNote="Design quality is a business signal, not decoration."
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-[var(--border-strong)] pt-6">
          <SectionHeading
            eyebrow="Principles"
            title="The standard behind the work."
            description="How the company thinks about decisions, delivery, and partnership."
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={principleCards}
            theme="light"
            variant="stacked"
            columns={{ tablet: 2, desktop: 4 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-[var(--border-strong)] pt-6">
          <SectionHeading
            eyebrow="Discipline"
            title="What the company is built to cover."
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {disciplineAreas.map((discipline, index) => (
            <article key={discipline} className="editorial-note-panel p-8">
              <p className="relative text-[0.72rem] font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
                {`0${index + 1}`}
              </p>
              <p className="relative mt-5 font-[family:var(--font-heading)] text-[2rem] leading-[1.02] text-slate-950">
                {discipline}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-[var(--border-strong)] pt-6">
          <SectionHeading
            eyebrow="Partnership Standard"
            title="What working together should feel like."
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Clear communication",
              body: "Clients should not need to chase updates.",
            },
            {
              title: "Useful pressure",
              body: "Weak assumptions should be challenged early.",
            },
            {
              title: "Craft that holds up",
              body: "The work should still feel deliberate after handover and growth.",
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
          eyebrow="Talk To Aksora Labs"
          title="When the project carries weight, the partner should too."
          description="Bring the brief, the technical reality, and the business context."
          imageSrc="/images/strategy-wall-editorial-v1.png"
          imageAlt="Design and strategy workspace"
          stageVariant="about"
          points={[
            "Strategy and execution aligned from the start",
            "Premium design quality without empty agency language",
            "Software built to be trusted by users and stakeholders",
          ]}
        />
      </SectionShell>
    </>
  );
}
