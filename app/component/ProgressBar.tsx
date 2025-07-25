"use client";

import { ChallengeData } from "./ChallengeData";

export function ProgressBar({
  completed,
  challenges,
}: {
  completed: number;
  challenges: ChallengeData[];
}) {
  return (
    <div className="shadow-black[50%] items- center flex w-full max-w-4xl flex-row justify-between gap-4 border border-gray-300 bg-base-100 p-10 shadow-md">
      <div className="text-2xl font-semibold">Progress</div>
      <div className="flex w-full items-center justify-end gap-2">
        <span className="">
          {completed}/{challenges.length}{" "}
        </span>
        <div className="relative flex h-4 w-full max-w-[300px] rounded-full bg-gray-200">
          <div
            style={{
              width: (completed * 100) / challenges.length + "%",
            }}
            className="relative flex h-4 rounded-full bg-emerald-400"
          ></div>
        </div>
      </div>
    </div>
  );
}
