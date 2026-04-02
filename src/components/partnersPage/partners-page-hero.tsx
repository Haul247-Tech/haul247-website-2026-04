import Image from "next/image";
import Link from "next/link";
import { AnimateBtn } from "../animate-btn";
import { ScrollMouseIcon } from "@/components/scroll-mouse-icon";

export function PartnersPageHero() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h1 className="max-w-5xl text-4xl font-bold leading-tight text-haul-navy md:text-5xl lg:text-[45px]">
          Operate Within Structured Demand
        </h1>
        <p className="mt-5 max-w-4xl text-xl leading-relaxed text-slate-600 md:text-[25px] md:leading-[1.45]">
          Integrate your trucks or warehouse assets into a professionally
          managed logistics network built on defined standards, real enterprise
          demand, and measurable performance.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
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
        </div>
      </div>

      <div className="relative mt-12 h-[507px] w-full overflow-hidden">
        <Image
          src="/images/seaImg.png"
          alt="Container ship at sea"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute bottom-8 left-6 text-white md:bottom-12 md:left-12">
        <ScrollMouseIcon className="text-white" />
          <p className="mt-2 text-xs text-white/90 md:text-sm">
            Scroll Down to Explore
          </p>
        </div>
      </div>
    </section>
  );
}
