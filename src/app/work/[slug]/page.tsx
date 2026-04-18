import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck } from "lucide-react";

import { CaseStudyCard } from "@/components/site/case-study-card";
import { CtaSection } from "@/components/site/cta-section";
import { MediaComposition } from "@/components/site/media-composition";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { StructuredData } from "@/components/site/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { getCaseStudyImage } from "@/lib/site-images";
import { caseStudies, siteConfig } from "@/lib/site-data";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

function getStageVariant(industry: string) {
  if (industry === "Finance") {
    return "work" as const;
  }

  if (industry === "Healthcare") {
    return "contact" as const;
  }

  if (industry === "Operations") {
    return "process" as const;
  }

  return "case" as const;
}

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return buildMetadata({
      title: "Case Study | Aksora Labs",
      description: siteConfig.description,
      path: "/work",
    });
  }

  return buildMetadata({
    title: `${caseStudy.title} | Aksora Labs`,
    description: caseStudy.summary,
    path: `/work/${caseStudy.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedStudies = caseStudies.filter((item) => item.slug !== slug);
  const stageVariant = getStageVariant(caseStudy.industry);
  const imageSrc = getCaseStudyImage(caseStudy.slug);

  return (
    <div className="site-dark-page">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: caseStudy.title,
          description: caseStudy.summary,
          author: {
            "@type": "Organization",
            name: siteConfig.name,
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
          },
        }}
      />

      <SectionShell className="pt-8 sm:pt-12">
        <Link
          href="/work"
          className="motion-link-inline inline-flex items-center gap-2 text-sm font-semibold text-white/72 underline underline-offset-4 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to selected work
        </Link>

        <div className="dark-ambient-shell mt-6 overflow-hidden rounded-[38px] border border-white/10">
          <div className="page-masthead-grid px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <div className="max-w-4xl">
              <span className="text-[0.72rem] font-semibold tracking-[0.24em] text-[#d8b6bc] uppercase">
                {caseStudy.badge}
              </span>
              <h1 className="mt-6 text-balance font-[family:var(--font-display)] text-[3.4rem] font-normal leading-[0.94] tracking-[-0.03em] text-white sm:text-[4.4rem] lg:text-[5rem]">
                {caseStudy.title}
              </h1>
              <p className="mt-6 max-w-3xl text-pretty text-[1.02rem] leading-8 text-white/68">
                {caseStudy.summary}
              </p>

              <div className="mt-8 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-3">
                {caseStudy.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-white/42 uppercase">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-[1rem] leading-7 text-white/82">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <MediaComposition
              imageSrc={imageSrc}
              imageAlt={caseStudy.title}
              tone="dark"
              stageVariant={stageVariant}
              compactStage
              note={`${caseStudy.clientType} · ${caseStudy.industry}`}
              notePlacement="bottom-left"
              heightClassName="h-[320px] sm:h-[400px] lg:h-[440px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Problem and Response"
            title="The problem and the response."
            description="Start with what was going wrong, then look at what was built to fix it."
            tone="light"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="editorial-note-panel editorial-note-panel--dark p-8">
            <p className="relative text-[0.72rem] font-semibold tracking-[0.22em] text-[#d8b6bc] uppercase">
              Problem
            </p>
            <h2 className="relative mt-5 font-[family:var(--font-heading)] text-[2.05rem] font-normal leading-[0.98] text-white">
              What was not working
            </h2>
            <p className="relative mt-4 text-[0.98rem] leading-8 text-white/66">
              {caseStudy.problem}
            </p>
          </article>

          <article className="editorial-note-panel editorial-note-panel--dark p-8">
            <p className="relative text-[0.72rem] font-semibold tracking-[0.22em] text-[#d8b6bc] uppercase">
              Solution
            </p>
            <h2 className="relative mt-5 font-[family:var(--font-heading)] text-[2.05rem] font-normal leading-[0.98] text-white">
              What we built
            </h2>
            <p className="relative mt-4 text-[0.98rem] leading-8 text-white/66">
              {caseStudy.solution}
            </p>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Scope and Outcome"
            title="What we built and what changed."
            description="Features, technical coverage, and practical outcomes in one place."
            tone="light"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="editorial-note-panel editorial-note-panel--dark p-8">
            <p className="relative text-[0.72rem] font-semibold tracking-[0.22em] text-[#d8b6bc] uppercase">
              Delivery Scope
            </p>
            <div className="relative mt-6 rule-list">
              {caseStudy.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 py-4 text-[0.98rem] leading-7 text-white/72"
                >
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {caseStudy.techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-white/66 uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="editorial-note-panel editorial-note-panel--dark p-8">
            <p className="relative text-[0.72rem] font-semibold tracking-[0.22em] text-[#d8b6bc] uppercase">
              Outcome
            </p>
            <div className="relative mt-6 space-y-4">
              {caseStudy.outcomes.map((outcome) => (
                <p
                  key={outcome}
                  className="border-b border-white/10 pb-4 text-[0.98rem] leading-7 text-white/72 last:border-b-0 last:pb-0"
                >
                  {outcome}
                </p>
              ))}
            </div>
            <div className="relative mt-8 space-y-4 border-t border-white/10 pt-6 text-[0.98rem] leading-8 text-white/64">
              {caseStudy.detailNarrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Related Work"
            title="More work in a similar vein."
            description="Other examples across websites, products, and internal tools."
            tone="light"
          />
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-2">
          {relatedStudies.map((item) => (
            <CaseStudyCard key={item.slug} caseStudy={item} />
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-8 pt-24">
        <CtaSection
          eyebrow="Next Conversation"
          title="Look at the problem, the choices, and the result together."
          description="The useful part is not just what shipped. It is why it was shaped that way."
          imageSrc={imageSrc}
          imageAlt={caseStudy.title}
          stageVariant={stageVariant}
          points={[
            "Business context connected to product choices",
            "Execution backed by clear reasoning",
            "A useful comparison point for your own project",
          ]}
        />
      </SectionShell>
    </div>
  );
}
