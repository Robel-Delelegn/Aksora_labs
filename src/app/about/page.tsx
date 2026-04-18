import { CtaSection } from "@/components/site/cta-section";
import {
  EditorialCarousel,
  type EditorialCarouselItem,
} from "@/components/site/editorial-carousel";
import { FaqList } from "@/components/site/faq-list";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { buildMetadata } from "@/lib/metadata";
import { siteImages } from "@/lib/site-images";
import {
  aboutPrinciples,
  disciplineAreas,
  homeFaqs,
  siteConfig,
  whyAksora,
} from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "About | Aksora Labs",
  description:
    "Learn how Aksora Labs approaches planning, design, engineering, communication, and long-term product work.",
  path: "/about",
});

const heroBadges = ["Strategy", "Design", "Engineering", "Partnership"];

const disciplineDetails = [
  {
    title: disciplineAreas[0],
    description: "Scope, priorities, and decision-making before momentum outruns the actual business need.",
    imageSrc: siteImages.about.disciplines.strategy,
    imageAlt: "Product strategy and planning workspace",
  },
  {
    title: disciplineAreas[1],
    description: "Interface systems shaped so the product feels easier to follow from the first screen.",
    imageSrc: siteImages.about.disciplines.designSystems,
    imageAlt: "Design system and interface planning wall",
  },
  {
    title: disciplineAreas[2],
    description: "Frontend work that takes accessibility, performance, and maintainability seriously.",
    imageSrc: siteImages.about.disciplines.frontend,
    imageAlt: "Frontend design and website presentation environment",
  },
  {
    title: disciplineAreas[3],
    description: "Backend systems and integrations designed to stay dependable as the product gets bigger.",
    imageSrc: siteImages.about.disciplines.backend,
    imageAlt: "Backend and operations control environment",
  },
  {
    title: disciplineAreas[4],
    description: "Mobile work for customer journeys, staff workflows, and field use where conditions are not always ideal.",
    imageSrc: siteImages.about.disciplines.mobile,
    imageAlt: "Mobile product review with phone and tablet",
  },
  {
    title: disciplineAreas[5],
    description: "QA, launch planning, and support treated as part of the job, not something tacked on at the end.",
    imageSrc: siteImages.about.disciplines.launch,
    imageAlt: "Premium studio environment with launch and delivery context",
  },
];

const partnershipCards: EditorialCarouselItem[] = [
  {
    id: "communication",
    eyebrow: "Communication",
    title: "Clear communication when things get busy.",
    description: "Regular updates, visible decisions, and enough structure to keep the project moving without filling the calendar with noise.",
    imageSrc: siteImages.about.partnership.communication,
    imageAlt: "Strategy wall with product thinking artifacts",
    href: "/contact",
    linkLabel: "Discuss your project",
    meta: "Updates · decisions · momentum",
  },
  {
    id: "pressure",
    eyebrow: "Judgment",
    title: "Pushback before mistakes get expensive.",
    description: "Weak assumptions get challenged early, while the cost of changing course is still low.",
    imageSrc: siteImages.about.partnership.judgment,
    imageAlt: "Editorial product process artifacts on a desk",
    href: "/contact",
    linkLabel: "Discuss your project",
    meta: "Scope · tradeoffs · direction",
  },
  {
    id: "craft",
    eyebrow: "Craft",
    title: "Work that still makes sense later.",
    description: "The product should work for users now and still be readable to the next team that touches it.",
    imageSrc: siteImages.about.partnership.craft,
    imageAlt: "Design studio environment showing interface work",
    href: "/contact",
    linkLabel: "Discuss your project",
    meta: "Launch · handover · growth",
  },
];

export default function AboutPage() {
  const disciplineCards: EditorialCarouselItem[] = disciplineDetails.map(
    (item) => ({
      id: item.title,
      eyebrow: "Discipline",
      title: item.title,
      description: item.description,
      imageSrc: item.imageSrc,
      imageAlt: item.imageAlt,
      href: "/services",
      linkLabel: "View services",
    }),
  );

  return (
    <div className="site-dark-page">
      <SectionShell className="pt-8 sm:pt-12">
        <PageHero
          eyebrow="About"
          title="A small team built around clear thinking and solid execution."
          description="Aksora Labs exists for teams that want the work to be well designed, well built, and easy to keep running."
          badges={heroBadges}
          tone="dark"
          stageVariant="services"
          mediaSrc={siteImages.about.hero}
          mediaAlt="Premium software studio environment"
          mediaNote="The people making the calls stay close to the work."
          mediaPosition="object-center"
        />
      </SectionShell>

      <SectionShell className="pt-20 sm:pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Principles"
            title="The standard behind the work."
            description="How we think about delivery, communication, and the work after launch."
            tone="light"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aboutPrinciples.map((principle, index) => (
            <article
              key={principle.title}
              className="editorial-note-panel editorial-note-panel--dark p-8"
            >
              <p className="relative text-[0.72rem] font-semibold tracking-[0.18em] text-[#d8b6bc] uppercase">
                {`0${index + 1}`}
              </p>
              <h2 className="relative mt-5 font-[family:var(--font-heading)] text-[2.05rem] font-normal leading-[0.98] text-white">
                {principle.title}
              </h2>
              <p className="relative mt-4 text-[0.98rem] leading-8 text-white/66">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Coverage"
            title="What the team is set up to cover."
            description="Planning, design, engineering, and the practical details needed to ship well."
            tone="light"
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={disciplineCards}
            theme="dark"
            variant="stacked"
            columns={{ tablet: 2, desktop: 3 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Operating Model"
            title="What clients usually value."
            description="Remote-first, senior-led, and structured so decisions do not disappear into handoffs."
            tone="light"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {whyAksora.map((item) => (
              <article
                key={item.title}
                className="editorial-note-panel editorial-note-panel--dark p-8"
              >
                <h2 className="relative font-[family:var(--font-heading)] text-[2rem] font-normal leading-[0.98] text-white">
                  {item.title}
                </h2>
                <p className="relative mt-4 text-[0.98rem] leading-8 text-white/66">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <aside className="editorial-note-panel editorial-note-panel--dark p-8">
            <p className="relative text-[0.72rem] font-semibold tracking-[0.2em] text-[#d8b6bc] uppercase">
              Operating Note
            </p>
            <h2 className="relative mt-5 font-[family:var(--font-heading)] text-[2.35rem] font-normal leading-[0.98] text-white">
              Remote team, international client work.
            </h2>
            <p className="relative mt-4 text-[0.98rem] leading-8 text-white/66">
              The work is set up so planning, design, engineering, QA, and
              support stay connected instead of turning into a chain of
              separate handoffs.
            </p>
            <div className="relative mt-8 border-t border-white/10 pt-6">
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-white/42 uppercase">
                Base
              </p>
              <p className="mt-3 text-[0.98rem] leading-8 text-white/72">
                {siteConfig.location}
              </p>
              <p className="mt-5 text-[0.72rem] font-semibold tracking-[0.18em] text-white/42 uppercase">
                Focus
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {disciplineAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-white/66 uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="border-t border-white/10 pt-6">
          <SectionHeading
            eyebrow="Partnership Standard"
            title="What a good working relationship should feel like."
            description="You should know what is happening, why decisions are being made, and what comes next."
            tone="light"
          />
        </div>

        <div className="mt-10">
          <EditorialCarousel
            items={partnershipCards}
            theme="dark"
            variant="stacked"
            columns={{ tablet: 2, desktop: 3 }}
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-24">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions teams often ask early."
            description="Straight answers on fit, risk, and how the work is run."
            tone="light"
          />
          <FaqList items={homeFaqs} tone="dark" />
        </div>
      </SectionShell>

      <SectionShell className="pb-8 pt-24">
        <CtaSection
          eyebrow="Next Step"
          title="Start with the problem and the reality around it."
          description="The better the context, the better the plan for scope, design, and engineering."
          imageSrc={siteImages.about.cta}
          imageAlt="Premium studio workspace"
          stageVariant="services"
          points={[
            "Senior attention on the key decisions",
            "A delivery model that stays understandable",
            "Software that can handle the next phase too",
          ]}
        />
      </SectionShell>
    </div>
  );
}
