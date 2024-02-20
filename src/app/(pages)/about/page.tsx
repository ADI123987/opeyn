import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionChecklist from "@/components/sections/section-checklist";
import SectionCTALayout4 from "@/components/sections/section-cta-layout-4";
import SectionStats from "@/components/sections/section-stats";
import SectionTeam from "@/components/sections/section-team";
// import { getBaseUrl } from '@/getBaseUrl.js';

// export const metadata: Metadata = {
//   metadataBase: new URL(getBaseUrl()!),
//   title: "About",
//   description: "About page",
// };

export default function PageAbout() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle
          subtitle="Focus on engaging, reusable content that decrease the cost per leads
            while helps you to increase profits Opeyn. Opeyn strives to
            deliver the tools and support that helps companies grow with
            unparalleled success."
        >
          About
        </SectionPageTitle>
        <SectionChecklist />
        <SectionStats />
        <SectionTeam />
        <SectionCTALayout4 />
      </main>
      <Footer />
    </>
  );
}
