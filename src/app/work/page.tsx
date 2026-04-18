import { CtaSection } from "@/components/site/cta-section";
import {
  EditorialCarousel,
  type EditorialCarouselItem,
} from "@/components/site/editorial-carousel";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { buildMetadata } from "@/lib/metadata";
import { getCaseStudyImage, siteImages } from "@/lib/site-images";
import { caseStudies } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Selected Work | Aksora Labs",
  description:
    "A few case studies from Aksora Labs across product, operations, and customer-facing platforms.",
  path: "/work",
});

export default function WorkPage() {
  const workCards: EditorialCarouselItem[] = caseStudies.map((caseStudy) => ({
    id: caseStudy.slug,
    eyebrow: caseStudy.badge,
    title: caseStudy.title,
    description: caseStudy.summary,
    imageSrc: getCaseStudyImage(caseStudy.slug),
    imageAlt: caseStudy.title,
    href: `/work/${caseStudy.slug}`,
    linkLabel: "View case study",
    meta: `${caseStudy.clientType} · ${caseStudy.industry}`,
  }));

  return (
    <div className="site-dark-page">
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="Selected Work"
          title="A few projects we've worked on."
          description="Each case study covers what the team was dealing with, what we built, and what changed after that."
          badges={["Problem", "Build", "Outcome"]}
          tone="dark"
          stageVariant="work"
          mediaSrc={siteImages.work.hero}
          mediaAlt="Enterprise operations scene with layered dashboards"
          mediaNote="What the problem was, what we built, and what changed."
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Portfolio"
            title="Work across finance, healthcare, and operations."
            description="A straightforward look at the kinds of problems we've helped teams solve."
            tone="light"
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={workCards}
            theme="dark"
            variant="stacked"
            columns={{ tablet: 2, desktop: 3 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="What Matters"
            title="What we try to make clear in every case study."
            tone="light"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "What was going on",
              body: "What the team was dealing with before the project started.",
            },
            {
              title: "Why it was built that way",
              body: "The product decisions behind the build, not just the final screens.",
            },
            {
              title: "What changed",
              body: "What got easier, faster, or clearer once the work was live.",
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
          eyebrow="Next Step"
          title="If you're working through something similar, we can talk it through."
          description="The point of these case studies is to give you a feel for how we work and how we make product decisions."
          imageSrc={siteImages.work.cta}
          imageAlt="Enterprise software operations environment"
          stageVariant="work"
          points={[
            "Talk through the actual problem first",
            "Figure out what needs to change",
            "Leave with a clear next step",
          ]}
        />
      </SectionShell>
    </div>
  );
}
