"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollMouseIcon } from "@/components/scroll-mouse-icon";

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutPageHero() {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto w-full max-w-7xl px-6 pb-10 pt-14 md:pb-14 md:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: EASE }}
          className="max-w-5xl text-4xl font-medium leading-tight text-haul-navy md:text-5xl lg:text-[45px] lg:leading-[1.1]"
        >
          We are focused on redefining the future of haulage in Africa.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.12, ease: EASE }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:mt-6 md:text-[15px] md:leading-relaxed lg:max-w-[55%] text=[#1C4863"
        >
          We are a focused team of dynamic and passionate individuals driven by
          a vision to provide the best digital-based haulage and logistics
          solution in Africa.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.015 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.18, ease: EASE }}
        className="w-full overflow-hidden"
      >
        <div
          className="relative mx-auto w-full max-w-7xl"
          style={{ aspectRatio: "1264 / 518" }}
        >
          <Image
            src="/about-hero.svg"
            alt="Aerial view of haulage and vehicles on a bridge over water"
            fill
            priority
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute bottom-6 left-6 text-white md:bottom-10 md:left-10">
            <ScrollMouseIcon className="text-white" />
            <p className="mt-2 text-xs font-light tracking-wide text-white/95 md:text-[12px]">
              Scroll Down to Explore
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
