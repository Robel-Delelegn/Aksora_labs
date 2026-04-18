"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { ButtonLink } from "@/components/site/button-link";

type HomeHeroSlide = {
  id: string;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
};

type ImmersiveHomeHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  proofPoints: string[];
  slides: HomeHeroSlide[];
  marqueeItems: string[];
};

export function ImmersiveHomeHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  proofPoints,
  slides,
  marqueeItems,
}: ImmersiveHomeHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || slides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex, slides]);
  const repeatedMarqueeItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#050608] text-white">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.imageSrc}
              alt={slide.imageAlt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover object-center transition duration-[7000ms] ease-out ${
                index === activeIndex ? "scale-[1.05]" : "scale-[1.01]"
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,8,0.52),rgba(5,6,8,0.74)_28%,rgba(5,6,8,0.9)_64%,#050608)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,35,50,0.24),transparent_28%)]" />
        <div className="hero-orb" />
        <div className="hero-orb hero-orb--secondary" />
        <div className="hero-speckle" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-6.25rem)] w-full max-w-[1760px] flex-col px-4 pb-8 pt-14 sm:min-h-[calc(100svh-7.2rem)] sm:px-6 sm:pb-14 sm:pt-[4.5rem] lg:px-10 lg:pb-16 lg:pt-24">
        <div className="mx-auto flex w-full max-w-[1040px] flex-1 flex-col items-center justify-center text-center">
          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-3.5 py-1.5 text-[0.66rem] font-semibold tracking-[0.2em] text-white/82 uppercase backdrop-blur-md sm:px-4 sm:py-2 sm:text-[0.74rem]">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-[1120px] text-balance font-[family:var(--font-body)] text-[2.85rem] font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:mt-8 sm:text-[4.4rem] lg:text-[6.4rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-[0.98rem] leading-7 text-white/70 sm:mt-6 sm:text-[1.12rem] sm:leading-8">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3">
            {proofPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-3.5 py-2 text-[0.66rem] font-semibold tracking-[0.16em] text-white/72 uppercase backdrop-blur-md sm:px-4 sm:text-[0.72rem]"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
            <ButtonLink
              href={primaryCta.href}
              className="w-full px-6 sm:w-auto"
            >
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={secondaryCta.href}
              variant="inverse"
              className="w-full px-6 backdrop-blur-md sm:w-auto"
            >
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-end">
          <div className="overflow-hidden">
            <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.18em] text-white/36 uppercase">
              Contexts we commonly support
            </p>
            <div className="marquee-track flex min-w-max items-center gap-8 opacity-70 motion-reduce:animate-none lg:gap-14">
              {repeatedMarqueeItems.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="text-[0.72rem] font-semibold tracking-[0.18em] text-white/44 uppercase sm:text-[0.82rem]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/12 bg-white/8 p-4 backdrop-blur-xl sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-white/46 uppercase">
                  Featured Capability
                </p>
                <p className="mt-2 text-[1.15rem] font-semibold leading-tight text-white sm:text-[1.35rem]">
                  {activeSlide.label}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${slide.label}`}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-8 bg-white"
                        : "w-2.5 bg-white/24 hover:bg-white/44"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-4 text-[0.94rem] leading-6 text-white/72 sm:text-[0.98rem] sm:leading-7">
              {activeSlide.title}
            </p>
            <p className="mt-4 text-[0.86rem] leading-6 text-white/56 sm:text-sm">
              {activeSlide.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {activeSlide.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex rounded-full border border-white/10 bg-black/18 px-3 py-2 text-[0.72rem] font-semibold tracking-[0.08em] text-white/80"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
