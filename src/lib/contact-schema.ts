import { z } from "zod";

export const PROJECT_BRIEF_MIN_WORDS = 5;

export function countWords(value: string) {
  const trimmed = value.trim();

  return trimmed ? trimmed.split(/\s+/).length : 0;
}

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name."),
  company: z.string().trim().optional(),
  email: z.string().trim().email("Please use a valid email address."),
  projectType: z.string().trim().min(1, "Please choose the closest project type."),
  budget: z.string().trim().optional(),
  timeline: z.string().trim().optional(),
  message: z.string().trim().superRefine((value, ctx) => {
    const wordCount = countWords(value);

    if (wordCount < PROJECT_BRIEF_MIN_WORDS) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Please write at least ${PROJECT_BRIEF_MIN_WORDS} words. You have ${wordCount}.`,
      });
    }
  }),
  website: z.string().trim().max(0, "Spam detected.").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
