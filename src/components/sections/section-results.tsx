const SectionResults = () => {
  return (
    <section className="bg-muted py-16 dark:bg-slate-900 lg:py-24">
      <div className="container">
        <div className="flex flex-wrap items-center lg:flex-nowrap lg:space-x-16">
          <div className="w-full lg:w-[54%] lg:pr-20">
            <h2 className="mb-5 max-w-md">
              We accelerate your digital transformation with our very unique
              digital approach
            </h2>
            <p className="mb-8 text-lg">
              As you may already know, there are an infinite number of things
              you can test on your site to help you increase sales.
            </p>
            <p className="mb-10">
              As you may already know, there are an infinite number of things
              you can test on your site to help you increase sales. From layout
              to copy to design, there are limitless combinations of changes
              that may improve your visitor-to-sale conversion rate. But what’s
              “enough” when you’re just starting out? What elements should you
              focus on testing before rolling out your traffic campaign?
            </p>
          </div>
          <div className="w-full lg:w-[46%]">
            <div className="flex flex-wrap lg:flex-nowrap lg:space-x-10">
              <div className="w-full lg:w-1/2">
                <div className="hover-shadow mb-10 rounded bg-white p-12 dark:bg-slate-800">
                  <span className="text-green mb-3 block text-3xl font-bold md:text-5xl">
                    30%
                  </span>
                  <span className="text-md font-medium text-foreground dark:text-white">
                    Lower cost per acquisition
                  </span>
                </div>
                <div className="hover-shadow mb-10 rounded bg-white p-12 dark:bg-slate-800">
                  <span className="text-green mb-3 block text-3xl font-bold md:text-5xl">
                    150%
                  </span>
                  <span className="text-md font-medium text-foreground dark:text-white">
                    More organic traffic
                  </span>
                </div>
              </div>
              <div className="w-full lg:mt-10 lg:w-1/2">
                <div className="hover-shadow mb-10 rounded bg-white p-12 dark:bg-slate-800">
                  <span className="text-green mb-3 block text-3xl font-bold md:text-5xl">
                    86%
                  </span>
                  <span className="text-md font-medium text-foreground dark:text-white">
                    More inbound leads
                  </span>
                </div>
                <div className="hover-shadow rounded bg-white p-12 dark:bg-slate-800">
                  <span className="text-green mb-3 block text-3xl font-bold md:text-5xl">
                    24%
                  </span>
                  <span className="text-md font-medium text-foreground dark:text-white">
                    Decrease in bounce rate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionResults;
