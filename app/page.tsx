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
      <main className="flex flex-col items-center  w-full">
        <div className="flex flex-col items-center w-full w-min-3xl">
          <section className="flex flex-col items-center w-full">
            <header className="bg-secondary w-full p-4">
              <h1 className="text-center text-2xl">HTML</h1>
            </header>
            <div className="flex flex-col items-center">
              <Step text="newEnglish" type="start" alignment="left-0" />
              <Step text="Bootcamp" type="course" alignment="left-11" />
              <Step text="Get a Job" type="course" alignment="left-16" />
              <Step text="Get a Job" type="course" alignment="left-11" />
              <Step text="Get a Job" type="course" alignment="left-0" />
              <Step text="Get a Job" type="course" alignment="right-11" />
              <Step text="Get a Job" type="course" alignment="right-16" />
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

function Step({
  alignment,
  type,
  text,
}: {
  alignment: string;
  type: string;
  text: string;
}) {
  let icon = <></>;

  if (type == "course") {
    icon = <Book size={48} />;
  } else if (type == "start") {
    icon = <Star size={48} />;
  } else {
    icon = <Cat size={48} />;
  }

  const classes = "relative mt-5 " + alignment;
  return (
    <div className={classes}>
      <div className="flex items-center ">
        <button className="btn btn-circle btn-outline btn-lg">{icon}</button>
        <p className="ml-3 text-lg">{text}</p>
      </div>
    </div>
  );
}
