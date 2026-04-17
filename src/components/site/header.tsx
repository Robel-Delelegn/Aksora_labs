"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ButtonLink } from "@/components/site/button-link";
import { Logo } from "@/components/site/logo";
import { MobileNav } from "@/components/site/mobile-nav";
import { announcementBar, mainNav } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const homeShellClassName =
    isHome && !isScrolled
      ? "border-white/10 bg-[#07080b]/68 text-white"
      : isHome
        ? "border-white/10 bg-[#07080b]/88 text-white"
        : "border-[var(--border)] bg-[var(--surface-strong)]/95 text-slate-900";

  const navLinkClassName =
    isHome
      ? "text-[0.92rem] font-semibold tracking-[0.04em] text-white/74 transition hover:text-white"
      : "text-[0.92rem] font-semibold tracking-[0.04em] text-slate-700 transition hover:text-[var(--accent)]";

  const ctaClassName = isHome
    ? "hidden lg:inline-flex border-white/18 bg-white/10 text-white hover:border-white hover:bg-white hover:text-slate-950"
    : "hidden lg:inline-flex";

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl ${homeShellClassName}`}>
      <div className="border-b border-[var(--accent-strong)] bg-[var(--accent)] text-white">
        <div className="mx-auto flex w-full max-w-[1760px] flex-col gap-2 px-5 py-2 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="text-sm leading-6 text-white/90">{announcementBar.text}</p>
          <Link
            href={announcementBar.ctaHref}
            className="text-sm font-semibold underline underline-offset-4"
          >
            {announcementBar.ctaLabel}
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1760px] items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
        <Logo inverse={isHome} />
        <nav className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClassName}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ButtonLink href="/contact" className={ctaClassName}>
            Book a Call
          </ButtonLink>
          <MobileNav inverse={isHome} />
        </div>
      </div>
    </header>
  );
}
