import { ButtonLink } from "@/components/site/button-link";
import { SectionShell } from "@/components/site/section-shell";

export default function NotFound() {
  return (
    <SectionShell className="py-24 sm:py-32">
      <div className="surface-card p-10 text-center">
        <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-[var(--accent)] uppercase">
          Page not found
        </p>
        <h1 className="mt-5 text-balance font-[family:var(--font-heading)] text-4xl font-normal tracking-tight text-slate-950 sm:text-5xl">
          That page is not here.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
          Head back to the homepage, or go to the contact page if you meant to
          get in touch.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </div>
    </SectionShell>
  );
}
