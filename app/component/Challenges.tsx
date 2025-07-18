"use client";
import { useState, useRef, useEffect } from "react";
import { type ChallengeData } from "./ChallengeData";
import { ProgressBar } from "./ProgressBar";
import { Challenge } from "./Challenge";

export function Challenges({ challenges }: { challenges: ChallengeData[] }) {
  const [completionStatus, setCompletionStatus] = useState<boolean[]>(
    Array(30).fill(false),
  );
  const isFirstRenderRef = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      // Load from localstorage
      const rawData = localStorage.getItem("frontend-30");
      if (rawData) {
        setCompletionStatus(JSON.parse(rawData));
      }
      isFirstRenderRef.current = false;
    } else {
      // Save to localstorage
      localStorage.setItem("frontend-30", JSON.stringify(completionStatus));
    }
  }, [completionStatus, isFirstRenderRef]);

  function handleSetCompleted(index: number, isDone: boolean) {
    const statusCopy = [...completionStatus];
    statusCopy[index] = isDone;
    setCompletionStatus(statusCopy);
  }

  let completed = completionStatus.filter((x) => x === true).length;
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <ProgressBar completed={completed} challenges={challenges} />
      <div className="flex w-full max-w-4xl flex-col items-center justify-between pb-8">
        {challenges.map((challenge: ChallengeData, index: number) => (
          <Challenge
            key={challenge.id}
            number={index + 1}
            isCompleted={completionStatus[index]}
            setCompleted={(completed) => {
              handleSetCompleted(index, completed);
            }}
            challenge={challenge}
          ></Challenge>
        ))}
      </div>
    </section>
  );
}
