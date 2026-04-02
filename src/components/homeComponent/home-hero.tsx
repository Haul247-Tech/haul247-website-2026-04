import { HomeHeroCarousel, type HomeHeroSlide } from "./home-hero-carousel";

const slides: HomeHeroSlide[] = [
  {
    imgLink: "/images/hrb1.jpg",
    miniVideoLink: "/videos/hrb1.mp4",
    title: "Coordinated Port Operations, Seamless Transitions",
    note: "We manage the movement of goods through port environments with structured coordination and operational oversight. From arrival to onward distribution, processes are aligned to reduce delays, maintain visibility, and ensure efficient handoffs across the supply chain.",
    miniCardTitle: "Warehousing",
    miniNote:
      "Haul247 manages port operations end to end with our vibrant system of operations, processes are seamless from inception to the final finish"
  },
  {
    imgLink:  "/images/hrb2.jpg",
    miniVideoLink: "/videos/hrb2.mp4",
    title: "Structured Warehousing with Full Inventory Control",
    note: "We provide warehousing tailored to different cargo requirements, managed under defined operational standards. With integrated inventory systems and coordinated oversight, goods remain organized, visible, and efficiently handled throughout their storage lifecycle.",
    miniCardTitle: "Dedicated assets",
    miniNote:
      "Haul247 manages port operations end to end with our vibrant system of operations, processes are seamless from inception to the final finish"
  },
  {
    imgLink: "/images/hrb3.jpg",
    miniVideoLink: "/videos/hrb3.mp4",
    title: "Dedicated Fleet for Consistent Operations",
    note: "We provide dedicated trucks for businesses that require consistent logistics capacity over defined periods. Assets are deployed exclusively for your operations, supported by coordinated management and real-time visibility to ensure reliability and control at scale.",
    miniCardTitle: "Haulage",
    miniNote:
      "Facilities operate under defined processes so goods stay controlled, traceable, and ready for the next leg of the journey."
  },
  {
    imgLink: "/images/hrb4.jpg",
    miniVideoLink: "/videos/hrb1.mp4",
    title: "Connecting Businesses To Haulage Solutions",
    note: "Haul247 is the platform for businesses to seamlessly book trucks across multiple geolocations using real-time technology.",
    miniCardTitle: "Port Operations",
    miniNote:
      "Haul247 manages port operations end to end with our vibrant system of operations, processes are seamless from inception to the final finish."
  }
];

export function HomeHero() {
  return <HomeHeroCarousel slides={slides} />;
}

export type { HomeHeroSlide };
