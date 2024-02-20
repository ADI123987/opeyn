"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const certificates = [
  {
    image: "/certificates/margin_certificate_1.png",
    href: "#",
    width: 138,
    height: 52,
  },
  {
    image: "/certificates/margin_certificate_2.png",
    href: "#",
    width: 94,
    height: 92,
  },
  {
    image: "/certificates/margin_certificate_3.png",
    href: "#",
    width: 138,
    height: 51,
  },
  {
    image: "/certificates/margin_certificate_4.png",
    href: "#",
    width: 91,
    height: 74,
  },
  {
    image: "/certificates/margin_certificate_5.png",
    href: "#",
    width: 140,
    height: 40,
  },
  {
    image: "/certificates/margin_certificate_6.png",
    href: "#",
    width: 92,
    height: 92,
  },
];

const partners = [
  {
    image: "/certificates/margin_partner_1.png",
    href: "#",
    width: 140,
    height: 76,
  },
  {
    image: "/certificates/margin_partner_2.png",
    href: "#",
    width: 141,
    height: 92,
  },
  {
    image: "/certificates/margin_partner_3.png",
    href: "#",
    width: 132,
    height: 79,
  },
  {
    image: "/certificates/margin_partner_4.png",
    href: "#",
    width: 136,
    height: 92,
  },
  {
    image: "/certificates/margin_partner_5.png",
    href: "#",
    width: 133,
    height: 74,
  },
  {
    image: "/certificates/margin_partner_6.png",
    href: "#",
    width: 136,
    height: 82,
  },
];

const SectionSertificationsPartners = () => {
  return (
    <section className="bg-muted py-16 dark:bg-slate-900 lg:py-24">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="mb-10 w-full lg:w-1/2 lg:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
            >
              <h2 className="mb-8 text-2xl">Our Certifications</h2>

              <div className="grid gap-5 lg:grid-cols-3">
                {certificates.map((certificate, index) => (
                  <a
                    key={index}
                    href="#"
                    className="hover-shadow flex items-center justify-center rounded bg-white px-5 py-3"
                  >
                    <Image
                      src={certificate.image}
                      alt={`Certificate ${index + 1}`}
                      width={certificate.width}
                      height={certificate.height}
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 lg:border-l lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
            >
              <h2 className="mb-8 text-2xl">Best Partners</h2>

              <div className="grid gap-5 lg:grid-cols-3">
                {partners.map((partner, index) => (
                  <a
                    key={index}
                    href="#"
                    className="hover-shadow flex items-center justify-center rounded bg-white px-5 py-3"
                  >
                    <Image
                      src={partner.image}
                      alt={`Partner ${index + 1}`}
                      width={partner.width}
                      height={partner.height}
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSertificationsPartners;
