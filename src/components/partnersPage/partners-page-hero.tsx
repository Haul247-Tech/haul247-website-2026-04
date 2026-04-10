 "use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimateBtn } from "../animate-btn";
import { ScrollMouseIcon } from "@/components/scroll-mouse-icon";

export function PartnersPageHero() {
  const prefersReducedMotion = useReducedMotion();
  const introRef = useRef<HTMLDivElement>(null);
  const seaSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: introScrollProgress } = useScroll({
    target: introRef,
    offset: ["start 85%", "end 20%"]
  });
  const { scrollYProgress } = useScroll({
    target: seaSectionRef,
    offset: ["start end", "end start"]
  });
  const introOpacity = useTransform(introScrollProgress, [0, 0.16, 0.62, 1], [0, 1, 1, 0]);
  const ctaOpacity = useTransform(introScrollProgress, [0.08, 0.22, 0.72, 1], [0, 1, 1, 0]);
  const seaWidth = useTransform(scrollYProgress, [0, 0.55], ["80vw", "100vw"]);

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div ref={introRef}>
          <motion.h1
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            style={prefersReducedMotion ? undefined : { opacity: introOpacity }}
            className="max-w-5xl text-4xl font-bold leading-tight text-haul-navy md:text-5xl lg:text-[45px]"
          >
            Operate Within Structured Demand
          </motion.h1>
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={prefersReducedMotion ? undefined : { opacity: introOpacity }}
            className="mt-5 max-w-4xl text-xl leading-relaxed text-slate-600 md:text-[25px] md:leading-[1.45]"
          >
            Integrate your trucks or warehouse assets into a professionally
            managed logistics network built on defined standards, real enterprise
            demand, and measurable performance.
          </motion.p>
        </div>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          style={prefersReducedMotion ? undefined : { opacity: ctaOpacity }}
          className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:gap-0"
        >
          <AnimateBtn
            href={"#asset-selection"}
            // fullWidth
            borderColor="#21445B"
            color="#21445B"
            hoverColor="#ffffff"
            activeColor="#ffffff"
            hoverBgColor="#21445B"
          >
            Partner Your Asset
          </AnimateBtn>

          <span
            className="mx-4 hidden h-10 w-px bg-haul-navy/50 md:block"
            aria-hidden
          />
          <AnimateBtn
            href={"#asset-selection"}
            // fullWidth
            borderColor="#21445B"
            color="#21445B"
            hoverColor="#ffffff"
            activeColor="#ffffff"
            hoverBgColor="#21445B"
          >
            Speak to Our Operations Team
          </AnimateBtn>
        </motion.div>
      </div>

      <motion.div
        ref={seaSectionRef}
        style={prefersReducedMotion ? undefined : { width: seaWidth }}
        className="relative mx-auto mt-12 h-[507px] w-[80vw] overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/seaImg.png"
            alt="Container ship at sea"
            fill
            priority
            className="object-cover will-change-transform"
            sizes="100vw"
          />
        </div>
        <div className="pointer-events-none absolute bottom-8 left-6 text-white md:bottom-12 md:left-12">
        <ScrollMouseIcon className="text-white" />
          <p className="mt-2 text-xs text-white/90 md:text-sm">
            Scroll Down to Explore
          </p>
        </div>
      </motion.div>
    </section>
  );
}
