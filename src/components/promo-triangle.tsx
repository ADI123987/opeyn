"use client";
import { motion } from "framer-motion";
import { useId } from "react";
import { SVGProps } from "react";

const PromoTriangle = (props: SVGProps<SVGSVGElement>) => {
  const patternId = useId();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        className="absolute -left-[1300px] -top-[880px] -z-[1] hidden w-[1920px] -rotate-[16deg] lg:block xl:-left-[1100px]"
        viewBox="0 0 600 480"
        {...props}
      >
        <path
          fill={`url(#${patternId})`}
          d="M232.16 108.54 76.5 357.6c-33.3 53.28 5 122.4 67.84 122.4h311.32c62.83 0 101.14-69.12 67.84-122.4L367.84 108.54c-31.33-50.13-104.35-50.13-135.68 0Z"
          className="st0"
        />
        <defs>
          <pattern
            id={patternId}
            width={600}
            height={600}
            patternUnits="userSpaceOnUse"
          >
            <image xlinkHref="/promo_img_1.jpg" width={600} height={600} />
          </pattern>
        </defs>
      </svg>
    </motion.div>
  );
};
export default PromoTriangle;
