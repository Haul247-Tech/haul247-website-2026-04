import Image from "next/image";
import Link from "next/link";
import { AnimateBtn } from "../animate-btn";

const pillars = [
  {
    icon: "/philosophy-standards.svg",
    title: "Built on Defined Operational Standards",
    body: "Our operations are structured around clear processes, measurable performance, and unified oversight. From haulage to warehousing, every activity follows defined standards designed to ensure reliability, accountability, and consistency at scale.",
  },
  {
    icon: "/philosophy-efficiency.svg",
    title: "Designed for Speed and Operational Efficiency",
    body: "We prioritize controlled execution and timely delivery across every engagement. Through coordinated fleet deployment, real-time visibility, and disciplined warehouse management, we reduce friction and maintain operational momentum for our clients.",
  },
  {
    icon: "/philosophy-partners.svg",
    title: "Elevating Partners Assets Through Structured Utilization",
    body: "Truck and warehouse partners operate within a demand-driven system built for stability and performance. By integrating assets under defined standards and transparent processes, we enable consistent utilization and long-term value creation.",
  },
];

function columnClass(index: number) {
  return [
    "flex flex-col items-start px-6 py-10 md:px-8 md:py-12",
    "border-b border-white/15 last:border-b-0",
    "md:border-b-0",
    index < 2 ? "md:border-r md:border-white/15" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function AboutOperationalPhilosophySection() {
  return (
    <section
      className="bg-[#0B1622] py-16 text-white md:py-20"
      aria-labelledby="operational-philosophy-heading"
    >
      <h2 id="operational-philosophy-heading" className="sr-only">
        Operational Philosophy
      </h2>
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {pillars.map((item, index) => (
            <article key={item.title} className={columnClass(index)}>
              <div className="relative mb-8 h-16 w-16 shrink-0 md:h-[142px] md:w-[142px] flex items-center justify-center mx-auto">
                <Image
                  src={item.icon}
                  alt=""
                  fill
                  unoptimized
                  className="object-contain object-center mx-auto"
                />
              </div>
              <h3 className="text-lg font-medium leading-snug text-white md:text-[25px]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-[15px] font-light">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <AnimateBtn
            href="/contact"
            borderColor="#ffffff"
            color="#ffffff"
            hoverColor="#1C4863"
            hoverBgColor="#ffffff"
            className="mt-10 min-h-[44px]  lg:min-w-[222px]"
          >
            Speak to an Advisor
          </AnimateBtn>
        </div>
      </div>
    </section>
  );
}
