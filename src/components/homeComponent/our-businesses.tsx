import { AnimateBtn } from "@/components/animate-btn";

const businessActions = [
  { href: "/#haulage", label: "Explore Haulage Services" },
  { href: "/#warehousing", label: "Explore Warehousing Services" },
  { href: "/#port-operations", label: "Explore Port Operations" },
  { href: "/#dedicated-assets", label: "Explore Dedicated Assets" }
];

export function OurBusinesses() {
  return (
    <section id="solutions" className="bg-[#f5f7f9]">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-12 md:py-14">
        <p className="max-w-5xl text-4xl font-medium leading-tight text-haul-navy md:text-[48px]">
          We deliver haulage and warehousing for businesses - and put partner
          assets to work.
        </p>

        <div className="mt-8 grid w-full grid-cols-1 gap-3 md:grid-cols-4 md:items-stretch md:gap-0">
          {businessActions.map((action, index) => (
            <div
              key={action.label}
              className={`min-w-0 ${
                index > 0
                  ? "border-haul-navy/50 md:border-l md:pl-4 lg:pl-6"
                  : ""
              }`}
            >
              <AnimateBtn
                href={action.href}
                fullWidth
                borderColor="#21445B"
                color="#21445B"
                hoverColor="#ffffff"
                activeColor="#ffffff"
                hoverBgColor="#21445B"
              >
                {action.label}
              </AnimateBtn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
