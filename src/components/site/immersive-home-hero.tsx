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
  logos: string[];
};

export function ImmersiveHomeHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  proofPoints,
  slides,
  logos,
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
  const marqueeItems = [...logos, ...logos];

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

      <div className="relative mx-auto flex min-h-[calc(100svh-7.6rem)] w-full max-w-[1760px] flex-col px-5 pb-10 pt-20 sm:px-6 sm:pb-14 lg:px-10 lg:pb-16 lg:pt-24">
        <div className="mx-auto flex w-full max-w-[1080px] flex-1 flex-col items-center justify-center text-center">
          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.74rem] font-semibold tracking-[0.2em] text-white/82 uppercase backdrop-blur-md">
            {eyebrow}
          </span>
          <h1 className="mt-8 max-w-[1120px] text-balance font-[family:var(--font-body-bold)] text-[3.5rem] leading-[0.92] tracking-[-0.05em] text-white sm:text-[4.8rem] lg:text-[6.4rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-[1.05rem] leading-8 text-white/70 sm:text-[1.12rem]">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {proofPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.16em] text-white/72 uppercase backdrop-blur-md"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink
              href={primaryCta.href}
              className="border-[var(--accent)] bg-[var(--accent)] px-6 text-white hover:border-[#a72c3d] hover:bg-[#a72c3d]"
            >
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={secondaryCta.href}
              variant="secondary"
              className="border-white/16 bg-white/8 px-6 text-white backdrop-blur-md hover:border-white hover:bg-white hover:text-slate-950"
            >
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-end">
          <div className="overflow-hidden">
            <div className="marquee-track flex min-w-max items-center gap-10 opacity-70 motion-reduce:animate-none lg:gap-14">
              {marqueeItems.map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-[0.82rem] font-semibold tracking-[0.18em] text-white/44 uppercase"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/12 bg-white/8 p-5 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-white/46 uppercase">
                  Featured Capability
                </p>
                <p className="mt-2 text-[1.35rem] font-semibold leading-tight text-white">
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
            <p className="mt-4 text-[0.98rem] leading-7 text-white/72">
              {activeSlide.title}
            </p>
            <p className="mt-4 text-sm leading-6 text-white/56">
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
