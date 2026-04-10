"use client";

export function AboutOurStorySection() {
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

        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/H9d0rqYzAIw?rel=0&modestbranding=1"
            title="Haul247 story video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
