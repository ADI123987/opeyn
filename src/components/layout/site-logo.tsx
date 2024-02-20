import Image from "next/image";
import { siteConfig } from "@/config/site";

type SiteLogoProps = {
  width: number;
  height: number;
  lightClasses?: string;
  darkClasses?: string;
};

export default function SiteLogo({
  width,
  height,
  lightClasses,
  darkClasses,
}: SiteLogoProps) {
  return (
    <>
      <Image
        src="/logo.png"
        className={lightClasses}
        width={width}
        height={height}
        alt={siteConfig.name}
      />
      <Image
        src="/logo_white.png"
        className={darkClasses}
        width={width}
        height={height}
        alt={siteConfig.name}
      />
    </>
  );
}
