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
      <article className="flex h-full flex-col overflow-hidden bg-white shadow-[0_16px_42px_rgba(23,20,17,0.06)] transition duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_26px_56px_rgba(23,20,17,0.12)]">
        <div className="relative aspect-[1.12/0.86] overflow-hidden">
          <Image
            src={imageSrc}
            alt={caseStudy.title}
            fill
            sizes="(max-width: 767px) 92vw, (max-width: 1279px) 45vw, 30vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex min-h-[340px] flex-1 flex-col bg-[#f8f5ef] px-7 py-7">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[0.72rem] font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
              {caseStudy.badge}
            </span>
            <span className="text-[0.8rem] font-medium text-slate-500">
              {caseStudy.industry}
            </span>
          </div>

          <h3 className="mt-5 font-[family:var(--font-heading)] text-[2.2rem] font-normal leading-[0.98] tracking-[-0.02em] text-slate-950">
            {caseStudy.title}
          </h3>
          <p className="mt-4 text-[0.98rem] leading-8 text-slate-700">
            {caseStudy.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {caseStudy.techStack.slice(0, 3).map((item) => (
              <span
                key={item}
                className="border border-[var(--border)] bg-white px-3 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-slate-600 uppercase"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-3 pt-8">
            <span className="editorial-carousel-cta-icon bg-[#69717c] text-white group-hover:bg-[var(--accent)]">
              <ArrowRight className="h-4 w-4" />
            </span>
            <span className="text-[1rem] font-semibold text-slate-950">
              View case study
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
