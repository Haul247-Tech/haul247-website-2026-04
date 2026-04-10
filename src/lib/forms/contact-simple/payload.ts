import type { ContactSimpleFormValues } from "./schema";

export type ContactSimpleApiPayload = {
  fullName: string;
  email: string;
  message: string;
};

export function buildContactSimplePayload(
  values: ContactSimpleFormValues
): ContactSimpleApiPayload {
  return {
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    message: values.message.trim()
  };
}
