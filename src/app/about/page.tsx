import type { Metadata } from "next";
import {
  AboutInsightQuoteSection,
  AboutJoinTeamSection,
  AboutOperationalPhilosophySection,
  AboutOperationalScaleSection,
  AboutOurStorySection,
  AboutPageHero,
  AboutSuperTeamSection
} from "@/components/aboutPageComponent";
import { ScrollFadeInView } from "@/components/scroll-fade-in-view";

export const metadata: Metadata = {
  title: "About Us — Our Story, Team & Mission",
  description:
    "Founded by three operators with 14+ years of shared experience, Haul247 is building reliable, transparent logistics infrastructure across Africa. Meet the team.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Haul247 — Our Story, Team & Mission",
    description:
      "Founded by three operators with 14+ years of shared experience, Haul247 is building reliable, transparent logistics infrastructure across Africa.",
    url: "/about",
    images: [{ url: "/images/hu02.jpg", width: 1200, height: 630, alt: "Haul247 team and operations" }],
  },
};

export default function AboutPage() {
  return (
    <main>
      <ScrollFadeInView>
        <AboutPageHero />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.03}>
        <AboutOurStorySection />
        <AboutInsightQuoteSection />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.07}>
        <AboutOperationalScaleSection />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.09}>
        <AboutSuperTeamSection />
        <AboutJoinTeamSection />
      </ScrollFadeInView>
      <ScrollFadeInView delay={0.13}>
        <AboutOperationalPhilosophySection />
      </ScrollFadeInView>
    </main>
  );
}
