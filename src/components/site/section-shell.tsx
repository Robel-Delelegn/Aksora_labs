import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  className = "",
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-6 lg:px-10">
        {children}
      </div>
    </section>
  );
}
