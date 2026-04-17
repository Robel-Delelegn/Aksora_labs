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
import { processFaqs, processSteps } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Process | Aksora Labs",
  description:
    "See how Aksora Labs scopes, designs, engineers, launches, and supports premium digital products.",
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
        ? "/images/strategy-wall-editorial-v1.png"
        : index === 1
          ? "/images/process-artifacts-editorial-v1.png"
          : index === 2
            ? "/images/service-website-editorial-v1.png"
            : index === 3
              ? "/images/service-systems-editorial-v1.png"
              : index === 4
                ? "/images/operations-control-editorial-v1.png"
                : "/images/editorial-banner-studio-v1.png",
    imageAlt: step.title,
    href: "/contact",
    linkLabel: "Discuss the process",
    meta: step.outputs.slice(0, 2).join(" · "),
  }));

  return (
    <>
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="Process"
          title="A delivery model designed to keep clarity high and waste low."
          description="The process exists to make the work easier to trust, easier to steer, and easier to launch well."
          badges={["Scope", "Design", "Build", "Launch"]}
          stageVariant="process"
          mediaSrc="/images/process-artifacts-editorial-v1.png"
          mediaAlt="Product planning artifacts and wireframes"
          mediaNote="The process should look deliberate long before launch."
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-[var(--border-strong)] pt-6">
          <SectionHeading
            eyebrow="Six Steps"
            title="From first diagnosis to post-launch support."
            description="Each step exists to remove a specific kind of project risk."
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={processCards}
            theme="warm"
            variant="stacked"
            columns={{ tablet: 2, desktop: 3 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-[var(--border-strong)] pt-6">
          <SectionHeading
            eyebrow="Operating Rhythm"
            title="How the engagement stays calm."
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Weekly visibility",
              body: "Progress, decisions, and risk stay easy to follow.",
            },
            {
              title: "Focused client input",
              body: "Stakeholder time is used where it changes the outcome.",
            },
            {
              title: "Quality checkpoints",
              body: "UX and engineering are reviewed before small issues compound.",
            },
            {
              title: "Clean handover",
              body: "Documentation and context make the next phase easier to run.",
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

      <SectionShell className="pt-24">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Process questions, handled directly."
            description="The process should reduce uncertainty before the build starts."
          />
          <FaqList items={processFaqs} />
        </div>
      </SectionShell>

      <SectionShell className="pb-8 pt-24">
        <CtaSection
          eyebrow="Start Well"
          title="The easiest projects to trust are the ones with a process you can see."
          description="If the work is strategically important, the operating model should feel sharp from the start."
          imageSrc="/images/process-artifacts-editorial-v1.png"
          imageAlt="Product process and planning materials"
          stageVariant="process"
          points={[
            "Reduce ambiguity before budget is committed",
            "Set a stronger cadence from day one",
            "Launch with better control",
          ]}
        />
      </SectionShell>
    </>
  );
}
