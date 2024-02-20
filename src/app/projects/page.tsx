import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import SectionPageTitle from "@/components/sections/section-page-title";
import ProjectList from "@/components/projects/project-list";
// import { getBaseUrl } from '@/getBaseUrl.js';

// export const metadata: Metadata = {
//   metadataBase: new URL(getBaseUrl()!),
//   title: "Projects",
//   description: "Projects page",
// };

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle
          subtitle="Focus on engaging, reusable content that decrease the cost per leads
            while helps you to increase profits margin. Margin strives to
            deliver the tools and support that helps companies grow with
            unparalleled success."
        >
          Projects
        </SectionPageTitle>
        <section className="border-b py-24">
          <div className="container">
            <ProjectList
              grid="md:grid-cols-2 lg:grid-cols-2 gap-12"
              limit={4}
              showPagination={true}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
