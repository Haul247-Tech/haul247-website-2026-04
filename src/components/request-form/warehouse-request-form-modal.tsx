"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { apiClient, getAxiosErrorMessage } from "@/lib/api-client";
import { notifyError, notifySuccess } from "@/lib/notify";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { RequestFormInput } from "./request-form-input";
import { RequestFormModal } from "./request-form-modal";
import { RequestFormSelect } from "./request-form-select";

const warehouseRequestSchema = z.object({
  clientName: z.string().trim().min(1, "Client name is required."),
  contactPersonName: z.string().trim().min(1, "Contact person name is required."),
  contactPersonEmail: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .regex(/^\+?[1-9]\d{9,14}$/, "Use a valid phone format (e.g. +2348012345678)."),
  whatToStore: z.string().trim().min(1, "Select what to store."),
  preferredLocation: z.string().trim().min(1, "Preferred location is required."),
  storageDuration: z.string().trim().min(1, "Storage duration is required."),
  estimatedSqm: z.string().trim().min(1, "Estimated sqm is required."),
  packagingType: z.string().trim().min(1, "Packaging type is required."),
  preferredState: z.string().trim().min(1, "Preferred state is required."),
  preferredCity: z.string().trim().min(1, "Preferred city is required."),
  startDate: z.string().trim().min(1, "Start date is required."),
  endDate: z.string().trim().min(1, "End date is required."),
  preferredNeeds: z.string().trim().min(1, "Preferred needs is required."),
  budgetRange: z.string().trim().min(1, "Budget range is required."),
  notes: z.string().trim().min(1, "Notes are required.")
});

type WarehouseRequestValues = z.infer<typeof warehouseRequestSchema>;

type WarehouseRequestFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function sanitizePhoneInput(value: string) {
  const trimmed = value.trim();
  const keepPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "").slice(0, 15);
  return keepPlus ? `+${digits}` : digits;
}

export function WarehouseRequestFormModal({
  isOpen,
  onClose
}: WarehouseRequestFormModalProps) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<WarehouseRequestValues>({
    resolver: zodResolver(warehouseRequestSchema),
    defaultValues: {
      clientName: "",
      contactPersonName: "",
      contactPersonEmail: "",
      phone: "",
      whatToStore: "",
      preferredLocation: "",
      storageDuration: "",
      estimatedSqm: "",
      packagingType: "",
      preferredState: "",
      preferredCity: "",
      startDate: "",
      endDate: "",
      preferredNeeds: "",
      budgetRange: "",
      notes: ""
    }
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const payload = {
        clientName: values.clientName.trim(),
        contactPersonName: values.contactPersonName.trim(),
        contactPersonEmail: values.contactPersonEmail.trim(),
        phone: sanitizePhoneInput(values.phone),
        whatToStore: values.whatToStore.trim(),
        preferredLocation: values.preferredLocation.trim(),
        storageDuration: values.storageDuration.trim(),
        estimatedSqm: values.estimatedSqm.trim(),
        packagingType: values.packagingType.trim(),
        preferredState: values.preferredState.trim(),
        preferredCity: values.preferredCity.trim(),
        startDate: values.startDate.trim(),
        endDate: values.endDate.trim(),
        preferredNeeds: values.preferredNeeds.trim(),
        budgetRange: values.budgetRange.trim(),
        notes: values.notes.trim()
      };

      await apiClient.post("/onboarding/warehouse-request", payload);

      reset();
      notifySuccess("Warehouse request sent. We'll be in touch soon.");
      onClose();
    } catch (err) {
      const apiMessage = getAxiosErrorMessage(
        err,
        "Unable to submit warehouse request right now."
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
      title="Warehouse Request Form"
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
          <RequestFormInput placeholder="Enter Client Name" {...register("clientName")} />
          {errors.clientName ? (
            <p className="mt-1 text-xs text-red-600">{errors.clientName.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormInput
            placeholder="Enter Contact Person Name"
            {...register("contactPersonName")}
          />
          {errors.contactPersonName ? (
            <p className="mt-1 text-xs text-red-600">{errors.contactPersonName.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormInput
            type="email"
            placeholder="Enter Contact Person Email"
            {...register("contactPersonEmail")}
          />
          {errors.contactPersonEmail ? (
            <p className="mt-1 text-xs text-red-600">{errors.contactPersonEmail.message}</p>
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
                value={field.value}
                onBlur={field.onBlur}
                onChange={(event) => field.onChange(sanitizePhoneInput(event.target.value))}
              />
            )}
          />
          {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Storage Requirement
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-8">
        <div>
          <RequestFormSelect defaultValue="" {...register("whatToStore")}>
            <option value="" disabled>
              What do you want to store
            </option>
            <option value="finished-goods">Finished Goods</option>
            <option value="raw-materials">Raw Materials</option>
            <option value="temperature-controlled-items">Temperature Controlled Items</option>
          </RequestFormSelect>
          {errors.whatToStore ? (
            <p className="mt-1 text-xs text-red-600">{errors.whatToStore.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormSelect defaultValue="" {...register("preferredLocation")}>
            <option value="" disabled>
              Select Preferred Location
            </option>
            <option value="lagos">Lagos</option>
            <option value="port-harcourt">Port Harcourt</option>
            <option value="abuja">Abuja</option>
          </RequestFormSelect>
          {errors.preferredLocation ? (
            <p className="mt-1 text-xs text-red-600">{errors.preferredLocation.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormInput placeholder="Enter Storage Duration" {...register("storageDuration")} />
          {errors.storageDuration ? (
            <p className="mt-1 text-xs text-red-600">{errors.storageDuration.message}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Space Requirement
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-8">
        <div>
          <RequestFormInput placeholder="Enter Estimated sqm" {...register("estimatedSqm")} />
          {errors.estimatedSqm ? (
            <p className="mt-1 text-xs text-red-600">{errors.estimatedSqm.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormSelect defaultValue="" {...register("packagingType")}>
            <option value="" disabled>
              Select Packaging type
            </option>
            <option value="palletized">Palletized</option>
            <option value="boxes-cartons">Boxes / Cartons</option>
            <option value="loose-cargo">Loose Cargo</option>
          </RequestFormSelect>
          {errors.packagingType ? (
            <p className="mt-1 text-xs text-red-600">{errors.packagingType.message}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Location Preference
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-8">
        <div>
          <RequestFormSelect defaultValue="" {...register("preferredState")}>
            <option value="" disabled>
              Select Preferred State
            </option>
            <option value="lagos">Lagos</option>
            <option value="ogun">Ogun</option>
            <option value="rivers">Rivers</option>
          </RequestFormSelect>
          {errors.preferredState ? (
            <p className="mt-1 text-xs text-red-600">{errors.preferredState.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormInput placeholder="Enter Preferred City" {...register("preferredCity")} />
          {errors.preferredCity ? (
            <p className="mt-1 text-xs text-red-600">{errors.preferredCity.message}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">Duration</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-8">
        <div>
          <RequestFormInput
            type="date"
            placeholder="Start Date"
            className="[color-scheme:light]"
            {...register("startDate")}
          />
          {errors.startDate ? (
            <p className="mt-1 text-xs text-red-600">{errors.startDate.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormInput
            type="date"
            placeholder="End Date"
            className="[color-scheme:light]"
            {...register("endDate")}
          />
          {errors.endDate ? (
            <p className="mt-1 text-xs text-red-600">{errors.endDate.message}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Operational Needs
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-8">
        <div>
          <RequestFormSelect defaultValue="" {...register("preferredNeeds")}>
            <option value="" disabled>
              Select Preferred needs
            </option>
            <option value="inventory-management">Inventory Management</option>
            <option value="cross-docking">Cross Docking</option>
            <option value="order-fulfillment">Order Fulfillment</option>
          </RequestFormSelect>
          {errors.preferredNeeds ? (
            <p className="mt-1 text-xs text-red-600">{errors.preferredNeeds.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormInput placeholder="Enter Budget Range" {...register("budgetRange")} />
          {errors.budgetRange ? (
            <p className="mt-1 text-xs text-red-600">{errors.budgetRange.message}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">Notes</p>
      <div className="mt-5">
        <textarea
          rows={3}
          className="w-full border-0 border-b border-[#c9ced3] bg-transparent py-2.5 text-[14px] font-[300] text-[#607481] outline-none placeholder:text-[#607481]"
          placeholder="Additional request details"
          {...register("notes")}
        />
        {errors.notes ? <p className="mt-1 text-xs text-red-600">{errors.notes.message}</p> : null}
      </div>

    </RequestFormModal>
  );
}
