"use client";

import { YoutubeIcon } from "lucide-react";
import { GitHub, GithubIcon } from "./GitHub";
import { StatementIcon } from "./StatementIcon";
import { DemoIcon } from "./DemoIcon";

type ButtonTypes = "github" | "statement" | "demo" | "tutorial";

const buttonStyle = {
  github: {
    color: "border-black text-black ",
    bgColor: " hover:border-black hover:text-base-100 hover:bg-black ",
    img: <GithubIcon className="h-4 w-4 md:h-4 md:w-4" />,
  },
  statement: {
    color: " border-blue-500 text-blue-500 ",
    bgColor: " hover:text-base-100 hover:bg-blue-500 ",
    img: <StatementIcon />,
  },
  demo: {
    color: " border-secondary text-secondary",
    bgColor: " hover:border-secondary hover:text-base-100 hover:bg-secondary ",
    img: <DemoIcon />,
  },

  tutorial: {
    color: " border-red-600 text-red-600",
    bgColor: " hover:border-red-600 hover:text-base-100 hover:bg-red-600 ",
    img: <YoutubeIcon />,
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
              {/* // TODO: Insert icon again */}
              <div className="h-4 w-4">{buttonStyle[type].img}</div>
              {/* <p>{name}</p> */}
            </div>
          </button>
        </a>
      </div>
    </span>
  );
}
