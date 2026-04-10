import { apiClient } from "@/lib/api-client";
import type { PartnerTruckAssetApiPayload } from "./payload";

export const PARTNER_TRUCK_ASSET_API_PATH = "/onboarding/truck-asset";

export function submitPartnerTruckAssetRequest(payload: PartnerTruckAssetApiPayload) {
  return apiClient.post(PARTNER_TRUCK_ASSET_API_PATH, payload);
}
