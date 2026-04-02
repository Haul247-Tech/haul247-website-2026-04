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
