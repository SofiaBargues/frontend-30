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
    <>
      <div className="abs flex flex-col items-center justify-stretch bg-secondary text-5xl font-bold text-base-100">
        <p className="flex h-full flex-col justify-center">{number}</p>
      </div>
      <div className="relative flex aspect-square h-[200px] w-full justify-center">
        <img
          src={item.imgSource}
          alt=""
          className="rounded-lg object-cover md:h-[200px] md:w-[400px]"
        />
      </div>
    </>
  );
}

export function Step({ item, number, isDone, setDone }: StepProps) {
  let icon = <></>;

  function handleClick() {
    return setDone(!isDone);
  }

  console.log(item.tags);
  return (
    <div className="max-w-1/5 flex flex-col items-stretch justify-between rounded-lg border shadow-md shadow-gray-300 lg:flex-row">
      <StepImage number={number} item={item} />
      {/* CUERPO */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <button
            onClick={handleClick}
            className={`flex aspect-square items-center rounded-full text-sm font-semibold transition-colors duration-300 md:h-14 md:w-14 lg:self-start ${
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
        <p className=" ">{item.description}</p>

        <div className=" ">
          {item.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="flex w-full items-center justify-between gap-3">
          <MyButton url={item.statementUrl} name="Statement" type="statement" />
          <MyButton url={item.githubUrl} name="GitHub" type="github" />
          <MyButton url={item.demoUrl} name="Demo" type="demo" />
          <MyButton url={item.tutorialUrl} name="Tutorial" type="tutorial" />
        </div>
      </div>
      {/*  BOTONES */}
    </div>
  );
}
