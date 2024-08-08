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

function StepImage({ number, item }: { number: number; item: Item }) {
  return (
    <div className="flex flex-col rounded-lg lg:flex-row">
      <div className="ml-4 flex h-full items-center justify-start text-7xl font-bold text-slate-700 lg:w-24">
        <div className="flex text-left lg:flex-col">{number}</div>
      </div>
      {/* <div className="flex h-[300px] w-full justify-center lg:w-[400px] lg:justify-center">
        <img
          src={item.imgSource}
          alt=""
          className="rounded-lg object-cover lg:h-[300px] lg:w-[400px]"
        />
      </div> */}
    </div>
  );
}

export function Step({ item, number, isDone, setDone }: StepProps) {
  let icon = <></>;

  function handleClick() {
    return setDone(!isDone);
  }

  return (
    <div className="max-w- shadow-black[50%] flex w-full flex-col items-stretch rounded-lg bg-base-100 shadow-md lg:flex-row">
      <StepImage number={number} item={item} />
      {/* CUERPO */}
      <div className="items m-5 flex flex-col lg:w-full">
        <div className="flex justify-between">
          <h3 className="text-3xl font-bold">{item.name}</h3>
        </div>
        {/* <p className=" ">{item.description}</p> */}

        <div className=" ">
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
          className={`duration-00 flex aspect-square h-7 w-7 rounded-full border-4 text-sm font-semibold transition-colors md:h-10 md:w-10 lg:h-14 lg:w-14 lg:min-w-[55px] lg:self-start ${
            isDone
              ? "border-gray-300 text-gray-300 hover:border-gray-400 hover:text-gray-400"
              : "border-green-400 text-green-400 hover:border-green-600 hover:text-green-600"
          }`}
        >
          <div className="mt-2 w-full md:text-4xl">{isDone ? "✓" : "✓"}</div>
        </button>
      </div>
    </div>
  );
}
