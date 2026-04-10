"use client";

import { AboutOperationalPhilosophySection } from "@/components/aboutPageComponent";
import { AnimateBtn } from "@/components/animate-btn";
import { WarehouseRequestFormModal } from "@/components/request-form/warehouse-request-form-modal";
import { ScrollFadeInView } from "@/components/scroll-fade-in-view";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export default function HaulagePage() {
  const [isWarehouseRequestOpen, setIsWarehouseRequestOpen] = useState(false);

  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <h1 className="text-4xl font-medium text-[#1B3B52] md:text-[45px]">
        Warehouse Services
        </h1>
        <h2 className="mt-8 text-3xl font-medium text-[#1B3B52] md:text-[18px]">
          Structured Haulage, Delivered with Control
        </h2>
        <p className="mt-6 text-xl leading-relaxed text-[#1C4863] md:text-[15px] md:leading-[1.4] font-[300]">
          We provide reliable haulage through a coordinated network of vetted
          trucks, supported by real-time visibility, defined operational
          standards, and consistent execution from dispatch to delivery. Our
          haulage service connects businesses to a structured network of trucks
          deployed based on demand requirements. Each movement is coordinated
          through defined processes that ensure clarity, accountability, and
          timely execution. From single shipments to ongoing operations, we
          provide consistent capacity aligned with business needs.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <AnimateBtn
            onClick={() => setIsWarehouseRequestOpen(true)}
            borderColor="#21445B"
            color="#21445B"
            hoverColor="#ffffff"
            activeColor="#ffffff"
            hoverBgColor="#21445B"
            className="min-w-[240px]"
          >
            Request For Warehouse Today
          </AnimateBtn>
          <AnimateBtn
            href={"/contact"}
            borderColor="#21445B"
            color="#21445B"
            hoverColor="#ffffff"
            activeColor="#ffffff"
            hoverBgColor="#21445B"
            className="min-w-[240px]"
          >
            Speak to an Advisor
          </AnimateBtn>
        </div>
      </section>

      <section className="relative h-[190px] w-full overflow-hidden md:h-[240px]">
        <Image
          src="/images/wh01.jpg"
          alt="Trucks operating on a highway"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      <section className="bg-[#091822] py-16 text-white md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-center text-5xl font-medium text-[#738996] md:text-[45px]">
            How It Works
          </h2>
          <h3 className="mt-6 text-center text-3xl font-medium md:text-[18px]">
            Structured Haulage, Delivered with Control
          </h3>
          <p className="mx-auto mt-6 max-w-5xl text-center text-lg leading-relaxed text-slate-300 md:text-[15px] md:leading-[1.45] font-[300]">
            We provide reliable haulage through a coordinated network of vetted
            trucks, supported by real-time visibility, defined operational
            standards, and consistent execution from dispatch to delivery. Our
            haulage service connects businesses to a structured network of
            trucks deployed based on demand requirements.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 md:gap-7">
            {workCards.map((card) => (
              <article
                key={card.title}
                className={`p-8 md:p-9 ${
                  card.dark
                    ? "bg-haul-navy text-white"
                    : "bg-slate-600 text-white"
                }`}
              >
                <p className="text-2xl font-medium md:text-[18px]">
                  {card.title}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-100 md:text-[15px] md:leading-[1.4] font-[300]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full md:grid-cols-2">
          <div className="px-6 py-12 md:px-10 md:py-16 md:pl-[140px]">
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
            href={"/contact"}
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
          </div>

          <div className="relative min-h-[300px] md:min-h-[420px]">
            <Image
              src="/images/wh02.jpg"
              alt="Haulage truck convoy on highway"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      <ScrollFadeInView delay={0.13}>
        <AboutOperationalPhilosophySection />
      </ScrollFadeInView>

      <WarehouseRequestFormModal
        isOpen={isWarehouseRequestOpen}
        onClose={() => setIsWarehouseRequestOpen(false)}
      />
    </main>
  );
}
