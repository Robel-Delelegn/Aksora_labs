import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { CaseStudy } from "@/lib/site-data";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const imageSrc =
    caseStudy.industry === "Finance"
      ? "/images/operations-control-editorial-v1.png"
      : caseStudy.industry === "Healthcare"
        ? "/images/hero-studio-editorial-v1.png"
        : caseStudy.industry === "Operations"
          ? "/images/service-systems-editorial-v1.png"
          : "/images/editorial-banner-studio-v1.png";

  return (
    <Link href={`/work/${caseStudy.slug}`} className="group block h-full">
      <article className="case-study-card-surface dark-ambient-card flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 shadow-[0_22px_64px_rgba(0,0,0,0.26)] transition duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_36px_84px_rgba(0,0,0,0.34)]">
        <div className="relative aspect-[1.12/0.86] overflow-hidden">
          <Image
            src={imageSrc}
            alt={caseStudy.title}
            fill
            sizes="(max-width: 767px) 92vw, (max-width: 1279px) 45vw, 30vw"
            className="case-study-card-image object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex min-h-[340px] flex-1 flex-col bg-transparent px-7 py-7">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[0.72rem] font-semibold tracking-[0.22em] text-[#d8b6bc] uppercase">
              {caseStudy.badge}
            </span>
            <span className="text-[0.8rem] font-medium text-white/42">
              {caseStudy.industry}
            </span>
          </div>

          <h3 className="mt-5 font-[family:var(--font-heading)] text-[2.2rem] font-normal leading-[0.98] tracking-[-0.02em] text-white">
            {caseStudy.title}
          </h3>
          <p className="mt-4 text-[0.98rem] leading-8 text-white/68">
            {caseStudy.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {caseStudy.techStack.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-white/66 uppercase"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-3 pt-8">
            <span className="editorial-carousel-cta-icon bg-white/10 text-white group-hover:bg-white group-hover:text-slate-950">
              <ArrowRight className="h-4 w-4" />
            </span>
            <span className="text-[1rem] font-semibold text-white">
              View case study
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
