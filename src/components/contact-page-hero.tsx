import Image from "next/image";

export function ContactPageHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-[1600px] md:grid-cols-2">
        <article className="bg-[#071321] px-6 py-12 text-white md:px-10 md:py-16 lg:px-16 lg:py-20">
          <h1 className="text-4xl font-medium leading-tight lg:text-[45px]">
            Get In touch With Us
          </h1>
          <p className="mt-5 text-xl text-slate-200 md:text-[25px] font-light">
            We are on standby to assist you all the way
          </p>

          <div className="mt-12 grid gap-6 text-sm leading-relaxed text-slate-300 sm:grid-cols-2 md:text-[15px] md:leading-[1.45] font-light">
            <div>
              <p>Call 09010003247</p>
              <p className="mt-2">Email @ service@haul247.co</p>
            </div>
            <div>
              <p>1 Engineering Close,</p>
              <p>Victoria Island 106104,</p>
              <p>Lagos State Us</p>
            </div>
          </div>
        </article>

        <article className="relative min-h-[320px] md:min-h-[560px]">
          <Image
            src="/contact-hero-support.png"
            alt="Support specialist wearing a headset"
            fill
            priority
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </article>
      </div>
      <div className="mx-auto mt-3 w-full max-w-[1600px] border-b border-b-2 border-[#09182299]" />
      <div className="mx-auto mt-2 w-full max-w-[1600px] border-b border-b-2 border-[#09182299]" />
    </section>
  );
}
