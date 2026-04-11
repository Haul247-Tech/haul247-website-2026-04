"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { getAxiosErrorMessage } from "@/lib/api-client";
import {
  buildContactSimplePayload,
  contactSimpleFormSchema,
  defaultContactSimpleFormValues,
  submitContactSimpleRequest,
  type ContactSimpleFormValues
} from "@/lib/forms/contact-simple";
import { notifyError, notifySuccess } from "@/lib/notify";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AnimateBtn } from "../animate-btn";

const EASE = [0.16, 1, 0.3, 1] as const;

const inputClass =
  "w-full border-0 border-b border-white/60 bg-transparent py-2.5 text-sm text-white placeholder:text-white/55 outline-none transition focus:border-white";

export function GetInTouch() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactSimpleFormValues>({
    resolver: zodResolver(contactSimpleFormSchema),
    defaultValues: { ...defaultContactSimpleFormValues }
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const payload = buildContactSimplePayload(values);
      await submitContactSimpleRequest(payload);
      reset({ ...defaultContactSimpleFormValues });
      notifySuccess("Thanks — we'll be in touch soon.");
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

  return (
    <section className="bg-[#ffffff] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 md:py-16  !pt-1">
        <div className="mx-auto grid md:grid-cols-[0.6fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.72, ease: EASE }}
            className="relative min-h-[300px] md:min-h-[620px]"
          >
            <Image
              src="/get-in-touch-support.png"
              alt="Customer support specialist with headset at workstation"
              fill
              quality={90}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.72, delay: 0.1, ease: EASE }}
            className="flex flex-col border-t bg-[#070d18] border-white/15 px-6 py-12 md:border-l md:border-t-0 md:px-10 md:py-14 lg:px-14 lg:py-16"
          >
            <h2 className="text-2xl font-medium leading-tight md:text-3xl lg:text-[26px]">
              Get in touch with us for more information.
            </h2>
            <div className="mt-8 border-b border-white/20" />

            <div className="grid gap-10 md:grid-cols-2 md:items-stretch md:gap-0">
              <div className="h-full pt-10 md:border-r md:border-white/20 md:pr-10">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-[#1C4863] lg:text-[35px]">
                      Call us
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      Our customer support is ready to take you through all your
                      inquiries
                    </p>
                  </div>
                  <AnimateBtn
                    href="tel:09010003247"
                    borderColor="#ffffff"
                    color="#ffffff"
                    hoverColor="#1C4863"
                    hoverBgColor="#ffffff"
                    className="mt-10 min-h-[44px]  lg:min-w-[222px]"
                  >
                    Speak to support
                  </AnimateBtn>
                </div>
              </div>

              <div className="md:pl-10 pt-10">
                <h3 className="text-lg lg:text-[35px] font-semibold text-[#1C4863]">
                  Send a mail
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  You rather send an email? Fill the form below and we&apos;d
                  reach out
                </p>

                <form
                  onSubmit={(event) => {
                    void onSubmit(event);
                  }}
                  className="mt-8 flex flex-col gap-6"
                >
                  <div>
                    <label className="sr-only" htmlFor="git-full-name">
                      Full Name
                    </label>
                    <input
                      id="git-full-name"
                      {...register("fullName")}
                      placeholder="Full Name"
                      className={inputClass}
                      autoComplete="name"
                      aria-invalid={Boolean(errors.fullName)}
                    />
                    {errors.fullName ? (
                      <p className="mt-1 text-xs text-red-300">
                        {errors.fullName.message}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="git-email">
                      Email Address
                    </label>
                    <input
                      id="git-email"
                      type="email"
                      {...register("email")}
                      placeholder="Email Address"
                      className={inputClass}
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email ? (
                      <p className="mt-1 text-xs text-red-300">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="git-message">
                      Your Message
                    </label>
                    <textarea
                      id="git-message"
                      {...register("message")}
                      placeholder="Your Message"
                      rows={4}
                      className={`${inputClass} resize-none`}
                      aria-invalid={Boolean(errors.message)}
                    />
                    {errors.message ? (
                      <p className="mt-1 text-xs text-red-300">
                        {errors.message.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-xs text-white/60">We respond to all enquiries within 1 business day.</p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#1C4863] px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending…" : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
