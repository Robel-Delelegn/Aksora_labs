"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";

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

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(defaultValues);
  const [errors, setErrors] = useState<ErrorState>({});
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

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
            "The inquiry could not be submitted. Please try again.",
        );
        return;
      }

      setIsSubmitted(true);
      setValues(defaultValues);
    } catch {
      setServerMessage(
        "The inquiry could not be submitted right now. Please email hello@aksoralabs.com.",
      );
    } finally {
      setIsPending(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="border-y border-emerald-200 bg-emerald-50/70 py-8">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-700" />
          <div>
            <h3 className="text-2xl font-semibold text-slate-950">
              Inquiry received
            </h3>
            <p className="mt-3 max-w-xl text-pretty leading-7 text-slate-700">
              Thanks for reaching out. The project brief has been captured. If
              the fit is strong, the next step is a focused discovery
              conversation around goals, constraints, and delivery direction.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-y border-[var(--border-strong)] bg-white/55 py-6 sm:py-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          value={values.name}
          error={errors.name}
          onChange={(value) => updateValue("name", value)}
          placeholder="Your name"
          autoComplete="name"
          required
        />
        <Field
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
          label="Company"
          name="company"
          value={values.company ?? ""}
          error={errors.company}
          onChange={(value) => updateValue("company", value)}
          placeholder="Company name"
          autoComplete="organization"
        />
        <SelectField
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
            "Product strategy and design",
            "Performance or modernization",
          ]}
          required
        />
        <SelectField
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
          className="mb-2 block text-[0.72rem] font-semibold tracking-[0.18em] text-slate-500 uppercase"
        >
          Project brief
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
            className={`w-full border-x-0 border-b border-t-0 bg-transparent px-0 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--accent)] ${
            errors.message ? "border-red-300" : "border-slate-300"
          }`}
          placeholder="What are you building, who is it for, and what matters most right now?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-red-600">
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
        <p className="mt-4 text-sm text-red-600" aria-live="polite">
          {serverMessage}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-slate-500">
          Share the key context. Aksora Labs will review the brief and respond
          with the right next step.
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="button-sheen inline-flex min-h-11 items-center justify-center gap-2 border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "Submitting..." : "Request a discovery call"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
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
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[0.72rem] font-semibold tracking-[0.18em] text-slate-500 uppercase"
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
        className={`w-full border-x-0 border-b border-t-0 bg-transparent px-0 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--accent)] ${
          error ? "border-red-300" : "border-slate-300"
        }`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        required={required}
      />
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
  required?: boolean;
};

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[0.72rem] font-semibold tracking-[0.18em] text-slate-500 uppercase"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`w-full border-x-0 border-b border-t-0 bg-transparent px-0 py-3 text-slate-900 outline-none transition focus:border-[var(--accent)] ${
          error ? "border-red-300" : "border-slate-300"
        }`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        required={required}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
