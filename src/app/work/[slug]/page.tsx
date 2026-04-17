import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react";

import { CaseStudyCard } from "@/components/site/case-study-card";
import { CtaSection } from "@/components/site/cta-section";
import { MediaComposition } from "@/components/site/media-composition";
import { StructuredData } from "@/components/site/structured-data";
import { buildMetadata } from "@/lib/metadata";
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
  const imageSrc =
    caseStudy.industry === "Finance"
      ? "/images/operations-control-editorial-v1.png"
      : caseStudy.industry === "Healthcare"
        ? "/images/hero-studio-editorial-v1.png"
        : caseStudy.industry === "Operations"
          ? "/images/process-artifacts-editorial-v1.png"
          : "/images/editorial-banner-studio-v1.png";

  return (
    <>
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

      <section className="pt-8 sm:pt-12">
        <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-6 lg:px-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 underline underline-offset-4 transition hover:text-[var(--accent)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to selected work
          </Link>

          <div className="page-masthead-grid mt-6 border-y border-[var(--border-strong)] bg-white px-0 py-12 sm:py-14 lg:py-16">
            <div className="max-w-4xl">
              <span className="text-[0.72rem] font-semibold tracking-[0.24em] text-[var(--accent)] uppercase">
                {caseStudy.badge}
              </span>
              <h1 className="mt-6 text-balance font-[family:var(--font-display)] text-[3.4rem] font-normal leading-[0.94] tracking-[-0.03em] text-slate-950 sm:text-[4.4rem] lg:text-[5rem]">
                {caseStudy.title}
              </h1>
              <p className="mt-6 max-w-3xl text-pretty text-[1.02rem] leading-7 text-slate-700">
                {caseStudy.summary}
              </p>

              <div className="mt-8 grid gap-4 border-t border-[var(--border)] pt-5 sm:grid-cols-3">
                {caseStudy.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-[1rem] leading-7 text-slate-900">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <MediaComposition
              imageSrc={imageSrc}
              imageAlt={caseStudy.title}
              stageVariant={stageVariant}
              compactStage
              note={`${caseStudy.clientName} · ${caseStudy.industry}`}
              notePlacement="bottom-left"
              heightClassName="h-[320px] sm:h-[400px] lg:h-[440px]"
            />
          </div>
        </div>
      </section>

      <section className="pt-24">
        <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-6 lg:px-10">
          <div className="grid gap-0 border-y border-[var(--border-strong)] lg:grid-cols-2">
            <article className="border-b border-[var(--border)] bg-white/55 px-0 py-7 lg:border-b-0 lg:border-r lg:px-6">
              <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
                Problem
              </p>
              <h2 className="mt-4 font-[family:var(--font-heading)] text-[1.9rem] font-normal leading-none text-slate-950">
                The challenge
              </h2>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-600">
                {caseStudy.problem}
              </p>
            </article>

            <article className="bg-white/55 px-0 py-7 lg:px-6">
              <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
                Solution
              </p>
              <h2 className="mt-4 font-[family:var(--font-heading)] text-[1.9rem] font-normal leading-none text-slate-950">
                What Aksora Labs built
              </h2>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-600">
                {caseStudy.solution}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="pt-24">
        <div className="mx-auto grid w-full max-w-[1760px] gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
              Delivery scope
            </p>
            <div className="mt-6 rule-list">
              {caseStudy.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 py-4 text-[0.98rem] leading-7 text-slate-700"
                >
                  <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {caseStudy.techStack.map((item) => (
                <span
                  key={item}
                  className="border border-[var(--border)] px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
              Outcomes
            </p>
            <div className="mt-6 grid gap-8 border-t border-[var(--border-strong)] pt-6">
              <div className="grid gap-4">
                {caseStudy.outcomes.map((outcome) => (
                  <p
                    key={outcome}
                    className="border-b border-[var(--border)] pb-4 text-[0.98rem] leading-7 text-slate-700 last:border-b-0 last:pb-0"
                  >
                    {outcome}
                  </p>
                ))}
              </div>

              <div className="space-y-4 text-[0.98rem] leading-7 text-slate-600">
                {caseStudy.detailNarrative.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24">
        <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-[var(--accent)] uppercase">
                Related work
              </p>
              <h2 className="mt-4 text-balance font-[family:var(--font-heading)] text-3xl font-normal tracking-tight text-slate-950 sm:text-4xl">
                More case study structures
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden items-center gap-2 text-sm font-semibold text-slate-900 underline underline-offset-4 lg:inline-flex"
            >
              View all work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-8 xl:grid-cols-2">
            {relatedStudies.map((item) => (
              <CaseStudyCard key={item.slug} caseStudy={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 pt-24">
        <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-6 lg:px-10">
          <CtaSection
            eyebrow="Next Conversation"
            title="Use the work to judge the thinking, the craft, and the execution."
            description="The strongest portfolios make business context and delivery judgment easy to assess."
            imageSrc={imageSrc}
            imageAlt={caseStudy.title}
            stageVariant={stageVariant}
            points={[
              "See how context shapes the product",
              "Review decisions, not just final screens",
              "Assess whether the standard fits your project",
            ]}
          />
        </div>
      </section>
    </>
  );
}
