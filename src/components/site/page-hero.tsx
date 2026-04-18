import Image from "next/image";

import {
  FloatingStage,
  type StageVariant,
} from "@/components/site/floating-stage";
import { MediaComposition } from "@/components/site/media-composition";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  badges?: string[];
  tone?: "light" | "dark";
  stageVariant?: StageVariant;
  mediaSrc?: string;
  mediaAlt?: string;
  mediaNote?: string;
  mediaPosition?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  badges = [],
  tone = "light",
  stageVariant,
  mediaSrc,
  mediaAlt = "",
  mediaNote,
  mediaPosition,
}: PageHeroProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={
        isDark
          ? "dark-ambient-shell overflow-hidden rounded-[38px] border border-white/10"
          : "border-y border-[var(--border-strong)] bg-white"
      }
    >
      <div
        className={`page-masthead-grid ${isDark ? "px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14" : "px-0 py-10 sm:py-14 lg:py-16"}`}
      >
        <div className="max-w-4xl">
          <p
            className={`mb-3 text-[0.72rem] font-semibold tracking-[0.24em] uppercase ${isDark ? "text-[#d8b6bc]" : "text-[var(--accent)]"}`}
          >
            {eyebrow}
          </p>
          <h1
            className={`text-balance font-[family:var(--font-display)] text-[2.85rem] font-normal leading-[0.96] tracking-[-0.04em] sm:text-[4rem] lg:text-[5.2rem] ${isDark ? "text-white" : "text-slate-950"}`}
          >
            {title}
          </h1>
          <p
            className={`mt-5 max-w-3xl text-pretty text-[0.98rem] leading-7 sm:mt-6 sm:text-[1.08rem] sm:leading-8 ${isDark ? "text-white/68" : "text-slate-700"}`}
          >
            {description}
          </p>
          {badges.length > 0 ? (
            <div
              className={`mt-7 flex flex-wrap gap-x-4 gap-y-2.5 pt-4 sm:mt-8 sm:gap-x-6 sm:gap-y-3 sm:pt-5 ${isDark ? "border-t border-white/10" : "border-t border-[var(--border)]"}`}
            >
              {badges.map((badge, index) => (
                <div key={badge} className="flex items-center gap-3">
                  <span
                    className={`text-[0.68rem] font-semibold tracking-[0.16em] uppercase sm:text-[0.72rem] ${isDark ? "text-white/36" : "text-slate-400"}`}
                  >
                    {`0${index + 1}`}
                  </span>
                  <span className={isDark ? "text-[0.92rem] text-white/68 sm:text-sm" : "text-[0.92rem] text-slate-700 sm:text-sm"}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {stageVariant && mediaSrc ? (
          <MediaComposition
            imageSrc={mediaSrc}
            imageAlt={mediaAlt}
            tone={isDark ? "dark" : "light"}
            imagePosition={mediaPosition}
            stageVariant={stageVariant}
            compactStage
            note={mediaNote}
          />
        ) : null}

        {stageVariant && !mediaSrc ? (
          <div
            className={`visual-stage rounded-[30px] p-2 sm:p-3 ${isDark ? "border border-white/10 bg-white/[0.03]" : "bg-white"}`}
          >
            <FloatingStage variant={stageVariant} className="h-full" />
          </div>
        ) : null}

        {!stageVariant && mediaSrc ? (
          <div
            className={`visual-stage rounded-[30px] p-2 sm:p-3 ${isDark ? "border border-white/10 bg-white/[0.03]" : "bg-white"}`}
          >
            <div
              className={`relative h-[280px] overflow-hidden rounded-[24px] sm:h-[400px] lg:h-[440px] ${isDark ? "border border-white/10" : "border border-[var(--border)]"}`}
            >
              <Image
                src={mediaSrc}
                alt={mediaAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="media-drift object-cover"
              />
              {mediaNote ? (
                <div className="absolute bottom-3 right-3 max-w-[180px] rounded-[16px] border border-white/14 bg-[#171411]/74 px-3 py-2.5 text-white backdrop-blur-md sm:bottom-4 sm:right-4 sm:max-w-[260px] sm:rounded-[18px] sm:px-4 sm:py-3">
                  <p className="text-[0.68rem] leading-5 text-white/82 sm:text-[0.72rem] sm:leading-6">
                    {mediaNote}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
