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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const shellClassName =
    isHome && !isScrolled
      ? "border-white/10 bg-[#07080b]/68 text-white"
      : "border-white/10 bg-[#07080b]/90 text-white";

  const navLinkClassName =
    "nav-link-motion text-[0.92rem] font-semibold tracking-[0.04em] text-white/74 transition hover:text-white";

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl ${shellClassName}`}>
      <div className="border-b border-[var(--accent-strong)] bg-[var(--accent)] text-white">
        <div className="mx-auto flex w-full max-w-[1760px] flex-col gap-1.5 px-4 py-2 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="text-sm leading-5 text-white/90 sm:leading-6">{announcementBar.text}</p>
          <Link
            href={announcementBar.ctaHref}
            className="motion-link-inline text-sm font-semibold underline underline-offset-4"
          >
            {announcementBar.ctaLabel}
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1760px] items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-10">
        <Logo inverse />
        <nav className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClassName}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden md:flex">
            <ButtonLink href="/contact" variant="inverse">
              Book a Call
            </ButtonLink>
          </div>
          <MobileNav inverse />
        </div>
      </div>
    </header>
  );
}
