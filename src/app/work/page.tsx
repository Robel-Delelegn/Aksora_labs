import { CtaSection } from "@/components/site/cta-section";
import {
  EditorialCarousel,
  type EditorialCarouselItem,
} from "@/components/site/editorial-carousel";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { buildMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Selected Work | Aksora Labs",
  description:
    "Review Aksora Labs case study pages for premium website, product, and internal system work.",
  path: "/work",
});

export default function WorkPage() {
  const workCards: EditorialCarouselItem[] = caseStudies.map((caseStudy) => ({
    id: caseStudy.slug,
    eyebrow: caseStudy.badge,
    title: caseStudy.title,
    description: caseStudy.summary,
    imageSrc:
      caseStudy.industry === "Finance"
        ? "/images/operations-control-editorial-v1.png"
        : caseStudy.industry === "Healthcare"
          ? "/images/hero-studio-editorial-v1.png"
          : caseStudy.industry === "Operations"
            ? "/images/service-systems-editorial-v1.png"
            : "/images/editorial-banner-studio-v1.png",
    imageAlt: caseStudy.title,
    href: `/work/${caseStudy.slug}`,
    linkLabel: "View case study",
    meta: `${caseStudy.clientType} · ${caseStudy.industry}`,
  }));

  return (
    <>
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="Selected Work"
          title="Case studies built to show judgment, not just finished screens."
          description="Aksora Labs presents work through problem, solution, delivery scope, and business impact."
          badges={["Problem", "Build", "Outcome"]}
          stageVariant="work"
          mediaSrc="/images/operations-control-editorial-v1.png"
          mediaAlt="Enterprise operations scene with layered dashboards"
          mediaNote="A strong case study shows business context, not just finished screens."
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-[var(--border-strong)] pt-6">
          <SectionHeading
            eyebrow="Portfolio"
            title="Examples that make the standard easier to judge."
            description="Enough context to understand the business problem, the product response, and the outcome."
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={workCards}
            theme="light"
            variant="stacked"
            columns={{ tablet: 2, desktop: 3 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-[var(--border-strong)] pt-6">
          <SectionHeading
            eyebrow="What Strong Work Signals"
            title="Fast evaluation for serious buyers."
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Business context",
              body: "What was at stake and why the project mattered.",
            },
            {
              title: "Delivery judgment",
              body: "How the product was shaped, not only how it looked.",
            },
            {
              title: "Outcome signal",
              body: "What changed for users, operations, or the business.",
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
          eyebrow="Next Step"
          title="If the work needs to support serious positioning, the execution has to do the same."
          description="The portfolio should make capability easier to assess and easier to trust."
          imageSrc="/images/operations-control-editorial-v1.png"
          imageAlt="Enterprise software operations environment"
          stageVariant="work"
          points={[
            "Show the problem, not just the finish",
            "Make scope and outcomes easy to scan",
            "Present capability in a premium, credible way",
          ]}
        />
      </SectionShell>
    </>
  );
}
