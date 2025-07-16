"use client";

import { Github } from "lucide-react";

export function GitHubRepo() {
  return (
    <span className="xs before:content-[attr(data-tip)]tooltip before:text- tooltip-bottom">
      <div className="flex-none items-center">
        <a
          aria-label="Github"
          target="_blank"
          href="https://github.com/SofiaBargues/frontend-30"
          rel="noopener, noreferrer"
          className="link normal-case"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>
    </span>
  );
}
