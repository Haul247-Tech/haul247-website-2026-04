const metrics = [
  {
    value: "150,000,000 KM+",
    label: "Distance covered across active operations"
  },
  {
    value: "25,000+ Trips",
    label: "Completed across multiple routes"
  },
  {
    value: "550+ Trucks",
    label: "Integrated within our network"
  },
  {
    value: "70+ Warehouses",
    label: "Under coordinated management"
  },
  {
    value: "97.99% On-Time",
    label: "Delivery performance across operations"
  },
  {
    value: "10+ Industries",
    label: "Supported across logistics needs"
  }
];

function cellClasses(index: number) {
  const topRow = index < 3;
  const rightColumn = index % 3 === 2;

  return [
    "px-5 py-9 text-left md:px-8 md:py-11 lg:px-10",
    "border-b border-white/50 last:border-b-0",
    "md:border-b-0",
    topRow ? " border-b md:border-b md:border-white/50" : "",
    !rightColumn ? "md:border-r md:border-white/50" : ""
  ]
    .filter(Boolean)
    .join(" ");
}

export function AboutOperationalScaleSection() {
  return (
    <section className="bg-[#ffffff] py-14 text-white md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 bg-[#091822]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {metrics.map((item, index) => (
            <article key={item.value} className={cellClasses(index)}>
              <p className="text-2xl font-semibold leading-tight md:text-[30px]">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-[12px] font-light">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
