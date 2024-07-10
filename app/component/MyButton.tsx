"use client";

import { YoutubeIcon } from "lucide-react";
import { GitHub, GithubIcon } from "./GitHub";
import { StatementIcon } from "./StatementIcon";
import { DemoIcon } from "./DemoIcon";

type ButtonTypes = "github" | "statement" | "demo" | "tutorial";

const buttonStyle = {
  github: { color: "border-black", img: <GithubIcon /> },
  statement: {
    color: " border-blue-500 text-blue-500 ",
    img: <StatementIcon />,
  },
  demo: { color: " border-secondary text-secondary", img: <DemoIcon /> },
  tutorial: { color: " border-red-600 text-red-600", img: <YoutubeIcon /> },
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
          " flex-none items-center rounded-lg border p-4"
        }
      >
        <div className="flex">
          {buttonStyle[type].img}
          {name}
        </div>
      </button>
    </a>
  );
}
