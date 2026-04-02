const advantages = [
  {
    title: "Consistent Demand",
    body: "Access to enterprise clients with structured logistics requirements, reducing idle time and uncertainty.",
    dark: true
  },
  {
    title: "Operational Oversight",
    body: "Defined processes, real-time visibility, and performance monitoring support professional execution.",
    dark: false
  },
  {
    title: "Standards & Accountability",
    body: "Clear service standards ensure assets operate within controlled parameters that protect long-term value.",
    dark: false
  },
  {
    title: "Stability Over Speculation",
    body: "We prioritize structured utilization and sustainable operations - not short-term volume spikes.",
    dark: true
  }
];

export function PartnerAdvantages() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="text-4xl font-medium text-haul-navy md:text-[45px]">
          Partner Advantages
        </h2>
        <div className="mt-6 h-px w-full max-w-[380px] bg-slate-300" />
        <p className="mt-6 text-3xl font-light text-slate-600 md:text-[25px]">
          Why Partners Operate With Us
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          {advantages.map((item) => (
            <article
              key={item.title}
              className={`p-8 md:p-10 ${
                item.dark ? "bg-[#1B3B52] text-white" : "bg-[#F0F0F0] text-[#1C4863]"
              }`}
            >
              <h3
                className={`text-3xl font-medium md:text-[25px] ${
                  item.dark ? "text-white" : "text-[#1C4863]"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-6 text-xl leading-relaxed md:text-[25px] md:leading-[1.4] font-light ${
                  item.dark ? "text-slate-100" : "text-slate-600"
                }`}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
