import Image from "next/image";

export function BuiltForAssetOwners() {
  return (
    <section id="asset-selection" className="bg-white py-14 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="inline-block">
          <h2 className="text-4xl font-medium text-[#1B3B52] md:text-[45px]">
            Built for Asset Owners
          </h2>
          <div className="mt-4 h-px w-full bg-[#1C4863]" />
        </div>
        <p className="mt-6 max-w-5xl text-xl font-light leading-relaxed text-[#1C4863] md:text-[25px] md:leading-[1.45]">
          We work with truck owners and warehouse operators who want structured
          utilization and long-term operational stability. Partners are
          integrated into a coordinated system designed for consistent
          deployment, transparent performance tracking, and defined service
          standards.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/partners-asset-trucks.png"
              alt="Fleet of trucks in structured logistics operation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/partners-asset-warehouse.png"
              alt="Warehouse with organized inventory aisles"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
