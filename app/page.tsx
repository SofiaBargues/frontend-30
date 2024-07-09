"use client";

import { cn } from "mxcn";
import { text } from "stream/consumers";
import { Item } from "./component/Item";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { HTMLCSS, HTMLCSSJS } from "./component/data";
import { ThemeChange } from "./component/ThemeChange";
import { LinkedIn } from "./component/LinkedIn";
import { GitHub } from "./component/GitHub";
import { Step } from "./component/Step";

var alignments = [
  "left-0",
  "left-11",
  "left-16",
  "left-11",
  "left-0",
  "right-11",
  "right-16",
  "right-11",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-base-100 text-base-content">
      <nav className="navbar fixed top-0 z-10 justify-between border-b-2 border-b-primary bg-base-300 text-base-content">
        <Link href="/">
          <div id="group1 " className="btn-ghost btn ml-2 flex gap-2">
            <div>
              <label className="avatar">
                <div className="w-10 rounded-full border-2">
                  <img src="/avatarColor.png" alt=" " />
                </div>
              </label>
            </div>
            <div>
              <p className="text-xl font-bold normal-case">Frontend 30</p>
            </div>
          </div>
        </Link>

        <div id="group2" className="flex gap-2">
          <GitHub />
          <LinkedIn />
          <ThemeChange dropdownClasses="..." />
        </div>
      </nav>
      <main className="container flex w-full flex-col items-center pb-24">
        <Hero />
        <div className="flex w-full flex-col items-center">
          <Section name="HTML + CSS" items={HTMLCSS} />
          <Section name="HTML + CSS + JS" items={HTMLCSSJS} />
        </div>
      </main>
      <footer className="footer footer-center fixed bottom-0 mt-20 bg-primary p-4 text-primary-content">
        <div>
          <p>
            Sofia Bargues - 2024 -
            <a
              className="link hover:text-primary-content/80"
              target="_blank"
              href="mailto: barguessofia@gmail.com"
            >
              barguessofia@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

let statementImg = (
  <svg
    fill="#000000"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M12.17 1.272a.732.732 0 0 0-.718.732v13.914a.732.732 0 0 0 .732.732.732.732 0 0 0 .732-.732V2.004a.732.732 0 0 0-.745-.732zM23.246 5.44a.734.734 0 0 0-.277.063l-6.282 2.804a.733.733 0 0 0 0 1.336l6.282 2.813a.738.738 0 0 0 .3.065.732.732 0 0 0 .297-1.4L18.78 8.976l4.786-2.137a.734.734 0 0 0 .37-.966.734.734 0 0 0-.69-.433zm-22.5 5.032a.732.732 0 0 0-.722.915c1.736 6.677 7.775 11.341 14.683 11.341a.732.732 0 0 0 0-1.464A13.706 13.706 0 0 1 1.44 11.02a.732.732 0 0 0-.694-.547z"></path>
    </g>
  </svg>
);

function Section({ name, items }: { name: string; items: Item[] }) {
  return (
    <section className="flex w-full flex-col items-stretch">
      <SectionHeader text={name} />
      <div className="flex flex-col items-center gap-8 pb-8">
        {items.map(itemToStep)}
      </div>
    </section>
  );
}

function itemToStep(item: Item, index: number, items: Item[]) {
  const alignmentIndex =
    index === items.length - 1 ? 0 : index % alignments.length;
  return (
    <Step
      name={item.name}
      type={item.type}
      githubUrl={item.githubUrl}
      demoUrl={item.demoUrl}
      description={item.description}
      alignment={alignments[alignmentIndex]}
      statementUrl={item.statementUrl}
      tutorialUrl={item.tutorialUrl}
      disabled={!item.completed}
      key={item.name}
      item={item}
      imgSource={item.imgSource}
    ></Step>
  );
}

function SectionHeader({ text }: { text: string }) {
  return (
    <header className="mb-6 mt-6 bg-secondary p-4 md:mx-10 md:rounded-xl">
      <h2 className="text-center text-2xl font-semibold text-secondary-content sm:text-3xl lg:text-4xl">
        {text}
      </h2>
    </header>
  );
}

function Hero({}: {}) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="flex flex-col items-center">
          <h1 className="max-w-2xl text-5xl font-bold sm:text-7xl lg:text-8xl">
            My
            <br />
            <div className="h-12 sm:h-[4.5rem] lg:h-24">
              <Typewriter
                options={{
                  wrapperClassName: "text-primary",
                  strings: ["Web Dev", "Learning", "Exploring", "Programming"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <span>Adventure</span>
          </h1>
          <p className="mt-2 max-w-xl py-6 sm:text-xl lg:text-2xl">
            {
              "Let's create awesome websites together! I'll share the courses and projects I'm working on. I hope it inspires other beginners while showing my growth. Let's explore web development together!"
            }
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}

export interface StepProps {
  name: string;
  description: string;
  alignment: string;
  disabled?: boolean;
  type: string;
  item: Item;
  statementUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  tutorialUrl?: string;
  imgSource?: string;
}
