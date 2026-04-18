import Image from "next/image";

import {
  FloatingStage,
  type StageVariant,
} from "@/components/site/floating-stage";

type MediaCompositionProps = {
  imageSrc: string;
  imageAlt: string;
  tone?: "light" | "dark";
  imagePosition?: string;
  stageVariant?: StageVariant;
  stagePlacement?: "left" | "right";
  compactStage?: boolean;
  stageWidthClassName?: string;
  note?: string;
  notePlacement?: "top-left" | "bottom-left" | "bottom-right";
  heightClassName?: string;
  className?: string;
};

export function MediaComposition({
  imageSrc,
  imageAlt,
  tone = "light",
  imagePosition = "object-center",
  stageVariant,
  stagePlacement = "right",
  compactStage = false,
  stageWidthClassName = "w-[36%] min-w-[132px] max-w-[200px] sm:w-[40%] sm:min-w-[180px] sm:max-w-[280px] lg:w-[44%] lg:min-w-[220px] lg:max-w-[340px]",
  note,
  notePlacement = "top-left",
  heightClassName = "h-[260px] sm:h-[380px] lg:h-[440px]",
  className = "",
}: MediaCompositionProps) {
  const stagePositionClassName =
    stagePlacement === "left"
      ? "left-3 sm:left-6"
      : "right-3 sm:right-6";
  const isDark = tone === "dark";

  const notePositionClassName =
    notePlacement === "bottom-left"
      ? "bottom-3 left-3 sm:bottom-6 sm:left-6"
      : notePlacement === "bottom-right"
        ? "bottom-3 right-3 sm:bottom-6 sm:right-6"
        : "left-3 top-3 sm:left-6 sm:top-6";

  return (
    <div
      className={`visual-stage p-3 ${isDark ? "rounded-[30px] border border-white/10 bg-white/[0.03]" : "bg-white"} ${className}`}
    >
      <div
        className={`relative overflow-hidden ${isDark ? "rounded-[24px] border border-white/10" : "border border-[var(--border)]"} bg-[#161213] ${heightClassName}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1023px) 100vw, 42vw"
          className={`media-drift object-cover ${imagePosition}`}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0a0a]/56 via-transparent to-[#fff7ef]/24" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_24%)]" />

        {note ? (
          <div
            className={`absolute ${notePositionClassName} max-w-[180px] rounded-[16px] border border-white/14 bg-[#171411]/74 px-3 py-2.5 text-white backdrop-blur-md sm:max-w-[220px] sm:rounded-[18px] sm:px-4 sm:py-3 lg:max-w-[260px]`}
          >
            <p className="text-[0.68rem] leading-5 text-white/82 sm:text-[0.72rem] sm:leading-6">{note}</p>
          </div>
        ) : null}

        {stageVariant ? (
          <div
            className={`absolute bottom-3 z-10 ${stageWidthClassName} ${stagePositionClassName} sm:bottom-6`}
          >
            <FloatingStage
              variant={stageVariant}
              compact={compactStage}
              className="drop-shadow-[0_24px_40px_rgba(9,8,8,0.32)]"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
