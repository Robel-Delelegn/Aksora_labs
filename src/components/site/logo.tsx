import Link from "next/link";

type LogoProps = {
  href?: string;
  className?: string;
  compact?: boolean;
  inverse?: boolean;
};

export function Logo({
  href = "/",
  className = "",
  compact = false,
  inverse = false,
}: LogoProps) {
  const labelClassName = inverse ? "text-white" : "text-slate-950";
  const subLabelClassName = inverse ? "text-slate-300" : "text-slate-500";

  const content = (
    <span className={`inline-flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--accent)] bg-[var(--accent)] text-[0.78rem] font-semibold tracking-[0.18em] text-white uppercase sm:h-11 sm:w-11 sm:text-[0.82rem]">
        AL
      </span>
      {!compact ? (
        <span className="flex min-w-0 flex-col">
          <span
            className={`truncate font-[family:var(--font-heading)] text-[1.24rem] font-normal leading-none tracking-[0.02em] sm:text-[1.6rem] ${labelClassName}`}
          >
            Aksora Labs
          </span>
          <span
            className={`mt-0.5 hidden text-[0.7rem] tracking-[0.2em] uppercase md:block ${subLabelClassName}`}
          >
            Software design and engineering
          </span>
        </span>
      ) : null}
    </span>
  );

  return (
    <Link
      href={href}
      className="logo-motion inline-flex items-center focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-transparent"
      aria-label="Aksora Labs home"
    >
      {content}
    </Link>
  );
}
