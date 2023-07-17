"use client";

import Image from "next/image";
import {
  Book,
  Camera,
  Cat,
  Fish,
  IterationCcw,
  Languages,
  PhoneCallIcon,
  Star,
} from "lucide-react";
import { cn } from "mxcn";
import { text } from "stream/consumers";
import { themeChange } from "theme-change";
import { useEffect } from "react";

type Item = {
  name: string;
  description: string;
  type: string;
  completed: boolean;
};

const HTMLitems: Item[] = [
  {
    name: "Video Course",
    description: "Empty",
    type: "start",
    completed: true,
  },
  {
    name: "Basic HTML",
    description: "Empty",
    type: "course",
    completed: true,
  },
  {
    name: "Forms",
    description: "Empty",
    type: "course",
    completed: true,
  },
  {
    name: "Form project",
    description: "Empty",
    type: "course",
    completed: true,
  },
  {
    name: "Basic accessibility",
    description: "Empty",
    type: "course",
    completed: true,
  },
  {
    name: "Tribute page project",
    description: "Empty",
    type: "course",
    completed: true,
  },
];

const CSSitems: Item[] = [
  {
    name: "Video Course",
    description: "Empty",
    type: "start",
    completed: true,
  },
  {
    name: "Basic CSS",
    description: "Empty",
    type: "start",
    completed: true,
  },
  {
    name: "Colors",
    description: "Empty",
    type: "course",
    completed: true,
  },
  {
    name: "Box model",
    description: "Empty",
    type: "course",
    completed: true,
  },
  {
    name: "Flexbox",
    description: "Empty",
    type: "start",
    completed: true,
  },
  {
    name: "Typography",
    description: "Empty",
    type: "course",
    completed: true,
  },
  {
    name: "Pseudo selectors",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Intermediate CSS",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Responsive design",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Documentation page project",
    description: "Empty",
    type: "start",
    completed: false,
  },
  {
    name: "Variables",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Grid",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Landing page project",
    description: "Empty",
    type: "start",
    completed: false,
  },
  {
    name: "Animations",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Transforms",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Portfolio web project",
    description: "Empty",
    type: "course",
    completed: false,
  },
];

const StaticSiteItems: Item[] = [
  {
    name: "Website 1",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Website 2",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Website 3",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Portfolio",
    description: "Empty",
    type: "course",
    completed: false,
  },
];

const GitItems: Item[] = [
  {
    name: "Video Course",
    description: "Empty",
    type: "start",
    completed: false,
  },
  {
    name: "Basic",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Practice 1",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Practice 2",
    description: "Empty",
    type: "course",
    completed: false,
  },
];

const JSItems: Item[] = [
  {
    name: "Video Course JS",
    description: "Empty 1",
    type: "course",
    completed: true,
  },
  {
    name: "Basic JavaScript",
    description: "Empty  2",
    type: "course",
    completed: false,
  },
];
const ReactItems: Item[] = [
  {
    name: "Video Course",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "Basic React",
    description: "Empty",
    type: "course",
    completed: false,
  },
];

const IntAppItems: Item[] = [
  {
    name: "App 1",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "App 2",
    description: "Empty",
    type: "course",
    completed: false,
  },
  {
    name: "App 3",
    description: "Empty",
    type: "course",
    completed: false,
  },
];

const JobItems: Item[] = [
  {
    name: "Job search",
    description: "Empty",
    type: "course",
    completed: false,
  },
];

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

const themes = [
  { id: "light" },
  { id: "dark" },
  { id: "cupcake" },
  { id: "bumblebee" },
  { id: "emerald" },
  { id: "corporate" },
  { id: "synthwave" },
  { id: "retro" },
  { id: "cyberpunk" },
  { id: "valentine" },
  { id: "halloween" },
  { id: "garden" },
  { id: "forest" },
  { id: "aqua" },
  { id: "lofi" },
  { id: "pastel" },
  { id: "fantasy" },
  { id: "wireframe" },
  { id: "black" },
  { id: "luxury" },
  { id: "dracula" },
  { id: "cmyk" },
  { id: "autumn" },
  { id: "business" },
  { id: "acid" },
  { id: "lemonade" },
  { id: "night" },
  { id: "coffee" },
  { id: "winter" },
];

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col items-center text-base-content bg-base-100 ">
      <nav className="navbar text-base-content bg-base-300 justify-between ">
        <div id="group1" className=" flex gap-2">
          <div>
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/avatar.png" />
              </div>
            </label>
          </div>
          <div>
            <a className=" font-bold normal-case text-xl ">Road Map</a>
          </div>
        </div>

        <div id="group2" className="flex gap-2">
          <ThemeChange dropdownClasses="..." />
          <GitHub />
        </div>
      </nav>
      <main className="flex flex-col items-center  w-full pb-24 pt-6">
        <div className="flex flex-col items-center w-full ">
          <Section name="HTML" items={HTMLitems} />
          <Section name="CSS" items={CSSitems} />
          <Section name="Static websites" items={StaticSiteItems} />
          <Section name="Git" items={GitItems} />
          <Section name="JavaScript and DOM" items={JSItems} />
          <Section name="React" items={ReactItems} />
          <Section name="Interactive apps" items={IntAppItems} />
          <Section name="Job search" items={JobItems} />
        </div>
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-20 fixed bottom-0">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
}

function ThemeChange({
  dropdownClasses = "",
  btnClasses = "btn-ghost",
  contentClasses = "mt-16",
}) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div
      title="Change Theme"
      className={`dropdown dropdown-end ${dropdownClasses}`}
    >
      <div tabIndex={0} className={`btn normal-case ${btnClasses}`}>
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <span className="hidden font-normal md:inline">
          {/* {t("change-theme-btn")} */}
        </span>
        <svg
          width="12px"
          height="12px"
          className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </div>
      <div
        tabIndex={0}
        className={`dropdown-content z-[1] menu  bg-base-200 text-base-content rounded-box top-px h-[70vh] max-h-96 w-56 overflow-y-auto shadow ${contentClasses}`}
      >
        <div className="grid grid-cols-1 gap-3 p-3">
          {themes.map((theme) => (
            <button
              key={theme.id}
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme={theme.id}
              data-act-class="[&_svg]:visible"
            >
              <div
                data-theme={theme.id}
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="invisible h-3 w-3 shrink-0"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                    </svg>
                    <div className="flex-grow text-sm">{theme.id}</div>
                    <div className="flex h-full flex-shrink-0 flex-wrap gap-1">
                      <div className="bg-primary w-2 rounded" />
                      <div className="bg-secondary w-2 rounded" />
                      <div className="bg-accent w-2 rounded" />
                      <div className="bg-neutral w-2 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function GitHub() {
  return (
    <span
      className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
      data-tip="GitHub"
    >
      <div className="flex-none items-center">
        <a
          aria-label="Github"
          target="_blank"
          href="https://github.com/SofiaBargues/roadmap"
          rel="noopener, noreferrer"
          className="btn btn-ghost drawer-button btn-square normal-case"
        >
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="inline-block h-5 w-5 fill-current md:h-6 md:w-6"
          >
            <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
          </svg>
        </a>
      </div>
    </span>
  );
}

function Section({ name, items }: { name: string; items: Item[] }) {
  return (
    <section className="flex flex-col  w-full items-stretch">
      <SectionHeader text={name} />
      <div className="flex flex-col items-center pb-8 ">
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
      text={item.name}
      type={item.type}
      description={item.description}
      alignment={alignments[alignmentIndex]}
      disabled={!item.completed}
      key={item.name}
    />
  );
}

function SectionHeader({ text }: { text: string }) {
  return (
    <header className=" mt-6 mb-6 bg-primary p-4 md:mx-10 md:rounded-xl">
      <h1 className="text-center text-2xl">{text}</h1>
    </header>
  );
}

function Step({
  alignment,
  type,
  text,
  description,
  disabled = false,
}: {
  alignment: string;
  type: string;
  text: string;
  description: string;
  disabled?: boolean;
}) {
  let icon = <></>;

  if (type == "course") {
    icon = <Book size={32} />;
  } else if (type == "start") {
    icon = <Star size={32} />;
  } else {
    icon = <Cat size={32} />;
  }

  return (
    <div className={cn("relative mt-5", alignment)}>
      <div className="flex flex-col items-center ">
        <button
          className={cn(
            "btn btn-circle  btn-lg border-4 border-primary",
            disabled && "btn-disabled border-primary/20"
          )}
          onClick={() =>
            (document.getElementById(text) as HTMLDialogElement).showModal()
          }
        >
          {icon}
        </button>
        <dialog id={text} className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">{text}</h3>
            <p className="py-4">{description}</p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
        <p className={cn("ml-3 text-lg", disabled && "text-base-content/20")}>
          {text}
        </p>
      </div>
    </div>
  );
}
