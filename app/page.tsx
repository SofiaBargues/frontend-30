"use client";

import { data } from "./data";
import { LinkedIn } from "./component/LinkedIn";
import { GitHubRepo } from "./component/GitHub";
import { Hero } from "./component/Hero";
import { Email } from "./component/Email";
import { NavBar } from "./component/NavBar";
import { Footer } from "./component/Footer";
import { Challenges } from "./component/Challenges";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-base-200 text-base-content">
      <NavBar />
      <main className="container flex w-full flex-col items-center pb-24">
        <Hero />
        <div className="flex w-full flex-col items-center">
          <Challenges items={data} />
        </div>
      </main>
      <Footer />
      <footer className="footer footer-center fixed bottom-0 z-50 mt-10 bg-primary p-2 text-primary-content">
        <div className="flex items-center">
          <p className="font-semibold">Sofia Bargues</p>
          <GitHubRepo />
          <LinkedIn />
          <Email />
        </div>
      </footer>
    </div>
  );
}
