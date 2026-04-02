import Image from "next/image";

const logos = [
  { src: "/trusted-clients/premium-edible-oil.png", alt: "Premium Edible Oil Products" },
  { src: "/trusted-clients/hayat.png", alt: "Hayat" },
  { src: "/trusted-clients/apple-pears.png", alt: "Apple & Pears" },
  { src: "/trusted-clients/fmn.png", alt: "Flour Mills of Nigeria" },
  { src: "/trusted-clients/honeywell.png", alt: "Honeywell" },
  { src: "/trusted-clients/rite-foods.png", alt: "Rite Foods" },
  { src: "/trusted-clients/premier-feed-mills.png", alt: "Premier Feed Mills" },
  { src: "/trusted-clients/promasidor.png", alt: "Promasidor" },
  { src: "/trusted-clients/gb-foods.png", alt: "GB Foods" },
  { src: "/trusted-clients/tgi-group.png", alt: "Tropical General Investments Group" }
];

export function TrustedClient() {
  const loop = [...logos, ...logos];

  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="trusted-clients-heading">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2
          id="trusted-clients-heading"
          className="text-3xl font-semibold leading-tight text-[#1C4863] md:text-4xl lg:text-[42px] mb-[80px]"
        >
          <span className="block">Trusted by our most</span>
          <span className="block">valued clients</span>
        </h2>
      </div>

      <div className="mt-14 hidden flex-wrap items-center justify-center gap-x-12 gap-y-10 px-6 motion-reduce:flex">
        {logos.map((logo) => (
          <div
            key={logo.src}
            className="flex h-14 items-center justify-center md:h-20"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={220}
              height={88}
              className="h-12 w-auto max-w-[200px] object-contain md:h-16 md:max-w-[220px]"
            />
          </div>
        ))}
      </div>

      <div className="relative w-full overflow-hidden motion-reduce:hidden">
        <div
          className="flex w-max gap-12 md:gap-20 animate-trusted-marquee"
          aria-hidden
        >
          {loop.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex h-14 shrink-0 items-center justify-center md:h-20"
            >
              <Image
                src={logo.src}
                alt=""
                width={220}
                height={88}
                className="h-12 w-auto max-w-[200px] object-contain md:h-16 md:max-w-[220px]"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="sr-only">
        Client brands: {logos.map((l) => l.alt).join(", ")}.
      </p>
    </section>
  );
}
