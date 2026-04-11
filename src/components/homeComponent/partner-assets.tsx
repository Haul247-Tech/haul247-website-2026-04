"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type AssetTab = "trucks" | "warehouse";

export function PartnerAssets() {
  const [asset, setAsset] = useState<AssetTab>("trucks");

  return (
    <section className="group bg-[#1d3e53] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 md:py-20">
        <h2 className=" text-3xl font-medium leading-tight md:text-4xl lg:text-[36px] lg:leading-[1.15]">
          Leveraging your assets with us comes with simplicity and efficiency
          tailored to your growth and business
        </h2>
        <div className="mt-8 border-b border-white/25" />

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-start md:gap-14 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-visible md:aspect-auto md:min-h-[420px]">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-[4px] -top-[4px] z-20 h-[2px] w-[46%] origin-right scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-[4px] -top-[4px] z-20 h-[46%] w-[2px] origin-top scale-y-0 bg-white transition-transform duration-500 ease-out group-hover:scale-y-100"
            />
            <Image
              src="/partner-assets.png"
              alt="Aerial view of intermodal logistics terminal with containers and crane"
              fill
              quality={92}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-1 h-full flex-col justify-between pt-0 md:pt-2">
            <div>
              <h3 className="text-2xl font-medium leading-snug md:text-[45]">
                Simple onboarding. Structured utilization.
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-white/85 md:text-[15px]">
                We integrate partner trucks into an organized logistics network
                built on defined standards and real-time visibility. The result
                is structured utilization and long-term demand stability.
              </p>
              <div className="max-w-[194px]">
                <div className="mt-8 border-b border-white/25" />

                <p className="mt-2 text-xl font-regular md:text-[15px]">
                  Want to partner your assets?
                </p>
              </div>
            </div>
            <div>
              <p className="mt-4 text-sm font-light text-white/70">
                Select your asset
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href="/partners#truck-form"
                  onClick={() => setAsset("trucks")}
                  className={`min-w-[120px] px-6 py-2 text-center text-sm font-light transition-colors duration-200 ${
                    asset === "trucks"
                      ? "bg-white text-[#1d3e53]"
                      : "border border-white bg-transparent text-white hover:bg-white/10"
                  }`}
                >
                  Trucks
                </Link>
                <Link
                  href="/partners#warehouse-form"
                  onClick={() => setAsset("warehouse")}
                  className={`min-w-[120px] px-6 py-2 text-center text-sm font-light transition-colors duration-200 ${
                    asset === "warehouse"
                      ? "bg-white text-[#1d3e53]"
                      : "border border-white bg-transparent text-white hover:bg-white/10"
                  }`}
                >
                  Warehouse
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
