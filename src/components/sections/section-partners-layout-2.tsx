import Image from "next/image";

const SectionPartnersLayout2 = () => {
  return (
    <section className="pb-16 pt-6">
      <div className="container relative">
        <div className="flex flex-wrap justify-center">
          <Image
            src="/partners/partner_logo_1.png"
            alt="partner 1"
            width={173}
            height={103}
            className="m-2 md:mx-8 md:my-5"
          />
          <Image
            src="/partners/partner_logo_2.png"
            alt="partner 2"
            width={173}
            height={103}
            className="m-2 md:mx-8 md:my-5"
          />
          <Image
            src="/partners/partner_logo_3.png"
            alt="partner 3"
            width={173}
            height={103}
            className="m-2 md:mx-8 md:my-5"
          />
          <Image
            src="/partners/partner_logo_4.png"
            alt="partner 4"
            width={173}
            height={103}
            className="m-2 md:mx-8 md:my-5"
          />
          <Image
            src="/partners/partner_logo_5.png"
            alt="partner 5"
            width={173}
            height={103}
            className="m-2 md:mx-8 md:my-5"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionPartnersLayout2;
