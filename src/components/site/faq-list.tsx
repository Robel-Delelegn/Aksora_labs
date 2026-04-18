import { ChevronDown } from "lucide-react";

import type { FaqItem } from "@/lib/site-data";

type FaqListProps = {
  items: FaqItem[];
  tone?: "light" | "dark";
};

export function FaqList({ items, tone = "light" }: FaqListProps) {
  const wrapperClassName =
    tone === "dark"
      ? "border-t border-white/14"
      : "border-t border-[var(--border-strong)]";
  const rowClassName =
    tone === "dark"
      ? "faq-row group border-b border-white/10 py-6 last:border-b-white/14 sm:py-7"
      : "faq-row group border-b border-[var(--border)] py-6 last:border-b-[var(--border-strong)] sm:py-7";
  const questionClassName =
    tone === "dark"
      ? "max-w-3xl font-[family:var(--font-heading)] text-[1.55rem] leading-[1.15] text-white"
      : "max-w-3xl font-[family:var(--font-heading)] text-[1.55rem] leading-[1.15] text-slate-950";
  const iconClassName =
    tone === "dark" ? "faq-chevron mt-1 h-5 w-5 shrink-0 text-white/54 transition group-open:rotate-180" : "faq-chevron mt-1 h-5 w-5 shrink-0 text-slate-500 transition group-open:rotate-180";
  const answerClassName =
    tone === "dark"
      ? "mt-4 max-w-3xl text-pretty text-[0.98rem] leading-7 text-white/68"
      : "mt-4 max-w-3xl text-pretty text-[0.98rem] leading-7 text-slate-600";

  return (
    <div className={wrapperClassName}>
      {items.map((item) => (
        <details key={item.question} className={rowClassName}>
          <summary className="faq-summary flex cursor-pointer list-none items-start justify-between gap-4 text-left">
            <span className={questionClassName}>{item.question}</span>
            <ChevronDown className={iconClassName} />
          </summary>
          <p className={answerClassName}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
