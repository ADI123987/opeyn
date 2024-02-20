import { useId } from "react";
import { SVGProps } from "react";

const HeroTriangle = (props: SVGProps<SVGSVGElement>) => {
  const patternId = useId();
  const gradientId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      className="absolute -right-[1000px] -top-[850px] -z-[1] hidden w-[1920px] -rotate-[16deg] lg:block xl:-right-[700px]"
      viewBox="0 0 600 480"
      {...props}
    >
      <path
        fill={`url(#${patternId})`}
        d="M232.16 108.54 76.5 357.6c-33.3 53.28 5 122.4 67.84 122.4h311.32c62.83 0 101.14-69.12 67.84-122.4L367.84 108.54c-31.33-50.13-104.35-50.13-135.68 0Z"
        className="st0"
      />
      <path
        fill={`url(#${gradientId})`}
        fillOpacity={0.7}
        d="M232.16 108.54 76.5 357.6c-33.3 53.28 5 122.4 67.84 122.4h311.32c62.83 0 101.14-69.12 67.84-122.4L367.84 108.54c-31.33-50.13-104.35-50.13-135.68 0Z"
        className="st0"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x2={0}
          y1="50%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#4C86E7" />
          <stop offset={1} stopColor="#B939E5" />
        </linearGradient>
        <pattern
          id={patternId}
          width={500}
          height={500}
          patternUnits="userSpaceOnUse"
        >
          <image
            xlinkHref="/hero/hero.jpg"
            width={500}
            height={500}
            x={50}
            y={70}
          />
        </pattern>
      </defs>
    </svg>
  );
};
export default HeroTriangle;
