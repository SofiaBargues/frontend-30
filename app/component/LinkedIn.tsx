"use client";

import { Linkedin } from "lucide-react";

export function LinkedIn() {
  return (
    <span
      className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
      data-tip="LinkedIn"
    >
      <div className="flex-none items-center">
        <a
          aria-label="LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/in/sofia-bargues/"
          rel="noopener, noreferrer"
          className="btn-ghost drawer-button btn-square btn normal-case"
        >
          <Linkedin />
        </a>
      </div>
    </span>
  );
}
