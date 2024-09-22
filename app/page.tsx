"use client";

import { Item } from "./component/Item";
import Link from "next/link";
import { data } from "./component/data";
import { ThemeChange } from "./component/ThemeChange";
import { LinkedIn } from "./component/LinkedIn";
import { GitHub } from "./component/GitHub";
import { Step } from "./component/Step";
import { Hero } from "./component/Hero";
//   const [status, setStatus] = useState<boolean[]>(new Array(30).fill(false));
import { useEffect, useState } from "react";
import { Filter } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-base-200 text-base-content">
      <nav className="navbar fixed top-0 z-10 justify-between border-b-2 border-b-primary bg-base-300 text-base-content">
        <Link href="/">
          <div id="group1 " className="btn-ghost btn ml-2 flex gap-2">
            <div>
              <label className="avatar">
                <div className="w-10">
                  <img src="/route.svg" alt=" " />
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
          <Problems items={data} />
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

function Problems({ items }: { items: Item[] }) {
  const [status, setStatus] = useState<boolean[]>(Array(30).fill(false));
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [completedAverage, setcompletedAverage] = useState<number>(0);

  useEffect(() => {
    if (isFirstRender) {
      // Load from localstorage
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("sofiapp");
        if (stored) {
          setStatus(JSON.parse(stored));
        }
      }
      setIsFirstRender(false);
    } else {
      // Save to localstorage
      localStorage.setItem("sofiapp", JSON.stringify(status));
    }
  }, [status, isFirstRender]);

  function itemToStep(item: Item, index: number, items: Item[]) {
    function handleSetDone(isDone: boolean) {
      const statusCopi = [...status];
      statusCopi[index] = isDone;
      setStatus(statusCopi);
    }
    return (
      <Step
        key={item.id}
        number={index + 1}
        isDone={status[index]}
        setDone={handleSetDone}
        item={item}
      ></Step>
    );
  }
  let completed = status.filter((x) => x != true).length;
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="shadow-black[50%] items- center flex w-full max-w-4xl flex-row justify-between gap-4 border border-gray-300 bg-base-100 p-10 shadow-md">
        <div className="text-2xl font-semibold">Progress</div>
        <div className="flex w-full items-center justify-end gap-2">
          <span className="">{completed}/30 </span>
          <div className="relative flex h-4 w-full max-w-[300px] rounded-full bg-gray-200">
            <div
              style={{
                width: (completed * 100) / 30 + "%",
              }}
              className="relative flex h-4 rounded-full bg-emerald-400"
            ></div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-4xl flex-col items-center justify-between pb-8">
        {items.map(itemToStep)}
      </div>
    </section>
  );
}
