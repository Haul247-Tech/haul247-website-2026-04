import type { Metadata } from "next";
import {
  BusinessCarousel,
  GetInTouch,
  HomeHero,
  IntegratedOperationalSystems,
  OurBusinesses,
  PartnerAssets,
  TrustedClient
} from "@/components/homeComponent";
import { ScrollFadeInView } from "@/components/scroll-fade-in-view";

export const metadata: Metadata = {
  title: "Africa's Leading Logistics & Haulage Platform",
  description:
    "Haul247 delivers structured haulage, warehouse management, and port logistics across Africa. 550+ trucks, 70+ warehouses, 97.99% on-time delivery. Get started today.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Haul247 — Africa's Leading Logistics & Haulage Platform",
    description:
      "Haul247 delivers structured haulage, warehouse management, and port logistics across Africa. 550+ trucks, 70+ warehouses, 97.99% on-time delivery.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main>
      <ScrollFadeInView>
        <HomeHero />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.03}>
        <OurBusinesses />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.05}>
        <BusinessCarousel />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.07}>
        <IntegratedOperationalSystems />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.09}>
        <PartnerAssets />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.11}>
        <TrustedClient />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.13}>
        <GetInTouch />
      </ScrollFadeInView>
    </main>
  );
}
