"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimateBtn } from "../animate-btn";
import { ScrollMouseIcon } from "../scroll-mouse-icon";

export type HomeHeroSlide = {
  imgLink: string;
  fullVideoLink: string;
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
  const isGifSource = /\.gif(\?.*)?$/i.test(src);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isGifSource) return;
    const el = ref.current;
    if (!el) return;
    if (!allowMotion) {
      el.pause();
      return;
    }
    void el.play().catch(() => {});
  }, [src, allowMotion, isGifSource]);

  if (isGifSource) {
    return (
      <img
        src={src}
        alt={`${title} background animation`}
        className="h-full w-full object-cover"
        loading="eager"
      />
    );
  }

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

  // Auto-advance every 7 seconds
  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setTimeout(goNext, 7000);
    return () => window.clearTimeout(timer);
  }, [index, goNext, reduceMotion]);

  const textMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { duration, ease: [0.4, 0, 0.2, 1] as const },
      };

  const staggerContainerVariants = reduceMotion
    ? undefined
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.22,
            delayChildren: 0.08
          }
        },
        exit: {
          transition: {
            staggerChildren: 0.14,
            staggerDirection: -1
          }
        }
      };

  const staggerItemVariants = reduceMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] as const }
        },
        exit: {
          opacity: 0,
          y: -24,
          transition: { duration: 0.45, ease: [0.4, 0, 1, 1] as const }
        }
      };

  return (
    <section className="relative min-h-[680px] overflow-hidden text-white lg:min-h-[760px]">
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={(slide.miniVideoLink ?? slide.imgLink) + index}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration, ease: "easeInOut" }}
          >
            <div className={`absolute inset-0${reduceMotion ? "" : " haul-ken-burns"}`}>
              {slide.miniVideoLink ? (
                <HeroMiniLoopVideo
                  src={slide.fullVideoLink}
                  poster={slide.imgLink}
                  title={slide.title}
                  allowMotion={reduceMotion !== true}
                />
              ) : (
                <Image
                  src={slide.imgLink}
                  alt=""
                  fill
                  priority={index === 0}
                  quality={92}
                  className="object-cover"
                  sizes="100vw"
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-slate-950/10" />

      <div className="relative z-10 mx-auto flex min-h-[680px] w-full max-w-[1280px] flex-col px-6 pb-72 pt-16 lg:min-h-[760px] lg:px-10 lg:pb-28 lg:pt-[178px]">
        <div className="max-w-xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              variants={staggerContainerVariants}
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? undefined : "show"}
              exit={reduceMotion ? undefined : "exit"}
            >
              <motion.h1
                className="text-[clamp(2rem,5vw,2.5rem)] font-semibold leading-tight"
                variants={staggerItemVariants}
              >
                {slide.title}
              </motion.h1>
              <motion.hr className="my-4" variants={staggerItemVariants} />
              <motion.div
                variants={staggerItemVariants}
                className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-normal text-white/65"
              >
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" aria-hidden />
                  97.99% On-Time Delivery
                </span>
                <span aria-hidden className="text-white/30">·</span>
                <span>550+ Trucks</span>
                <span aria-hidden className="text-white/30">·</span>
                <span>25,000+ Trips Completed</span>
              </motion.div>
              <motion.p
                className="mt-4 max-w-lg text-base leading-relaxed text-slate-100/90 md:text-[15px]"
                variants={staggerItemVariants}
              >
                {slide.note}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-10 flex flex-wrap gap-3">
            <AnimateBtn
              href="/solutions/haulage"
              borderColor="#ffffff"
              color="#ffffff"
              hoverColor="#1C4863"
              hoverBgColor="#ffffff"
              className="min-h-[44px] lg:min-w-[200px]"
            >
              Book a Truck
            </AnimateBtn>
            <AnimateBtn
              href="#solutions"
              borderColor="rgba(255,255,255,0.45)"
              color="rgba(255,255,255,0.7)"
              hoverColor="#1C4863"
              hoverBgColor="#ffffff"
              className="min-h-[44px] lg:min-w-[200px]"
            >
              Explore Solutions
            </AnimateBtn>
          </div>
          <p className="mt-4 text-[11px] font-normal text-white/45">
            Own a truck or warehouse?{" "}
            <a href="/partners" className="text-white/65 underline hover:text-white transition-colors">
              Partner your assets →
            </a>
          </p>

          {/* Slide progress indicators */}
          <div className="mt-6 flex items-center gap-2" aria-label="Slide indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-[2px] rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
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
              className="mt-[13px] inline-flex items-center gap-2 text-left text-sm md:text-[12px] font-normal text-white/95 transition hover:text-white underline"
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
