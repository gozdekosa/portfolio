import { useTranslations } from "next-intl";

const Experience = () => {
  const t = useTranslations("Experience");

  return (
    <div className="bg-white dark:bg-[#121212] text-zinc-900 dark:text-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-purple-600 inline-block pb-2 tracking-wide">
            {t("title")}
          </h2>
        </div>

        <div className="relative border-l border-zinc-300 dark:border-zinc-800 ml-4 md:ml-6 pl-6 md:pl-8 space-y-12">

          <div className="relative">

            <span className="absolute -left-[31px] md:-left-[39px] top-1.5 bg-purple-600 w-4 h-4 rounded-full border-4 border-white dark:border-[#121212] ring-4 ring-purple-600/20"></span>

            <div className="bg-zinc-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1">

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-wide">
                    {t("job.title")}
                  </h3>

                  <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mt-1">
                    {t("job.company")} •{" "}
                    <span className="text-zinc-500 font-normal">
                      {t("job.location")}
                    </span>
                  </p>
                </div>

                <div className="inline-block self-start md:self-center px-3 py-1 bg-zinc-100 dark:bg-zinc-950 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30">
                  {t("job.period")}
                </div>
              </div>

              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 text-sm">
                {t.raw("items").map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1 flex-shrink-0">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;