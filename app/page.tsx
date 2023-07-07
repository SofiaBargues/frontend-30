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

type Item = {
  name: string;
  type: string;
  completed: boolean;
};

const HTMLitems: Item[] = [
  {
    name: "Video Course",
    type: "start",
    completed: true,
  },
  {
    name: "Basic HTML",
    type: "course",
    completed: true,
  },
  {
    name: "Forms",
    type: "course",
    completed: true,
  },
  {
    name: "Form project",
    type: "course",
    completed: true,
  },
  {
    name: "Basic accessibility",
    type: "course",
    completed: true,
  },
  {
    name: "Tribute page project",
    type: "course",
    completed: false,
  },
];

const CSSitems: Item[] = [
  {
    name: "Video Course",
    type: "start",
    completed: true,
  },
  {
    name: "Basic CSS",
    type: "start",
    completed: true,
  },
  {
    name: "Colors",
    type: "course",
    completed: false,
  },
  {
    name: "Box model",
    type: "course",
    completed: false,
  },
  {
    name: "Flexbox",
    type: "start",
    completed: true,
  },
  {
    name: "Typography",
    type: "course",
    completed: false,
  },
  {
    name: "Pseudo selectors",
    type: "course",
    completed: false,
  },
  {
    name: "Intermediate CSS",
    type: "course",
    completed: false,
  },
  {
    name: "Responsive design",
    type: "course",
    completed: false,
  },
  {
    name: "Documentation page project",
    type: "start",
    completed: false,
  },
  {
    name: "Variables",
    type: "course",
    completed: false,
  },
  {
    name: "Grid",
    type: "course",
    completed: false,
  },
  {
    name: "Landing page project",
    type: "start",
    completed: false,
  },
  {
    name: "Animations",
    type: "course",
    completed: false,
  },
  {
    name: "Transforms",
    type: "course",
    completed: false,
  },
  {
    name: "Portfolio web project",
    type: "course",
    completed: false,
  },
];

const StaticSiteItems: Item[] = [
  {
    name: "Website 1",
    type: "course",
    completed: false,
  },
  {
    name: "Website 2",
    type: "course",
    completed: false,
  },
  {
    name: "Website 3",
    type: "course",
    completed: false,
  },
  {
    name: "Portfolio",
    type: "course",
    completed: false,
  },
];

const GitItems: Item[] = [
  {
    name: "Video Course",
    type: "start",
    completed: true,
  },
  {
    name: "Basic",
    type: "course",
    completed: false,
  },
  {
    name: "Practice 1",
    type: "course",
    completed: false,
  },
  {
    name: "Practice 2",
    type: "course",
    completed: false,
  },
];

const JSItems: Item[] = [
  {
    name: "Video Course",
    type: "course",
    completed: true,
  },
  {
    name: "Basic JavaScript",
    type: "course",
    completed: true,
  },
];
const ReactItems: Item[] = [
  {
    name: "Video Course",
    type: "course",
    completed: true,
  },
  {
    name: "Basic React",
    type: "course",
    completed: true,
  },
];

const IntAppItems: Item[] = [
  {
    name: "App 1",
    type: "course",
    completed: false,
  },
  {
    name: "App 2",
    type: "course",
    completed: false,
  },
  {
    name: "App 3",
    type: "course",
    completed: false,
  },
];

const JobItems: Item[] = [
  {
    name: "Job search",
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
      <div className="flex flex-col items-center">{items.map(itemToStep)}</div>
    </section>
  );
}

function itemToStep(item: Item, index: number) {
  return (
    <Step
      text={item.name}
      type={item.type}
      alignment={alignments[index % alignments.length]}
      disabled={!item.completed}
    />
  );
}

function SectionHeader({ text }: { text: string }) {
  return (
    <header className="bg-primary p-4 md:mx-10 md:rounded-xl">
      <h1 className="text-center text-2xl">{text}</h1>
    </header>
  );
}

function Step({
  alignment,
  type,
  text,
  disabled = false,
}: {
  alignment: string;
  type: string;
  text: string;
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
          className={cn("btn btn-circle  btn-lg", disabled && "btn-disabled")}
        >
          {icon}
        </button>

        <p className={cn("ml-3 text-lg", disabled && "text-base-300")}>
          {text}
        </p>
      </div>
    </div>
  );
}
