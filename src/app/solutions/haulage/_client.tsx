"use client";

import { AboutOperationalPhilosophySection } from "@/components/aboutPageComponent";
import { AnimateBtn } from "@/components/animate-btn";
import { TruckRequestFormModal } from "@/components/request-form/truck-request-form-modal";
import { ScrollFadeInView } from "@/components/scroll-fade-in-view";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const workCards = [
  {
    title: "Access to Vetted Truck Network",
    body: "We deploy trucks from a network of verified partners, ensuring reliability and suitability for different cargo types.",
    dark: true,
  },
  {
    title: "Real-Time Shipment Visibility",
    body: "All movements are supported by real-time tracking, giving clients clear visibility into the location and progress of their consignments.",
    dark: false,
  },
  {
    title: "Controlled Dispatch & Monitoring",
    body: "Shipments are coordinated through structured processes with ongoing oversight to maintain efficiency and reduce delays.",
    dark: false,
  },
  {
    title: "Secure Handling & Insurance Coverage",
    body: "Goods are handled under defined standards, with insurance coverage in place to protect consignments throughout transit.",
    dark: true,
  },
];

export default function HaulageClient() {
  const [isTruckRequestOpen, setIsTruckRequestOpen] = useState(false);

  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: EASE }}
          className="text-4xl font-medium text-[#1B3B52] md:text-[45px]"
        >
          Haulage Services
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.08, ease: EASE }}
          className="mt-8 text-3xl font-medium text-[#1B3B52] md:text-[18px]"
        >
          Structured Haulage, Delivered with Control
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.14, ease: EASE }}
          className="mt-6 text-xl leading-relaxed text-[#1C4863] md:text-[15px] md:leading-[1.4] font-[300]"
        >
          We provide reliable haulage through a coordinated network of vetted
          trucks, supported by real-time visibility, defined operational
          standards, and consistent execution from dispatch to delivery. Our
          haulage service connects businesses to a structured network of trucks
          deployed based on demand requirements. Each movement is coordinated
          through defined processes that ensure clarity, accountability, and
          timely execution. From single shipments to ongoing operations, we
          provide consistent capacity aligned with business needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: EASE }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <AnimateBtn
            onClick={() => setIsTruckRequestOpen(true)}
            borderColor="#21445B"
            color="#21445B"
            hoverColor="#ffffff"
            activeColor="#ffffff"
            hoverBgColor="#21445B"
          >
            Request For Truck Today
          </AnimateBtn>
          <AnimateBtn
            href="/contact"
            borderColor="#21445B"
            color="#21445B"
            hoverColor="#ffffff"
            activeColor="#ffffff"
            hoverBgColor="#21445B"
          >
            Speak to an Advisor
          </AnimateBtn>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative h-[190px] w-full overflow-hidden md:h-[240px]"
      >
        <Image
          src="/images/hu02.jpg"
          alt="Trucks operating on a highway"
          fill
          priority
          quality={92}
          className="object-cover"
          sizes="100vw"
        />
      </motion.section>

      <section className="bg-[#091822] py-16 text-white md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: EASE }}
            className="text-center text-5xl font-medium text-[#738996] md:text-[45px]"
          >
            How It Works
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
            className="mt-6 text-center text-3xl font-medium md:text-[18px]"
          >
            Structured Haulage, Delivered with Control
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.14, ease: EASE }}
            className="mx-auto mt-6 max-w-5xl text-center text-lg leading-relaxed text-slate-300 md:text-[15px] md:leading-[1.45] font-[300]"
          >
            We provide reliable haulage through a coordinated network of vetted
            trucks, supported by real-time visibility, defined operational
            standards, and consistent execution from dispatch to delivery. Our
            haulage service connects businesses to a structured network of
            trucks deployed based on demand requirements.
          </motion.p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 md:gap-7">
            {workCards.map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.65, ease: EASE, delay: i * 0.1 }}
                className={`p-8 md:p-9 ${
                  card.dark ? "bg-haul-navy text-white" : "bg-slate-600 text-white"
                }`}
              >
                <p className="text-2xl font-medium md:text-[18px]">{card.title}</p>
                <p className="mt-4 text-lg leading-relaxed text-slate-100 md:text-[15px] md:leading-[1.4] font-[300]">
                  {card.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.72, ease: EASE }}
            className="px-6 py-12 md:px-10 md:py-16 md:pl-[140px]"
          >
            <h2 className="text-4xl font-medium text-[#1B3B52] md:text-[45px] leading-tight">
              Move Goods with Confidence
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-600 md:text-[15px] md:leading-[1.4] font-[300]">
              With structured operations, real-time visibility, and a reliable
              network of trucks, we provide haulage services businesses can
              depend on for consistent and efficient delivery.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <AnimateBtn
                href="/contact"
                borderColor="#21445B"
                color="#21445B"
                hoverColor="#ffffff"
                activeColor="#ffffff"
                hoverBgColor="#21445B"
              >
                Speak to an Advisor
              </AnimateBtn>
              <Link
                href="/solutions#warehousing"
                className="text-xl underline md:text-[15px] font-[300]"
              >
                Discover about Warehouse
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="relative min-h-[300px] overflow-hidden md:min-h-[420px] haul-img-zoom"
          >
            <Image
              src="/images/hu01.jpg"
              alt="Haulage truck convoy on highway"
              fill
              quality={90}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      <ScrollFadeInView delay={0.13}>
        <AboutOperationalPhilosophySection />
      </ScrollFadeInView>

      <TruckRequestFormModal
        isOpen={isTruckRequestOpen}
        onClose={() => setIsTruckRequestOpen(false)}
      />
    </main>
  );
}
