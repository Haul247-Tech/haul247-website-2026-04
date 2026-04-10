import { z } from "zod";
import { isValidE164Phone, normalizePhoneE164 } from "../phone";

const optionalText = z.string().trim();

export const partnerWarehouseAssetFormSchema = z
  .object({
    companyName: z.string().trim().min(1, "Company name is required."),
    individualName: z.string().trim().min(1, "Individual name is required."),
    contactPersonName: z.string().trim().min(1, "Contact person name is required."),
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
    fullAddress: z.string().trim().min(1, "Full address is required."),
    city: z.string().trim().min(1, "City is required."),
    state: z.string().trim().min(1, "Select state."),
    closestLandmark: optionalText,
    goodsTypes: z.array(z.string()).min(1, "Select at least one type of goods."),
    restrictions: optionalText,
    facilities: z.array(z.string()).min(1, "Select at least one facility."),
    pricingModel: z.string().trim().min(1, "Select pricing model."),
    openToNegotiation: z.enum(["yes", "no"], {
      required_error: "Select whether you are open to negotiation."
    }),
    availabilityStart: z.string().trim().min(1, "Start date is required."),
    availabilityEnd: z.string().trim().min(1, "End date is required."),
    minStorageDuration: z.string().trim().min(1, "Select minimum storage duration."),
    notes: optionalText
  })
  .superRefine((data, ctx) => {
    const start = new Date(data.availabilityStart);
    const end = new Date(data.availabilityEnd);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return;
    if (end < start) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "End date must be on or after start date.",
        path: ["availabilityEnd"]
      });
    }
  });

export type PartnerWarehouseAssetFormValues = z.infer<
  typeof partnerWarehouseAssetFormSchema
>;

export const defaultPartnerWarehouseAssetFormValues: PartnerWarehouseAssetFormValues =
  {
    companyName: "",
    individualName: "",
    contactPersonName: "",
    email: "",
    phone: "",
    fullAddress: "",
    city: "",
    state: "",
    closestLandmark: "",
    goodsTypes: [],
    restrictions: "",
    facilities: [],
    pricingModel: "",
    openToNegotiation: "yes",
    availabilityStart: "",
    availabilityEnd: "",
    minStorageDuration: "",
    notes: ""
  };
