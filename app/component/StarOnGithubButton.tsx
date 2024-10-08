"use client";

import { Star } from "lucide-react";

type ButtonTypes = "statement";

export function StarOnGithubButton({
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
      href="https://github.com/SofiaBargues/frontend-30"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6ef195] to-[#00e3fd] p-3 px-4 py-2 hover:bg-gray-600 hover:opacity-90 hover:drop-shadow-2xl"
    >
      <span className="text-sm font-semibold text-gray-600">
        Star on GitHub
      </span>
      <Star className="h-5 w-5 fill-current text-gray-600 group-hover:text-yellow-400" />
    </a>
  );
}
