import Link from "next/link";

import { ButtonLink } from "@/components/site/button-link";
import { Logo } from "@/components/site/logo";
import { MobileNav } from "@/components/site/mobile-nav";
import { announcementBar, mainNav } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface-strong)]/95 backdrop-blur">
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
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.92rem] font-semibold tracking-[0.04em] text-slate-700 transition hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ButtonLink href="/contact" className="hidden lg:inline-flex">
            Book a Call
          </ButtonLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
