import {
  BuiltForAssetOwners,
  ForTruckAndWarehouseOwners,
  HowItWorks,
  PartnerAdvantages,
  PartnersPageHero
} from "@/components/partnersPage";
import { ScrollFadeInView } from "@/components/scroll-fade-in-view";

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
