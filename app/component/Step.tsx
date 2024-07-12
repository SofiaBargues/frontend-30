"use client";
import { Book, Star, Cat } from "lucide-react";
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

export function Step({ item, number, isDone, setDone }: StepProps) {
  let icon = <></>;

  function handleClick() {
    return setDone(!isDone);
  }

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg border p-6 lg:flex-row">
      <p className="m-5 p-[1rem] py-4 text-5xl font-bold text-secondary">
        {number}
      </p>
      <div className="flex h-[200px] w-full justify-center md:h-[200px] md:w-[400px]">
        <img
          src={item.imgSource}
          alt=""
          className="rounded-lg object-cover md:h-[200px] md:w-[400px]"
        />
      </div>
      <div className="m-10 flex flex-col">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className=" ">{item.description}</p>
        <div className="flex w-full justify-between">
          <MyButton url={item.statementUrl} name="Statement" type="statement" />
          <MyButton url={item.githubUrl} name="GitHub" type="github" />
          <MyButton url={item.demoUrl} name="Demo" type="demo" />
          <MyButton url={item.tutorialUrl} name="Tutorial" type="tutorial" />
        </div>
      </div>
      <button
        onClick={handleClick}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
          isDone
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        <div className="w-full">{isDone ? "✓" : "X"}</div>
      </button>
    </div>
  );
}
