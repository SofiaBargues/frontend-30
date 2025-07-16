"use client";
import { useState, useRef, useEffect } from "react";
import { type ChallengeData } from "./ChallengeData";
import { ProgressBar } from "./ProgressBar";
import { Challenge } from "./Challenge";

export function Challenges({ items }: { items: ChallengeData[] }) {
  const [status, setStatus] = useState<boolean[]>(Array(30).fill(false));
  const isFirstRenderRef = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      // Load from localstorage
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("frontend-30");
        if (stored) {
          setStatus(JSON.parse(stored));
        }
      }
      isFirstRenderRef.current = false;
    } else {
      // Save to localstorage
      localStorage.setItem("frontend-30", JSON.stringify(status));
    }
  }, [status, isFirstRenderRef]);

  function handleSetDone(index: number, isDone: boolean) {
    const statusCopy = [...status];
    statusCopy[index] = isDone;
    setStatus(statusCopy);
  }

  let completed = status.filter((x) => x === true).length;
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <ProgressBar completed={completed} items={items} />
      <div className="flex w-full max-w-4xl flex-col items-center justify-between pb-8">
        {items.map((item: ChallengeData, index: number) => (
          <Challenge
            key={item.id}
            number={index + 1}
            isDone={status[index]}
            setDone={(isDone) => {
              handleSetDone(index, isDone);
            }}
            item={item}
          ></Challenge>
        ))}
      </div>
    </section>
  );
}
