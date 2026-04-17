import { ChevronDown } from "lucide-react";

import type { FaqItem } from "@/lib/site-data";

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="border-t border-[var(--border-strong)]">
      {items.map((item) => (
        <details
          key={item.question}
          className="group border-b border-[var(--border)] py-6 last:border-b-[var(--border-strong)] sm:py-7"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
            <span className="max-w-3xl font-[family:var(--font-heading)] text-[1.55rem] leading-[1.15] text-slate-950">
              {item.question}
            </span>
            <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-slate-500 transition group-open:rotate-180" />
          </summary>
          <p className="mt-4 max-w-3xl text-pretty text-[0.98rem] leading-7 text-slate-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
