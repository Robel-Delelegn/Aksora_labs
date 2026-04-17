import { Compass, ShieldCheck, Workflow } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { CtaSection } from "@/components/site/cta-section";
import {
  EditorialCarousel,
  type EditorialCarouselItem,
} from "@/components/site/editorial-carousel";
import { FaqList } from "@/components/site/faq-list";
import { MediaComposition } from "@/components/site/media-composition";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { StructuredData } from "@/components/site/structured-data";
import { buildMetadata } from "@/lib/metadata";
import {
  caseStudies,
  clientLogoPlaceholders,
  featuredServiceIndexes,
  homeFaqs,
  homeHero,
  processSteps,
  services,
  siteConfig,
} from "@/lib/site-data";

export const metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

const trustPillars = [
  {
    title: "Senior-led",
    body: "The important decisions stay close to product, design, and engineering.",
    icon: Compass,
  },
  {
    title: "Visible progress",
    body: "Scope, risks, and next steps stay easy to read from the start.",
    icon: Workflow,
  },
  {
    title: "Built to last",
    body: "Presentation quality and technical quality are treated as the same job.",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  const featuredServices = featuredServiceIndexes.map((index) => services[index]);
  const marqueeLogos = [...clientLogoPlaceholders, ...clientLogoPlaceholders];
  const marqueeLogosReverse = [
    ...clientLogoPlaceholders.slice().reverse(),
    ...clientLogoPlaceholders.slice().reverse(),
  ];
  const faqPreview = homeFaqs.slice(0, 4);

  const serviceCards: EditorialCarouselItem[] = [
    {
      id: featuredServices[0].title,
      eyebrow: "Custom websites",
      title: "Websites that look like the company is in control.",
      description: "Flagship marketing and corporate sites built to sharpen trust quickly.",
      imageSrc: "/images/service-website-editorial-v1.png",
      imageAlt: "Premium website presentation on a desktop monitor",
      href: "/services",
      linkLabel: "Explore websites",
    },
    {
      id: featuredServices[1].title,
      eyebrow: "Web products",
      title: "Web apps that stay clear under real operational use.",
      description: "Dashboards, portals, and multi-role products shaped for calm daily use.",
      imageSrc: "/images/service-webapp-editorial-v1.png",
      imageAlt: "Web application dashboard review environment",
      href: "/services",
      linkLabel: "Explore web apps",
    },
    {
      id: featuredServices[2].title,
      eyebrow: "Mobile products",
      title: "Mobile experiences that feel deliberate, not improvised.",
      description: "Customer and operational apps designed to work in the real conditions they live in.",
      imageSrc: "/images/service-mobile-editorial-v1.png",
      imageAlt: "Mobile app presentation on phone and tablet",
      href: "/services",
      linkLabel: "Explore mobile apps",
    },
    {
      id: featuredServices[3].title,
      eyebrow: "Internal systems",
      title: "Internal platforms that remove drag and add visibility.",
      description: "Operational software for businesses that need cleaner process, reporting, and control.",
      imageSrc: "/images/service-systems-editorial-v1.png",
      imageAlt: "Enterprise systems and workflow operations environment",
      href: "/services",
      linkLabel: "Explore systems",
    },
  ];

  const workCards: EditorialCarouselItem[] = caseStudies.map((caseStudy) => ({
    id: caseStudy.slug,
    eyebrow: caseStudy.badge,
    title: caseStudy.title,
    description: caseStudy.summary,
    imageSrc:
      caseStudy.industry === "Finance"
        ? "/images/operations-control-editorial-v1.png"
        : caseStudy.industry === "Healthcare"
          ? "/images/hero-studio-editorial-v1.png"
          : "/images/service-systems-editorial-v1.png",
    imageAlt: caseStudy.title,
    href: `/work/${caseStudy.slug}`,
    linkLabel: "View case study",
    meta: `${caseStudy.clientType} · ${caseStudy.industry}`,
  }));

  const processCards: EditorialCarouselItem[] = processSteps.slice(0, 4).map((step, index) => ({
    id: step.title,
    eyebrow: `Step ${index + 1}`,
    title: step.title,
    description: step.description,
    imageSrc:
      index === 0
        ? "/images/strategy-wall-editorial-v1.png"
        : index === 1
          ? "/images/process-artifacts-editorial-v1.png"
          : index === 2
            ? "/images/service-website-editorial-v1.png"
            : "/images/service-systems-editorial-v1.png",
    imageAlt: step.title,
    href: "/process",
    linkLabel: "See the process",
    meta: step.outputs.slice(0, 2).join(" · "),
  }));

  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
            serviceType: services.map((service) => service.title),
            areaServed: "Worldwide",
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.title,
            })),
          },
        ]}
      />

      <section className="editorial-frame border-b border-black/10">
        <div className="relative mx-auto w-full max-w-[1760px] px-5 py-8 sm:px-6 lg:px-10 lg:py-12">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(620px,1.22fr)] xl:items-stretch">
            <Reveal variant="left">
              <div className="relative z-10 flex h-full flex-col justify-between gap-10 py-5 lg:py-8">
                <div className="max-w-4xl">
                  <p className="text-[0.74rem] font-semibold tracking-[0.26em] text-white/78 uppercase">
                    {homeHero.eyebrow}
                  </p>
                  <h1 className="mt-6 max-w-5xl text-balance font-[family:var(--font-display)] text-[3.8rem] font-normal leading-[0.88] tracking-[-0.035em] text-white sm:text-[5rem] xl:text-[6.35rem]">
                    {homeHero.title}
                  </h1>
                  <p className="mt-6 max-w-2xl text-pretty text-[1.02rem] leading-8 text-white/76 sm:text-[1.12rem]">
                    {homeHero.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {homeHero.proofPoints.map((point) => (
                      <span
                        key={point}
                        className="inline-flex items-center border border-white/16 bg-white/8 px-3 py-2 text-[0.72rem] font-semibold tracking-[0.18em] text-white/84 uppercase backdrop-blur-sm"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <ButtonLink href={homeHero.primaryCta.href}>
                      {homeHero.primaryCta.label}
                    </ButtonLink>
                    <ButtonLink
                      href={homeHero.secondaryCta.href}
                      variant="secondary"
                      className="border-white bg-transparent text-white hover:bg-white hover:text-slate-950"
                    >
                      {homeHero.secondaryCta.label}
                    </ButtonLink>
                  </div>
                </div>

                <div className="grid gap-0 border-t border-white/14 lg:grid-cols-3">
                  {homeHero.calloutItems.map((item, index) => (
                    <div
                      key={item}
                      className="border-b border-white/10 py-5 lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                    >
                      <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-white/46 uppercase">
                        {`0${index + 1}`}
                      </p>
                      <p className="mt-3 max-w-xs text-[0.96rem] leading-7 text-white/82">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <MediaComposition
                imageSrc="/images/hero-studio-editorial-v1.png"
                imageAlt="Premium studio workspace with product interfaces"
                imagePosition="object-[68%_center]"
                stageVariant="hero"
                note="Designed to make the business look stronger before the first call even starts."
                notePlacement="top-left"
                className="h-full min-h-[580px] border border-white/14 bg-black/12 sm:min-h-[680px]"
                heightClassName="h-[580px] sm:h-[680px] xl:h-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[#efe8de]">
        <div className="mx-auto grid w-full max-w-[1760px] gap-4 overflow-hidden px-5 py-5 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-10">
          <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
            Built for
          </p>
          <div className="overflow-hidden space-y-3">
            <div className="marquee-track flex min-w-max items-center gap-10 lg:gap-14 motion-reduce:animate-none">
              {marqueeLogos.map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="block text-[0.94rem] font-semibold tracking-[0.14em] text-slate-700 uppercase"
                >
                  {logo}
                </span>
              ))}
            </div>
            <div className="marquee-track marquee-track--reverse flex min-w-max items-center gap-10 lg:gap-14 motion-reduce:animate-none">
              {marqueeLogosReverse.map((logo, index) => (
                <span
                  key={`${logo}-reverse-${index}`}
                  className="block text-[0.94rem] font-semibold tracking-[0.14em] text-slate-500 uppercase"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/20 bg-[#1a223d] py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-6 lg:px-10">
          <div className="grid gap-6 border-b border-white/18 pb-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Capabilities"
                title="What serious teams bring to Aksora Labs."
                description="The main categories are simple. The standard inside each one is not."
                tone="light"
              />
            </Reveal>
            <Reveal variant="right" delay={80}>
              <div className="max-w-2xl lg:justify-self-end">
                <p className="text-[1rem] leading-8 text-white/76">
                  The point is not to present a service table. The point is to
                  make the kind of work obvious at a glance.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="up" delay={120}>
            <div className="mt-10">
              <EditorialCarousel
                items={serviceCards}
                theme="dark"
                variant="overlay"
                columns={{ tablet: 2, desktop: 4 }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-[var(--border-strong)] pt-6">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Selected Work"
                title="A few examples of what the standard looks like."
                description="Enough detail to judge the thinking quickly."
              />
            </Reveal>
            <Reveal variant="right" delay={80}>
              <div className="flex lg:justify-end">
                <ButtonLink href="/work" variant="secondary">
                  View all work
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal variant="up" delay={120}>
          <div className="mt-10">
            <EditorialCarousel
              items={workCards}
              theme="light"
              variant="stacked"
              columns={{ tablet: 2, desktop: 3 }}
            />
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-[var(--border-strong)] pt-6">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Process"
                title="A process buyers can read before the build starts."
                description="The structure should lower uncertainty, not add more of it."
              />
            </Reveal>
            <Reveal variant="right" delay={80}>
              <div className="max-w-2xl lg:justify-self-end">
                <p className="text-[1rem] leading-8 text-slate-600">
                  Clear discovery, sharp product direction, disciplined design,
                  and a build cadence that stays visible.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal variant="up" delay={120}>
          <div className="mt-10">
            <EditorialCarousel
              items={processCards}
              theme="warm"
              variant="stacked"
              columns={{ tablet: 2, desktop: 4 }}
            />
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-[var(--border-strong)] pt-6">
          <div className="grid gap-8 xl:grid-cols-[0.64fr_1.36fr] xl:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Why Aksora"
                title="Clear in scope. Calm in delivery. Solid after launch."
                description="The trust signal should come from how the work is organized."
              />
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
              {trustPillars.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} variant="up" delay={index * 80}>
                    <article className="editorial-note-panel p-7">
                      <span className="icon-emblem">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="relative mt-6 font-[family:var(--font-heading)] text-[2rem] font-normal leading-[0.98] text-slate-950">
                        {item.title}
                      </h3>
                      <p className="relative mt-4 text-[0.98rem] leading-8 text-slate-600">
                        {item.body}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="A few questions buyers usually want answered early."
              description="Keep the answers direct."
            />
          </Reveal>
          <Reveal variant="up" delay={100}>
            <div className="border-t border-[var(--border-strong)] pt-2">
              <FaqList items={faqPreview} />
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="pb-8 pt-24">
        <CtaSection
          eyebrow="Next Step"
          title="Bring the website, product, or system up to the level the business needs."
          description="Use the first conversation to clarify the opportunity, the risk, and the right delivery path."
          imageSrc="/images/strategy-wall-editorial-v1.png"
          imageAlt="Premium product strategy workspace"
          stageVariant="contact"
          points={[
            "Pressure-test scope before the wrong build expands",
            "Align strategy, UX, and engineering from the start",
            "Move with a partner that makes quality visible",
          ]}
        />
      </SectionShell>
    </>
  );
}
