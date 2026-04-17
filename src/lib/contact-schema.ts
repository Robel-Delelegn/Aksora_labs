import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  company: z.string().trim().optional(),
  email: z.string().trim().email("Please enter a valid email address."),
  projectType: z.string().trim().min(1, "Please select a project type."),
  budget: z.string().trim().optional(),
  timeline: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(20, "Please add a little more detail about the project."),
  website: z.string().trim().max(0, "Spam detected.").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
