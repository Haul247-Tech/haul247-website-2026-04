"use client";

import type { Control, FieldErrors } from "react-hook-form";
import { Controller } from "react-hook-form";
import type { PartnerWarehouseAssetFormValues } from "@/lib/forms/partner-warehouse-asset";
import { FACILITY_OPTIONS, GOODS_TYPE_OPTIONS } from "@/lib/forms/partner-warehouse-asset";
import { RequestFormMultiSelect } from "./request-form-multi-select";

type FieldsProps = {
  control: Control<PartnerWarehouseAssetFormValues>;
  errors: FieldErrors<PartnerWarehouseAssetFormValues>;
};

export function PartnerWarehouseGoodsTypesField({ control, errors }: FieldsProps) {
  return (
    <div>
      <p className="mb-3 text-[14px] font-[300] text-[#607481]">
        Types of goods allowed (one or more)
      </p>
      <Controller
        name="goodsTypes"
        control={control}
        render={({ field }) => (
          <RequestFormMultiSelect
            aria-label="Types of goods allowed"
            aria-invalid={Boolean(errors.goodsTypes)}
            options={GOODS_TYPE_OPTIONS}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="Select types of goods"
          />
        )}
      />
      {errors.goodsTypes ? (
        <p className="mt-2 text-xs text-red-600">{errors.goodsTypes.message}</p>
      ) : null}
    </div>
  );
}

export function PartnerWarehouseFacilitiesField({ control, errors }: FieldsProps) {
  return (
    <div>
      <p className="mb-3 text-[14px] font-[300] text-[#607481]">
        Available facilities (one or more)
      </p>
      <Controller
        name="facilities"
        control={control}
        render={({ field }) => (
          <RequestFormMultiSelect
            aria-label="Available facilities"
            aria-invalid={Boolean(errors.facilities)}
            options={FACILITY_OPTIONS}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder="Select facilities"
          />
        )}
      />
      {errors.facilities ? (
        <p className="mt-2 text-xs text-red-600">{errors.facilities.message}</p>
      ) : null}
    </div>
  );
}
