import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <div className="bg-white dark:bg-[#121212] text-zinc-900 dark:text-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold border-b-2 border-purple-600 inline-block pb-2 tracking-wide">
            {t("title")}
          </h2>

          <p className="text-zinc-500 text-sm mt-3">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">

            <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-4">
              {t("direct.title")}
            </h3>

            <div className="space-y-3 text-zinc-700 dark:text-zinc-300 text-sm">

              <p className="flex items-center gap-2">
                <span className="text-zinc-500">📍</span>
                {t("direct.location")}
              </p>

              <p className="flex items-center gap-2">
                <span className="text-zinc-500">📞</span>

                <a
                  href="tel:+905395443104"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {t("direct.phone")}
                </a>
              </p>

            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">

            <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-4">
              {t("social.title")}
            </h3>

            <div className="space-y-3 text-sm">

              <p className="flex items-center gap-2">
                <span className="text-zinc-500">🔗</span>
                <a
                  href="https://www.linkedin.com/in/gozdekosa/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-purple-500"
                >
                  {t("social.linkedin")}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <span className="text-zinc-500">💻</span>
                <a
                  href="https://github.com/gozdekosa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-purple-500"
                >
                  {t("social.github")}
                </a>
              </p>

            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between items-start">

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                {t("email.title")}
              </h3>

              <p className="text-zinc-500 text-xs mb-4">
                {t("email.description")}
              </p>
            </div>

            <a
              href="mailto:gozdekosaa@hotmail.com"
              className="
                inline-block
                w-full
                text-center
                px-5 py-2
                border border-purple-500
                rounded-full
                text-xs font-semibold tracking-wide
                text-purple-700 dark:text-purple-300
                hover:bg-purple-600 hover:text-white
                transition-all duration-300
              "
            >
              {t("email.button")}
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;