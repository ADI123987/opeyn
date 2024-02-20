import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionIconBoxes from "@/components/sections/section-icon-boxes";
import SectionCTALayout4 from "@/components/sections/section-cta-layout-4";
import SectionPromoVideo from "@/components/sections/section-promo-video";
import SectionIconBoxesLayout3 from "@/components/sections/section-icon-boxes-layout-3";
// import { getBaseUrl } from '@/getBaseUrl.js';

// export const metadata: Metadata = {
//   metadataBase: new URL(getBaseUrl()!),
//   title: "Services",
//   description: "Services page",
// };

export default function PageServices() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle subtitle="We offer a variety of services here to get you started and successfully suite every need using Margin. Choose the services that’s right for you.">
          Services
        </SectionPageTitle>
        <SectionIconBoxes noTitle />
        <SectionPromoVideo />
        <SectionIconBoxesLayout3 />
        <SectionCTALayout4 />
      </main>
      <Footer />
    </>
  );
}
