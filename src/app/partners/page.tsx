import type { Metadata } from "next";
import {
  BuiltForAssetOwners,
  ForTruckAndWarehouseOwners,
  HowItWorks,
  PartnerAdvantages,
  PartnersPageHero
} from "@/components/partnersPage";
import { ScrollFadeInView } from "@/components/scroll-fade-in-view";

export const metadata: Metadata = {
  title: "Become a Partner — Truck & Warehouse Asset Owners",
  description:
    "Own trucks or warehouse space? Partner with Haul247 to access structured utilization, consistent demand, transparent performance tracking, and long-term operational stability.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Become a Haul247 Partner — Truck & Warehouse Asset Owners",
    description:
      "Own trucks or warehouse space? Partner with Haul247 for structured utilization, consistent demand, and transparent performance tracking.",
    url: "/partners",
    images: [
      {
        url: "/partners-asset-trucks.png",
        width: 1200,
        height: 630,
        alt: "Fleet of trucks in structured logistics operation",
      },
    ],
  },
};

export default function PartnersPage() {
  return (
    <main>
      <ScrollFadeInView>
        <PartnersPageHero />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.03}>
        <BuiltForAssetOwners />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.05}>
        <HowItWorks />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.07}>
        <PartnerAdvantages />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.09}>
        <ForTruckAndWarehouseOwners />
      </ScrollFadeInView>
    </main>
  );
}
