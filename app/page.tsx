import Image from "next/image";
import { Camera } from "lucide-react";

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
          <div className="relative left-0 mt-16">
            <button className="btn btn-circle btn-outline btn-lg">
              <Camera size={48} />
            </button>
            English
          </div>
          <div className="relative left-11 mt-5">
            <button className="btn btn-circle btn-outline btn-lg">
              <Camera size={48} />
            </button>
            Bootcamp
          </div>
          <div className="relative left-16 mt-5">
            <button className="btn btn-circle btn-outline btn-lg">
              <Camera size={48} />
            </button>
            Get a Job
          </div>
          <div className="relative left-11 mt-5">
            <button className="btn btn-circle btn-outline btn-lg">
              <Camera size={48} />
            </button>
            Bootcamp
          </div>
          <div className="relative left-0 mt-5">
            <button className="btn btn-circle btn-outline btn-lg">
              <Camera size={48} />
            </button>
            Get a Job
          </div>
          <div className="relative right-11 mt-5">
            <button className="btn btn-circle btn-outline btn-lg">
              <Camera size={48} />
            </button>
            Bootcamp
          </div>
          <div className="relative right-16 mt-5 ">
            <button className="btn btn-circle btn-outline btn-lg">
              <Camera size={48} />
            </button>
            Get a Job
          </div>
        </div>
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
}
