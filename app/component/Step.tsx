/* eslint-disable @next/next/no-img-element */
"use client";
import { Book, Star, Cat, Key } from "lucide-react";
import { MyButton } from "./MyButton";
import { Item } from "./Item";
import { MouseEvent, useState } from "react";
import { idText } from "typescript";

export interface StepProps {
  item: Item;
  number: number;
  isDone: boolean;
  setDone: (isDone: boolean) => void;
}

function StepNumber({ number, item }: { number: number; item: Item }) {
  return (
    <div className="ml-4 flex h-full items-center justify-start text-7xl text-slate-700 lg:w-24">
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
    <div className="shadow-black[50%] relative flex w-full flex-row items-center border border-gray-300 bg-base-100 p-10 shadow-md">
      <img
        alt={item.imgSource}
        src={item.imgSource}
        style={{ opacity: 0.4 }}
        className={
          "absolute left-[10px] z-0 ml-6 flex max-h-[200px] max-w-[200px] rounded-md " +
          (number % 2 === 0 ? " -rotate-12" : " rotate-12")
        }
      ></img>
      <div className="z-30">
        <StepNumber number={number} item={item} />
      </div>
      <div className="items relative m-5 flex w-full flex-col gap-2">
        <div className="flex justify-between">
          <h3 className="text-3xl font-bold">{item.name}</h3>
        </div>
        <p className=" ">{item.description}</p>
        <div className="">
          {item.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="flex gap-3">
          <MyButton url={item.statementUrl} name="Statement" type="statement" />
          <MyButton url={item.githubUrl} name="GitHub" type="github" />
          <MyButton url={item.demoUrl} name="Demo" type="demo" />
          <MyButton url={item.tutorialUrl} name="Tutorial" type="tutorial" />
        </div>
      </div>
      <div className="m-6 flex flex-col justify-center">
        <button
          onClick={handleClick}
          className={`duration-00 flex aspect-square h-14 w-14 self-start rounded-full border-4 text-sm font-semibold transition-colors lg:min-w-[55px] ${
            isDone
              ? "border-gray-300 text-gray-300 hover:border-gray-400 hover:text-gray-400"
              : "border-green-400 text-green-400 hover:border-green-600 hover:text-green-600"
          }`}
        >
          <div className="mt-2 w-full text-4xl">{isDone ? "✓" : "✓"}</div>
        </button>
      </div>
    </div>
  );
}
