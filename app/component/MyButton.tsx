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
    img: <GithubIcon />,
  },
  statement: {
    color: " border-blue-500 text-blue-500 ",
    bgColor: "  hover:text-base-100 hover:bg-blue-500 ",
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
    <a
      aria-label="Github"
      target="_blank"
      href={url}
      rel="noopener, noreferrer"
    >
      <button
        className={
          buttonStyle[type].color +
          buttonStyle[type].bgColor +
          " " +
          " rounded-lg border p-1 text-sm xl:p-4 xl:text-base"
        }
      >
        <div className="flex items-center">
          {buttonStyle[type].img}
          {name}
        </div>
      </button>
    </a>
  );
}
