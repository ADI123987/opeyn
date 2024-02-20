import SectionTitle from "./section-title";

const faqCol1 = [
  {
    title: "14-day trial",
    content:
      "Monthly Tracked People are unique visitors that engage in an Event on your website or with your product, that gets tracked by you in Margin. Learn more about Margin Analyze to see how Events and Properties work together for you to gain insight into everything people do.",
  },
  {
    title: "Recovering an expired account",
    content:
      "While it sometimes makes sense to work with prospective clients on a trial basis, making sure they can ultimately afford your services is a big consideration when qualifying a lead.",
  },
  {
    title: "Do they have a good reputation?",
    content:
      "Clients with a good history of payments who are easy to work with will save you time and stress down the road and make for a much better business relationship.",
  },
];

const faqCol2 = [
  {
    title: "How can I cancel my subscription?",
    content:
      "Monthly Tracked People are unique visitors that engage in an Event on your website or with your product, that gets tracked by you in Margin. Learn more about Margin Analyze to see how Events and Properties work together for you to gain insight into everything people do.",
  },
  {
    title: "What elements of your offers would be the best fit for me?",
    content:
      "While it sometimes makes sense to work with prospective clients on a trial basis, making sure they can ultimately afford your services is a big consideration when qualifying a lead.",
  },
  {
    title: "What is Campaigns?",
    content:
      "Clients with a good history of payments who are easy to work with will save you time and stress down the road and make for a much better business relationship.",
  },
];

const SectionFAQLayout2 = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionTitle
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center"
          subtitleClasses="text-md font-medium"
        >
          Frequently asked questions
        </SectionTitle>
        <div className="flex flex-wrap lg:flex-nowrap lg:space-x-10">
          <div className="w-full lg:w-1/2">
            {faqCol1.map(({ title, content }, index) => (
              <div key={index} className="mb-12">
                {title && <h3 className="mb-4 text-md">{title}</h3>}
                {content && <p>{content}</p>}
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2">
            {faqCol2.map(({ title, content }, index) => (
              <div key={index} className="mb-12">
                {title && <h3 className="mb-4 text-md">{title}</h3>}
                {content && <p>{content}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center text-lg">
          Any Question?{" "}
          <a href="mailto:support@margin.com" className="text-primary">
            support@margin.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionFAQLayout2;
