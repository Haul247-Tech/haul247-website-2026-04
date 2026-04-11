"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  title: React.ReactNode;
  description: string;
  cta: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  flip: boolean;
};

const slides: Slide[] = [
  {
    title: (
      <>
        It goes beyond <em className="italic">moving goods</em> from one point to
        other, It&apos;s the <em className="italic">impact to our clients and their end users</em>{" "}
        for us
      </>
    ),
    description:
      "Logistics is more than transportation. Every movement affects inventory flow, retail shelves, production timelines, and customer experience. We operate with that full impact in mind - not just the journey, but the outcome.",
    cta: "Need a truck or warehouse?",
    ctaHref: "/solutions/haulage",
    imageSrc: "/business-caro-1.png",
    imageAlt: "Loaded truck on a city road",
    flip: true,
  },
  {
    title: (
      <>
        Reliability built into every operation
      </>
    ),
    description:
      "Our logistics operations are guided by clear processes, monitored execution, and defined service standards. This ensures goods move securely, timelines are maintained, and clients remain confident in every delivery.",
    cta: "Need Port Operation Services?",
    ctaHref: "/solutions/port",
    imageSrc: "/business-caro-2.png",
    imageAlt: "Operations staff directing a truck",
    flip: false,
  },
  {
    title: (
      <>
        Logistics services designed for <em className="italic">control and efficiency</em>
      </>
    ),
    description:
      "Our logistics operations are guided by clear processes, monitored execution, and defined service standards. This ensures goods move securely, timelines are maintained, and clients remain confident in every delivery.",
    cta: "Need a Dedicated Asset?",
    ctaHref: "/solutions/dedicated",
    imageSrc: "/business-caro-3.png",
    imageAlt: "Trackers dashboard and route map",
    flip: false,
  }
];

export function BusinessCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const textSlideVariants = {
    enter: (dir: 1 | -1) => ({ x: dir > 0 ? 90 : -90 }),
    center: { x: 0 },
    exit: (dir: 1 | -1) => ({ x: dir > 0 ? -90 : 90 }),
  };

  const textPane = (
    <div className="relative min-h-[360px] overflow-hidden bg-[#1C4863]">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={`text-pane-${activeIndex}`}
          custom={direction}
          variants={textSlideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex px-8 py-12 text-white md:px-12 md:py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="flex w-full flex-col justify-between"
          >
            <h2 className="max-w-[560px] text-5xl font-medium leading-tight lg:text-[46px]">
              {activeSlide.title}
            </h2>
            <div>
              <p className="mt-8 max-w-[520px] text-[15px] font-light leading-relaxed text-slate-200">
                {activeSlide.description}
              </p>
              <Link
                href={activeSlide.ctaHref}
                className="mt-6 inline-block w-fit border-b border-white/40 pb-1 text-sm font-regular text-white/95"
              >
                {activeSlide.cta}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  const imagePane = (
    <div className="relative min-h-[360px] overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={`image-pane-${activeIndex}`}
          custom={direction}
          variants={textSlideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={activeSlide.imageSrc}
            alt={activeSlide.imageAlt}
            fill
            priority
            quality={92}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );

  return (
    <section className="bg-white">
      <div className="mx-auto">
        <article className="relative grid min-h-[620px] md:grid-cols-2">
          {activeSlide.flip ? (
            <>
              {imagePane}
              {textPane}
            </>
          ) : (
            <>
              {textPane}
              {imagePane}
            </>
          )}

          <div className="pointer-events-none absolute bottom-8 right-8 z-10 md:bottom-12 md:right-12">
            <div className="pointer-events-auto flex items-center border border-white">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-11 w-11 bg-[#1C4863B2] items-center justify-center border-r border-white text-2xl text-white transition hover:bg-[#1C4863DE]"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                type="button"
                onClick={goNext}
                className="flex h-11 w-11 bg-[#1C4863B2] items-center justify-center text-2xl text-white transition hover:bg-[#1C4863DE]"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
