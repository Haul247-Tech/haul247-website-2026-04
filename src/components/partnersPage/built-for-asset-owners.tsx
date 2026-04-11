"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

export function BuiltForAssetOwners() {
  return (
    <section id="asset-selection" className="bg-white py-14 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.72, ease: EASE }}
          className="inline-block"
        >
          <h2 className="text-4xl font-medium text-[#1B3B52] md:text-[45px]">
            Built for Asset Owners
          </h2>
          <div className="mt-4 h-px w-full bg-[#1C4863]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.72, delay: 0.1, ease: EASE }}
          className="mt-6 max-w-5xl text-xl font-light leading-relaxed text-[#1C4863] md:text-[25px] md:leading-[1.45]"
        >
          We work with truck owners and warehouse operators who want structured
          utilization and long-term operational stability. Partners are
          integrated into a coordinated system designed for consistent
          deployment, transparent performance tracking, and defined service
          standards.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative aspect-square w-full overflow-hidden haul-img-zoom"
          >
            <Image
              src="/partners-asset-trucks.png"
              alt="Fleet of trucks in structured logistics operation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="relative aspect-square w-full overflow-hidden haul-img-zoom"
          >
            <Image
              src="/partners-asset-warehouse.png"
              alt="Warehouse with organized inventory aisles"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
