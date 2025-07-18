"use client";
import { CircleCheck } from "lucide-react";
import { LinkButton } from "./LinkButton";
import { ChallengeData } from "./ChallengeData";
import { StatementButton } from "./StatementButton";

function ChallengeNumber({ number }: { number: number }) {
  return (
    <div className="flex h-full items-center justify-start text-2xl font-semibold sm:font-bold md:ml-4 md:text-7xl lg:w-24">
      <div className="flex text-left lg:flex-col">{number}</div>
    </div>
  );
}

export function Challenge({
  challenge,
  number,
  isCompleted,
  setCompleted,
}: {
  challenge: ChallengeData;
  number: number;
  isCompleted: boolean;
  setCompleted: (completed: boolean) => void;
}) {
  function handleClick() {
    return setCompleted(!isCompleted);
  }

  return (
    <div
      className={
        "shadow-black[50%] relative flex w-full flex-col items-center overflow-hidden border border-gray-300 bg-base-100 p-7 shadow-md md:flex-row md:p-10"
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={"Challenge image for challenge " + number}
        src={challenge.imgSource}
        style={{ opacity: 0.3 }}
        className={
          (!isCompleted ? "grayscale filter " : "") +
          "absolute left-[10px] z-0 ml-6 mt-6 flex max-h-[100px] max-w-[100px] rounded-md md:max-h-[200px] md:max-w-[200px]" +
          (number % 2 === 0 ? " -rotate-12" : " rotate-12")
        }
      ></img>
      <div className="z-30 hidden md:block">
        <ChallengeNumber number={number} />
      </div>
      <div className="items relative m-3 flex w-full flex-col gap-2 rounded bg-base-100/50 sm:p-2 md:m-5">
        <div className="flex h-3 items-center justify-between gap-4 md:h-auto">
          <div className="z-30 block md:hidden">
            <ChallengeNumber number={number} />
          </div>
          <span className="flex w-full items-center justify-between md:gap-4">
            <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">
              {challenge.name}
            </h3>
            <div className="m-1 flex flex-col justify-center md:hidden">
              <button
                onClick={handleClick}
                className={`duration-00 flex aspect-square h-7 w-7 self-start rounded-full text-sm font-semibold transition-colors md:h-14 md:w-14 md:border-4 lg:min-w-[55px] ${
                  !isCompleted
                    ? "border-gray-300 text-gray-300 hover:border-gray-400 hover:text-gray-400"
                    : "border-green-400 text-green-400 hover:border-green-600 hover:text-green-600"
                }`}
              >
                <CircleCheck />
              </button>
            </div>
          </span>
        </div>
        <div className="bg">
          {challenge.tags.map((tag, index) => (
            <span
              className="badge badge-outline text-xs text-base-content/80"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="my-3 text-xs sm:text-base">{challenge.description}</p>

        <div className="flex items-center gap-3">
          <StatementButton url={challenge.statementUrl} name="Statement" />
          <LinkButton url={challenge.githubUrl} name="GitHub" type="github" />
          <LinkButton url={challenge.demoUrl} name="Demo" type="demo" />
          <LinkButton
            url={challenge.tutorialUrl}
            name="Tutorial"
            type="tutorial"
          />
        </div>
      </div>
      <div className="hidden flex-col justify-center md:block">
        <button
          onClick={handleClick}
          className={`duration-00 flex aspect-square h-7 w-7 self-start text-sm font-semibold transition-colors md:h-14 md:w-14 lg:min-w-[55px] ${
            !isCompleted
              ? "border-gray-300 text-gray-300 hover:border-gray-400 hover:text-gray-400"
              : "border-green-400 text-green-400 hover:border-green-600 hover:text-green-600"
          }`}
        >
          <CircleCheck className="h-4 w-4 sm:h-12 sm:w-12" />
        </button>
      </div>
    </div>
  );
}
