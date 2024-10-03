"use client";

import { Github as GithubLucide } from "lucide-react";

export function GitHubRepo() {
  return (
    <span className="before:text-xs before:content-[attr(data-tip)]">
      <div className="flex-none items-center">
        <a
          aria-label="Github"
          target="_blank"
          href="https://github.com/SofiaBargues/frontend-30"
          rel="noopener, noreferrer"
          className="btn-ghost drawer-button btn-square btn normal-case"
        >
          <GithubLucide />
        </a>
      </div>
    </span>
  );
}
