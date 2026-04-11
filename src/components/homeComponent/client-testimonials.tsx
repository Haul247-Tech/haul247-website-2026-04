"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// PLACEHOLDER: Replace these with verified customer quotes before launch.
// Each entry needs: direct quote, name, role, company, and one measurable outcome.
const testimonials = [
  {
    quote:
      "Since working with Haul247, our freight delays dropped considerably. The real-time tracking gave our procurement team the visibility we never had through traditional brokers.",
    name: "Head of Logistics",
    company: "Leading FMCG Manufacturer",
    metric: "Significant reduction in freight delays",
  },
  {
    quote:
      "What impressed us most was the consistency. Same-day dispatch confirmations, live GPS updates, and one operations contact. That level of reliability is rare in this market.",
    name: "Supply Chain Director",
    company: "Consumer Goods Company",
    metric: "Consistent 97.99% on-time across all routes",
  },
  {
    quote:
      "Haul247 gave us structured warehousing capacity across Lagos and Kano with unified inventory tracking. We scaled our distribution without adding headcount.",
    name: "Operations Manager",
    company: "Food & Beverage Distributor",
    metric: "Scaled to multiple routes in under 3 months",
  },
];

export function ClientTestimonials() {
  return (
    <section className="bg-[#f5f7f9] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-xs font-semibold uppercase tracking-widest text-[#1C4863]/50"
        >
          Client Results
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
          className="mt-3 max-w-2xl text-4xl font-medium leading-tight text-[#1B3B52] md:text-[45px]"
        >
          What our clients say
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, ease: EASE, delay: index * 0.1 }}
              className="flex flex-col justify-between bg-white p-8 md:p-9"
            >
              <div>
                <p className="text-[32px] font-medium leading-none text-[#1C4863]" aria-hidden>
                  &ldquo;
                </p>
                <p className="mt-2 text-[15px] font-light leading-relaxed text-slate-600">
                  {t.quote}
                </p>
              </div>
              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="text-sm font-medium text-[#1B3B52]">{t.name}</p>
                <p className="mt-1 text-xs font-light text-slate-500">{t.company}</p>
                <p className="mt-3 inline-block border-l-2 border-[#1C4863] pl-3 text-xs font-medium text-[#1C4863]">
                  {t.metric}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
