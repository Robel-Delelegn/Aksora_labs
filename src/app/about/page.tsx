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
import {
  aboutPrinciples,
  disciplineAreas,
  homeFaqs,
  siteConfig,
  whyAksora,
} from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "About | Aksora Labs",
  description:
    "Learn how Aksora Labs approaches premium software design, engineering, communication, and long-term product partnership.",
  path: "/about",
});

const heroBadges = ["Strategy", "Design", "Engineering", "Partnership"];

const disciplineDetails = [
  {
    title: disciplineAreas[0],
    description: "Scope, priorities, and decision framing before delivery momentum outruns the business need.",
    imageSrc: "/images/process-artifacts-editorial-v1.png",
    imageAlt: "Product strategy and planning workspace",
  },
  {
    title: disciplineAreas[1],
    description: "Interface systems shaped to feel clearer, calmer, and more trustworthy from the first screen.",
    imageSrc: "/images/strategy-wall-editorial-v1.png",
    imageAlt: "Design system and interface planning wall",
  },
  {
    title: disciplineAreas[2],
    description: "Frontend implementation that respects accessibility, performance, and long-term maintainability.",
    imageSrc: "/images/service-website-editorial-v1.png",
    imageAlt: "Frontend design and website presentation environment",
  },
  {
    title: disciplineAreas[3],
    description: "Backend systems and integrations designed so product logic stays reliable as scope grows.",
    imageSrc: "/images/operations-control-editorial-v1.png",
    imageAlt: "Backend and operations control environment",
  },
  {
    title: disciplineAreas[4],
    description: "Mobile delivery for customer journeys, staff workflows, and operational use in the real world.",
    imageSrc: "/images/service-mobile-editorial-v1.png",
    imageAlt: "Mobile product review with phone and tablet",
  },
  {
    title: disciplineAreas[5],
    description: "QA, launch planning, and post-launch support built into the operating model, not bolted on later.",
    imageSrc: "/images/editorial-banner-studio-v1.png",
    imageAlt: "Premium studio environment with launch and delivery context",
  },
];

const partnershipCards: EditorialCarouselItem[] = [
  {
    id: "communication",
    eyebrow: "Communication",
    title: "Clear communication under pressure.",
    description: "Regular updates, visible decisions, and enough structure to keep momentum high without creating noise.",
    imageSrc: "/images/strategy-wall-editorial-v1.png",
    imageAlt: "Strategy wall with product thinking artifacts",
    href: "/contact",
    linkLabel: "Discuss your project",
    meta: "Updates · decisions · momentum",
  },
  {
    id: "pressure",
    eyebrow: "Judgment",
    title: "Useful pressure before expensive mistakes.",
    description: "Weak assumptions are surfaced early so the team can change course while the cost of change is still low.",
    imageSrc: "/images/process-artifacts-editorial-v1.png",
    imageAlt: "Editorial product process artifacts on a desk",
    href: "/contact",
    linkLabel: "Discuss your project",
    meta: "Scope · tradeoffs · direction",
  },
  {
    id: "craft",
    eyebrow: "Craft",
    title: "Work that holds up after launch.",
    description: "The product should feel strong in front of buyers now and remain readable to future teams later.",
    imageSrc: "/images/hero-studio-editorial-v1.png",
    imageAlt: "Design studio environment showing premium interface work",
    href: "/contact",
    linkLabel: "Discuss your project",
    meta: "Launch · handover · growth",
  },
];

export default function AboutPage() {
  const disciplineCards: EditorialCarouselItem[] = disciplineDetails.map(
    (item) => ({
      id: item.title,
      eyebrow: "Discipline",
      title: item.title,
      description: item.description,
      imageSrc: item.imageSrc,
      imageAlt: item.imageAlt,
      href: "/services",
      linkLabel: "View services",
    }),
  );

  return (
    <div className="site-dark-page">
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="About"
          title="A premium product and engineering partner built around clarity, taste, and durable execution."
          description="Aksora Labs exists for teams that want digital work to look sharper, feel stronger, and hold up after launch."
          badges={heroBadges}
          tone="dark"
          stageVariant="services"
          mediaSrc="/images/editorial-banner-studio-v1.png"
          mediaAlt="Premium software studio environment"
          mediaNote="Senior attention, clear decisions, and a standard that stays visible in the work."
          mediaPosition="object-center"
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Principles"
            title="The standard behind the work."
            description="How Aksora Labs thinks about delivery, communication, and long-term partnership."
            tone="light"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aboutPrinciples.map((principle, index) => (
            <article
              key={principle.title}
              className="editorial-note-panel editorial-note-panel--dark p-8"
            >
              <p className="relative text-[0.72rem] font-semibold tracking-[0.18em] text-[#d8b6bc] uppercase">
                {`0${index + 1}`}
              </p>
              <h2 className="relative mt-5 font-[family:var(--font-heading)] text-[2.05rem] font-normal leading-[0.98] text-white">
                {principle.title}
              </h2>
              <p className="relative mt-4 text-[0.98rem] leading-8 text-white/66">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Coverage"
            title="What the company is built to cover."
            description="Strategy, interface systems, engineering depth, and the operational details that keep delivery coherent."
            tone="light"
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={disciplineCards}
            theme="dark"
            variant="stacked"
            columns={{ tablet: 2, desktop: 3 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Operating Model"
            title="What teams value in the partnership."
            description="The delivery model is remote-first, senior-led, and designed to keep decisions visible."
            tone="light"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {whyAksora.map((item) => (
              <article
                key={item.title}
                className="editorial-note-panel editorial-note-panel--dark p-8"
              >
                <h2 className="relative font-[family:var(--font-heading)] text-[2rem] font-normal leading-[0.98] text-white">
                  {item.title}
                </h2>
                <p className="relative mt-4 text-[0.98rem] leading-8 text-white/66">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <aside className="editorial-note-panel editorial-note-panel--dark p-8">
            <p className="relative text-[0.72rem] font-semibold tracking-[0.2em] text-[#d8b6bc] uppercase">
              Operating Note
            </p>
            <h2 className="relative mt-5 font-[family:var(--font-heading)] text-[2.35rem] font-normal leading-[0.98] text-white">
              Remote-first, serving teams internationally.
            </h2>
            <p className="relative mt-4 text-[0.98rem] leading-8 text-white/66">
              The work is structured so strategy, design, engineering, QA, and
              post-launch support stay connected instead of becoming separate
              handoffs.
            </p>
            <div className="relative mt-8 border-t border-white/10 pt-6">
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-white/42 uppercase">
                Base
              </p>
              <p className="mt-3 text-[0.98rem] leading-8 text-white/72">
                {siteConfig.location}
              </p>
              <p className="mt-5 text-[0.72rem] font-semibold tracking-[0.18em] text-white/42 uppercase">
                Focus
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {disciplineAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-white/66 uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Partnership Standard"
            title="What working together should feel like."
            description="Good partnership is visible in the rhythm, the decisions, and how the work holds up over time."
            tone="light"
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={partnershipCards}
            theme="dark"
            variant="stacked"
            columns={{ tablet: 2, desktop: 3 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions teams often ask early."
            description="Clear answers on fit, risk, and how the partnership works."
            tone="light"
          />
          <FaqList items={homeFaqs} tone="dark" />
        </div>
      </SectionShell>

      <SectionShell className="pb-8 pt-24">
        <CtaSection
          eyebrow="Next Step"
          title="Start with the business problem and the operating context."
          description="The strongest engagements start with clear business context, then shape scope, design, and engineering around that reality."
          imageSrc="/images/editorial-banner-studio-v1.png"
          imageAlt="Premium studio workspace"
          stageVariant="services"
          points={[
            "Senior product, design, and engineering attention",
            "A clearer delivery model from the first phase",
            "Software built to stay strong after launch",
          ]}
        />
      </SectionShell>
    </div>
  );
}
