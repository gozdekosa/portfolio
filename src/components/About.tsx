import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <div className="dark:bg-[#121212] dark:text-white text-zinc-900 bg-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-purple-600 inline-block pb-2 tracking-wide">
            {t("title")}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          <div className="lg:basis-4/6 space-y-4 lg:p-10">
            <p className="text-2xl lg:text-3xl font-bold dark:text-white text-zinc-950">
              {t("before_name")}{" "}
              <span className="text-purple-400">Gözde Kösa</span>
              {t("after_name")}
            </p>

            <p className="dark:text-zinc-400 text-zinc-900 text-sm">
              {t("description_1")}
            </p>

            <p className="dark:text-zinc-400 text-zinc-900 text-sm">
              {t("description_2")}
            </p>
          </div>

          <div className="lg:basis-2/6">
            <ul className="dark:text-zinc-400 text-zinc-900 text-sm lg:pt-12 px-0 lg:px-5 space-y-4 font-bold">
              <li>
                Name: <span className="font-normal">{t("info.name")}</span>
              </li>
              <li>
                Email: <span className="font-normal">{t("info.email")}</span>
              </li>
              <li>
                Age: <span className="font-normal">{t("info.age")}</span>
              </li>
              <li>
                From: <span className="font-normal">{t("info.from")}</span>
              </li>
            </ul>

            <a
              href="/cv.pdf"
              download
              className="inline-block mt-6 bg-transparent border-2 border-purple-600 text-lg font-bold text-purple-400 px-5 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300"
            >
              {t("download_cv")}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;