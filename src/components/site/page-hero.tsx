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
  stageVariant,
  mediaSrc,
  mediaAlt = "",
  mediaNote,
  mediaPosition,
}: PageHeroProps) {
  return (
    <div className="border-y border-[var(--border-strong)] bg-white">
      <div className="page-masthead-grid px-0 py-12 sm:py-14 lg:py-16">
        <div className="max-w-4xl">
          <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.24em] text-[var(--accent)] uppercase">
            {eyebrow}
          </p>
          <h1 className="text-balance font-[family:var(--font-display)] text-[3.5rem] font-normal leading-[0.94] tracking-[-0.03em] text-slate-950 sm:text-[4.4rem] lg:text-[5.2rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-[1.02rem] leading-8 text-slate-700 sm:text-[1.08rem]">
            {description}
          </p>
          {badges.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--border)] pt-5">
              {badges.map((badge, index) => (
                <div key={badge} className="flex items-center gap-3">
                  <span className="text-[0.72rem] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                    {`0${index + 1}`}
                  </span>
                  <span className="text-sm text-slate-700">{badge}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {stageVariant && mediaSrc ? (
          <MediaComposition
            imageSrc={mediaSrc}
            imageAlt={mediaAlt}
            imagePosition={mediaPosition}
            stageVariant={stageVariant}
            compactStage
            note={mediaNote}
          />
        ) : null}

        {stageVariant && !mediaSrc ? (
          <div className="visual-stage bg-white p-3">
            <FloatingStage variant={stageVariant} className="h-full" />
          </div>
        ) : null}

        {!stageVariant && mediaSrc ? (
          <div className="visual-stage bg-white p-3">
            <div className="relative h-[320px] overflow-hidden border border-[var(--border)] sm:h-[400px] lg:h-[440px]">
              <Image
                src={mediaSrc}
                alt={mediaAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="media-drift object-cover"
              />
              {mediaNote ? (
                <div className="absolute bottom-4 right-4 max-w-[260px] border border-white/14 bg-[#171411]/74 px-4 py-3 text-white backdrop-blur-md">
                  <p className="text-[0.72rem] leading-6 text-white/82">
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
