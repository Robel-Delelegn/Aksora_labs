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
    title: "Web, app, and tool work",
    note: "Planning, design, and build kept in one picture.",
    chips: ["Web", "App", "Ops"],
    sideLabel: "Execution",
    sideValue: "Senior-led",
    bottomLabel: "Build standard",
    bottomValue: "Solid",
    icon: MonitorSmartphone,
  },
  services: {
    title: "What the work can cover",
    note: "Strategy, design, build, and support working together.",
    chips: ["Strategy", "Design", "Build"],
    sideLabel: "Delivery",
    sideValue: "Integrated",
    bottomLabel: "Coverage",
    bottomValue: "End-to-end",
    icon: Layers3,
  },
  process: {
    title: "Work in motion",
    note: "Scope, decisions, and progress kept visible.",
    chips: ["Scope", "Design", "Launch"],
    sideLabel: "Rhythm",
    sideValue: "Clear",
    bottomLabel: "Visibility",
    bottomValue: "Weekly",
    icon: Search,
  },
  work: {
    title: "Useful case studies",
    note: "Problem, response, and result in one place.",
    chips: ["Problem", "Build", "Impact"],
    sideLabel: "Read",
    sideValue: "Clear",
    bottomLabel: "Case focus",
    bottomValue: "Results",
    icon: ShieldCheck,
  },
  about: {
    title: "Clear taste, solid craft",
    note: "Design and engineering held to the same standard.",
    chips: ["Taste", "Clarity", "Durability"],
    sideLabel: "Standard",
    sideValue: "High",
    bottomLabel: "Approach",
    bottomValue: "Practical",
    icon: Compass,
  },
  industries: {
    title: "Built for context",
    note: "Different sectors bring different constraints and buying habits.",
    chips: ["Finance", "Health", "Ops"],
    sideLabel: "Fit",
    sideValue: "Adapted",
    bottomLabel: "Buying lens",
    bottomValue: "Specific",
    icon: Workflow,
  },
  contact: {
    title: "Start with the brief",
    note: "Enough context to judge fit, scope, and the next step.",
    chips: ["Context", "Fit", "Direction"],
    sideLabel: "Next step",
    sideValue: "Clear",
    bottomLabel: "Response",
    bottomValue: "Useful",
    icon: Compass,
  },
  case: {
    title: "What changed",
    note: "Problem, product decisions, and results you can follow.",
    chips: ["Outcome", "Features", "Stack"],
    sideLabel: "Signal",
    sideValue: "Clear",
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
