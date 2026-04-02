import Image from "next/image";

const steps = [
  { icon: "/partners-how-1.svg", title: "Get Onboarded" },
  { icon: "/partners-how-2.svg", title: "Complete Verification" },
  { icon: "/partners-how-3.svg", title: "Assets Live in Use" }
];

export function HowItWorks() {
  return (
    <section className="bg-[#0B1622] py-16 text-white md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="text-5xl font-medium tracking-tight md:text-[45px]">
          How It Works
        </h2>
        <p className="mt-6 text-3xl font-medium text-slate-400 md:text-[33px] text-[#738996]">
          A Structured Integration Process
        </p>
        <p className="mt-6 max-w-5xl text-sm leading-relaxed text-white md:text-[15px] font-light">
          Every partner asset undergoes a clear onboarding process that aligns
          operational standards, documentation, and performance expectations.
          Once approved, assets are deployed based on demand requirements and
          monitored through coordinated oversight systems.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={[
                "flex flex-col items-center px-6 py-10 text-center md:px-8 md:py-8",
                "border-b border-white/15 last:border-b-0 md:border-b-0",
                index < 2 ? "md:border-r md:border-white/15" : ""
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="relative h-20 w-20 md:h-24 md:w-24">
                <Image
                  src={step.icon}
                  alt=""
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <p className="mt-8 text-2xl font-medium md:text-[25px]">
                {step.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
