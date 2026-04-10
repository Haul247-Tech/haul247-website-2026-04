import { normalizePhoneE164 } from "../phone";
import type { PartnerWarehouseAssetFormValues } from "./schema";

/** POST /onboarding/warehouse-asset JSON body */
export type PartnerWarehouseAssetApiPayload = {
  companyName: string;
  individualName: string;
  contactPersonName: string;
  email: string;
  phone: string;
  fullAddress: string;
  city: string;
  state: string;
  closestLandmark: string;
  goodsTypes: string[];
  restrictions: string;
  facilities: string[];
  pricingModel: string;
  openToNegotiation: boolean;
  availabilityStart: string;
  availabilityEnd: string;
  minStorageDuration: string;
  notes: string;
};

export function buildPartnerWarehouseAssetPayload(
  values: PartnerWarehouseAssetFormValues
): PartnerWarehouseAssetApiPayload {
  return {
    companyName: values.companyName.trim(),
    individualName: values.individualName.trim(),
    contactPersonName: values.contactPersonName.trim(),
    email: values.email.trim(),
    phone: normalizePhoneE164(values.phone),
    fullAddress: values.fullAddress.trim(),
    city: values.city.trim(),
    state: values.state.trim(),
    closestLandmark: values.closestLandmark.trim(),
    goodsTypes: [...values.goodsTypes],
    restrictions: values.restrictions.trim(),
    facilities: [...values.facilities],
    pricingModel: values.pricingModel.trim(),
    openToNegotiation: values.openToNegotiation === "yes",
    availabilityStart: values.availabilityStart.trim(),
    availabilityEnd: values.availabilityEnd.trim(),
    minStorageDuration: values.minStorageDuration.trim(),
    notes: values.notes.trim()
  };
}
