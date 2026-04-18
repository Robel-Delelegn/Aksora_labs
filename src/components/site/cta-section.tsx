import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { MediaComposition } from "@/components/site/media-composition";
import type { StageVariant } from "@/components/site/floating-stage";
import { siteImages } from "@/lib/site-images";

type CtaSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  imageSrc?: string;
  imageAlt?: string;
  stageVariant?: StageVariant;
};

export function CtaSection({
  eyebrow,
  title,
  description,
  points,
  imageSrc = siteImages.contact.hero,
  imageAlt = "Editorial studio workspace",
  stageVariant = "contact",
}: CtaSectionProps) {
  return (
    <div className="dark-ambient-shell overflow-hidden rounded-[32px] border border-white/10 px-5 py-8 text-white sm:rounded-[40px] sm:px-10 sm:py-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
        <div>
          <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.24em] text-[#d8b6bc] uppercase">
            {eyebrow}
          </p>
          <h2 className="text-balance font-[family:var(--font-heading)] text-[2.15rem] font-normal leading-[1.04] tracking-tight sm:text-[3.2rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-[0.98rem] leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href="/contact"
              variant="light"
              className="w-full sm:w-auto"
            >
              Book a Call
            </ButtonLink>
            <ButtonLink
              href="/work"
              variant="lightOutline"
              className="w-full sm:w-auto"
            >
              View Our Work
            </ButtonLink>
          </div>
        </div>
        <div className="space-y-5">
          <MediaComposition
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            tone="dark"
            stageVariant={stageVariant}
            compactStage
            stageWidthClassName="w-[38%] min-w-[132px] max-w-[190px] sm:w-[40%] sm:min-w-[180px] sm:max-w-[240px]"
            heightClassName="h-[250px] sm:h-[280px]"
            note="Clear direction from the start."
            notePlacement="bottom-left"
            className="rounded-[28px] border border-white/12 bg-white/4"
          />
          <div className="rounded-[28px] border border-white/12 bg-white/[0.045] p-5 sm:p-6">
            <p className="text-sm font-semibold tracking-[0.18em] text-slate-300 uppercase">
              What clients usually care about
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#d8b6bc]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
