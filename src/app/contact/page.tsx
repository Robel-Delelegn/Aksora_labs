import type { ComponentType, SVGProps } from "react";
import { Clock3, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { FaqList } from "@/components/site/faq-list";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { buildMetadata } from "@/lib/metadata";
import { siteImages } from "@/lib/site-images";
import { contactFaqs, siteConfig } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Contact | Aksora Labs",
  description:
    "Contact Aksora Labs about a website, app, product, or internal tool project.",
  path: "/contact",
});

const heroBadges = ["Discovery call", "Product framing", "Technical context"];

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <div className="site-dark-page">
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="Contact"
          title="Start with the facts. That makes the first conversation better."
          description="Share the goal, the users, the rough timeline, and what feels stuck. We can help sort out the next step from there."
          badges={heroBadges}
          tone="dark"
          stageVariant="contact"
          mediaSrc={siteImages.contact.hero}
          mediaAlt="Premium studio environment for product planning"
          mediaNote="A straightforward first reply and a sensible next step."
          mediaPosition="object-center"
        />
      </SectionShell>

      <SectionShell className="pt-16 sm:pt-20 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_360px] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Send over the brief."
              description="A few honest details are enough to start. The first reply should be useful, not overcomplicated."
              tone="light"
            />

            <div className="mt-8 editorial-note-panel editorial-note-panel--dark px-5 py-6 sm:px-8 sm:py-8">
              <ContactForm tone="dark" />
            </div>
          </div>

          <div className="contact-info-stack space-y-4 self-start sm:space-y-6">
            <InfoCard
              icon={Mail}
              label="Email"
              title={siteConfig.email}
              body="Send the project summary directly if email is the easiest place to start."
              href={`mailto:${siteConfig.email}`}
            />
            <InfoCard
              icon={Phone}
              label="Phone"
              title={siteConfig.phoneNumber}
              body="Call if you want to talk through the project directly."
              href={`tel:${siteConfig.phoneNumber}`}
            />
            <InfoCard
              icon={MessageCircle}
              label="WhatsApp"
              title={siteConfig.whatsappNumber}
              body="If that is easier, send a short project summary on WhatsApp and we can take it from there."
              href={whatsappHref}
            />
            <InfoCard
              icon={Clock3}
              label="Response"
              title={siteConfig.responseWindow}
              body="A clear first response, a sensible next step, and careful handling when the project is sensitive."
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

      <SectionShell className="pt-14 sm:pt-18 lg:pt-24">
        <div className="mx-auto max-w-[1080px]">
          <SectionHeading
            eyebrow="FAQ"
            title="A few practical questions before you reach out."
            description="Quick answers before the first conversation."
            tone="light"
            align="center"
          />
          <div className="mt-8 sm:mt-10">
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
    <article className="contact-info-card editorial-note-panel editorial-note-panel--dark p-6 sm:p-8">
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
