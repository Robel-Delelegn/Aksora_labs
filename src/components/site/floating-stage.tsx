"use client";

import { useRef } from "react";
import type { PointerEvent } from "react";
import {
  Compass,
  Layers3,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type StageVariant =
  | "hero"
  | "services"
  | "process"
  | "work"
  | "about"
  | "industries"
  | "contact"
  | "case";

export type { StageVariant };

type FloatingStageProps = {
  variant?: StageVariant;
  compact?: boolean;
  className?: string;
};

type StageConfig = {
  title: string;
  note: string;
  chips: string[];
  sideLabel: string;
  sideValue: string;
  bottomLabel: string;
  bottomValue: string;
  icon: LucideIcon;
};

const stageConfigs: Record<StageVariant, StageConfig> = {
  hero: {
    title: "Flagship digital builds",
    note: "Web, app, and systems work aligned in one delivery view.",
    chips: ["Web", "App", "Ops"],
    sideLabel: "Execution",
    sideValue: "Senior-led",
    bottomLabel: "Build standard",
    bottomValue: "Premium",
    icon: MonitorSmartphone,
  },
  services: {
    title: "Capability stack",
    note: "Strategy, design, engineering, and support built to work together.",
    chips: ["Strategy", "Design", "Build"],
    sideLabel: "Delivery",
    sideValue: "Integrated",
    bottomLabel: "Coverage",
    bottomValue: "End-to-end",
    icon: Layers3,
  },
  process: {
    title: "Visible progression",
    note: "Clear scope, visible decisions, and steady momentum.",
    chips: ["Scope", "Design", "Launch"],
    sideLabel: "Rhythm",
    sideValue: "Clear",
    bottomLabel: "Visibility",
    bottomValue: "Weekly",
    icon: Search,
  },
  work: {
    title: "Case study signal",
    note: "Business context, product judgment, and measurable impact.",
    chips: ["Problem", "Build", "Impact"],
    sideLabel: "Positioning",
    sideValue: "Credible",
    bottomLabel: "Case signal",
    bottomValue: "Sharp",
    icon: ShieldCheck,
  },
  about: {
    title: "Taste and rigor",
    note: "Design quality and engineering quality are treated as one system.",
    chips: ["Taste", "Clarity", "Durability"],
    sideLabel: "Standard",
    sideValue: "High",
    bottomLabel: "Approach",
    bottomValue: "Intentional",
    icon: Compass,
  },
  industries: {
    title: "Context-aware delivery",
    note: "Different sectors require different trust and risk signals.",
    chips: ["Finance", "Health", "Ops"],
    sideLabel: "Fit",
    sideValue: "Adapted",
    bottomLabel: "Buying lens",
    bottomValue: "Context-aware",
    icon: Workflow,
  },
  contact: {
    title: "Discovery first",
    note: "A clear first conversation around fit, scope, and next step.",
    chips: ["Context", "Fit", "Direction"],
    sideLabel: "Next step",
    sideValue: "Clear",
    bottomLabel: "Response",
    bottomValue: "Focused",
    icon: Compass,
  },
  case: {
    title: "Product evidence",
    note: "Business context, product decisions, and measurable results.",
    chips: ["Outcome", "Features", "Stack"],
    sideLabel: "Signal",
    sideValue: "Serious",
    bottomLabel: "Readability",
    bottomValue: "Fast",
    icon: Smartphone,
  },
};

export function FloatingStage({
  variant = "hero",
  compact = false,
  className = "",
}: FloatingStageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const config = stageConfigs[variant];
  const Icon = config.icon;

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const node = ref.current;

    if (!node) {
      return;
    }

    const bounds = node.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    node.style.setProperty("--stage-rotate-y", `${x * 10}deg`);
    node.style.setProperty("--stage-rotate-x", `${y * -10}deg`);
    node.style.setProperty("--stage-shift-x", `${x * 16}px`);
    node.style.setProperty("--stage-shift-y", `${y * 14}px`);
  }

  function resetPointer() {
    const node = ref.current;

    if (!node) {
      return;
    }

    node.style.setProperty("--stage-rotate-y", "0deg");
    node.style.setProperty("--stage-rotate-x", "0deg");
    node.style.setProperty("--stage-shift-x", "0px");
    node.style.setProperty("--stage-shift-y", "0px");
  }

  return (
    <div
      ref={ref}
      data-stage={variant}
      className={`floating-stage ${compact ? "floating-stage--compact" : ""} ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="floating-stage__plane">
        <div className="floating-stage__mesh" />
        <div className="floating-stage__beam" />
        <div className="floating-stage__orb floating-stage__orb--one" />
        <div className="floating-stage__orb floating-stage__orb--two" />
        <div className="floating-stage__ring" />
        <div className="floating-stage__wire floating-stage__wire--one" />
        <div className="floating-stage__wire floating-stage__wire--two" />

        <div className="floating-stage__panel floating-stage__panel--main">
          <div className="floating-stage__topbar">
            <span />
            <span />
            <span />
          </div>
          <div className="floating-stage__panel-body">
            <div className="floating-stage__headline">
              <Icon className="h-5 w-5 text-[var(--accent)]" />
              <span>{config.title}</span>
            </div>
            <div className="floating-stage__metric-row">
              <div className="floating-stage__metric floating-stage__metric--large" />
              <div className="floating-stage__metric floating-stage__metric--medium" />
            </div>
            <div className="floating-stage__chart">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="floating-stage__mini-grid">
              <div className="floating-stage__mini-card" />
              <div className="floating-stage__mini-card" />
              <div className="floating-stage__mini-card" />
            </div>
          </div>
        </div>

        <div className="floating-stage__panel floating-stage__panel--phone">
          <div className="floating-stage__phone-notch" />
          <div className="floating-stage__phone-screen">
            <div className="floating-stage__phone-card" />
            <div className="floating-stage__phone-card floating-stage__phone-card--short" />
            <div className="floating-stage__phone-bars">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="floating-stage__chip floating-stage__chip--a">
          {config.chips[0]}
        </div>
        <div className="floating-stage__chip floating-stage__chip--b">
          {config.chips[1]}
        </div>
        <div className="floating-stage__chip floating-stage__chip--c">
          {config.chips[2]}
        </div>

        <div className="floating-stage__sidecard">
          <p className="floating-stage__side-label">{config.sideLabel}</p>
          <p className="floating-stage__side-value">{config.sideValue}</p>
          <p className="floating-stage__side-note">{config.note}</p>
        </div>

        <div className="floating-stage__dock">
          <p className="floating-stage__side-label">{config.bottomLabel}</p>
          <p className="floating-stage__side-value">{config.bottomValue}</p>
        </div>
      </div>
    </div>
  );
}
