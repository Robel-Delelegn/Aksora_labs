import Link from "next/link";

import { Logo } from "@/components/site/logo";
import {
  footerCredibility,
  mainNav,
  siteConfig,
  trustSignals,
} from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--accent)] bg-[#11100f] text-white">
      <div className="mx-auto w-full max-w-[1760px] px-5 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_0.72fr_0.78fr]">
          <div>
            <Logo inverse />
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/72">
              Premium websites, products, and internal systems for companies
              that want stronger digital credibility and sharper execution.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {footerCredibility.map((item) => (
                <span
                  key={item}
                  className="motion-pill-dark border border-white/14 bg-white/6 px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-white/74 uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-[#d8b6bc] uppercase">
              Navigation
            </p>
            <div className="mt-5 grid gap-3">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link-motion text-[0.98rem] text-white/72 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-[#d8b6bc] uppercase">
              Contact
            </p>
            <div className="mt-5 space-y-4 text-[0.98rem] text-white/72">
              <p>{siteConfig.location}</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="motion-link-inline block font-semibold text-white transition hover:text-[#f6d6db]"
              >
                {siteConfig.email}
              </a>
              <p>{siteConfig.responseWindow}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="motion-link-inline text-sm font-semibold text-white/72 underline underline-offset-4 transition hover:text-white"
                  title={link.note}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-3xl text-xs leading-6 text-white/54">
              Aksora Labs partners with startups, SMEs, and enterprise teams on
              digital products that need better trust signals and better
              execution.
            </p>
            <div className="flex flex-wrap gap-2">
              {trustSignals.slice(0, 4).map((item) => (
                <span
                  key={item}
                  className="text-[0.72rem] font-semibold tracking-[0.12em] text-white/54 uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
