import type { ComponentType, SVGProps } from "react";
import { Clock3, Mail, MessageCircle, ShieldCheck } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { FaqList } from "@/components/site/faq-list";
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

const heroBadges = ["Discovery call", "Product framing", "Technical context"];
export default function ContactPage() {
  return (
    <div className="site-dark-page">
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="Contact"
          title="Start with a brief that makes the first conversation useful."
          description="Share the goal, the users, the constraints, and the timeline. Aksora Labs will help shape the right next step from there."
          badges={heroBadges}
          tone="dark"
          stageVariant="contact"
          mediaSrc="/images/editorial-banner-studio-v1.png"
          mediaAlt="Premium studio environment for product planning"
          mediaNote="Clear first response, useful framing, and a calmer path into scope."
          mediaPosition="object-center"
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_360px] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Send the brief. Keep the first conversation useful."
              description="The goal, users, constraints, and timeline are enough. The first reply should clarify the next step, not add noise."
              tone="light"
            />

            <div className="mt-8 editorial-note-panel editorial-note-panel--dark px-6 py-8 sm:px-8">
              <ContactForm tone="dark" />
            </div>
          </div>

          <div className="space-y-6">
            <InfoCard
              icon={Mail}
              label="Email"
              title={siteConfig.email}
              body="Send the brief directly if email is the cleanest way to start."
              href={`mailto:${siteConfig.email}`}
            />
            <InfoCard
              icon={MessageCircle}
              label="WhatsApp"
              title="Start on WhatsApp"
              body="For a faster first touch, open WhatsApp and send a short project summary."
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            />
            <InfoCard
              icon={Clock3}
              label="Response"
              title={siteConfig.responseWindow}
              body="Clear first response, discovery planning, and confidentiality-first handling when needed."
            />
            <InfoCard
              icon={ShieldCheck}
              label="Coverage"
              title="Web, product, mobile, and internal systems"
              body={siteConfig.location}
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="mx-auto max-w-[1080px]">
          <SectionHeading
            eyebrow="FAQ"
            title="A few practical questions before you reach out."
            description="Clear answers before the first conversation."
            tone="light"
            align="center"
          />
          <div className="mt-10">
            <FaqList items={contactFaqs} tone="dark" />
          </div>
        </div>
      </SectionShell>
    </div>
  );
}

type InfoCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  title: string;
  body: string;
  href?: string;
};

function InfoCard({ icon: Icon, label, title, body, href }: InfoCardProps) {
  const titleContent = href ? (
    <a
      href={href}
      className="motion-link-inline text-[1.08rem] font-semibold text-white transition hover:text-[#d8b6bc]"
    >
      {title}
    </a>
  ) : (
    <p className="text-[1.08rem] font-semibold text-white">{title}</p>
  );

  return (
    <article className="editorial-note-panel editorial-note-panel--dark h-full p-8">
      <div className="relative flex items-start gap-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/8 text-[#d8b6bc]">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-[#d8b6bc] uppercase">
            {label}
          </p>
          <div className="mt-4 break-words">{titleContent}</div>
          <p className="mt-4 text-[0.98rem] leading-8 text-white/66">
            {body}
          </p>
        </div>
      </div>
    </article>
  );
}
