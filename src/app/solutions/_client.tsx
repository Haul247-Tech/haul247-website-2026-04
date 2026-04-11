"use client";

import { AboutOperationalPhilosophySection } from "@/components/aboutPageComponent";
import { AnimateBtn } from "@/components/animate-btn";
import { ScrollFadeInView } from "@/components/scroll-fade-in-view";
import { ScrollMouseIcon } from "@/components/scroll-mouse-icon";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type SolutionCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  poster?: string;
  ctaPrimary: string;
  ctaSecondary: string;
  type: "video" | "image";
};

const cards: SolutionCard[] = [
  {
    id: "haulage",
    title: "Haulage Services",
    description:
      "We connect businesses to a structured network of vetted trucks, ensuring reliable capacity when it is needed. Every shipment is supported by real-time tracking for full visibility from dispatch to delivery.",
    image: "/images/hu01.jpg",
    video: "/videos/haulage.mp4",
    poster: "/images/hu01.jpg",
    ctaPrimary: "Request For Truck Today",
    ctaSecondary: "Learn more",
    type: "video"
  },
  {
    id: "warehousing",
    title: "Warehouse Services",
    description:
      "We provide warehousing solutions tailored to different cargo requirements, ensuring goods are stored under appropriate operational conditions with structured inventory management and control.",
    image: "/images/wh01.jpg",
    video: "/videos/warehouse.mp4",
    poster: "/images/wh01.jpg",
    ctaPrimary: "Request For Warehouse Today",
    ctaSecondary: "Learn more",
    type: "video"
  },
  {
    id: "dedicated-assets",
    title: "Dedicated Assets For Businesses",
    description:
      "We connect businesses to a structured network of vetted trucks, ensuring reliable capacity when it is needed. Every shipment is supported by real-time tracking for full visibility from dispatch to delivery.",
    image: "/business-caro-2.png",
    video: "/videos/dedicated.mp4",
    ctaPrimary: "Speak to an Advisor",
    ctaSecondary: "Learn more",
    type: "video"
  },
  {
    id: "port-operations",
    title: "Port Operations Services",
    description:
      "We connect businesses to a structured network of vetted trucks, ensuring reliable capacity when it is needed. Every shipment is supported by real-time tracking for full visibility from dispatch to delivery.",
    image: "/business-caro-1.png",
    video: "/videos/port.mp4",
    ctaPrimary: "Speak to an Advisor",
    ctaSecondary: "Learn more",
    type: "video"
  }
];

function PlayIcon() {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white">
        <span className="ml-1 text-3xl">▶</span>
      </span>
    </span>
  );
}

function HoverPlayVideo({
  src,
  poster,
  title
}: {
  src: string;
  poster: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    void el.play().catch(() => {});
  }, []);

  const handleStop = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  }, []);

  return (
    <div
      className="h-full w-full"
      onMouseEnter={handlePlay}
      onMouseLeave={handleStop}
      onFocus={handlePlay}
      onBlur={handleStop}
      role="button"
      tabIndex={0}
      aria-label={`Preview ${title} video`}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default function SolutionsClient() {
  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 md:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: EASE }}
          className="text-4xl font-medium text-[#1B3B52] md:text-[45px]"
        >
          Structured Logistics, Unified Execution
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="relative mt-8 h-[420px] w-full overflow-hidden md:h-[507px]"
        >
          <Image
            src="/images/solHr1.jpg"
            alt="Container operations at sunset"
            fill
            className="object-cover"
            priority
            quality={92}
            sizes="100vw"
          />
          <div className="absolute left-6 top-8 max-w-4xl text-white md:left-14 md:top-12">
            <p className="text-2xl md:text-[25px] font-[300]">
              Our solutions are structured around defined operational standards
              and integrated systems that ensure clarity, control, and
              consistent execution. By aligning haulage, warehousing, and asset
              management under a unified framework, we reduce friction, improve
              visibility, and deliver measurable performance across every
              engagement.
            </p>
            <hr className="my-4 max-w-[390px] bg-[#FFFFFF]" />
          </div>
          <div className="absolute bottom-8 left-8 text-white md:bottom-12 md:left-14">
            <ScrollMouseIcon />
            <p className="mt-3 text-sm">Scroll Down to Explore</p>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#071829] py-14 text-white md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-x-[140px] gap-y-20 px-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.article
              key={card.id}
              id={card.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.72, ease: EASE, delay: i * 0.08 }}
            >
              <h2 className="text-4xl font-medium md:text-[45px] text-[#738996]">
                {card.title}
              </h2>
              <p className="mt-5 text-xl leading-relaxed text-slate-300 md:text-[15px] md:leading-[1.45] font-[300]">
                {card.description}
              </p>

              <div className="relative mt-10 h-[250px] w-full overflow-hidden md:h-[300px] haul-img-zoom">
                {card.type === "video" ? (
                  <HoverPlayVideo
                    src={card.video ?? ""}
                    poster={card.poster ?? card.image}
                    title={card.title}
                  />
                ) : (
                  <>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <PlayIcon />
                  </>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <AnimateBtn
                  href="#solutions"
                  borderColor="#ffffff"
                  color="#ffffff"
                  hoverColor="#1C4863"
                  hoverBgColor="#ffffff"
                  className="mt-10 min-h-[44px] lg:min-w-[200px]"
                >
                  {card.ctaPrimary}
                </AnimateBtn>
                <AnimateBtn
                  href={
                    card.id === "haulage"
                      ? "/solutions/haulage"
                      : `/solutions#${card.id}`
                  }
                  borderColor="#ffffff"
                  color="#ffffff"
                  hoverColor="#1C4863"
                  hoverBgColor="#ffffff"
                  className="mt-10 min-h-[44px] lg:min-w-[140px]"
                >
                  {card.ctaSecondary}
                </AnimateBtn>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <ScrollFadeInView delay={0.13}>
        <AboutOperationalPhilosophySection />
      </ScrollFadeInView>
    </main>
  );
}
