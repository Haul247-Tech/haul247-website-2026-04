"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { getAxiosErrorMessage } from "@/lib/api-client";
import {
  buildPartnerWarehouseAssetPayload,
  defaultPartnerWarehouseAssetFormValues,
  MIN_STORAGE_DURATION_OPTIONS,
  PRICING_MODEL_OPTIONS,
  partnerWarehouseAssetFormSchema,
  submitPartnerWarehouseAssetRequest,
  WAREHOUSE_STATE_OPTIONS,
  type PartnerWarehouseAssetFormValues
} from "@/lib/forms/partner-warehouse-asset";
import { sanitizePhoneInput } from "@/lib/forms/phone";
import { notifyError, notifySuccess } from "@/lib/notify";
import { Controller, useForm } from "react-hook-form";
import {
  PartnerWarehouseFacilitiesField,
  PartnerWarehouseGoodsTypesField
} from "./partner-warehouse-asset-form-fields";
import { RequestFormInput } from "./request-form-input";
import { RequestFormModal } from "./request-form-modal";
import { RequestFormSelect } from "./request-form-select";

type PartnerWarehouseAssetsFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function PartnerWarehouseAssetsFormModal({
  isOpen,
  onClose
}: PartnerWarehouseAssetsFormModalProps) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<PartnerWarehouseAssetFormValues>({
    resolver: zodResolver(partnerWarehouseAssetFormSchema),
    defaultValues: { ...defaultPartnerWarehouseAssetFormValues }
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const payload = buildPartnerWarehouseAssetPayload(values);
      await submitPartnerWarehouseAssetRequest(payload);

      reset({ ...defaultPartnerWarehouseAssetFormValues });
      notifySuccess("Partner warehouse request sent. We'll be in touch soon.");
      onClose();
    } catch (err) {
      const apiMessage = getAxiosErrorMessage(
        err,
        "Unable to submit partner warehouse request right now."
      );
      if (apiMessage !== null) {
        notifyError(apiMessage);
        return;
      }
      notifyError("Network error. Please check your connection and try again.");
    }
  });

  return (
    <RequestFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Onboard Warehouse Asset"
      headerImageSrc="/images/truck-request-modal-header.png"
      submitLabel={isSubmitting ? "Submitting..." : "Send Onboard Request"}
      onSubmit={(event) => {
        void onSubmit(event);
      }}
    >
      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Basic Information
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-8">
        <div>
          <RequestFormInput
            placeholder="Enter Company Name"
            aria-invalid={Boolean(errors.companyName)}
            {...register("companyName")}
          />
          {errors.companyName ? (
            <p className="mt-1 text-xs text-red-600">{errors.companyName.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormInput
            placeholder="Enter Individual Name"
            aria-invalid={Boolean(errors.individualName)}
            {...register("individualName")}
          />
          {errors.individualName ? (
            <p className="mt-1 text-xs text-red-600">{errors.individualName.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormInput
            placeholder="Enter Contact Person Name"
            aria-invalid={Boolean(errors.contactPersonName)}
            {...register("contactPersonName")}
          />
          {errors.contactPersonName ? (
            <p className="mt-1 text-xs text-red-600">{errors.contactPersonName.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormInput
            type="email"
            placeholder="Enter Email Address"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
        <div className="md:col-span-2">
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <RequestFormInput
                placeholder="Enter Phone Number"
                inputMode="tel"
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
                value={field.value}
                onBlur={field.onBlur}
                onChange={(event) => field.onChange(sanitizePhoneInput(event.target.value))}
              />
            )}
          />
          {errors.phone ? (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Warehouse Location
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-8">
        <div className="md:col-span-2">
          <RequestFormInput
            placeholder="Enter Full Address"
            aria-invalid={Boolean(errors.fullAddress)}
            {...register("fullAddress")}
          />
          {errors.fullAddress ? (
            <p className="mt-1 text-xs text-red-600">{errors.fullAddress.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormInput
            placeholder="Enter City"
            aria-invalid={Boolean(errors.city)}
            {...register("city")}
          />
          {errors.city ? (
            <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormSelect
            defaultValue=""
            aria-invalid={Boolean(errors.state)}
            {...register("state")}
          >
            <option value="" disabled>
              Select State
            </option>
            {WAREHOUSE_STATE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </RequestFormSelect>
          {errors.state ? (
            <p className="mt-1 text-xs text-red-600">{errors.state.message}</p>
          ) : null}
        </div>
        <div className="md:col-span-2">
          <RequestFormInput
            placeholder="Enter Closest Landmark (optional)"
            aria-invalid={Boolean(errors.closestLandmark)}
            {...register("closestLandmark")}
          />
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Warehouse Specifications
      </p>
      <div className="mt-5 grid gap-6 md:grid-cols-2 md:gap-8">
        <PartnerWarehouseGoodsTypesField control={control} errors={errors} />
        <div>
          <RequestFormInput
            placeholder="Enter Restrictions if any"
            aria-invalid={Boolean(errors.restrictions)}
            {...register("restrictions")}
          />
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Facilities & Infrastructure
      </p>
      <div className="mt-5">
        <PartnerWarehouseFacilitiesField control={control} errors={errors} />
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Commercials
      </p>
      <div className="mt-5 grid gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <RequestFormSelect
            defaultValue=""
            aria-invalid={Boolean(errors.pricingModel)}
            {...register("pricingModel")}
          >
            <option value="" disabled>
              Select Pricing Model
            </option>
            {PRICING_MODEL_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </RequestFormSelect>
          {errors.pricingModel ? (
            <p className="mt-1 text-xs text-red-600">{errors.pricingModel.message}</p>
          ) : null}
        </div>
        <div>
          <p className="text-[14px] font-[300] text-[#607481]">
            Are you open to negotiation?
          </p>
          <div className="mt-3 flex flex-wrap gap-x-10 gap-y-3 text-[14px] font-[300] text-[#607481]">
            <label className="inline-flex items-center gap-3">
              <input type="radio" value="yes" {...register("openToNegotiation")} />
              Yes
            </label>
            <label className="inline-flex items-center gap-3">
              <input type="radio" value="no" {...register("openToNegotiation")} />
              No
            </label>
          </div>
          {errors.openToNegotiation ? (
            <p className="mt-1 text-xs text-red-600">{errors.openToNegotiation.message}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Availability
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-8">
        <div>
          <RequestFormInput
            type="date"
            aria-label="Availability start date"
            aria-invalid={Boolean(errors.availabilityStart)}
            {...register("availabilityStart")}
          />
          {errors.availabilityStart ? (
            <p className="mt-1 text-xs text-red-600">{errors.availabilityStart.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormInput
            type="date"
            aria-label="Availability end date"
            aria-invalid={Boolean(errors.availabilityEnd)}
            {...register("availabilityEnd")}
          />
          {errors.availabilityEnd ? (
            <p className="mt-1 text-xs text-red-600">{errors.availabilityEnd.message}</p>
          ) : null}
        </div>
        <div className="md:col-span-2">
          <RequestFormSelect
            defaultValue=""
            aria-invalid={Boolean(errors.minStorageDuration)}
            {...register("minStorageDuration")}
          >
            <option value="" disabled>
              Select Minimum Storage Duration
            </option>
            {MIN_STORAGE_DURATION_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </RequestFormSelect>
          {errors.minStorageDuration ? (
            <p className="mt-1 text-xs text-red-600">{errors.minStorageDuration.message}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Additional Info
      </p>
      <div className="mt-5">
        <textarea
          rows={3}
          className="w-full border-0 border-b border-[#c9ced3] bg-transparent py-2.5 text-[14px] font-[300] text-[#607481] outline-none placeholder:text-[#607481]"
          placeholder="Enter any additional notes (optional)"
          aria-invalid={Boolean(errors.notes)}
          {...register("notes")}
        />
      </div>
    </RequestFormModal>
  );
}
