import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const SectionPromoVideo = () => {
  return (
    <section className="bg-muted py-16 dark:bg-slate-900 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap justify-between lg:flex-nowrap lg:space-x-10">
          <div className="mb-10 w-full lg:w-[45%]">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/gNAE8g2tytA?showinfo=0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </AspectRatio>
          </div>

          <div className="w-full lg:w-[45%]">
            <h2>
              The right tools for the right solution. Focus on Sales
              Opportunities
            </h2>
            <p className="mb-10 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <Button size="lg"><a href="#">Get Started</a>
              
              <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPromoVideo;
