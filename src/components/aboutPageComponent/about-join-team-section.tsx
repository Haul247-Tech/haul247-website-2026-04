import Link from "next/link";
import { AnimateBtn } from "../animate-btn";

export function AboutJoinTeamSection() {
  return (
    <section className="bg-white  text-left text-slate-9004">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24 border-t border-slate-200">
        <div className="max-w-xl md:max-w-[36rem]">
          <h2 className="text-3xl font-medium leading-tight text-[#1B3B52] md:text-[45px]">
            Join our amazing Team
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#666666] md:text-[15px] font-light">
            We believe it takes great people to make a great product. That&apos;s
            why we hire not only the perfect professional fits, but people who
            embody our company values and vision for transforming Africa.
          </p>
          <AnimateBtn
            href={"/contact"}
            borderColor="#21445B"
            color="#21445B"
            hoverColor="#ffffff"
            activeColor="#ffffff"
            hoverBgColor="#21445B"
            className="mt-10 min-h-[44px]lg:min-w-[222px]"
          >
            Speak to an Advisor
          </AnimateBtn>
          {/* <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-[#1B3B52] px-7 py-2.5 text-sm font-medium text-white transition hover:bg-[#163347]"
          >
            See open positions
            <span aria-hidden className="text-base leading-none">
              →
            </span>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
