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
        className={`text-balance font-[family:var(--font-heading)] text-[2.5rem] font-normal leading-[1.02] tracking-tight sm:text-[3rem] lg:text-[3.35rem] ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-pretty text-base leading-8 sm:text-lg ${descriptionClassName}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
