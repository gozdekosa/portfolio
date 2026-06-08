import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("Skills");

  return (
    <div className="bg-white dark:bg-[#121212] text-zinc-900 dark:text-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-purple-600 inline-block pb-2 tracking-wide">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-zinc-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              {t("frontend.title")}
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
              {t("frontend.description")}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-zinc-100 dark:bg-zinc-900 text-xs px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-700">
                {t("frontend.tags.state")}
              </span>

              <span className="bg-zinc-100 dark:bg-zinc-900 text-xs px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-700">
                {t("frontend.tags.tailwind")}
              </span>

              <span className="bg-zinc-100 dark:bg-zinc-900 text-xs px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-700">
                {t("frontend.tags.shadcn")}
              </span>
            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              {t("architecture.title")}
            </h3>

            <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-2 list-disc list-inside">
              {t.raw("architecture.items").map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              {t("backend.title")}
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
              {t("backend.description")}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-zinc-100 dark:bg-zinc-900 text-[10px] uppercase tracking-wider font-bold text-zinc-600 dark:text-zinc-500 px-2 py-1 rounded border border-zinc-300 dark:border-zinc-800">
                {t("backend.tags.api")}
              </span>

              <span className="bg-zinc-100 dark:bg-zinc-900 text-[10px] uppercase tracking-wider font-bold text-zinc-600 dark:text-zinc-500 px-2 py-1 rounded border border-zinc-300 dark:border-zinc-800">
                {t("backend.tags.microservice")}
              </span>
            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              {t("tools.title")}
            </h3>

            <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-2">
              {t.raw("tools.items").map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 bg-transparent p-6 rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-800 hover:border-purple-500/30 transition-all duration-500 group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

              <div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-300 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {t("learning.title")}
                </h3>

                <p className="text-zinc-500 text-sm mt-1">
                  {t("learning.subtitle")}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {t.raw("learning.items").map((item: string, i: number) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900/50 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-800 group-hover:border-purple-400/50 dark:group-hover:border-purple-900/50"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;