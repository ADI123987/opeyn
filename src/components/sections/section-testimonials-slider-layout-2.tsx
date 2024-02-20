"use client";

import TestimonialsSliderLayout2 from "@/components/testimonials-slider-layout-2";
import { Pagination } from "swiper/modules";
import SectionTitle from "./section-title";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const testimonials = [
  {
    name: "Katie Smith",
    company: "General Partner at Entrepreneur",
    comment:
      "Margin is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
    image: "/testimonials/testimonial_layout_2_1.jpg",

    rating: 5,
  },
  {
    name: "Alex Fox",
    company: "Entrepreneur / Manager",
    comment:
      "Margin is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
    image: "/testimonials/testimonial_layout_2_2.jpg",
    rating: 5,
  },
  {
    name: "Tim Bennetto",
    company: "Founder of Pally",
    comment:
      "Margin is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
    image: "/testimonials/testimonial_layout_2_1.jpg",

    rating: 5,
  },
  {
    name: "John Rush",
    company: "Founder of Devhunt.org",
    comment:
      "Margin is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
    image: "/testimonials/testimonial_layout_2_2.jpg",
    rating: 5,
  },
];

const SectionTestimonialsSliderLayout2 = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#EBE4FA]/25 to-muted/25 py-20 dark:bg-slate-900 dark:bg-none lg:py-24">
      <div className="container relative xl:left-[calc((100vw-1312px)/4)] xl:max-w-[calc(1312px+((100vw-1312px)/2))] xl:pr-[calc((100vw-1280px)/2)]">
        <SectionTitle
          subtitle="10,000k+ Customers those who already tried our services."
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center"
          subtitleClasses="text-md font-medium"
        >
          Satisfied Customers
        </SectionTitle>
        <TestimonialsSliderLayout2
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
            modules: [Pagination],
            pagination: { clickable: true },
          }}
        />
      </div>
    </section>
  );
};

export default SectionTestimonialsSliderLayout2;
