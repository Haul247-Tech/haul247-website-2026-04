"use client";

import { motion } from "framer-motion";
import { AnimateBtn } from "@/components/animate-btn";

const EASE = [0.16, 1, 0.3, 1] as const;

const businessActions = [
  { href: "/solutions/haulage", label: "Explore Haulage Services" },
  { href: "/solutions/warehouse", label: "Explore Warehousing Services" },
  { href: "/solutions/port", label: "Explore Port Operations" },
  { href: "/solutions/dedicated", label: "Explore Dedicated Assets" }
];

export function OurBusinesses() {
  return (
    <section id="solutions" className="bg-[#f5f7f9]">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-12 md:py-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="max-w-5xl text-4xl font-medium leading-tight text-haul-navy md:text-[48px]"
        >
          We deliver haulage and warehousing for businesses - and put partner
          assets to work.
        </motion.p>

        <div className="mt-8 grid w-full grid-cols-1 gap-3 md:grid-cols-4 md:items-stretch md:gap-0">
          {businessActions.map((action, index) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.1 + index * 0.08 }}
              className={`min-w-0 ${
                index > 0
                  ? "border-haul-navy/50 md:border-l md:pl-4 lg:pl-6"
                  : ""
              }`}
            >
              <AnimateBtn
                href={action.href}
                fullWidth
                borderColor="#21445B"
                color="#21445B"
                hoverColor="#ffffff"
                activeColor="#ffffff"
                hoverBgColor="#21445B"
              >
                {action.label}
              </AnimateBtn>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
