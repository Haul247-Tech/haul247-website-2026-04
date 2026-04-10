import { normalizePhoneE164 } from "../phone";
import type { ContactDetailedFormValues } from "./schema";

export type ContactDetailedApiPayload = {
  category: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
};

export function buildContactDetailedPayload(
  values: ContactDetailedFormValues
): ContactDetailedApiPayload {
  return {
    category: values.category.trim(),
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    email: values.email.trim(),
    phone: normalizePhoneE164(values.phone),
    companyName: values.companyName.trim(),
    message: values.message.trim()
  };
}
