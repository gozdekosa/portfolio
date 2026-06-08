"use client";

import { Locale, useLocale } from "next-intl";

type Props = {
  changeLocaleAction: (locale: Locale) => Promise<void>;
};

const LocaleSwitcher = ({ changeLocaleAction }: Props) => {
  const locale = useLocale();

  return (
    <div
      className="
        flex
        items-center
        p-1
        rounded-full
        border
        border-zinc-300
        dark:border-zinc-700
        bg-white/80
        dark:bg-zinc-900/80
        backdrop-blur-md
        shadow-md
      "
    >
      {(["en", "tr"] as Locale[]).map((cur) => {
        const active = locale === cur;

        return (
          <button
            key={cur}
            onClick={() => changeLocaleAction(cur)}
            className={`
              px-4 py-2
              text-sm
              font-medium
              rounded-full
              transition-all
              duration-300
              ${
                active
                  ? `
                    bg-purple-500
                    text-white
                    shadow-sm
                  `
                  : `
                    text-zinc-700
                    dark:text-zinc-200
                    hover:text-purple-600
                    dark:hover:text-purple-400
                  `
              }
            `}
          >
            {cur.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default LocaleSwitcher;