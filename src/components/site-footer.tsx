import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wide text-white/55">
      {children}
    </p>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#1C4863] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 md:py-16 !pb-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="max-w-md shrink-0 lg:w-[36%] max-w-[390px] pr-15">
            <Image
              src="/images/whiteLogo.png"
              alt="Haul247"
              width={284}
              height={174}
              className="h-12 w-auto object-contain object-left md:h-14"
            />
            <p className="mt-6 text-xl font-semibold leading-snug md:text-[28px]">
              Haul247 Innovative Technologies
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white max-w-[340px]">
              Haul247 is Africa&apos;s leading provider of enabling
              infrastructure powering the sourcing and distribution of physical
              goods and commodities.
            </p>
          </div>
          {/* <div className="flex flex-col gap-12 lg:flex-row lg:gap-16"> */}
            <div className="flex flex-col gap-12">
              <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
                <div className="flex flex-col gap-10">
                  <div>
                    <FooterHeading>Connect</FooterHeading>
                    <ul className="mt-4 space-y-3 text-sm">
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white transition hover:text-white"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white transition hover:text-white"
                        >
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white transition hover:text-white"
                        >
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white transition hover:text-white"
                        >
                          LinkedIn
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-10">
                  <div>
                    <FooterHeading>Solutions</FooterHeading>
                    <ul className="mt-4 space-y-3 text-sm">
                      <li>
                        <Link
                          href="/solutions#warehousing"
                          className="text-white transition hover:text-white"
                        >
                          Warehousing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/solutions/haulage"
                          className="text-white transition hover:text-white"
                        >
                          Haulage
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-span-2 flex flex-col gap-10 md:col-span-1">
                  <div>
                    <FooterHeading>Become a Partner</FooterHeading>
                    <ul className="mt-4 space-y-3 text-sm">
                      <li>
                        <Link
                          href="/partners#truck-form"
                          className="text-white transition hover:text-white"
                        >
                          Truck Assets
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/partners#warehouse-form"
                          className="text-white transition hover:text-white"
                        >
                          Warehouse Assets
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
                <div className="flex flex-col gap-10">
                  <div>
                    <FooterHeading>About</FooterHeading>
                    <ul className="mt-4 space-y-3 text-sm">
                      <li>
                        <Link
                          href="/about"
                          className="text-white transition hover:text-white"
                        >
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          className="text-white transition hover:text-white"
                        >
                          Our Impact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-10">
                  <div>
                    <FooterHeading>Support Line</FooterHeading>
                    <ul className="mt-4 space-y-3 text-sm text-white">
                      <li>
                        <a href="tel:09010003247" className="hover:text-white">
                          Call 09010003247
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:service@haul247.co"
                          className="hover:text-white"
                        >
                          Email @ service@haul247.co
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-span-2 flex flex-col gap-10 md:col-span-1">
                  <div>
                    <FooterHeading>Company Address</FooterHeading>
                    <p className="mt-4 text-sm leading-relaxed text-white">
                      1 Engineering Close, Victoria Island 106104, Lagos State
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
          {/* </div> */}
        </div>
      </div>

      <div className="border-t border-white/80">
        <p className="mx-auto max-w-6xl px-6 py-6 text-center text-xs leading-relaxed text-white">
          © 2026 Haul247. All rights reserved. Haul247.co is a registered
          trademark of Haul247. All other marks, names, and logos mentioned
          herein are the property of their respective owners.
        </p>
      </div>
    </footer>
  );
}
