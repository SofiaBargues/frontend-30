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

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col items-center  text-base-content bg-base-100">
      <div className="navbar text-base-content bg-base-300">
        <div className="flex-1">
          <a className=" font-bold normal-case text-xl ">Road Map</a>
        </div>
        <div className="flex-none gap-2">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/avatar.png" />
            </div>
          </label>
        </div>
      </div>
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
