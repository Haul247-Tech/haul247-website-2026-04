"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimateBtn } from "../animate-btn";
import { ScrollMouseIcon } from "../scroll-mouse-icon";

export type HomeHeroSlide = {
  imgLink: string;
  title: string;
  note: string;
  miniCardTitle: string;
  miniNote: string;
  /** When set, mini card shows a video player; otherwise the mini card uses `imgLink` as a still image. */
  miniVideoLink?: string;
};

type HomeHeroCarouselProps = {
  slides: HomeHeroSlide[];
};

function HeroMiniLoopVideo({
  src,
  poster,
  title,
  allowMotion
}: {
  src: string;
  poster: string;
  title: string;
  allowMotion: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!allowMotion) {
      el.pause();
      return;
    }
    void el.play().catch(() => {});
  }, [src, allowMotion]);

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      src={src}
      poster={poster}
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      autoPlay={allowMotion}
      aria-label={`${title} background video`}
    />
  );
}

export function HomeHeroCarousel({ slides }: HomeHeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const slide = slides[index];
  const duration = reduceMotion ? 0 : 0.45;

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const textMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { duration, ease: [0.4, 0, 0.2, 1] as const },
      };

  return (
    <section className="relative min-h-[680px] overflow-hidden text-white lg:min-h-[760px]">
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={slide.imgLink + index}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration, ease: "easeInOut" }}
          >
            <Image
              src={slide.imgLink}
              alt=""
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-slate-950/45" />

      <div className="relative z-10 mx-auto flex min-h-[680px] w-full max-w-[1280px] flex-col px-6 pb-72 pt-16 lg:min-h-[760px] lg:px-10 lg:pb-28 lg:pt-[178px]">
        <div className="max-w-xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={index} {...textMotion}>
              <h1 className="text-[4xl] font-semibold leading-tight md:text-[46px]">
                {slide.title}
              </h1>
              <hr className="my-4" />
              <p className="mt-8 max-w-lg text-base leading-relaxed text-slate-100/90 md:text-[15px]">
                {slide.note}
              </p>
            </motion.div>
          </AnimatePresence>
          <AnimateBtn
                href="#solutions"
                borderColor="#ffffff"
                color="#ffffff"
                hoverColor="#1C4863"
                hoverBgColor="#ffffff"
                className="mt-10 min-h-[44px]  lg:min-w-[222px]"
              >
                Explore our Solutions
              </AnimateBtn>

        </div>

        <div className="mt-auto hidden text-white/80 md:block">
          <ScrollMouseIcon />
          <p className="mt-2 text-sm">Scroll Down</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-end px-6 pb-6 lg:px-10 md:pr-[0px] lg:pr-[0px] md:pb-0">
        <article className="pointer-events-auto grid w-full max-w-[480px] overflow-hidden  bg-[#091822]/95 md:grid-cols-2">
          <div className="p-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={index} {...textMotion}>
                <p className="text-xl md:text-[15px] font-semibold">
                  {slide.miniCardTitle}
                </p>
                <p className="mt-[18px] text-sm md:text-[12px] font-light leading-relaxed text-slate-200">
                  {slide.miniNote}
                </p>
              </motion.div>
            </AnimatePresence>
            <button
              type="button"
              onClick={goNext}
              className="mt-[13px] inline-flex items-center gap-2 text-left text-sm md:text-[12px] font-regular text-white/95 transition hover:text-white underline"
              aria-label={`Next vertical: ${slides[(index + 1) % slides.length]?.miniCardTitle ?? "slide"}`}
            >
              Next Verticals{" "}
              <Image
                src="/images/arrFwd.png"
                alt=""
                width={16}
                height={1}
                className="object-contain"
              />
            </button>
          </div>
          <div className="relative min-h-[180px]">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={(slide.miniVideoLink ?? slide.imgLink) + index}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration, ease: "easeInOut" }}
              >
                {slide.miniVideoLink ? (
                  <HeroMiniLoopVideo
                    src={slide.miniVideoLink}
                    poster={slide.imgLink}
                    title={slide.miniCardTitle}
                    allowMotion={reduceMotion !== true}
                  />
                ) : (
                  <Image
                    src={slide.imgLink}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 240px"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </article>
      </div>
    </section>
  );
}
