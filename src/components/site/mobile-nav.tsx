"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex h-11 w-11 items-center justify-center border lg:hidden ${triggerClassName}`}
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-black/35 px-5 py-6 backdrop-blur-sm lg:hidden">
          <div className="mx-auto flex h-full w-full max-w-[680px] flex-col border border-[var(--border-strong)] bg-[var(--surface-strong)] p-6 text-slate-950 shadow-[0_18px_40px_rgba(23,20,17,0.12)]">
            <div className="flex items-center justify-between">
              <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
                Navigation
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center border border-[var(--border-strong)] bg-white"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-12 flex flex-1 flex-col gap-3">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-[var(--border)] px-0 py-4 text-xl font-semibold text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/contact" className="w-full justify-center">
                Book a Call
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
