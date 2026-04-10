import { apiClient } from "@/lib/api-client";
import type { PartnerWarehouseAssetApiPayload } from "./payload";

export const PARTNER_WAREHOUSE_ASSET_API_PATH = "/onboarding/warehouse-asset";

export function submitPartnerWarehouseAssetRequest(
  payload: PartnerWarehouseAssetApiPayload
) {
  return apiClient.post(PARTNER_WAREHOUSE_ASSET_API_PATH, payload);
}
