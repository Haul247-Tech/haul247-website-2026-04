"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { getAxiosErrorMessage } from "@/lib/api-client";
import {
  buildPartnerTruckAssetPayload,
  defaultPartnerTruckAssetFormValues,
  NUMBER_OF_TRUCKS_OPTIONS,
  partnerTruckAssetFormSchema,
  sanitizePhoneInput,
  submitPartnerTruckAssetRequest,
  type PartnerTruckAssetFormValues
} from "@/lib/forms/partner-truck-asset";
import { notifyError, notifySuccess } from "@/lib/notify";
import { Controller, useForm } from "react-hook-form";
import {
  PartnerTruckOperatingStatesField,
  PartnerTruckTypesField
} from "./partner-truck-asset-form-fields";
import { RequestFormInput } from "./request-form-input";
import { RequestFormModal } from "./request-form-modal";
import { RequestFormSelect } from "./request-form-select";

type PartnerTruckAssetsFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function PartnerTruckAssetsFormModal({
  isOpen,
  onClose
}: PartnerTruckAssetsFormModalProps) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<PartnerTruckAssetFormValues>({
    resolver: zodResolver(partnerTruckAssetFormSchema),
    defaultValues: { ...defaultPartnerTruckAssetFormValues }
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const payload = buildPartnerTruckAssetPayload(values);
      await submitPartnerTruckAssetRequest(payload);

      reset({ ...defaultPartnerTruckAssetFormValues });
      notifySuccess("Partner truck request sent. We'll be in touch soon.");
      onClose();
    } catch (err) {
      const apiMessage = getAxiosErrorMessage(
        err,
        "Unable to submit partner truck request right now."
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
      title="Onboard Truck Asset"
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
            placeholder="Enter Full name"
            aria-invalid={Boolean(errors.fullName)}
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
          ) : null}
        </div>
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
        <div>
          <RequestFormInput
            placeholder="Enter Company Address"
            aria-invalid={Boolean(errors.companyAddress)}
            {...register("companyAddress")}
          />
          {errors.companyAddress ? (
            <p className="mt-1 text-xs text-red-600">{errors.companyAddress.message}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Fleet Information
      </p>
      <div className="mt-5 grid gap-6 md:grid-cols-2 md:gap-8">
        <div>
          <RequestFormSelect
            defaultValue=""
            aria-invalid={Boolean(errors.numberOfTrucks)}
            {...register("numberOfTrucks")}
          >
            <option value="" disabled>
              Select Number of Trucks
            </option>
            {NUMBER_OF_TRUCKS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </RequestFormSelect>
          {errors.numberOfTrucks ? (
            <p className="mt-1 text-xs text-red-600">{errors.numberOfTrucks.message}</p>
          ) : null}
        </div>
        <PartnerTruckTypesField control={control} errors={errors} />
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Operating Locations
      </p>
      <div className="mt-5">
        <PartnerTruckOperatingStatesField control={control} errors={errors} />
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Business Legitimacy
      </p>
      <div className="mt-5 grid gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <p className="text-[14px] font-[300] text-[#607481]">
            Is your business registered?
          </p>
          <div className="mt-3 flex flex-wrap gap-x-10 gap-y-3 text-[14px] font-[300] text-[#607481]">
            <label className="inline-flex items-center gap-3">
              <input type="radio" value="yes" {...register("isBusinessRegistered")} />
              Yes
            </label>
            <label className="inline-flex items-center gap-3">
              <input type="radio" value="no" {...register("isBusinessRegistered")} />
              No
            </label>
          </div>
          {errors.isBusinessRegistered ? (
            <p className="mt-1 text-xs text-red-600">{errors.isBusinessRegistered.message}</p>
          ) : null}
        </div>
        <div>
          <p className="text-[14px] font-[300] text-[#607481]">
            How soon can you start taking trips?
          </p>
          <div className="mt-3 flex flex-col gap-3 text-[14px] font-[300] text-[#607481]">
            <label className="inline-flex items-center gap-3">
              <input type="radio" value="immediately" {...register("startTakingTrips")} />
              Immediately
            </label>
            <label className="inline-flex items-center gap-3">
              <input type="radio" value="within-a-week" {...register("startTakingTrips")} />
              Within a week
            </label>
            <label className="inline-flex items-center gap-3">
              <input type="radio" value="just-exploring" {...register("startTakingTrips")} />
              Just exploring
            </label>
          </div>
          {errors.startTakingTrips ? (
            <p className="mt-1 text-xs text-red-600">{errors.startTakingTrips.message}</p>
          ) : null}
        </div>
      </div>
    </RequestFormModal>
  );
}
