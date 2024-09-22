"use client";
import { useEffect } from "react";
import { themeChange } from "theme-change";
export const themes = [{ id: "emerald" }, { id: "forest" }];
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
                  <button
                    data-v-ace21af6=""
                    data-v-0a96652a=""
                    data-v-02702ac2=""
                    className="VPSwitch VPSwitchAppearance"
                    type="button"
                    role="switch"
                    title="Switch to light theme"
                    aria-checked="true"
                  >
                    <span data-v-ace21af6="" className="check">
                      <span data-v-ace21af6="" className="icon">
                        <span data-v-0a96652a="" className="vpi-sun sun"></span>
                        <span
                          data-v-0a96652a=""
                          className="vpi-moon moon"
                        ></span>
                      </span>
                    </span>
                  </button>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
