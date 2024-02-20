import PromoTriangle from "@/components/promo-triangle";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const SectionPromo = () => {
  return (
    <section className="relative pb-28 pt-10 lg:pb-64 lg:pt-24">
      <PromoTriangle />
      <div className="container">
        <div className="lg:ml-auto lg:w-[45%]">
          <h2 className="max-w-md">
            Our Priorities Equal Your Needs
          </h2>
          <p className="mb-10 text-lg">
            We are a  team highly focussed individuals into Scalable marketing, Blockchain Development, AI software development and Lead Generation. We leverage cutting edge AI tech for our daily task and make mximum of our products in house. For sales and prospecting we make sure companies need a minimum criterion and few validations to make sure the product we are working with provides value to the customers
          </p>
          <Button>
            Get Started
            <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionPromo;
