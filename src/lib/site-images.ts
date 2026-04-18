import { imageAsset } from "./image-asset";

export const siteImages = {
  home: {
    hero: {
      websites: imageAsset("/images/home-hero-cinematic-02-v1.png"),
      webapps: imageAsset("/images/home-hero-cinematic-01-v1.png"),
      systems: imageAsset("/images/home-hero-cinematic-03-v1.png"),
    },
    capabilities: {
      websites: imageAsset("/images/service-website-editorial-v1.png"),
      webapps: imageAsset("/images/service-webapp-editorial-v1.png"),
      mobile: imageAsset("/images/service-mobile-editorial-v1.png"),
      systems: imageAsset("/images/service-systems-editorial-v1.png"),
    },
    process: {
      discovery: imageAsset("/images/strategy-wall-editorial-v1.png"),
      shaping: imageAsset("/images/process-artifacts-editorial-v1.png"),
      design: imageAsset("/images/service-website-editorial-v1.png"),
      build: imageAsset("/images/operations-control-editorial-v1.png"),
    },
    work: {
      investorReporting: imageAsset("/images/operations-control-editorial-v1.png"),
      patientBooking: imageAsset("/images/work-patient-booking.png"),
      fieldOperations: imageAsset("/images/work-field-operations.png"),
    },
    cta: imageAsset("/images/home-hero-cinematic-01-v1.png"),
  },
  services: {
    hero: imageAsset("/images/strategy-wall-editorial-v1.png"),
    core: {
      websites: imageAsset("/images/service-website-editorial-v1.png"),
      webapps: imageAsset("/images/service-webapp-editorial-v1.png"),
      mobile: imageAsset("/images/service-mobile-editorial-v1.png"),
      uiux: imageAsset("/images/strategy-wall-editorial-v1.png"),
      productStrategy: imageAsset("/images/process-artifacts-editorial-v1.png"),
      internalSystems: imageAsset("/images/service-systems-editorial-v1.png"),
    },
    support: {
      maintenance: imageAsset("/images/editorial-banner-studio-v1.png"),
      optimization: imageAsset("/images/hero-studio-editorial-v1.png"),
      backend: imageAsset("/images/operations-control-editorial-v1.png"),
      commerce: imageAsset("/images/service-website-editorial-v1.png"),
    },
    cta: imageAsset("/images/strategy-wall-editorial-v1.png"),
  },
  about: {
    hero: imageAsset("/images/editorial-banner-studio-v1.png"),
    disciplines: {
      strategy: imageAsset("/images/process-artifacts-editorial-v1.png"),
      designSystems: imageAsset("/images/strategy-wall-editorial-v1.png"),
      frontend: imageAsset("/images/service-website-editorial-v1.png"),
      backend: imageAsset("/images/operations-control-editorial-v1.png"),
      mobile: imageAsset("/images/service-mobile-editorial-v1.png"),
      launch: imageAsset("/images/editorial-banner-studio-v1.png"),
    },
    partnership: {
      communication: imageAsset("/images/strategy-wall-editorial-v1.png"),
      judgment: imageAsset("/images/process-artifacts-editorial-v1.png"),
      craft: imageAsset("/images/hero-studio-editorial-v1.png"),
    },
    cta: imageAsset("/images/editorial-banner-studio-v1.png"),
  },
  industries: {
    hero: imageAsset("/images/operations-control-editorial-v1.png"),
    cards: {
      saas: imageAsset("/images/service-webapp-editorial-v1.png"),
      healthcare: imageAsset("/images/hero-studio-editorial-v1.png"),
      finance: imageAsset("/images/operations-control-editorial-v1.png"),
      operations: imageAsset("/images/service-systems-editorial-v1.png"),
      commerce: imageAsset("/images/service-website-editorial-v1.png"),
      professionalServices: imageAsset("/images/editorial-banner-studio-v1.png"),
    },
    cta: imageAsset("/images/operations-control-editorial-v1.png"),
  },
  process: {
    hero: imageAsset("/images/process-artifacts-editorial-v1.png"),
    steps: {
      discovery: imageAsset("/images/strategy-wall-editorial-v1.png"),
      shaping: imageAsset("/images/process-artifacts-editorial-v1.png"),
      design: imageAsset("/images/service-website-editorial-v1.png"),
      build: imageAsset("/images/service-webapp-editorial-v1.png"),
      launch: imageAsset("/images/operations-control-editorial-v1.png"),
      support: imageAsset("/images/editorial-banner-studio-v1.png"),
    },
    cta: imageAsset("/images/process-artifacts-editorial-v1.png"),
  },
  work: {
    hero: imageAsset("/images/operations-control-editorial-v1.png"),
    studies: {
      investorReporting: imageAsset("/images/operations-control-editorial-v1.png"),
      patientBooking: imageAsset("/images/work-patient-booking.png"),
      fieldOperations: imageAsset("/images/work-field-operations.png"),
    },
    cta: imageAsset("/images/operations-control-editorial-v1.png"),
  },
  contact: {
    hero: imageAsset("/images/editorial-banner-studio-v1.png"),
  },
} as const;

export function getCaseStudyImage(slug: string) {
  switch (slug) {
    case "investor-reporting-portal":
      return siteImages.work.studies.investorReporting;
    case "patient-booking-platform":
      return siteImages.work.studies.patientBooking;
    case "field-operations-suite":
      return siteImages.work.studies.fieldOperations;
    default:
      return siteImages.work.hero;
  }
}
