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
          <a className=" font-bold normal-case text-xl ">Your way</a>
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
              <Step text="newEnglish" type="start" alignment="left-0" />
              <Step text="Bootcamp" type="course" alignment="left-11" />
              <Step text="Get a Job" type="course" alignment="left-16" />
              <Step text="Get a Job" type="course" alignment="left-11" />
              <Step text="Get a Job" type="course" alignment="left-0" />
              <Step text="Get a Job" type="course" alignment="right-11" />
              <Step text="Get a Job" type="course" alignment="right-0 mb-6" disabled />
            </div>
          </section>
          <section className="flex flex-col items-stretch w-full">
            <SectionHeader text="CSS" />
            <div className="flex flex-col items-center">
              <Step text="newEnglish" type="start" alignment="left-0" />
              <Step text="Bootcamp" type="course" alignment="left-11" />
              <Step text="Bootcamp" type="course" alignment="left-0" />
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
    icon = <Book size={48} />;
  } else if (type == "start") {
    icon = <Star size={48} />;
  } else {
    icon = <Cat size={48} />;
  }

  let isDisabled = "";
  if (disabled){
    isDisabled="btn-disabled"
  }

  const classes = "relative mt-5 " + alignment;
  return (
    <div className={classes}>
      <div className="flex items-center ">
        <button className={`btn btn-circle btn-outline btn-lg ${isDisabled}`} >{icon}</button>
        <p className="ml-3 text-lg">{text}</p>
      </div>
    </div>
  );
}
