"use client";

import { Github, Star } from "lucide-react";

export function StarOnGithubButton() {
  return (
    <a
      href="https://github.com/SofiaBargues/frontend-30"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-1.5 rounded-lg bg-gradient-to-r p-3 px-4 py-2 hover:bg-gray-600 hover:opacity-90 hover:drop-shadow-2xl dark:from-[#6ef195] dark:to-[#00e3fd]"
    >
      <Github className="h-4 w-4 text-primary-content" />
      <span className="hidden text-sm font-semibold text-primary-content sm:block">
        Star
      </span>
      <Star className="hidden h-5 w-5 fill-current text-primary-content group-hover:text-yellow-400 sm:block" />
    </a>
  );
}
