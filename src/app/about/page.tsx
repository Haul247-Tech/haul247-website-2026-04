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
      {/* <ScrollFadeInView delay={0.05}>
        <AboutInsightQuoteSection />
      </ScrollFadeInView> */}
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
