import { Button } from "../ui/button";

const SectionCTALayout2 = () => {
  return (
    <section className="bg-secondary py-16 lg:py-32">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-8 text-white">
            Get, keep and grow more customers. We’re here to help.
          </h2>
          <div className="inline-flex flex-wrap md:flex-nowrap">
            <Button size={"lg"} className="w-full md:w-auto">
              Get Free Proposal
            </Button>
            <span className="m-5 inline-block w-full text-base font-bold text-white md:w-auto">
              OR
            </span>
            <Button
              size="lg"
              variant="outline"
              className="w-full text-white md:w-auto"
            >
              Call 639.995.3959
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCTALayout2;
