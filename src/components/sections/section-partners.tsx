import SectionTitle from "./section-title";
import Image from "next/image";

const SectionPartners = () => {
  return (
    <section className="relative bg-white pb-56 pt-24 before:absolute before:inset-0 before:bg-gradient-to-t before:from-quaternary before:to-secondary before:opacity-70">
      <Image
        src="/partners/map.png"
        alt="Partners"
        fill
        className="object-cover object-center opacity-50"
      />
      <div className="container relative max-w-6xl">
        <SectionTitle
          subtitle="An idea that takes the parts of a structure and turns whole system."
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center text-white"
          subtitleClasses="text-md font-medium text-white"
        >
          Join the entrepreneurs who tried Opeyn
        </SectionTitle>
        <div className="flex flex-wrap justify-center">
          <Image
            src="/partners/mv.png"
            alt="partner 1"
            width={173}
            height={103}
            className="m-2 md:m-5"
          />
          {/* <Image
            src="/partners/wde.png"
            alt="partner 2"
            width={173}
            height={103}
            className="m-2 md:m-5"
          /> */}
          <Image
            src="/partners/gc.jpg"
            alt="partner 3"
            width={173}
            height={103}
            className="m-2 md:m-5"
          />
          {/* <Image
            src="/partners/4.png"
            alt="partner 4"
            width={173}
            height={103}
            className="m-2 md:m-5"
          /> */}
          <Image
            src="/partners/vv.jpg"
            alt="partner 5"
            width={173}
            height={103}
            className="m-2 md:m-5"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionPartners;
