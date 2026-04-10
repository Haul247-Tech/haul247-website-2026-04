"use client";

import type { Control, FieldErrors } from "react-hook-form";
import { Controller } from "react-hook-form";
import type { PartnerTruckAssetFormValues } from "@/lib/forms/partner-truck-asset";
import {
  OPERATING_STATE_OPTIONS,
  TRUCK_TYPE_OPTIONS
} from "@/lib/forms/partner-truck-asset";
import { RequestFormMultiSelect } from "./request-form-multi-select";

type FieldsProps = {
  control: Control<PartnerTruckAssetFormValues>;
  errors: FieldErrors<PartnerTruckAssetFormValues>;
};

export function PartnerTruckTypesField({ control, errors }: FieldsProps) {
  return (
    <div>
      <p className="mb-3 text-[14px] font-[300] text-[#607481]">
        Select types of trucks (one or more)
      </p>
      <Controller
        name="truckTypes"
        control={control}
        render={({ field }) => (
          <RequestFormMultiSelect
            aria-label="Types of trucks"
            aria-invalid={Boolean(errors.truckTypes)}
            options={TRUCK_TYPE_OPTIONS}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="Select types of trucks"
          />
        )}
      />
      {errors.truckTypes ? (
        <p className="mt-2 text-xs text-red-600">{errors.truckTypes.message}</p>
      ) : null}
    </div>
  );
}

export function PartnerTruckOperatingStatesField({ control, errors }: FieldsProps) {
  return (
    <div>
      <p className="mb-3 text-[14px] font-[300] text-[#607481]">
        Select operating states (one or more)
      </p>
      <Controller
        name="operatingStates"
        control={control}
        render={({ field }) => (
          <RequestFormMultiSelect
            aria-label="Operating states"
            aria-invalid={Boolean(errors.operatingStates)}
            options={OPERATING_STATE_OPTIONS}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="Select operating states"
          />
        )}
      />
      {errors.operatingStates ? (
        <p className="mt-2 text-xs text-red-600">{errors.operatingStates.message}</p>
      ) : null}
    </div>
  );
}
