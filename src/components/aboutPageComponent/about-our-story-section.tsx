"use client";

import { useCallback, useRef, useState } from "react";

const PLACEHOLDER_VIDEO_MP4 =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const PLACEHOLDER_VIDEO_WEBM =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm";

export function AboutOurStorySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    void el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const handleStop = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPlaying(false);
  }, []);

  return (
    <section className="bg-white py-14 text-slate-900 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div>
          <h2 className="text-3xl font-medium text-haul-navy md:text-[45px]">
            Our Story.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-600 font-light md:text-[15px]">
            <p>
              Haul247 is an end-to-end logistics technology platform built to
              connect movement, storage, and visibility across the supply chain.
              It was founded by Sehinde Afolayan, Akindele Phillips, and Tobi
              Obasa—three operators who have known each other for over 14 years,
              since their days at Obafemi Awolowo University, and who share a
              conviction that better infrastructure can transform how goods move
              across Africa.
            </p>
            <p>
              The idea took shape from lived experience: Sehinde saw grain
              spoilage in Northern Nigeria tied to weak storage and coordination,
              and the team set out to build a platform that could make logistics
              more reliable, transparent, and scalable—starting with the
              foundations businesses depend on every day.
            </p>
          </div>
        </div>

        <div
          className="relative aspect-video w-full cursor-pointer overflow-hidden bg-slate-900 outline-none"
          onMouseEnter={handlePlay}
          onMouseLeave={handleStop}
          onClick={() => {
            const el = videoRef.current;
            if (!el) return;
            if (el.paused) void handlePlay();
            else handleStop();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              const el = videoRef.current;
              if (!el) return;
              if (el.paused) void handlePlay();
              else handleStop();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={playing ? "Pause video" : "Play video"}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            poster="/about-our-story-poster.png"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src={PLACEHOLDER_VIDEO_WEBM} type="video/webm" />
            <source src={PLACEHOLDER_VIDEO_MP4} type="video/mp4" />
          </video>

          <div
            className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 transition-opacity duration-300 ${
              playing ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/90 bg-white/10 text-white backdrop-blur-sm md:h-20 md:w-20">
              <svg
                width="28"
                height="32"
                viewBox="0 0 24 28"
                fill="currentColor"
                aria-hidden
              >
                <path d="M0 0v28l24-14L0 0z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
