import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-between">
      <div className="navbar bg-slate-800">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Your way</a>
        </div>
        <div className="flex-none gap-2">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/avatar.png" />
            </div>
          </label>
        </div>
      </div>
      <main className="flex flex-col items-center p-24 w-full">
        <ul className="steps w-full">
          <li className="step step-primary">English</li>
          <li className="step step-secondary">Bootcamp</li>
          <li className="step step">Get a Job</li>
        </ul>
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
}
