import { Clock3, Mail, ShieldCheck } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { FaqList } from "@/components/site/faq-list";
import { MediaComposition } from "@/components/site/media-composition";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { buildMetadata } from "@/lib/metadata";
import { contactFaqs, siteConfig } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Contact | Aksora Labs",
  description:
    "Book a discovery call with Aksora Labs to discuss premium websites, web apps, mobile apps, and internal systems.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="Contact"
          title="Start with a brief that gets clearer as soon as the conversation starts."
          description="Use the form to request a discovery call. The most useful inquiries explain the goal, the users, the constraints, and why the project matters now."
          badges={["Discovery call", "Product framing", "Technical context"]}
          stageVariant="contact"
          mediaSrc="/images/hero-studio-editorial-v1.png"
          mediaAlt="Studio workspace with product interfaces"
          mediaNote="The first conversation should lower uncertainty immediately."
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <ContactForm />

          <div className="space-y-8">
            <MediaComposition
              imageSrc="/images/hero-studio-editorial-v1.png"
              imageAlt="Premium studio workspace with product interfaces"
              imagePosition="object-[62%_center]"
              stageVariant="contact"
              compactStage
              stageWidthClassName="w-[40%] min-w-[160px] max-w-[220px]"
              heightClassName="h-[260px]"
              note="Clear fit, clear scope, clear next step."
              notePlacement="bottom-left"
            />

            <div className="rule-list">
              {[
                {
                  icon: Clock3,
                  title: "Share the useful context",
                  body: "The better the brief, the better the first conversation.",
                },
                {
                  icon: Mail,
                  title: "Prefer email?",
                  body: siteConfig.email,
                },
                {
                  icon: ShieldCheck,
                  title: "Sensitive project?",
                  body: "NDA coverage and tighter information handling can be arranged.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="grid gap-4 py-5 lg:grid-cols-[64px_minmax(0,1fr)] lg:items-start"
                  >
                    <span className="icon-emblem">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-[family:var(--font-heading)] text-[1.55rem] font-normal leading-none text-slate-950">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-[0.98rem] leading-7 text-slate-600">
                        {item.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Goal",
                "Users",
                "Current friction",
                "Stakeholders",
                "Timeline",
                "Technical context",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-[var(--border)] bg-white px-3 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-slate-700 uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pb-8 pt-24">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="A few practical questions before you reach out."
            description="The contact experience should reduce friction, not create it."
          />
          <FaqList items={contactFaqs} />
        </div>
      </SectionShell>
    </>
  );
}
