import { normalizePhoneE164 } from "../phone";
import type { PartnerTruckAssetFormValues } from "./schema";

/** POST /onboarding/truck-asset body */
export type PartnerTruckAssetApiPayload = {
  fullName: string;
  phone: string;
  companyName: string;
  companyAddress: string;
  numberOfTrucks: string;
  truckTypes: string[];
  operatingStates: string[];
  isBusinessRegistered: boolean;
  startTakingTrips: string;
};

export function buildPartnerTruckAssetPayload(
  values: PartnerTruckAssetFormValues
): PartnerTruckAssetApiPayload {
  return {
    fullName: values.fullName.trim(),
    phone: normalizePhoneE164(values.phone),
    companyName: values.companyName.trim(),
    companyAddress: values.companyAddress.trim(),
    numberOfTrucks: values.numberOfTrucks.trim(),
    truckTypes: [...values.truckTypes],
    operatingStates: [...values.operatingStates],
    isBusinessRegistered: values.isBusinessRegistered === "yes",
    startTakingTrips: values.startTakingTrips
  };
}
