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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-base-100 text-base-content">
      <nav className="navbar fixed top-0 z-10 justify-between border-b-2 border-b-primary bg-base-300 text-base-content">
        <Link href="/">
          <div id="group1 " className="btn-ghost btn ml-2 flex gap-2">
            <div>
              <label className="avatar">
                <div className="w-10 rounded-full border-2">
                  <img src="/avatarColor.png" alt=" " />
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
        disabled={!item.completed}
        item={item}
      ></Step>
    );
  }
  return (
    <section className="flex w-full flex-col items-stretch">
      <div className="flex flex-col items-center gap-8 pb-8">
        {items.map(itemToStep)}
      </div>
    </section>
  );
}
