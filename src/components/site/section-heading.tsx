type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const alignmentClassName = align === "center" ? "mx-auto text-center" : "";
  const eyebrowClassName =
    tone === "light" ? "text-[#d8b6bc]" : "text-[var(--accent)]";
  const titleClassName = tone === "light" ? "text-white" : "text-slate-950";
  const descriptionClassName =
    tone === "light" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`max-w-3xl ${alignmentClassName}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-[0.72rem] font-semibold tracking-[0.24em] uppercase ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance font-[family:var(--font-heading)] text-[2.1rem] font-normal leading-[1.04] tracking-tight sm:text-[2.7rem] lg:text-[3.35rem] ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-pretty text-[0.98rem] leading-7 sm:mt-5 sm:text-lg sm:leading-8 ${descriptionClassName}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
