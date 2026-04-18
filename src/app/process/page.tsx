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
import { processFaqs, processSteps } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Process | Aksora Labs",
  description:
    "See how Aksora Labs scopes, designs, builds, launches, and supports digital products.",
  path: "/process",
});

export default function ProcessPage() {
  const processCards: EditorialCarouselItem[] = processSteps.map((step, index) => ({
    id: step.title,
    eyebrow: `Step ${index + 1}`,
    title: step.title,
    description: step.description,
    imageSrc:
      index === 0
        ? siteImages.process.steps.discovery
        : index === 1
          ? siteImages.process.steps.shaping
          : index === 2
            ? siteImages.process.steps.design
            : index === 3
              ? siteImages.process.steps.build
              : index === 4
                ? siteImages.process.steps.launch
                : siteImages.process.steps.support,
    imageAlt: step.title,
    href: "/contact",
    linkLabel: "Discuss the process",
    meta: step.outputs.slice(0, 2).join(" · "),
  }));

  return (
    <div className="site-dark-page">
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="Process"
          title="A process built to keep the work clear and the surprises smaller."
          description="You should always know where the project stands, what needs a decision, and what happens next."
          badges={["Scope", "Design", "Build", "Launch"]}
          tone="dark"
          stageVariant="process"
          mediaSrc={siteImages.process.hero}
          mediaAlt="Product planning artifacts and wireframes"
          mediaNote="Clear scope, regular check-ins, and careful delivery."
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Six Steps"
            title="From early conversations to support after launch."
            description="Each step is there to reduce a specific kind of risk."
            tone="light"
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={processCards}
            theme="dark"
            variant="stacked"
            columns={{ tablet: 2, desktop: 3 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Operating Rhythm"
            title="How the project stays steady."
            tone="light"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Weekly visibility",
              body: "You can see progress, decisions, and risk without chasing for updates.",
            },
            {
              title: "Focused client input",
              body: "We ask for stakeholder time where it changes the outcome, not out of habit.",
            },
            {
              title: "Quality checkpoints",
              body: "UX and engineering are reviewed before small issues pile into bigger ones.",
            },
            {
              title: "Clean handover",
              body: "Documentation and context make the next phase easier for your team to run.",
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

      <SectionShell className="pt-24">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Process questions, answered directly."
            description="Clear answers on timing, input, and documentation."
            tone="light"
          />
          <FaqList items={processFaqs} tone="dark" />
        </div>
      </SectionShell>

      <SectionShell className="pb-8 pt-24">
        <CtaSection
          eyebrow="Start Well"
          title="Good delivery starts with a process people can actually follow."
          description="Clear timing, clear decisions, and less drift from day one."
          imageSrc={siteImages.process.cta}
          imageAlt="Product process and planning materials"
          stageVariant="process"
          points={[
            "Reduce ambiguity before the budget is committed",
            "Set a working rhythm early",
            "Launch with fewer surprises",
          ]}
        />
      </SectionShell>
    </div>
  );
}
