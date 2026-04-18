"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";

import { ButtonLink } from "@/components/site/button-link";
import { mainNav } from "@/lib/site-data";

type MobileNavProps = {
  inverse?: boolean;
};

export function MobileNav({ inverse = false }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const triggerClassName = inverse
    ? "border-white/18 bg-white/6 text-white backdrop-blur"
    : "border-[var(--border-strong)] bg-white text-slate-900";
  const panelClassName = inverse
    ? "border-white/10 bg-[#0a0b10] text-white shadow-[0_22px_54px_rgba(0,0,0,0.34)]"
    : "border-[var(--border-strong)] bg-[var(--surface-strong)] text-slate-950 shadow-[0_18px_40px_rgba(23,20,17,0.12)]";
  const closeButtonClassName = inverse
    ? "border-white/14 bg-white/8 text-white"
    : "border-[var(--border-strong)] bg-white text-slate-950";
  const linkClassName = inverse
    ? "motion-menu-link border-b border-white/10 px-0 py-4 text-xl font-semibold text-white/90"
    : "motion-menu-link border-b border-[var(--border)] px-0 py-4 text-xl font-semibold text-slate-900";
  const ctaClassName = inverse
    ? "w-full justify-center"
    : "w-full justify-center";
  const portalTarget = typeof document === "undefined" ? null : document.body;

  const overlay = (
    <div className="fixed inset-0 z-[70] bg-black/35 px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-6 lg:hidden">
      <div
        id="mobile-navigation-panel"
        className={`mx-auto flex h-full w-full max-w-[680px] flex-col overflow-y-auto border p-5 sm:p-6 ${panelClassName}`}
      >
        <div className="flex items-center justify-between">
          <p
            className={`text-[0.72rem] font-semibold tracking-[0.22em] uppercase ${inverse ? "text-[#d8b6bc]" : "text-[var(--accent)]"}`}
          >
            Navigation
          </p>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className={`motion-menu-button inline-flex h-11 w-11 items-center justify-center border ${closeButtonClassName}`}
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-8 flex flex-1 flex-col gap-3 sm:mt-12">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={linkClassName}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink
            href="/contact"
            variant={inverse ? "inverse" : "primary"}
            className={ctaClassName}
          >
            Book a Call
          </ButtonLink>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`motion-menu-button relative z-[55] inline-flex h-11 w-11 items-center justify-center border lg:hidden ${triggerClassName}`}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
      >
        <Menu className="h-5 w-5" />
      </button>
      {isOpen && portalTarget ? createPortal(overlay, portalTarget) : null}
    </>
  );
}
