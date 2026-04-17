"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

export type EditorialCarouselItem = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  linkLabel?: string;
  meta?: string;
};

type EditorialCarouselProps = {
  items: EditorialCarouselItem[];
  className?: string;
  imageAspectClassName?: string;
  theme?: "light" | "warm" | "dark";
  variant?: "stacked" | "overlay";
  columns?: {
    tablet?: 1 | 2 | 3 | 4;
    desktop?: 1 | 2 | 3 | 4;
  };
};

export function EditorialCarousel({
  items,
  className = "",
  imageAspectClassName = "aspect-[1.18/0.8]",
  theme = "light",
  variant = "stacked",
  columns = {
    tablet: 2,
    desktop: 3,
  },
}: EditorialCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(items.length > 1);

  const deckStyle = {
    "--editorial-columns-tablet": String(columns.tablet ?? 2),
    "--editorial-columns-desktop": String(columns.desktop ?? 3),
  } as CSSProperties;

  const buttonClassName =
    theme === "dark"
      ? "border-white/22 bg-white/10 text-white hover:border-white/40 hover:bg-white hover:text-slate-950"
      : "border-[var(--border-strong)] bg-white text-slate-900 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white";

  const stackedSurfaceClassName =
    theme === "warm"
      ? "bg-[#f1ece4]"
      : theme === "dark"
        ? "bg-[#1a223d] text-white"
        : "bg-white";

  const stackedBodyClassName =
    theme === "warm"
      ? "bg-[#f7f2ea]"
      : theme === "dark"
        ? "bg-[#141b31]"
        : "bg-[#f8f5ef]";

  const stackedTextClassName =
    theme === "dark" ? "text-white" : "text-slate-950";

  const stackedBodyTextClassName =
    theme === "dark" ? "text-white/74" : "text-slate-700";

  const metaTextClassName =
    theme === "dark" ? "text-white/56" : "text-slate-500";

  const circleClassName =
    theme === "dark"
      ? "bg-white/14 text-white group-hover:bg-white group-hover:text-slate-950"
      : "bg-[#69717c] text-white group-hover:bg-[var(--accent)]";

  const totalSlidesLabel = useMemo(
    () => String(items.length).padStart(2, "0"),
    [items.length],
  );

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    function updateState() {
      const activeTrack = trackRef.current;

      if (!activeTrack) {
        return;
      }

      const maxScroll = activeTrack.scrollWidth - activeTrack.clientWidth;
      setCanScrollPrev(activeTrack.scrollLeft > 8);
      setCanScrollNext(activeTrack.scrollLeft < maxScroll - 8);
    }

    updateState();
    track.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      track.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [items.length]);

  function scroll(direction: "prev" | "next") {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector<HTMLElement>("[data-editorial-card]");
    const amount = firstCard ? firstCard.offsetWidth + 24 : track.clientWidth * 0.92;

    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  }

  return (
    <div className={className} style={deckStyle}>
      {items.length > 1 ? (
        <div className="mb-5 flex items-center justify-between gap-4 md:hidden">
          <p
            className={`text-[0.72rem] font-semibold tracking-[0.2em] uppercase ${
              theme === "dark" ? "text-white/58" : "text-slate-400"
            }`}
          >
            {`Swipe through ${totalSlidesLabel}`}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("prev")}
              disabled={!canScrollPrev}
              className={`editorial-carousel-button ${buttonClassName}`}
              aria-label="Previous cards"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              disabled={!canScrollNext}
              className={`editorial-carousel-button ${buttonClassName}`}
              aria-label="Next cards"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}

      <div ref={trackRef} className="editorial-carousel-track">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            data-editorial-card
            className="editorial-carousel-item group block"
          >
            {variant === "overlay" ? (
              <article className="relative min-h-[450px] overflow-hidden bg-[#121932] shadow-[0_20px_56px_rgba(8,10,16,0.24)] transition duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_28px_70px_rgba(8,10,16,0.3)] sm:min-h-[520px]">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 767px) 82vw, (max-width: 1279px) 48vw, 30vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1426]/96 via-[#10172c]/44 to-[#10172c]/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_34%)]" />

                <div className="relative flex h-full flex-col justify-end px-7 pb-7 pt-10 sm:px-8 sm:pb-8">
                  {item.eyebrow ? (
                    <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-white/68 uppercase">
                      {item.eyebrow}
                    </p>
                  ) : null}
                  <h3 className="mt-4 max-w-[12ch] font-[family:var(--font-heading)] text-[2.55rem] font-normal leading-[0.96] tracking-[-0.03em] text-white sm:text-[3rem]">
                    {item.title}
                  </h3>
                  {item.description ? (
                    <p className="mt-4 max-w-[26rem] text-[0.98rem] leading-7 text-white/76">
                      {item.description}
                    </p>
                  ) : null}
                  <div className="mt-7 flex items-center gap-3">
                    <span className="editorial-carousel-cta-icon bg-white/14 text-white group-hover:bg-white group-hover:text-slate-950">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="text-[1rem] font-semibold text-white">
                      {item.linkLabel ?? "Learn more"}
                    </span>
                  </div>
                </div>
              </article>
            ) : (
              <article
                className={`flex h-full flex-col overflow-hidden shadow-[0_16px_42px_rgba(23,20,17,0.06)] transition duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_26px_56px_rgba(23,20,17,0.12)] ${stackedSurfaceClassName}`}
              >
                <div className={`relative overflow-hidden ${imageAspectClassName}`}>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) 82vw, (max-width: 1279px) 48vw, 30vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className={`flex min-h-[280px] flex-1 flex-col px-7 py-7 ${stackedBodyClassName}`}>
                  {item.eyebrow ? (
                    <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">
                      {item.eyebrow}
                    </p>
                  ) : null}
                  <h3
                    className={`mt-4 font-[family:var(--font-heading)] text-[2.2rem] font-normal leading-[0.98] tracking-[-0.02em] ${stackedTextClassName}`}
                  >
                    {item.title}
                  </h3>
                  <p className={`mt-4 text-[0.98rem] leading-8 ${stackedBodyTextClassName}`}>
                    {item.description}
                  </p>
                  {item.meta ? (
                    <p
                      className={`mt-5 text-[0.72rem] font-semibold tracking-[0.16em] uppercase ${metaTextClassName}`}
                    >
                      {item.meta}
                    </p>
                  ) : null}
                  <div className="mt-auto flex items-center gap-3 pt-8">
                    <span
                      className={`editorial-carousel-cta-icon ${circleClassName}`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className={`text-[1rem] font-semibold ${stackedTextClassName}`}>
                      {item.linkLabel ?? "Learn more"}
                    </span>
                  </div>
                </div>
              </article>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
