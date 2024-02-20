"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Testimonial from "./testimonial";
import { SwiperOptions } from "swiper/types";
import { useRef, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Navigation } from "swiper/modules";

type TestimonialsSliderProps = {
  testimonials: Testimonial[];
  swiperParams: SwiperOptions;
};

const TestimonialsSlider = ({
  testimonials,
  swiperParams,
}: TestimonialsSliderProps) => {
  const sliderRef = useRef<any>(null);

  const isNavigationIncluded =
    swiperParams.modules && swiperParams.modules.includes(Navigation);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="testimonials-slider relative">
      {isNavigationIncluded && (
        <div className="absolute -right-2 -top-20">
          <button
            className="swiper-prev-arrow transition-transform will-change-transform hover:scale-125"
            onClick={handlePrev}
          >
            <ChevronLeftIcon width={32} height={32} className="fill-white" />
          </button>
          <button
            className="swiper-next-arrow transition-transform will-change-transform hover:scale-125"
            onClick={handleNext}
          >
            <ChevronRightIcon width={32} height={32} className="fill-white" />
          </button>
        </div>
      )}
      <Swiper {...swiperParams} ref={sliderRef}>
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.name}>
            <Testimonial testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
