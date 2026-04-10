import { z } from "zod";
import { isValidE164Phone, normalizePhoneE164 } from "../phone";

export const partnerTruckAssetFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required."),
  companyName: z.string().trim().min(1, "Company name is required."),
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
  companyAddress: z.string().trim().min(1, "Company address is required."),
  numberOfTrucks: z.string().trim().min(1, "Select number of trucks."),
  truckTypes: z.array(z.string()).min(1, "Select at least one type of truck."),
  operatingStates: z
    .array(z.string())
    .min(1, "Select at least one operating state."),
  isBusinessRegistered: z.enum(["yes", "no"], {
    required_error: "Select whether your business is registered."
  }),
  startTakingTrips: z.enum(["immediately", "within-a-week", "just-exploring"], {
    required_error: "Select when you can start taking trips."
  })
});

export type PartnerTruckAssetFormValues = z.infer<typeof partnerTruckAssetFormSchema>;

export const defaultPartnerTruckAssetFormValues: PartnerTruckAssetFormValues = {
  fullName: "",
  companyName: "",
  phone: "",
  companyAddress: "",
  numberOfTrucks: "",
  truckTypes: [],
  operatingStates: [],
  isBusinessRegistered: "yes",
  startTakingTrips: "immediately"
};
