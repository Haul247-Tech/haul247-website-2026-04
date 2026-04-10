"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sharedDescription =
  "Logistics is more than transportation. Every movement affects inventory flow, retail shelves, production timelines, and customer experience. We operate with that full impact in mind — not just the journey, but the outcome.";

const cards = [
  {
    title: "Real- Time Tracking",
    illustration: "/images/real-time-tracking.png",
    illustrationAlt: "Real-time tracking illustration"
  },
  {
    title: "Insurance Coverage",
    illustration: "/images/insurance-coverage.png",
    illustrationAlt: "Insurance coverage illustration"
  },
  {
    title: "End to End Dashboard",
    illustration: "/images/end-to-end-dashboard.png",
    illustrationAlt: "End to end dashboard illustration"
  }
];

export function IntegratedOperationalSystems() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 md:py-16 !pb-8">
        <h2 className="text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
          Built on Integrated Operational Systems
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
          Our haulage operations are supported by real-time tracking and
          structured oversight. Our warehousing is managed under unified
          standards, aligned to cargo requirements.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group relative flex min-h-0 flex-col overflow-visible"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -left-[4px] -top-[4px] z-20 h-[2px] w-[46%] origin-left scale-x-0 bg-[#1C4863] transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -left-[4px] -top-[4px] z-20 h-[46%] w-[2px] origin-top scale-y-0 bg-[#1C4863] transition-transform duration-500 ease-out group-hover:scale-y-100"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-[4px] -right-[4px] z-20 h-[2px] w-[46%] origin-right scale-x-0 bg-[#1C4863] transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-[4px] -right-[4px] z-20 h-[46%] w-[2px] origin-bottom scale-y-0 bg-[#1C4863] transition-transform duration-500 ease-out group-hover:scale-y-100"
              />
              <div className="flex min-h-[290px] flex-1 items-center justify-center bg-[#1C4863] px-2 py-10">
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={card.illustration}
                    alt={card.illustrationAlt}
                    width={380}
                    height={290}
                    unoptimized
                    className="h-auto max-h-[290px] w-auto max-w-[85%] object-contain"
                  />
                </motion.div>
              </div>
              <div className="flex flex-col bg-[#0C3147] px-6 py-6">
                <h3 className="text-[15px] font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-[12px] font-light leading-relaxed text-slate-300">
                  {sharedDescription}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="h-[42px] w-full flex items-start justify-end">
        
        </div>
        <p className="mt-6 text-[40px] text-[#1C4863] font-medium">Partners Assets</p>
        
      </div>
    </section>
  );
}
