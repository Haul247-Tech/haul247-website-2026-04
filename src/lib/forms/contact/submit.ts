import { apiClient } from "@/lib/api-client";
import type { ContactDetailedApiPayload } from "./payload";

export const CONTACT_DETAILED_API_PATH = "/contact/detailed";

export function submitContactDetailedRequest(payload: ContactDetailedApiPayload) {
  return apiClient.post(CONTACT_DETAILED_API_PATH, payload);
}
