"use client";
import { motion } from "framer-motion";
import IconBox from "@/components/icon-box";

export const iconBoxes = [
  {
    icon: "/icons/medical-research-6506_05214fe4-cb2e-4171-ac03-72168bf2981b.svg",
    title: "IT Services",
    description:
      "IT services encompass a broad range of offerings, including hardware and software support, network management, cybersecurity, and cloud computing solutions, tailored to meet businesses' technology needs.",
  },
  {
    icon: "/icons/edit-document-4191_913956ad-aac3-4d29-b4ef-061756334d24.svg",
    title: "IT Consultancy",
    description:
      "This involves providing expert advice and guidance on technology-related matters, assisting organizations in optimizing their infrastructure, implementing digital transformation initiatives, and addressing specific challenges.",
  },
  {
    icon: "/icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "Advertising",
    description:
      "The strategic promotion of products, services, or brands through various channels such as digital media, and social platforms. The aim is to reach target audiences, drive engagement, and ultimately influence purchasing decisions.",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SectionIconBoxes = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {!noTitle && (
          <div className="flex justify-center">
            <div className="text-center lg:w-3/5">
              <h2 className="mb-12">
                {" "}
                <span className="text-primary">We Provide</span>
              </h2>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={iconBox.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBox iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxes;
