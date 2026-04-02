import Image from "next/image";
import Link from "next/link";
import { AnimateBtn } from "../animate-btn";

const ownerCards = [
  {
    title: "For Truck Owners",
    subtitle: "Fleet Participation Under Defined Standards",
    description:
      "Partner trucks are deployed within coordinated haulage operations, supported by real-time visibility and controlled dispatch systems. Performance is tracked, and operational compliance is maintained to ensure reliability for enterprise clients.",
    image: "/partners-truck-owner.png",
    imageAlt: "Tree-lined haulage route from aerial view",
    cta: "Partner your Truck Assets",
    href: "/partners#truck-form"
  },
  {
    title: "For Warehouse Owners",
    subtitle: "Managed Facilities, Integrated Systems",
    description:
      "Partner warehouses operate under unified inventory and operational standards. Through structured oversight and coordinated client allocation, facilities are positioned to deliver measurable efficiency and long-term utilization.",
    image: "/partners-warehouse-owner.png",
    imageAlt: "Warehouse district aerial grayscale image",
    cta: "Partner Your Warehouse Assets",
    href: "/partners#warehouse-form"
  }
];

export function ForTruckAndWarehouseOwners() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          {ownerCards.map((card) => (
            <article key={card.title}>
              <h2 className="text-4xl font-medium text-[#1B3B52] md:text-[45px]">
                {card.title}
              </h2>
              <p className="mt-4 text-2xl leading-snug font-light text-[#1B3B52] md:text-[25px]">
                {card.subtitle}
              </p>
              <p className="mt-5 text-sm leading-relaxed font-light text-[#1B3B52] md:text-[15px] md:leading-[1.4]">
                {card.description}
              </p>

              <div className="relative mt-8 aspect-square w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <AnimateBtn
            href="/contact"
            borderColor="#1C4863"
            color="#1C4863"
            hoverColor="#ffffff"
            
            hoverBgColor="#1C4863"
            activeColor="#ffffff"
            className="mt-10 min-h-[44px]lg:min-w-[222px]"
          >
            {card.cta}
          </AnimateBtn>
             
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
