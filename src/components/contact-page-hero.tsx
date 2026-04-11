"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ContactPageHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-[1600px] md:grid-cols-2">
        <article className="bg-[#071321] px-6 py-12 text-white md:px-10 md:py-16 lg:px-16 lg:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: EASE }}
            className="text-4xl font-medium leading-tight lg:text-[45px]"
          >
            Get In touch With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.1, ease: EASE }}
            className="mt-5 text-xl text-slate-200 md:text-[25px] font-light"
          >
            We are on standby to assist you all the way
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.2, ease: EASE }}
            className="mt-12 grid gap-6 text-sm leading-relaxed text-slate-300 sm:grid-cols-2 md:text-[15px] md:leading-[1.45] font-light"
          >
            <div>
              <p>Call 09010003247</p>
              <p className="mt-2">Email @ service@haul247.co</p>
            </div>
            <div>
              <p>1 Engineering Close,</p>
              <p>Victoria Island 106104,</p>
              <p>Lagos State Us</p>
            </div>
          </motion.div>
        </article>

        <motion.article
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative min-h-[320px] overflow-hidden md:min-h-[560px]"
        >
          <Image
            src="/contact-hero-support.png"
            alt="Support specialist wearing a headset"
            fill
            priority
            quality={92}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.article>
      </div>
      <div className="mx-auto mt-3 w-full max-w-[1600px] border-b border-b-2 border-[#09182299]" />
      <div className="mx-auto mt-2 w-full max-w-[1600px] border-b border-b-2 border-[#09182299]" />
    </section>
  );
}
