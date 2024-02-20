"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialLayout2 from "./testimonial-layout-2";
import { SwiperOptions } from "swiper/types";
import { useRef } from "react";

type TestimonialsSliderProps = {
  testimonials: Testimonial[];
  swiperParams: SwiperOptions;
};

const TestimonialsSliderLayout2 = ({
  testimonials,
  swiperParams,
}: TestimonialsSliderProps) => {
  const sliderRef = useRef<any>(null);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="testimonials-slider--layout-2 relative">
      <Swiper
        {...swiperParams}
        ref={sliderRef}
        className="!py-2 xl:!overflow-visible"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.name}>
            <TestimonialLayout2 testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSliderLayout2;
