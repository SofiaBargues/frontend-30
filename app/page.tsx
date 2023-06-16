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
    <div className=" min-h-screen flex flex-col items-center justify-between text-base-content bg-base-100">
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
          <Step
            text="newEnglish"
            icon={<Camera size={48} />}
            alignment="left-0"
          />
          <Step text="Bootcamp" icon={<Cat size={48} />} alignment="left-11" />

          <Step
            text="Get a Job"
            icon={<Star size={48} />}
            alignment="left-16"
          />

          <Step
            text="Get a Job"
            icon={<Book size={48} />}
            alignment="left-11"
          />

          <Step
            text="Get a Job"
            icon={<PhoneCallIcon size={48} />}
            alignment="left-0"
          />
          <Step
            text="Get a Job"
            icon={<Fish size={48} />}
            alignment="right-11"
          />
          <Step
            text="Get a Job"
            icon={<Languages size={48} />}
            alignment="right-16"
          />
        </div>
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-20">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
}

function Step({
  alignment,
  icon,
  text,
}: {
  alignment: string;
  icon: any;
  text: string;
}) {
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
