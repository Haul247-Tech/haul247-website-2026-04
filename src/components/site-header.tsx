"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimateBtn } from "./animate-btn";

const solutions = [
  { href: "/solutions/haulage", label: "Haulage" },
  { href: "/solutions/warehouse", label: "Warehousing" },
  { href: "/solutions/port", label: "Port Operations" },
  { href: "/solutions/dedicated", label: "Dedicated Assets" },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const openSolutionsMenu = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setSolutionsOpen(true);
  };

  const closeSolutionsMenu = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setSolutionsOpen(false);
      closeTimerRef.current = null;
    }, 120);
  };

  const navLinkClass = (href: string) => {
    const active = pathname === href;
    return [
      "relative pb-1 text-sm font-medium text-haul-navy transition-colors",
      "before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-1/2 before:bg-haul-navy before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out",
      "after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-1/2 after:bg-haul-navy after:origin-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-out",
      active
        ? "before:scale-x-100 after:scale-x-100"
        : "hover:before:scale-x-100 hover:after:scale-x-100 focus-visible:before:scale-x-100 focus-visible:after:scale-x-100",
    ].join(" ");
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <div className="relative mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="relative z-10 shrink-0">
            <Image
              src="/haul247-logo.png"
              alt="Haul247"
              width={181}
              height={120}
              priority
              quality={90}
              sizes="181px"
              className="h-10 w-auto object-contain object-left md:h-11"
            />
          </Link>

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex"
            aria-label="Primary"
          >
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={openSolutionsMenu}
              onMouseLeave={closeSolutionsMenu}
              onFocusCapture={openSolutionsMenu}
              onBlurCapture={closeSolutionsMenu}
            >
              <Link
                href="/solutions"
                className={navLinkClass("/solutions")}
                onClick={() => setSolutionsOpen(false)}
              >
                <span className="inline-flex items-center gap-1">
                  Solutions
                  <ChevronDownIcon
                    className={`text-haul-navy transition-transform duration-200 ease-in-out ${
                      solutionsOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </Link>
              <div
                className={`absolute left-0 top-full z-20 mt-3 min-w-[14rem] rounded-md border border-slate-200 bg-white py-2 shadow-lg transition-all duration-200 ease-in-out ${
                  solutionsOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-1 opacity-0 pointer-events-none"
                }`}
              >
                {solutions.map((solution) => (
                  <Link
                    key={solution.label}
                    href={solution.href}
                    className="block px-4 py-2.5 text-sm text-haul-navy transition hover:bg-slate-50"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    {solution.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/partners" className={navLinkClass("/partners")}>
              Partners
            </Link>
          </nav>

          <div className="relative z-10 flex shrink-0 items-center gap-3">
          <AnimateBtn
            href={"/contact"}
            borderColor="#21445B"
            color="#FFFFFF"
            hoverColor="#21445B"
            activeColor="#21445B"
            hoverBgColor="#FFFFFF"
            className="bg-[#21445B]"
          >
            Get In touch
          </AnimateBtn>
            

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-haul-navy md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label="Open menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-[100] flex flex-col bg-haul-menu md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            className="absolute left-4 top-4 p-3 text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <nav
            className="flex flex-1 flex-col justify-center gap-8 px-10 pt-8"
            aria-label="Mobile"
          >
            <Link
              href="/"
              className="text-lg font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/solutions"
              className="text-lg font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/partners"
              className="text-lg font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Partners
            </Link>
            <AnimateBtn
              href="/contact"
              borderColor="#1C4863"
              color="#ffffff"
              hoverColor="#1C4863"
              hoverBgColor="#ffffff"
              activeColor="#1C4863"
              className="mt-10 min-h-[44px]lg:min-w-[222px]"
            >
              Get in touch
            </AnimateBtn>
            
          </nav>
        </div>
      ) : null}
    </>
  );
}
