"use client";
import { motion } from "framer-motion";
import IconBoxLayout2 from "@/components/icon-box-layout-2";
import ContactsLineIcon from "remixicon-react/ContactsLineIcon";
import Message2LineIcon from "remixicon-react/Message2LineIcon";
import ListSettingsLineIcon from "remixicon-react/ListSettingsLineIcon";
import FileTextLineIcon from "remixicon-react/FileTextLineIcon";
import Database2LineIcon from "remixicon-react/Database2LineIcon";
import Key2LineIcon from "remixicon-react/Key2LineIcon";

export const iconBoxes = [
  {
    icon: <ContactsLineIcon className="fill-primary" size={32} />,
    iconBase: "bg-[#FEE8E8]",
    title: "Consultant Analytics",
    description:
      "Provide solutions that improve efficiency and solve company issues, analyzing business data and increasing revenue levels.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FA6262]",
  },
  {
    icon: <Message2LineIcon className="fill-[#44D88D]" size={32} />,
    iconBase: "bg-[#E3F9EE]",
    title: "SEO Audits & Strategy",
    description:
      "Provide solutions that improve efficiency and solve company issues, analyzing business data and increasing revenue levels.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#44D88D]",
  },
  {
    icon: <ListSettingsLineIcon className="fill-[#4C86E7]" size={32} />,
    iconBase: "bg-[#D3E9FF]",
    title: "On-page SEO Optimization",
    description:
      "Provide solutions that improve efficiency and solve company issues, analyzing business data and increasing revenue levels.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#4C86E7]",
  },
  {
    icon: <FileTextLineIcon className="fill-[#7444FF]" size={32} />,
    iconBase: "bg-[#EAE3FF]",
    title: "Advisers & Intermediaries",
    description:
      "Provide solutions that improve efficiency and solve company issues, analyzing business data and increasing revenue levels.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#7444FF]",
  },
  {
    icon: <Database2LineIcon className="fill-[#FFAF13]" size={32} />,
    iconBase: "bg-[#FFF3DC]",
    title: "Social Media Marketing",
    description:
      "Provide solutions that improve efficiency and solve company issues, analyzing business data and increasing revenue levels.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FFAF13]",
  },
  {
    icon: <Key2LineIcon className="fill-[#B939E5]" size={32} />,
    iconBase: "bg-[#FAF1FF]",
    title: "Network Security",
    description:
      "Provide solutions that improve efficiency and solve company issues, analyzing business data and increasing revenue levels.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
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

const SectionIconBoxesLayout2 = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="text-center lg:w-3/5">
            <h2 className="mb-12">
              Do you want to{" "}
              <span className="text-primary">generate more traffic</span> to
              your website? We know the solution.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
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
                <IconBoxLayout2 iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxesLayout2;
