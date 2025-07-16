"use client";

import { Email } from "./Email";
import { GitHubRepo } from "./GitHub";
import { LinkedIn } from "./LinkedIn";

export function Footer() {
  return (
    <footer className="footer footer-center fixed bottom-0 z-50 mt-10 bg-primary p-2 text-primary-content">
      <div className="flex items-center">
        <p className="font-semibold">Sofia Bargues</p>
        <GitHubRepo />
        <LinkedIn />
        <Email />
      </div>
    </footer>
  );
}
