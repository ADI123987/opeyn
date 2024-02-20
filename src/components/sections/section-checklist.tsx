import CheckLineIcon from "remixicon-react/CheckLineIcon";

const SectionChecklist = () => {
  return (
    <section className="pb-28">
      <div className="container relative z-10 -mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-md bg-white px-6 py-16 text-center shadow-lg dark:bg-slate-800 dark:shadow-slate-850/20 sm:px-12">
            <h3 className="mb-6">
              Sales organisations are able to set and manage performance goals
            </h3>
            <div className="flex flex-wrap text-left md:flex-nowrap md:space-x-10">
              <div className="w-full md:w-1/2">
                <div className="mb-1 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                    Develop a comprehensive paid search strategy
                  </span>
                </div>
                <div className="mb-1 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                    Monitor performance throughout each sales
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="mb-1 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                    Ensure each task is assigned to the right person
                  </span>
                </div>
                <div className="mb-1 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                    Clear communication can easily manage
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

export default SectionChecklist;
