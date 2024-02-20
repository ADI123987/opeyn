import HeaderLayout2 from "@/components/layout/header-layout-2";
import FooterLayout2 from "@/components/layout/footer-layout-2";
import type { Metadata } from "next";
import SectionHeroLayout3 from "@/components/sections/section-hero-layout-3";
import SectionPartnersLayout2 from "@/components/sections/section-partners-layout-2";
import SectionBenefits from "@/components/sections/section-benefits";
import SectionIconBoxesLayout2 from "@/components/sections/section-icon-boxes-layout-2";
import SectionTestimonialsSliderLayout2 from "@/components/sections/section-testimonials-slider-layout-2";
import SectionFAQ from "@/components/sections/section-faq";
import SectionCTALayout3 from "@/components/sections/section-cta-layout-3";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Consulting",
  description: "Consulting",
};

export default function PageConsulting() {
  return (
    <>
      <HeaderLayout2 />
      <main className="relative">
        <SectionHeroLayout3 />
        <SectionPartnersLayout2 />
        <SectionBenefits />
        <SectionIconBoxesLayout2 />
        <SectionTestimonialsSliderLayout2 />
        <SectionFAQ />
        <SectionCTALayout3 />
      </main>
      <FooterLayout2 />
    </>
  );
}
