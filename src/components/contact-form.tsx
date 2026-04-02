"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  category: z.string().min(1, "Please select a category."),
  firstName: z.string().min(2, "Please enter first name."),
  lastName: z.string().min(2, "Please enter last name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  companyName: z.string().optional(),
  message: z.string().min(20, "Message should be at least 20 characters.")
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (values: ContactValues) => {
    console.log("Contact submission payload", values);
    reset();
  };

  const fieldClass =
    "w-full border-0 border-b border-slate-400 bg-transparent px-0 pb-3 pt-1 text-base text-[#1C4863] outline-none transition focus:border-haul-navy placeholder:text-slate-500";

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      onSubmit={handleSubmit(onSubmit)}
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
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="inquiry">General Inquiry</option>
          <option value="support">Support</option>
          <option value="business">Business Engagement</option>
        </select>
        {errors.category && (
          <p className="text-sm text-red-400">{errors.category.message}</p>
        )}
      </label>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-9">
        <label className="grid gap-2">
          <span className="text-sm text-slate-600">First Name</span>
          <input {...register("firstName")} className={fieldClass} />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-slate-600">Last Name</span>
          <input {...register("lastName")} className={fieldClass} />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-slate-600">Email Address</span>
          <input {...register("email")} className={fieldClass} type="email" />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-slate-600">Phone No.</span>
          <input {...register("phone")} className={fieldClass} />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm text-slate-600">Company Name (Optional)</span>
        <input {...register("companyName")} className={fieldClass} />
      </label>

      <label className="grid gap-2">
        <span className="text-sm text-slate-600">Your Message</span>
        <textarea
          {...register("message")}
          rows={3}
          className={`${fieldClass} resize-none`}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </label>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex min-h-[50px] min-w-[190px] items-center justify-between bg-haul-navy px-6 text-sm font-semibold text-white transition hover:bg-haul-menu"
        >
          Send Message
          <span aria-hidden className="text-xl leading-none">
            →
          </span>
        </button>
      </div>

      {isSubmitSuccessful && (
        <p className="text-sm text-emerald-600">Message sent successfully.</p>
      )}
    </motion.form>
  );
}
