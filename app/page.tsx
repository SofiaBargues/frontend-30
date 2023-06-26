import Image from "next/image";
import {
  Book,
  Camera,
  Cat,
  Fish,
  Languages,
  PhoneCallIcon,
  Star,
} from "lucide-react";

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
          <section className="flex flex-col  w-full items-stretch">
            <SectionHeader text="HTML" />
            <div className="flex flex-col items-center">
              <Step text="Video Course" type="start" alignment="left-0" />
              <Step text="Basic HTML " type="course" alignment="left-11" />
              <Step text="Forms" type="course" alignment="left-16" />
              <Step text="Form project" type="course" alignment="left-11" />
              <Step
                text="Basic accessibility  "
                type="course"
                alignment="left-0"
              />
              <Step
                text="Tribute page project "
                type="course"
                alignment="left-0 mb-6"
                disabled
              />
            </div>
          </section>
          <section className="flex flex-col items-stretch w-full bg-red-300">
            <SectionHeader text="CSS" />
            <div className="flex flex-col items-center">
              <Step text="Video Course" type="start" alignment="left-0" />
              <Step text="Basic CSS" type="start" alignment="left-0" />
              <Step text="Colors" type="course" alignment="left-11" />
              <Step text="Box model" type="course" alignment="left-16" />
              <Step text="Flexbox " type="start" alignment="left-0" />
              <Step text="Typography" type="course" alignment="left-11" />
              <Step
                text="Pseudo selectors "
                type="course"
                alignment="left-16"
              />
              <Step text="Intermediate CSS" type="course" alignment="left-11" />
              <Step
                text="Responsive design "
                type="course"
                alignment="left-0"
              />
              <Step
                text="Documentation page project"
                type="start"
                alignment="left-0"
              />
              <Step text="Variables" type="course" alignment="left-11" />
              <Step text="Grid" type="course" alignment="left-0" />
              <Step
                text="Landing page project"
                type="start"
                alignment="left-0"
              />
              <Step text="Animations" type="course" alignment="left-11" />
              <Step text="Transforms" type="course" alignment="left-16" />
              <Step
                text="Portfolio web project"
                type="course"
                alignment="left-11 mb-6"
              />
            </div>
          </section>
          <section className="flex flex-col  w-full items-stretch bg-green-300">
            <SectionHeader text="Static websites" />
            <div className="flex flex-col items-center">
              <Step
                text="Website 1"
                type="course"
                alignment="left-0 "
                disabled
              />
              <Step
                text="Website 2"
                type="course"
                alignment="left-0 "
                disabled
              />
              <Step
                text="Website 3"
                type="course"
                alignment="left-0 mb-6"
                disabled
              />
              <Step
                text="Portfolio"
                type="course"
                alignment="left-0 mb-6"
                disabled
              />
            </div>
          </section>
          <section className="flex flex-col  w-full items-stretch bg-slate-300">
            <SectionHeader text="Git" />
            <div className="flex flex-col items-center">
              <Step text="Basic" type="course" alignment="left-0" disabled />
              <Step
                text="Practice 1"
                type="course"
                alignment="left-0"
                disabled
              />
              <Step
                text="Practice 2"
                type="course"
                alignment="left-0 mb-6"
                disabled
              />
            </div>
          </section>
          <section className="flex flex-col  w-full items-stretch bg-purple-300">
            <SectionHeader text="JavaScript and DOM" />
            <div className="flex flex-col items-center">
              {" "}
              <Step
                text="Video Course"
                type="course"
                alignment="left-0 "
                disabled
              />
              <Step
                text="Basic JavaScrip"
                type="course"
                alignment="left-0 mb-6"
                disabled
              />
            </div>
          </section>
          <section className="flex flex-col  w-full items-stretch bg-red-100">
            <SectionHeader text="React" />
            <div className="flex flex-col items-center ">
              <Step
                text="Video Course"
                type="course"
                alignment="left-0 mb-6"
                disabled
              />
              <Step
                text="Basic React"
                type="course"
                alignment="left-0 mb-6"
                disabled
              />
            </div>
          </section>
          <section className="flex flex-col  w-full items-stretch bg-slate-300">
            <SectionHeader text="Interactive apps" />
            <div className="flex flex-col items-center">
              <Step text="App 1" type="course" alignment="left-0" disabled />
              <Step text="App 2" type="course" alignment="left-0" disabled />
              <Step
                text="App 3"
                type="course"
                alignment="left-0 mb-6"
                disabled
              />
            </div>
          </section>
          <section className="flex flex-col  w-full items-stretch bg-red-400">
            <SectionHeader text="Job search" />
            <div className="flex flex-col items-center">
              <Step
                text="Job search"
                type="course"
                alignment="left-0 mb-6"
                disabled
              />
            </div>
          </section>
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

function SectionHeader({ text }: { text: string }) {
  return (
    <header className="bg-secondary p-4 md:mx-10 md:rounded-xl">
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

  let isDisabled = "";
  if (disabled) {
    isDisabled = "btn-disabled";
  }

  const classes = "relative mt-5 " + alignment;
  return (
    <div className={classes}>
      <div className="flex items-center ">
        <button className={`btn btn-circle  btn-lg ${isDisabled}`}>
          {icon}
        </button>
        <p className="ml-3 text-lg">{text}</p>
      </div>
    </div>
  );
}
