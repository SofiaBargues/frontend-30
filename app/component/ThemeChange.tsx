"use client";
import { useEffect } from "react";
import { themeChange } from "theme-change";
export const themes = [
  { id: "light" },
  { id: "dark" },
  { id: "cupcake" },
  { id: "bumblebee" },
  { id: "emerald" },
  { id: "corporate" },
  { id: "synthwave" },
  { id: "retro" },
  { id: "cyberpunk" },
  { id: "valentine" },
  { id: "halloween" },
  { id: "garden" },
  { id: "forest" },
  { id: "aqua" },
  { id: "lofi" },
  { id: "pastel" },
  { id: "fantasy" },
  { id: "wireframe" },
  { id: "black" },
  { id: "luxury" },
  { id: "dracula" },
  { id: "cmyk" },
  { id: "autumn" },
  { id: "business" },
  { id: "acid" },
  { id: "lemonade" },
  { id: "night" },
  { id: "coffee" },
  { id: "winter" },
];
export function ThemeChange({
  dropdownClasses = "",
  btnClasses = "btn-ghost",
  contentClasses = "mt-16 border-2 border-primary",
}) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div
      title="Change Theme"
      className={`dropdown-end dropdown ${dropdownClasses}`}
    >
      <div tabIndex={0} className={`btn normal-case ${btnClasses}`}>
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <span className="hidden font-normal md:inline">
          {/* {t("change-theme-btn")} */}
        </span>
        <svg
          width="12px"
          height="12px"
          className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </div>
      <div
        tabIndex={0}
        className={`dropdown-content menu rounded-box top-px z-[1] bg-base-200 p-3 text-base-content shadow ${contentClasses}`}
      >
        <div className="h-[70vh] max-h-96 w-56 overflow-y-auto">
          <div className="grid grid-cols-1 gap-3 pr-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                className="overflow-hidden rounded-lg text-left outline-base-content"
                data-set-theme={theme.id}
                data-act-class="[&_svg]:visible"
              >
                <div
                  data-theme={theme.id}
                  className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
                >
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="invisible h-3 w-3 shrink-0"
                      >
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                      </svg>
                      <div className="flex-grow text-sm">{theme.id}</div>
                      <div className="flex h-full flex-shrink-0 flex-wrap gap-1">
                        <div className="w-2 rounded bg-primary" />
                        <div className="w-2 rounded bg-secondary" />
                        <div className="w-2 rounded bg-accent" />
                        <div className="w-2 rounded bg-neutral" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
