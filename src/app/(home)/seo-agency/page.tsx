import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import SectionQuotation from "@/components/sections/section-quotation";
import SectionHeroLayout2 from "@/components/sections/section-hero-layout-2";
import SectionServiceTabs from "@/components/sections/section-service-tabs";
import SectionSertificationsPartners from "@/components/sections/section-certifications-partners";
import SectionProjectsSlider from "@/components/sections/section-projects-slider";
import SectionCTALayout2 from "@/components/sections/section-cta-layout-2";
import SectionTestimonials from "@/components/sections/section-testimonials";
import SectionResults from "@/components/sections/section-results";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "SEO Agency",
  description: "SEO Agency",
};

export default function PageSEOAgency() {
  return (
    <>
      <Header />
      <main className="relative mt-[4.5rem] lg:mt-[161px]">
        <SectionHeroLayout2 />
        <SectionServiceTabs />
        <SectionSertificationsPartners />
        <SectionProjectsSlider />
        <SectionCTALayout2 />
        <SectionTestimonials />
        <SectionResults />
        <SectionQuotation />
      </main>
      <Footer />
    </>
  );
}
