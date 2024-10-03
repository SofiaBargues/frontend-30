"use client";

import { GithubIcon, Globe, YoutubeIcon } from "lucide-react";

type ButtonTypes = "github" | "statement" | "demo" | "tutorial";

const buttonStyle = {
  github: {
    color: "border-black text-black",
    bgColor: " hover:border-black hover:text-base-100 hover:bg-black",
    img: <GithubIcon />,
  },
  demo: {
    color: " border-secondary text-secondary",
    bgColor: " hover:border-secondary hover:text-base-100 hover:bg-secondary ",
    img: <Globe />,
  },

  tutorial: {
    color: " border-red-600 text-red-600 ",
    bgColor: " hover:border-red-600 hover:text-base-100 hover:bg-red-600 ",
    img: <YoutubeIcon className="h-4 w-4 sm:h-6 sm:w-6" />,
  },
};

export function MyButton({
  url,
  name,
  type,
}: {
  url: any;
  name: string;
  type: ButtonTypes;
}) {
  return (
    <span
      className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
      data-tip={name}
    >
      <div className="flex-none items-center">
        <a
          aria-label="Github"
          target="_blank"
          href={url}
          rel="noopener, noreferrer"
        >
          <button
            className={
              // buttonStyle[type].color +
              // buttonStyle[type].bgColor +
              // buttonStyle[type].bgColor +
              " " + " text-xs xl:p-2 xl:text-sm"
            }
          >
            <div className="flex items-center justify-center gap-1">
              <div className="">{buttonStyle[type].img}</div>
              {/* <p>{name}</p> */}
            </div>
          </button>
        </a>
      </div>
    </span>
  );
}
