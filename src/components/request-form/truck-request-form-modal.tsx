"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { apiClient, getAxiosErrorMessage } from "@/lib/api-client";
import { notifyError, notifySuccess } from "@/lib/notify";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { RequestFormInput } from "./request-form-input";
import { RequestFormModal } from "./request-form-modal";
import { RequestFormSelect } from "./request-form-select";

const truckRequestSchema = z.object({
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
  moveType: z.string().trim().min(1, "Move type is required."),
  monthlyVolume: z.string().trim().min(1, "Monthly volume is required."),
  primaryRoute: z.string().trim().min(1, "Primary route is required."),
  urgency: z.string().trim().min(1, "Select urgency.")
});

type TruckRequestValues = z.infer<typeof truckRequestSchema>;

type TruckRequestFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function sanitizePhoneInput(value: string) {
  const trimmed = value.trim();
  const keepPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "").slice(0, 15);
  return keepPlus ? `+${digits}` : digits;
}

export function TruckRequestFormModal({
  isOpen,
  onClose
}: TruckRequestFormModalProps) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<TruckRequestValues>({
    resolver: zodResolver(truckRequestSchema),
    defaultValues: {
      clientName: "",
      contactPersonName: "",
      contactPersonEmail: "",
      phone: "",
      moveType: "",
      monthlyVolume: "",
      primaryRoute: "",
      urgency: "immediately"
    }
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const payload = {
        clientName: values.clientName.trim(),
        contactPersonName: values.contactPersonName.trim(),
        contactPersonEmail: values.contactPersonEmail.trim(),
        phone: sanitizePhoneInput(values.phone),
        moveType: values.moveType.trim(),
        monthlyVolume: values.monthlyVolume.trim(),
        primaryRoute: values.primaryRoute.trim(),
        urgency: values.urgency.trim()
      };

      await apiClient.post("/onboarding/truck-request", payload);

      reset({
        clientName: "",
        contactPersonName: "",
        contactPersonEmail: "",
        phone: "",
        moveType: "",
        monthlyVolume: "",
        primaryRoute: "",
        urgency: "immediately"
      });
      notifySuccess("Truck request sent. We'll be in touch soon.");
      onClose();
    } catch (err) {
      const apiMessage = getAxiosErrorMessage(
        err,
        "Unable to submit truck request right now."
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
      title="Truck Request Form"
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
            placeholder="Enter Client Name"
            aria-invalid={Boolean(errors.clientName)}
            {...register("clientName")}
          />
          {errors.clientName ? (
            <p className="mt-1 text-xs text-red-600">{errors.clientName.message}</p>
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
            placeholder="Contact Person Email"
            aria-invalid={Boolean(errors.contactPersonEmail)}
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
        Consignment Info
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-8">
        <div>
          <RequestFormSelect
            defaultValue=""
            aria-invalid={Boolean(errors.moveType)}
            {...register("moveType")}
          >
            <option value="" disabled>
              What do you want to move?
            </option>
            <option value="dry-cargo">Dry Cargo</option>
            <option value="containerized-goods">Containerized Goods</option>
            <option value="bulk-materials">Bulk Materials</option>
          </RequestFormSelect>
          {errors.moveType ? (
            <p className="mt-1 text-xs text-red-600">{errors.moveType.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormSelect
            defaultValue=""
            aria-invalid={Boolean(errors.monthlyVolume)}
            {...register("monthlyVolume")}
          >
            <option value="" disabled>
              Est. Monthly Volume E.g 50 tons
            </option>
            <option value="under-10-tons">Under 10 tons</option>
            <option value="10-50-tons">10 - 50 tons</option>
            <option value="above-50-tons">50+ tons</option>
          </RequestFormSelect>
          {errors.monthlyVolume ? (
            <p className="mt-1 text-xs text-red-600">{errors.monthlyVolume.message}</p>
          ) : null}
        </div>
        <div>
          <RequestFormSelect
            defaultValue=""
            aria-invalid={Boolean(errors.primaryRoute)}
            {...register("primaryRoute")}
          >
            <option value="" disabled>
              Select Primary Route
            </option>
            <option value="lagos-ibadan">Lagos - Ibadan</option>
            <option value="apapa-kano">Apapa - Kano</option>
            <option value="portharcourt-aba">Port Harcourt - Aba</option>
          </RequestFormSelect>
          {errors.primaryRoute ? (
            <p className="mt-1 text-xs text-red-600">{errors.primaryRoute.message}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-8 text-[14px] font-[500] leading-tight text-[#1C4863]">
        Operation Urgency
      </p>
      <p className="mt-3 text-[14px] font-[300] text-[#607481]">
        How soon do you need this service?
      </p>
      <div className="mt-4 flex flex-wrap gap-x-10 gap-y-3 text-[14px] font-[300] text-[#607481]">
        <label className="inline-flex items-center gap-3">
          <input type="radio" value="immediately" {...register("urgency")} />
          Immediately
        </label>
        <label className="inline-flex items-center gap-3">
          <input type="radio" value="within-a-week" {...register("urgency")} />
          Within a week
        </label>
        <label className="inline-flex items-center gap-3">
          <input type="radio" value="just-exploring" {...register("urgency")} />
          Just exploring
        </label>
      </div>
      {errors.urgency ? (
        <p className="mt-1 text-xs text-red-600">{errors.urgency.message}</p>
      ) : null}

    </RequestFormModal>
  );
}
