"use client";

import { Linkedin } from "lucide-react";

export function LinkedIn() {
  return (
    <span className="xs before:content-[attr(data-tip)]tooltip tooltip-bottom before:text-">
      <div className="flex-none items-center">
        <a
          aria-label="LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/in/sofia-bargues/"
          rel="noopener, noreferrer"
          className="link normal-case"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </span>
  );
}
