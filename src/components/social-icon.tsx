import { cn } from "@/lib/utils";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SocialIconProps = {
  url: string;
  className?: string;
  icon: IconDefinition;
};

const SocialIcon = ({ className, url, icon }: SocialIconProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener nofollow"
      className={cn(
        "mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-foreground hover:text-white",
        className,
      )}
    >
      <FontAwesomeIcon icon={icon} width={15} />
    </a>
  );
};

export default SocialIcon;
