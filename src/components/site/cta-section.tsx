import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { MediaComposition } from "@/components/site/media-composition";
import type { StageVariant } from "@/components/site/floating-stage";

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
  imageSrc = "/images/editorial-banner-studio-v1.png",
  imageAlt = "Editorial studio workspace",
  stageVariant = "contact",
}: CtaSectionProps) {
  return (
    <div className="dark-ambient-shell overflow-hidden rounded-[40px] border border-white/10 px-6 py-10 text-white sm:px-10 sm:py-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
        <div>
          <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.24em] text-[#d8b6bc] uppercase">
            {eyebrow}
          </p>
          <h2 className="text-balance font-[family:var(--font-heading)] text-[2.6rem] font-normal leading-[1.02] tracking-tight sm:text-[3.2rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink
              href="/contact"
              className="border-white bg-white text-slate-950 hover:bg-[#f6f1eb] hover:text-slate-950"
            >
              Book a Call
            </ButtonLink>
            <ButtonLink
              href="/work"
              variant="secondary"
              className="border-white bg-transparent text-white hover:bg-white hover:text-slate-950"
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
            stageWidthClassName="w-[40%] min-w-[180px] max-w-[240px]"
            heightClassName="h-[250px] sm:h-[280px]"
            note="Senior-led delivery with clear direction from the start."
            notePlacement="bottom-left"
            className="rounded-[28px] border border-white/12 bg-white/4"
          />
          <div className="rounded-[28px] border border-white/12 bg-white/[0.045] p-6">
            <p className="text-sm font-semibold tracking-[0.18em] text-slate-300 uppercase">
              What clients value
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
