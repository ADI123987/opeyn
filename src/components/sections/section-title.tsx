import * as React from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  children: React.ReactNode;
  subtitle?: string;
  sectionClasses?: string;
  titleClasses?: string;
  subtitleClasses?: string;
};

const SectionTitle = ({
  children,
  subtitle,
  sectionClasses,
  titleClasses,
  subtitleClasses,
}: SectionTitleProps) => {
  return (
    <div className={cn("", sectionClasses)}>
      <h2 className={cn("", titleClasses)}>{children}</h2>
      {subtitle && <p className={cn("", subtitleClasses)}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
