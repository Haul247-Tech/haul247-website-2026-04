import { apiClient } from "@/lib/api-client";
import type { ContactSimpleApiPayload } from "./payload";

export const CONTACT_SIMPLE_API_PATH = "/contact/simple";

export function submitContactSimpleRequest(payload: ContactSimpleApiPayload) {
  return apiClient.post(CONTACT_SIMPLE_API_PATH, payload);
}
