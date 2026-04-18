"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import {
  countWords,
  contactSchema,
  PROJECT_BRIEF_MIN_WORDS,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site-data";

const defaultValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
  website: "",
};

type ErrorState = Partial<Record<keyof ContactFormValues, string>>;

type ContactFormProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function ContactForm({
  tone = "light",
  className = "",
}: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(defaultValues);
  const [errors, setErrors] = useState<ErrorState>({});
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const isDark = tone === "dark";
  const messageWordCount = countWords(values.message);

  function updateValue<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerMessage("");

    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        company: fieldErrors.company?.[0],
        email: fieldErrors.email?.[0],
        projectType: fieldErrors.projectType?.[0],
        budget: fieldErrors.budget?.[0],
        timeline: fieldErrors.timeline?.[0],
        message: fieldErrors.message?.[0],
        website: fieldErrors.website?.[0],
      });
      return;
    }

    setIsPending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
        fieldErrors?: Record<string, string[]>;
      };

      if (!response.ok) {
        setErrors({
          name: payload.fieldErrors?.name?.[0],
          email: payload.fieldErrors?.email?.[0],
          projectType: payload.fieldErrors?.projectType?.[0],
          message: payload.fieldErrors?.message?.[0],
        });
        setServerMessage(
          payload.message ??
            "We couldn't send your message. Please try again.",
        );
        return;
      }

      setIsSubmitted(true);
      setValues(defaultValues);
    } catch {
      setServerMessage(
        `We couldn't send your message right now. Please email ${siteConfig.email}.`,
      );
    } finally {
      setIsPending(false);
    }
  }

  if (isSubmitted) {
    return (
      <div
        className={
          isDark
            ? "rounded-[24px] border border-emerald-400/24 bg-emerald-500/8 p-6 sm:p-8"
            : "border-y border-emerald-200 bg-emerald-50/70 py-8"
        }
      >
        <div className="flex items-start gap-4">
          <CheckCircle2
            className={`mt-1 h-6 w-6 ${
              isDark ? "text-emerald-300" : "text-emerald-700"
            }`}
          />
          <div>
            <h3
              className={`text-2xl font-semibold ${
                isDark ? "text-white" : "text-slate-950"
              }`}
            >
              Message received
            </h3>
            <p
              className={`mt-3 max-w-xl text-pretty leading-7 ${
                isDark ? "text-white/72" : "text-slate-700"
              }`}
            >
              Thanks for reaching out. We have the brief. If the fit looks
              right, the next step is a focused conversation about goals,
              constraints, and the best way to tackle the work.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isDark
          ? `space-y-6 ${className}`.trim()
          : `border-y border-[var(--border-strong)] bg-white/55 py-6 sm:py-8 ${className}`.trim()
      }
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          tone={tone}
          label="Name"
          name="name"
          value={values.name}
          error={errors.name}
          onChange={(value) => updateValue("name", value)}
          placeholder="Your full name"
          autoComplete="name"
          required
        />
        <Field
          tone={tone}
          label="Email"
          name="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => updateValue("email", value)}
          placeholder="you@company.com"
          autoComplete="email"
          type="email"
          required
        />
        <Field
          tone={tone}
          label="Company"
          name="company"
          value={values.company ?? ""}
          error={errors.company}
          onChange={(value) => updateValue("company", value)}
          placeholder="Company or team"
          autoComplete="organization"
        />
        <SelectField
          tone={tone}
          label="Project type"
          name="projectType"
          value={values.projectType}
          error={errors.projectType}
          onChange={(value) => updateValue("projectType", value)}
          options={[
            "Custom website",
            "Web application",
            "Mobile application",
            "Internal system",
            "Product design and strategy",
            "Performance or modernization",
          ]}
          required
        />
        <SelectField
          tone={tone}
          label="Budget range"
          name="budget"
          value={values.budget ?? ""}
          error={errors.budget}
          onChange={(value) => updateValue("budget", value)}
          options={[
            "Under $25k",
            "$25k - $75k",
            "$75k - $150k",
            "$150k+",
            "Not sure yet",
          ]}
        />
        <SelectField
          tone={tone}
          label="Timeline"
          name="timeline"
          value={values.timeline ?? ""}
          error={errors.timeline}
          onChange={(value) => updateValue("timeline", value)}
          options={[
            "Immediately",
            "Within 1 month",
            "Within 1 quarter",
            "Exploring options",
          ]}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className={`mb-2 block text-[0.72rem] font-semibold tracking-[0.18em] uppercase ${
            isDark ? "text-white/60" : "text-slate-500"
          }`}
        >
          Project brief
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          className={`w-full outline-none transition ${
            isDark
              ? "rounded-[18px] border bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-white/34 focus:border-[var(--accent)]"
              : "border-x-0 border-b border-t-0 bg-transparent px-0 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[var(--accent)]"
          } ${
            errors.message
              ? "border-red-300"
              : isDark
                ? "border-white/12"
                : "border-slate-300"
          }`}
          placeholder="What are you trying to build or fix? Who is it for? What matters most right now?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-hint message-error" : "message-hint"}
          required
        />
        <p
          id="message-hint"
          className={`mt-2 text-sm ${
            errors.message
              ? isDark
                ? "text-white/64"
                : "text-slate-500"
              : isDark
                ? "text-white/56"
                : "text-slate-500"
          }`}
        >
          {`Minimum ${PROJECT_BRIEF_MIN_WORDS} words. Current: ${messageWordCount}.`}
        </p>
        {errors.message ? (
          <p
            id="message-error"
            className={`mt-2 text-sm ${
              isDark ? "text-[#ff9e9e]" : "text-red-600"
            }`}
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="sr-only">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          value={values.website ?? ""}
          onChange={(event) => updateValue("website", event.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      {serverMessage ? (
        <p
          className={`mt-4 text-sm ${
            isDark ? "text-[#ff9e9e]" : "text-red-600"
          }`}
          aria-live="polite"
        >
          {serverMessage}
        </p>
      ) : null}

      <div
        className={
          isDark
            ? "mt-6 space-y-4"
            : "mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        }
      >
        <p
          className={`max-w-xl text-sm leading-6 ${
            isDark ? "text-white/56" : "text-slate-500"
          }`}
        >
          Share the important context. We will review it and reply with the
          best next step.
        </p>
        <button
          type="submit"
          disabled={isPending}
          className={`button-sheen inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-70 ${
            isDark
              ? "w-full rounded-[16px] border-[var(--accent)] bg-[linear-gradient(90deg,rgba(139,35,50,0.96),rgba(164,64,94,0.96))] hover:border-[var(--accent-strong)] hover:bg-[linear-gradient(90deg,rgba(109,27,40,0.98),rgba(139,35,50,0.98))]"
              : "border-[var(--accent)] bg-[var(--accent)] hover:bg-[var(--accent-strong)]"
          }`}
        >
          {isPending ? "Sending..." : "Send project brief"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  tone: "light" | "dark";
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
  type?: string;
  required?: boolean;
};

function Field({
  tone,
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
  type = "text",
  required = false,
}: FieldProps) {
  const isDark = tone === "dark";

  return (
    <div>
      <label
        htmlFor={name}
        className={`mb-2 block text-[0.72rem] font-semibold tracking-[0.18em] uppercase ${
          isDark ? "text-white/60" : "text-slate-500"
        }`}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full outline-none transition ${
          isDark
            ? "rounded-[16px] border bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-white/34 focus:border-[var(--accent)]"
            : "border-x-0 border-b border-t-0 bg-transparent px-0 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[var(--accent)]"
        } ${
          error
            ? "border-red-300"
            : isDark
              ? "border-white/12"
              : "border-slate-300"
        }`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        required={required}
      />
      {error ? (
        <p
          id={`${name}-error`}
          className={`mt-2 text-sm ${
            isDark ? "text-[#ff9e9e]" : "text-red-600"
          }`}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

type SelectFieldProps = {
  tone: "light" | "dark";
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
  required?: boolean;
};

function SelectField({
  tone,
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
}: SelectFieldProps) {
  const isDark = tone === "dark";
  const selectStyle = isDark
    ? {
        colorScheme: "dark" as const,
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        color: "#ffffff",
      }
    : undefined;
  const optionStyle = isDark
    ? { backgroundColor: "#090a0f", color: "#ffffff" }
    : { backgroundColor: "#ffffff", color: "#0f172a" };
  const placeholderOptionStyle = isDark
    ? { backgroundColor: "#090a0f", color: "rgba(255, 255, 255, 0.72)" }
    : { backgroundColor: "#ffffff", color: "#64748b" };

  return (
    <div>
      <label
        htmlFor={name}
        className={`mb-2 block text-[0.72rem] font-semibold tracking-[0.18em] uppercase ${
          isDark ? "text-white/60" : "text-slate-500"
        }`}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`w-full outline-none transition ${
          isDark
            ? "rounded-[16px] border bg-white/[0.03] px-4 py-3.5 text-white focus:border-[var(--accent)]"
            : "border-x-0 border-b border-t-0 bg-transparent px-0 py-3 text-slate-900 focus:border-[var(--accent)]"
        } ${
          error
            ? "border-red-300"
            : isDark
              ? "border-white/12"
              : "border-slate-300"
        }`}
        style={selectStyle}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        required={required}
      >
        <option value="" style={placeholderOptionStyle}>
          Choose an option
        </option>
        {options.map((option) => (
          <option key={option} value={option} style={optionStyle}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p
          id={`${name}-error`}
          className={`mt-2 text-sm ${
            isDark ? "text-[#ff9e9e]" : "text-red-600"
          }`}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
