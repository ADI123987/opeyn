"use client";
import { motion } from "framer-motion";

import SectionTitle from "./section-title";
import Image from "next/image";

export const testimonials = [
  {
    name: "Monika Ragpa",
    company: "Practice Manager - DMAF Urology",
    comment:
      "“Margin is a much needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of ALL your  quickly, they are reliable, you can count on them and most of all, they do everything they say they will do, no BS.”",
    image: "/testimonials/testimonial_1.jpg",
  },
  {
    name: "Simon Kent",
    company: "Broker - About Roatan Real Estate",
    comment:
      "“Margin is a much needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of ALL your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do, no BS.”",
    image: "/testimonials/testimonial_2.jpg",
  },
  {
    name: "Camille Alforque",
    company: "CEO - DeoThemes",
    comment:
      "“Every detail has been taken care these team are realy amazing and talented! I will work only to help your sales goals.”",
    image: "/testimonials/testimonial_3.jpg",
  },
];

const SectionTestimonials = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container max-w-5xl">
        <SectionTitle
          subtitle="Those who already tried it."
          sectionClasses="mx-auto mb-12 max-w-xl text-center"
          titleClasses="mb-3"
          subtitleClasses="text-md font-medium"
        >
          Satisfied Customers
        </SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
          }}
        >
          <div className="testimonials-reversed space-y-12">
            {testimonials.map(({ image, name, company, comment }) => (
              <div
                key={name}
                className="flex flex-wrap items-center md:flex-nowrap md:space-x-16"
              >
                {image && (
                  <Image
                    className="my-6 shrink-0 rounded-full"
                    src={image}
                    width={181}
                    height={181}
                    alt={`Testimonial ${name}`}
                  />
                )}
                <div className="testimonials__content">
                  {comment && <p className="mb-7 text-md">{comment}</p>}
                  <div className="testimonial__info">
                    {name && (
                      <span className="mb-1 block text-md font-bold text-foreground dark:text-white">
                        {name}
                      </span>
                    )}
                    {company && (
                      <span className="block text-sm font-bold">{company}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTestimonials;
