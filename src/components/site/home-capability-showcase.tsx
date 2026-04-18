"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type CapabilityItem = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  deliverables: string[];
  imageSrc: string;
  imageAlt: string;
  note: string;
  signal: string;
  href: string;
};

type HomeCapabilityShowcaseProps = {
  items: CapabilityItem[];
};

export function HomeCapabilityShowcase({
  items,
}: HomeCapabilityShowcaseProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(items.length > 1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlidesLabel = useMemo(
    () => String(items.length).padStart(2, "0"),
    [items.length],
  );
  const progress = `${((currentIndex + 1) / Math.max(items.length, 1)) * 100}%`;

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
      const firstCard = activeTrack.querySelector<HTMLElement>(
        "[data-capability-card]",
      );
      const step = firstCard ? firstCard.offsetWidth + 24 : activeTrack.clientWidth;
      const nextIndex = Math.min(
        items.length - 1,
        Math.max(0, Math.round(activeTrack.scrollLeft / Math.max(step, 1))),
      );

      setCanScrollPrev(activeTrack.scrollLeft > 8);
      setCanScrollNext(activeTrack.scrollLeft < maxScroll - 8);
      setCurrentIndex(nextIndex);
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

    const firstCard = track.querySelector<HTMLElement>("[data-capability-card]");
    const amount = firstCard ? firstCard.offsetWidth + 24 : track.clientWidth * 0.92;

    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-white/38 uppercase">
            Capabilities
          </p>
          <div className="mt-4 flex items-center gap-4">
            <p className="text-sm text-white/58">
              {`${String(currentIndex + 1).padStart(2, "0")} / ${totalSlidesLabel}`}
            </p>
            <div className="capability-carousel-progress" aria-hidden="true">
              <span
                className="capability-carousel-progress__fill"
                style={{ width: progress }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll("prev")}
            disabled={!canScrollPrev}
            className="editorial-carousel-button border-white/14 bg-white/6 text-white hover:border-white hover:bg-white hover:text-slate-950"
            aria-label="Previous capabilities"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("next")}
            disabled={!canScrollNext}
            className="editorial-carousel-button border-white/14 bg-white/6 text-white hover:border-white hover:bg-white hover:text-slate-950"
            aria-label="Next capabilities"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div ref={trackRef} className="capability-carousel-track">
        {items.map((item, index) => (
          <Link
            key={item.id}
            href={item.href}
            data-capability-card
            className="capability-carousel-card group"
          >
            <article className="capability-carousel-card__surface">
              <div className="capability-carousel-card__image-wrap">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 767px) 82vw, (max-width: 1279px) 46vw, 31vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                />
                <div className="capability-carousel-card__image-gradient" />
                <div className="capability-carousel-card__meta">
                  <p className="capability-carousel-card__eyebrow">
                    {`${String(index + 1).padStart(2, "0")} · ${item.eyebrow}`}
                  </p>
                </div>

                <div className="capability-carousel-card__content">
                  <span className="capability-carousel-card__signal">
                    {item.signal}
                  </span>

                  <h3 className="capability-carousel-card__title">
                    {item.title}
                  </h3>
                  <p className="capability-carousel-card__summary">
                    {item.note}
                  </p>

                  <div className="capability-carousel-card__pill-row">
                    {item.deliverables.slice(0, 2).map((deliverable) => (
                      <span
                        key={deliverable}
                        className="capability-carousel-card__pill"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="capability-carousel-card__footer">
                  <span className="capability-carousel-card__footer-copy">
                    View service
                  </span>
                  <span className="capability-carousel-card__arrow">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
