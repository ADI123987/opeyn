import Image from "next/image";

const SectionMoneyBack = () => {
  return (
    <section className="pt-10">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-md bg-[#FFFEF6] px-16 pb-12 pt-20 text-center shadow-[0_1px_6px_#EDEBDB] dark:bg-slate-800 dark:shadow-slate-850/20">
            <Image
              src="/moneyback_badge@2x.png"
              width={100}
              height={100}
              className="absolute top-0 inline-block -translate-x-1/2 -translate-y-1/2"
              alt="money back"
            />
            <h2 className="mb-4">
              <span className="text-primary">100%</span> Moneyback Guarantee
            </h2>
            <p className="text-md font-medium">
              Buy with confidence: if you are not 100% satisfied with Margin and
              our complete service, we offer 30-day money back guarantee without
              any questions!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMoneyBack;
