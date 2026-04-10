import { z } from "zod";

export const contactSimpleFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .min(10, "Please write at least 10 characters.")
});

export type ContactSimpleFormValues = z.infer<typeof contactSimpleFormSchema>;

export const defaultContactSimpleFormValues: ContactSimpleFormValues = {
  fullName: "",
  email: "",
  message: ""
};
