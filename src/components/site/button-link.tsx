import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "inverse"
    | "light"
    | "lightOutline";
  className?: string;
};

const baseClassName =
  "button-sheen inline-flex min-h-11 items-center justify-center border px-5 py-2.5 text-[0.95rem] font-semibold tracking-[0.01em] transition duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-transparent";

const variantClassNames = {
  primary:
    "border-[var(--accent)] bg-[var(--accent)] text-white hover:bg-[var(--accent-strong)] hover:border-[var(--accent-strong)]",
  secondary:
    "border-[var(--foreground)] bg-white text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white",
  ghost:
    "min-h-0 border-transparent px-0 py-0 text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--accent)]",
  inverse:
    "border-white/14 bg-white/10 text-white hover:border-white hover:bg-white hover:text-slate-950",
  light:
    "border-white bg-white text-slate-950 hover:bg-[#f6f1eb] hover:text-slate-950",
  lightOutline:
    "border-white bg-transparent text-white hover:bg-white hover:text-slate-950",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${baseClassName} ${variantClassNames[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
