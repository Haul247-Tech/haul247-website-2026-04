"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const team = [
  {
    image: "/team-sehinde-afolayan.svg",
    name: "Sehinde Afolayan",
    role: "Co-Founder, CEO",
    alt: "Sehinde Afolayan, Co-Founder and CEO"
  },
  {
    image: "/team-akindele-phillips.svg",
    name: "Akindele Phillips",
    role: "Co-Founder, CFO",
    alt: "Akindele Phillips, Co-Founder and CFO"
  },
  {
    image: "/team-tobi-obasa.svg",
    name: "Tobi Obasa",
    role: "Co-Founder, CTO",
    alt: "Tobi Obasa, Co-Founder and CTO"
  }
];

export function AboutSuperTeamSection() {
  return (
    <section className="bg-white py-14 text-slate-900 md:py-20 pt-1">
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center text-3xl font-medium text-[#2D4356] md:text-[45px]"
        >
          The Super Team
        </motion.h2>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-10">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.12 }}
              className="flex flex-col items-start"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-slate-100 haul-img-zoom">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  unoptimized
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mt-5 text-lg font-medium text-[#2D4356] md:text-[25px]">
                {member.name}
              </p>
              <p className="mt-1 text-sm text-slate-500 md:text-[15px] font-light">
                {member.role}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
