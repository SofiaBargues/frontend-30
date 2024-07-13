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
    <div className="flex flex-col rounded-lg bg-secondary lg:flex-row">
      <div className="flex h-full items-center justify-center text-5xl font-bold text-base-100 lg:w-24">
        <p className="flex lg:flex-col">{number}</p>
      </div>
      <div className="flex h-[300px] w-full justify-center lg:w-[400px] lg:justify-center">
        <img
          src={item.imgSource}
          alt=""
          className="rounded-lg object-cover lg:h-[300px] lg:w-[400px]"
        />
      </div>
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
      <div className="items m-5 flex flex-col justify-center gap-5 lg:w-full">
        <div className="flex justify-between">
          <h3 className="text-3xl font-bold">{item.name}</h3>
          <button
            onClick={handleClick}
            className={`flex aspect-square h-7 w-7 items-center rounded-full text-sm font-semibold transition-colors duration-300 md:h-10 md:w-10 lg:h-14 lg:w-14 lg:min-w-[55px] lg:self-start ${
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
        {/* <p className=" ">{item.description}</p> */}

        <div className=" ">
          {item.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="mt-7 flex w-full items-center justify-between gap-3">
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
