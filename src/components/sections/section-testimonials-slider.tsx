"use client";

import TestimonialsSlider from "@/components/testimonials-slider";
import { Navigation } from "swiper/modules";
import SectionTitle from "./section-title";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const testimonials = [
  {
    name: "Monika Ragpa",
    company: "DeoThemes",
    comment:
      "“I have witnessed and admired the work for years. I highly recommend this work for anyone seeking to increase.”",
    image: "/testimonials/1.png",
    rating: 5,
  },
  {
    name: "Alex Shadow",
    company: "DeoThemes",
    comment:
      "“Every detail has been taken care these team are realy amazing and talented! I will work only to help your sales goals.”",
    image: "/testimonials/2.png",
    rating: 5,
  },
  {
    name: "Chandler",
    company: "DeoThemes",
    comment:
      "“Every detail has been taken care these team are realy amazing and talented! I will work only to help your sales goals.”",
    image: "/testimonials/1.png",
    rating: 5,
  },
  {
    name: "Nathaniel",
    company: "DeoThemes",
    comment:
      "“I have witnessed and admired the work for years. I highly recommend this work for anyone seeking to increase.”",
    image: "/testimonials/2.png",
    rating: 5,
  },
];

const SectionTestimonialsSlider = () => {
  return (
    <section className="bg-secondary py-24">
      <div className="container max-w-6xl">
        <SectionTitle
          subtitle="Those who already tried it."
          sectionClasses="mb-12"
          titleClasses="mb-3 text-white"
          subtitleClasses="text-md font-medium text-white"
        >
          Satisfied Customers
        </SectionTitle>
        <TestimonialsSlider
          testimonials={testimonials}
          swiperParams={{
            breakpoints: {
              768: {
                slidesPerView: 2,
              },
              1025: {
                slidesPerView: 2,
              },
            },
            spaceBetween: 40,
            modules: [Navigation],
          }}
        />
      </div>
    </section>
  );
};

export default SectionTestimonialsSlider;
