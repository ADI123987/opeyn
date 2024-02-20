import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionGoogleMap from "@/components/sections/section-google-map";
import SectionContactForm from "@/components/sections/section-contact-form";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Contact",
  description: "Contact page",
};

export default function PageContact() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle subtitle="Let’s have a dicussion about your business">
          Contact
        </SectionPageTitle>
        <SectionContactForm />
        <SectionGoogleMap />
      </main>
      <Footer />
    </>
  );
}
