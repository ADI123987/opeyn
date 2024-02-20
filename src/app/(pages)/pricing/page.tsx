import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionCTALayout4 from "@/components/sections/section-cta-layout-4";
import SectionPricingTables from "@/components/sections/section-pricing-tables";
import SectionFAQLayout2 from "@/components/sections/section-faq-layout-2";
import SectionMoneyBack from "@/components/sections/section-money-back";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Pricing",
  description: "Pricing page",
};

export default function PagePricing() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle subtitle="Here are the best features that makes Margin the most powerful, fast and user-friendly platform.">
          Price Transparency
        </SectionPageTitle>
        <SectionPricingTables />
        <SectionMoneyBack />
        <SectionFAQLayout2 />
        <SectionCTALayout4 />
      </main>
      <Footer />
    </>
  );
}
