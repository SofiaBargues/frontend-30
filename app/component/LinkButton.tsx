"use client";

import { GithubIcon, Globe, YoutubeIcon } from "lucide-react";

type ButtonTypes = "github" | "demo" | "tutorial";

const buttonStyle = {
  github: {
    img: <GithubIcon className="h-4 w-4 sm:h-6 sm:w-6" />,
  },
  demo: {
    img: <Globe className="h-4 w-4 sm:h-6 sm:w-6" />,
  },
  tutorial: {
    img: <YoutubeIcon className="h-4 w-4 sm:h-6 sm:w-6" />,
  },
};

export function LinkButton({
  url,
  name,
  type,
}: {
  url: string;
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
          <button className={"text-xs xl:p-2 xl:text-sm"}>
            <div className="flex items-center justify-center gap-1">
              <div className="">{buttonStyle[type].img}</div>
            </div>
          </button>
        </a>
      </div>
    </span>
  );
}
