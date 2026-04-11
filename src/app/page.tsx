import type { Metadata } from "next";
import {
  BusinessCarousel,
  ClientTestimonials,
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
      {/* Hero: uses animate-on-mount internally, ScrollFadeInView provides page-enter lift */}
      <ScrollFadeInView>
        <HomeHero />
      </ScrollFadeInView>

      {/* Sections with own internal whileInView — no outer wrapper to avoid double-fade */}
      <OurBusinesses />

      {/* BusinessCarousel uses AnimatePresence (state-driven), not scroll — wrap is safe */}
      <ScrollFadeInView delay={0.03}>
        <BusinessCarousel />
      </ScrollFadeInView>

      <IntegratedOperationalSystems />
      <PartnerAssets />

      {/* TrustedClient has no internal whileInView — wrap provides entrance */}
      <ScrollFadeInView delay={0.05}>
        <TrustedClient />
      </ScrollFadeInView>

      <ClientTestimonials />

      <GetInTouch />
    </main>
  );
}
