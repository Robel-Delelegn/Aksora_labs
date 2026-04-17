import { ArrowRight, Compass, ShieldCheck, Workflow } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { CtaSection } from "@/components/site/cta-section";
import { FaqList } from "@/components/site/faq-list";
import { ImmersiveHomeHero } from "@/components/site/immersive-home-hero";
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
    body: "Important product, design, and engineering decisions stay close to the actual work.",
    icon: Compass,
  },
  {
    title: "Visible progress",
    body: "Scope, risk, and next steps stay clear instead of hiding in agency process fog.",
    icon: Workflow,
  },
  {
    title: "Built to last",
    body: "The product is shaped to look strong now and remain maintainable after launch.",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  const featuredServices = featuredServiceIndexes.map((index) => services[index]);
  const featuredCaseStudy = caseStudies[0];
  const secondaryCaseStudies = caseStudies.slice(1);
  const processPreview = processSteps.slice(0, 4);

  const heroSlides = [
    {
      id: "websites",
      label: "Flagship websites",
      title: "Positioning, structure, and presentation that make the business look more established.",
      description:
        "For companies that need the site to earn trust inside the first few seconds.",
      imageSrc: "/images/home-hero-cinematic-02-v1.png",
      imageAlt: "Cinematic premium website and product design review environment",
      detailA: "Messaging architecture and conversion-focused page structure.",
      detailB: "A sharper public signal for buyers, stakeholders, and investors.",
    },
    {
      id: "products",
      label: "Web products",
      title: "Browser-based products that feel controlled under real operational complexity.",
      description:
        "For dashboards, portals, and business software that need clarity as much as code quality.",
      imageSrc: "/images/home-hero-cinematic-01-v1.png",
      imageAlt: "Cinematic software strategy environment with product dashboards",
      detailA: "Product UX, architecture, and delivery shaped as one system.",
      detailB: "Useful for operations, reporting, admin, and customer-facing workflows.",
    },
    {
      id: "systems",
      label: "Internal systems",
      title: "Operational software that improves visibility, cadence, and control.",
      description:
        "For teams that need internal tools to remove drag instead of creating more of it.",
      imageSrc: "/images/home-hero-cinematic-03-v1.png",
      imageAlt: "Cinematic internal systems and operations control environment",
      detailA: "Workflow design that reduces manual work and reporting friction.",
      detailB: "Built for businesses that need reliability behind the scenes as well as polish out front.",
    },
  ];

  const serviceRows = [
    {
      service: featuredServices[0],
      imageSrc: "/images/service-website-editorial-v1.png",
      imageAlt: "Premium website presentation on a desktop monitor",
      stageVariant: "services" as const,
      note: "The public-facing surface should make the business look stronger immediately.",
      cta: "See website work",
    },
    {
      service: featuredServices[1],
      imageSrc: "/images/service-webapp-editorial-v1.png",
      imageAlt: "Web application dashboard review environment",
      stageVariant: "work" as const,
      note: "The product layer should stay readable when the workflow gets more complex.",
      cta: "See product work",
    },
    {
      service: featuredServices[2],
      imageSrc: "/images/service-mobile-editorial-v1.png",
      imageAlt: "Mobile app review on premium devices",
      stageVariant: "contact" as const,
      note: "Mobile software should feel focused, fast, and usable in real contexts.",
      cta: "See mobile work",
    },
    {
      service: featuredServices[3],
      imageSrc: "/images/service-systems-editorial-v1.png",
      imageAlt: "Enterprise workflow and systems environment",
      stageVariant: "process" as const,
      note: "Internal systems should lower operational drag and improve visibility at the same time.",
      cta: "See systems work",
    },
  ];

  const processCards = [
    {
      step: processPreview[0],
      imageSrc: "/images/strategy-wall-editorial-v1.png",
      imageAlt: processPreview[0].title,
    },
    {
      step: processPreview[1],
      imageSrc: "/images/process-artifacts-editorial-v1.png",
      imageAlt: processPreview[1].title,
    },
    {
      step: processPreview[2],
      imageSrc: "/images/service-website-editorial-v1.png",
      imageAlt: processPreview[2].title,
    },
    {
      step: processPreview[3],
      imageSrc: "/images/operations-control-editorial-v1.png",
      imageAlt: processPreview[3].title,
    },
  ];

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

      <ImmersiveHomeHero
        eyebrow={homeHero.eyebrow}
        title={homeHero.title}
        description={homeHero.description}
        primaryCta={homeHero.primaryCta}
        secondaryCta={homeHero.secondaryCta}
        proofPoints={homeHero.proofPoints}
        slides={heroSlides}
        logos={clientLogoPlaceholders}
      />

      <SectionShell className="border-t border-white/10 bg-[#050608] py-20 text-white sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What serious teams usually hire Aksora Labs to handle."
            description="Use the home page to understand the shape of the work fast. Then go deeper where it matters."
            align="center"
            tone="light"
          />
        </Reveal>

        <div className="mt-14 space-y-20">
          {serviceRows.map((item, index) => (
            <Reveal key={item.service.title} delay={index * 90}>
              <article className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <MediaComposition
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    imagePosition="object-center"
                    stageVariant={item.stageVariant}
                    compactStage
                    note={item.note}
                    notePlacement="bottom-left"
                    stageWidthClassName="w-[38%] min-w-[170px] max-w-[240px]"
                    heightClassName="h-[340px] sm:h-[420px] xl:h-[500px]"
                    className="border border-white/10 bg-white/4"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.18em] text-white/72 uppercase">
                    {item.service.title}
                  </span>
                  <h3 className="mt-6 max-w-xl font-[family:var(--font-body-bold)] text-[2.45rem] leading-[0.98] tracking-[-0.04em] text-white sm:text-[3rem]">
                    {item.service.description}
                  </h3>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.service.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="rounded-full border border-white/10 bg-black/18 px-4 py-2 text-[0.78rem] font-medium text-white/68"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <ButtonLink
                      href="/services"
                      variant="secondary"
                      className="border-white/16 bg-white/6 text-white hover:border-white hover:bg-white hover:text-slate-950"
                    >
                      {item.cta}
                    </ButtonLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="border-t border-white/10 bg-[#050608] py-20 text-white sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Selected Work"
              title="A case study should make judgment visible."
              description="Problem, product response, and business impact should be easy to assess without reading a wall of explanation."
              tone="light"
            />
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="flex lg:justify-end">
              <ButtonLink
                href="/work"
                variant="secondary"
                className="border-white/14 bg-white/6 text-white hover:border-white hover:bg-white hover:text-slate-950"
              >
                View Our Work
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal variant="up" delay={140}>
          <article className="mt-12 overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
            <div className="grid gap-0 xl:grid-cols-[1.02fr_0.98fr]">
              <MediaComposition
                imageSrc="/images/operations-control-editorial-v1.png"
                imageAlt={featuredCaseStudy.title}
                imagePosition="object-center"
                stageVariant="work"
                compactStage
                note={featuredCaseStudy.clientType}
                notePlacement="bottom-left"
                stageWidthClassName="w-[35%] min-w-[160px] max-w-[220px]"
                heightClassName="h-[340px] sm:h-[460px] xl:h-full"
                className="border-none bg-transparent p-0"
              />
              <div className="flex flex-col justify-between p-7 sm:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.18em] text-white/72 uppercase">
                      {featuredCaseStudy.badge}
                    </span>
                    <span className="text-sm text-white/46">
                      {featuredCaseStudy.industry}
                    </span>
                  </div>
                  <h3 className="mt-6 max-w-xl font-[family:var(--font-body-bold)] text-[2.45rem] leading-[0.98] tracking-[-0.04em] text-white sm:text-[3rem]">
                    {featuredCaseStudy.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-white/68">
                    {featuredCaseStudy.summary}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-3">
                  {featuredCaseStudy.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-white/42 uppercase">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/82">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <ul className="mt-7 space-y-3 text-[0.98rem] leading-7 text-white/72">
                  {featuredCaseStudy.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#d8b6bc]" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <ButtonLink
                    href={`/work/${featuredCaseStudy.slug}`}
                    variant="secondary"
                    className="border-white/14 bg-white/6 text-white hover:border-white hover:bg-white hover:text-slate-950"
                  >
                    View case study
                  </ButtonLink>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {secondaryCaseStudies.map((item, index) => (
            <Reveal key={item.slug} delay={160 + index * 70}>
              <a
                href={`/work/${item.slug}`}
                className="group block rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-white/44 uppercase">
                  {item.badge}
                </p>
                <h4 className="mt-4 font-[family:var(--font-heading)] text-[2rem] leading-[1.02] text-white">
                  {item.title}
                </h4>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-white/64">
                  {item.summary}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white/78">
                  Open case study
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="border-t border-white/10 bg-[#050608] py-20 text-white sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="A delivery model designed to keep momentum visible."
            description="The process should make the engagement easier to trust before the work gets expensive."
            align="center"
            tone="light"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {processCards.map((item, index) => (
            <Reveal key={item.step.title} delay={index * 80}>
              <article className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]">
                <div className="relative aspect-[1.1/0.78] overflow-hidden">
                  <MediaComposition
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    compactStage
                    stageVariant={index === 0 ? "services" : index === 1 ? "process" : index === 2 ? "work" : "contact"}
                    stageWidthClassName="w-[36%] min-w-[120px] max-w-[170px]"
                    heightClassName="h-full"
                    className="h-full border-none bg-transparent p-0"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-white/42 uppercase">
                    {`Step ${index + 1}`}
                  </p>
                  <h3 className="mt-4 font-[family:var(--font-heading)] text-[2rem] font-normal leading-[0.98] text-white">
                    {item.step.title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-7 text-white/64">
                    {item.step.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.step.outputs.map((output) => (
                      <span
                        key={output}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[0.72rem] font-medium text-white/66"
                      >
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="border-t border-white/10 bg-[#050608] py-20 text-white sm:py-24">
        <div className="grid gap-12 xl:grid-cols-[0.7fr_1.3fr] xl:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Why Aksora"
              title="Trust should come from how the work is organized."
              description="The website should make the operating standard legible, not just say that it exists."
              tone="light"
            />

            <div className="mt-10 space-y-5">
              {trustPillars.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 70}>
                    <article className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                      <div className="flex items-start gap-4">
                        <span className="icon-emblem border-white/14 bg-white/8 text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-[family:var(--font-heading)] text-[1.8rem] leading-none text-white">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-[0.98rem] leading-7 text-white/66">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>

          <Reveal variant="up" delay={120}>
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <SectionHeading
                eyebrow="FAQ"
                title="A few questions buyers usually want answered early."
                description="Clear answers reduce friction. They also signal maturity."
                tone="light"
              />
              <div className="mt-8">
                <FaqList items={homeFaqs} tone="dark" />
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="border-t border-white/10 bg-[#050608] pb-8 pt-24">
        <CtaSection
          eyebrow="Next Step"
          title="Bring the website, product, or system up to the level the business needs."
          description="Use the first conversation to clarify the opportunity, the risk, and the right delivery path."
          imageSrc="/images/home-hero-cinematic-01-v1.png"
          imageAlt="Premium software strategy environment"
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
