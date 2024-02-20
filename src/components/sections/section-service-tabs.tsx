"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export const serviceTabs = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    content: {
      title: "Increase traffic and get more leads",
      subtitle:
        "As you may already know, there are an infinite number of things you can test on your site to help you increase sales. From layout to to design, there are limitless combinations.",
      text: "As you may already know, there are an infinite number of things you can test on your site to help you increase sales. From layout to copy to design, there are limitless combinations.",
      cta: "Order now",
      image: "/services/service_1.jpg",
    },
  },
  {
    id: "seo-and-ppc",
    title: "SEO and PPC",
    content: {
      title: "Leverage Google Ads",
      subtitle:
        "As you may already know, there are an infinite number of things you can test on your site to help you increase sales. From layout to to design, there are limitless combinations.",
      text: "As you may already know, there are an infinite number of things you can test on your site to help you increase sales. From layout to copy to design, there are limitless combinations.",
      cta: "Order now",
      image: "/services/service_2.jpg",
    },
  },
  {
    id: "marketing-analytics",
    title: "Marketing Analytics",
    content: {
      title: "Measuring, managing and analyzing marketing performance",
      subtitle:
        "As you may already know, there are an infinite number of things you can test on your site to help you increase sales. From layout to to design, there are limitless combinations.",
      text: "As you may already know, there are an infinite number of things you can test on your site to help you increase sales. From layout to copy to design, there are limitless combinations.",
      cta: "Order now",
      image: "/services/service_3.jpg",
    },
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    content: {
      title: "Attract and retain a clearly defined audience",
      subtitle:
        "As you may already know, there are an infinite number of things you can test on your site to help you increase sales. From layout to to design, there are limitless combinations.",
      text: "As you may already know, there are an infinite number of things you can test on your site to help you increase sales. From layout to copy to design, there are limitless combinations.",
      cta: "Order now",
      image: "/services/service_4.jpg",
    },
  },
];

const SectionServiceTabs = () => {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="container max-w-5xl">
        <Tabs defaultValue="digital-marketing">
          <TabsList className="mb-10 md:mb-20">
            {serviceTabs.map((serviceTab) => (
              <TabsTrigger key={serviceTab.id} value={serviceTab.id}>
                {serviceTab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {serviceTabs.map((serviceTab) => (
            <TabsContent
              key={serviceTab.id}
              value={serviceTab.id}
              className="md:flex md:justify-between"
            >
              <div className="mb-10 md:w-1/2">
                {serviceTab.content.title && (
                  <h2 className="mb-5 max-w-md">{serviceTab.content.title}</h2>
                )}
                {serviceTab.content.subtitle && (
                  <p className="mb-4 text-lg">{serviceTab.content.subtitle}</p>
                )}

                {serviceTab.content.text && (
                  <p className="mb-4">{serviceTab.content.text}</p>
                )}

                {serviceTab.content.cta && (
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-bold text-secondary hover:text-primary"
                  >
                    {serviceTab.content.cta}
                    <ChevronRightIcon width={20} height={20} className="ml-4" />
                  </a>
                )}
              </div>
              {serviceTab.content.image && (
                <div className="md:pl-8">
                  <Image
                    src={serviceTab.content.image}
                    width={356}
                    height={356}
                    alt={serviceTab.title}
                    className="rounded"
                  />
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SectionServiceTabs;
