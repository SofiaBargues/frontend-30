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
      <div className="m-10 flex flex-col gap-5">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className=" ">{item.description}</p>
        <div className="flex w-full items-center justify-between gap-3">
          <MyButton url={item.statementUrl} name="Statement" type="statement" />
          <MyButton url={item.githubUrl} name="GitHub" type="github" />
          <MyButton url={item.demoUrl} name="Demo" type="demo" />
          <MyButton url={item.tutorialUrl} name="Tutorial" type="tutorial" />
        </div>
      </div>
      <button
        onClick={handleClick}
        className={`flex h-9 w-9 items-center rounded-full text-sm font-semibold transition-colors duration-300 md:h-14 md:w-14 lg:self-start ${
          isDone
            ? "bg-success text-white hover:bg-success-content"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        <div className="w-full md:text-4xl md:font-light">
          {isDone ? "✓" : "X"}
        </div>
      </button>
    </div>
  );
}
