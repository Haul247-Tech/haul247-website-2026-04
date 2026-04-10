"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { getAxiosErrorMessage } from "@/lib/api-client";
import {
  buildContactDetailedPayload,
  CONTACT_CATEGORY_OPTIONS,
  contactDetailedFormSchema,
  defaultContactDetailedFormValues,
  submitContactDetailedRequest,
  type ContactDetailedFormValues
} from "@/lib/forms/contact";
import { sanitizePhoneInput } from "@/lib/forms/phone";
import { notifyError, notifySuccess } from "@/lib/notify";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";

export function ContactForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactDetailedFormValues>({
    resolver: zodResolver(contactDetailedFormSchema),
    defaultValues: { ...defaultContactDetailedFormValues }
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const payload = buildContactDetailedPayload(values);
      await submitContactDetailedRequest(payload);
      reset({ ...defaultContactDetailedFormValues });
      notifySuccess("Message sent. We'll get back to you soon.");
    } catch (err) {
      const apiMessage = getAxiosErrorMessage(
        err,
        "Unable to send your message right now."
      );
      if (apiMessage !== null) {
        notifyError(apiMessage);
        return;
      }
      notifyError("Network error. Please check your connection and try again.");
    }
  });

  const fieldClass =
    "w-full border-0 border-b border-slate-400 bg-transparent px-0 pb-3 pt-1 text-base text-[#1C4863] outline-none transition focus:border-haul-navy placeholder:text-slate-500";

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      onSubmit={(event) => {
        void onSubmit(event);
      }}
      className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-y-10 bg-[#F7F7F7] px-8 py-12 md:px-14 md:py-16"
    >
      <h2 className="text-4xl font-medium text-[#1B3B52] md:text-[25px]">
        Write a message to us
      </h2>

      <label className="grid gap-2">
        <span className="text-sm text-[#1C4863]">Select Message Category</span>
        <select
          {...register("category")}
          className={fieldClass}
          defaultValue=""
          aria-invalid={Boolean(errors.category)}
        >
          <option value="" disabled>
            Select category
          </option>
          {CONTACT_CATEGORY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.category ? (
          <p className="text-sm text-red-500">{errors.category.message}</p>
        ) : null}
      </label>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-9">
        <label className="grid gap-2">
          <span className="text-sm text-slate-600">First Name</span>
          <input
            {...register("firstName")}
            className={fieldClass}
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
          />
          {errors.firstName ? (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          ) : null}
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-slate-600">Last Name</span>
          <input
            {...register("lastName")}
            className={fieldClass}
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
          />
          {errors.lastName ? (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          ) : null}
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-slate-600">Email Address</span>
          <input
            {...register("email")}
            className={fieldClass}
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          ) : null}
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-slate-600">Phone No.</span>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <input
                className={fieldClass}
                inputMode="tel"
                autoComplete="tel"
                placeholder="+2348012345678"
                aria-invalid={Boolean(errors.phone)}
                value={field.value}
                onBlur={field.onBlur}
                onChange={(event) => field.onChange(sanitizePhoneInput(event.target.value))}
              />
            )}
          />
          {errors.phone ? (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          ) : null}
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm text-slate-600">Company Name (Optional)</span>
        <input
          {...register("companyName")}
          className={fieldClass}
          autoComplete="organization"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm text-slate-600">Your Message</span>
        <textarea
          {...register("message")}
          rows={3}
          className={`${fieldClass} resize-none`}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        ) : null}
      </label>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-[50px] min-w-[190px] items-center justify-between bg-haul-navy px-6 text-sm font-semibold text-white transition hover:bg-haul-menu disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send Message"}
          <span aria-hidden className="text-xl leading-none">
            →
          </span>
        </button>
      </div>
    </motion.form>
  );
}
