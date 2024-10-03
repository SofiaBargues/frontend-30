"use client";

import { Linkedin, LucideTentTree, Mail } from "lucide-react";

export function Email() {
  return (
    <span className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]">
      <div className="flex-none items-center">
        <a
          aria-label="LinkedIn"
          target="_blank"
          href="mailto: barguessofia@gmail.com"
          rel="noopener, noreferrer"
          className="drawer-button link normal-case"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </span>
  );
}
