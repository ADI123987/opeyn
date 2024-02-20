import { cn } from "@/lib/utils";
import Image from "next/image";

type IconBoxProps = {
  iconBox: IconBox;
  className?: string;
};

const IconBox = ({
  className,
  iconBox: { icon, title, description },
}: IconBoxProps) => {
  return (
    <div
      className={cn(
        "hover-shadow z-[1] overflow-hidden rounded-md bg-white px-10 py-12 before:absolute before:left-0 before:top-0 before:block before:h-[.3125rem] before:w-0 before:bg-secondary before:transition-all before:duration-200 hover:before:w-full dark:bg-slate-800",
        className,
      )}
    >
      {icon ? (
        <Image
          src={icon}
          alt={title || ""}
          width={72}
          height={72}
          className="mb-6 inline-block"
        />
      ) : null}
      {title ? <h3 className="mb-4 text-md">{title}</h3> : null}
      {description ? <p>{description}</p> : null}
    </div>
  );
};

export default IconBox;
