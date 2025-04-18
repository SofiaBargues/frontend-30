/* eslint-disable @next/next/no-img-element */
"use client";
import { CircleCheck } from "lucide-react";
import { MyButton } from "./MyButton";
import { Item } from "./Item";
import { MouseEvent, useState } from "react";
import { idText } from "typescript";
import { MyStatementButton } from "./MyStatementButton";

export interface StepProps {
  item: Item;
  number: number;
  isDone: boolean;
  setDone: (isDone: boolean) => void;
}

function StepNumber({ number, item }: { number: number; item: Item }) {
  return (
    <div className="flex h-full items-center justify-start text-2xl font-semibold sm:font-bold md:ml-4 md:text-7xl lg:w-24">
      <div className="flex text-left lg:flex-col">{number}</div>
    </div>
  );
}

export function Step({ item, number, isDone, setDone }: StepProps) {
  let icon = <></>;

  function handleClick() {
    return setDone(!isDone);
  }

  return (
    <div
      className={
        "shadow-black[50%] relative flex w-full flex-col items-center overflow-hidden border border-gray-300 bg-base-100 p-7 shadow-md md:flex-row md:p-10"
      }
    >
      <img
        alt={item.imgSource}
        src={item.imgSource}
        style={{ opacity: 0.3 }}
        className={
          (!isDone ? "grayscale filter " : "") +
          "absolute left-[10px] z-0 ml-6 mt-6 flex max-h-[100px] max-w-[100px] rounded-md md:max-h-[200px] md:max-w-[200px]" +
          (number % 2 === 0 ? " -rotate-12" : " rotate-12")
        }
      ></img>
      <div className="z-30 hidden md:block">
        <StepNumber number={number} item={item} />
      </div>
      <div className="items relative m-3 flex w-full flex-col gap-2 rounded bg-base-100/50 sm:p-2 md:m-5">
        <div className="flex h-3 items-center justify-between gap-4 md:h-auto">
          <div className="z-30 block md:hidden">
            <StepNumber number={number} item={item} />
          </div>
          <span className="flex w-full items-center justify-between md:gap-4">
            <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">
              {item.name}
            </h3>
            <div className="m-1 flex flex-col justify-center md:hidden">
              <button
                onClick={handleClick}
                className={`duration-00 flex aspect-square h-7 w-7 self-start rounded-full text-sm font-semibold transition-colors md:h-14 md:w-14 md:border-4 lg:min-w-[55px] ${
                  !isDone
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
          {item.tags.map((tag, index) => (
            <span
              className="badge badge-outline text-xs text-base-content/80"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="my-3 text-xs sm:text-base">{item.description}</p>

        <div className="flex items-center gap-3">
          <MyStatementButton
            url={item.statementUrl}
            name="Statement"
            type="statement"
          />
          <MyButton url={item.githubUrl} name="GitHub" type="github" />
          <MyButton url={item.demoUrl} name="Demo" type="demo" />
          <MyButton url={item.tutorialUrl} name="Tutorial" type="tutorial" />
        </div>
      </div>
      <div className="hidden flex-col justify-center md:block">
        <button
          onClick={handleClick}
          className={`duration-00 flex aspect-square h-7 w-7 self-start text-sm font-semibold transition-colors md:h-14 md:w-14 lg:min-w-[55px] ${
            !isDone
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
