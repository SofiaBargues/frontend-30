"use client";

import Link from "next/link";
import { Route } from "lucide-react";
import { StarOnGithubButton } from "./StarOnGithubButton";
import { ThemeChange } from "./ThemeChange";

export function NavBar() {
  return (
    <nav className="navbar min-h-8 fixed top-0 z-50 justify-between border-b-2 border-b-primary bg-base-300 p-1 text-base-content">
      <Link href="/" className="btn-ghost btn m-2 flex gap-2 align-middle">
        <Route />
        <p className="text-xl font-bold normal-case">Frontend 30</p>
      </Link>
      <div className="m-2 flex gap-2 pr-2">
        <StarOnGithubButton />
        <ThemeChange />
      </div>
    </nav>
  );
}
