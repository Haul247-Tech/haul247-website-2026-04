import { z } from "zod";
import { isValidE164Phone, normalizePhoneE164 } from "../phone";

export const contactDetailedFormSchema = z.object({
  category: z.string().trim().min(1, "Please select a category."),
  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim().min(1, "Last name is required."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .superRefine((val, ctx) => {
      const normalized = normalizePhoneE164(val);
      if (!isValidE164Phone(normalized)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Enter a valid phone number (e.g. +2348012345678 or 08012345678)."
        });
      }
    }),
  companyName: z.string().trim(),
  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .min(20, "Please write at least 20 characters.")
});

export type ContactDetailedFormValues = z.infer<typeof contactDetailedFormSchema>;

export const defaultContactDetailedFormValues: ContactDetailedFormValues = {
  category: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  message: ""
};
