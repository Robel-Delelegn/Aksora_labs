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
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="inline-flex h-11 w-11 items-center justify-center border border-[var(--accent)] bg-[var(--accent)] text-[0.82rem] font-semibold tracking-[0.18em] text-white uppercase">
        AL
      </span>
      {!compact ? (
        <span className="flex flex-col">
          <span
            className={`font-[family:var(--font-heading)] text-[1.45rem] font-normal leading-none tracking-[0.02em] sm:text-[1.6rem] ${labelClassName}`}
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
      className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-transparent"
      aria-label="Aksora Labs home"
    >
      {content}
    </Link>
  );
}
