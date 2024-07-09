"use client";
import { Book, Star, Cat } from "lucide-react";
import { MyButton } from "./MyButton";
import { Item } from "./Item";
import { useState } from "react";

export interface StepProps {
  disabled?: boolean;
  item: Item;
  number: number;
  // isDone: boolean;
  // setDone: ()=>();
}

export function Step({
  disabled = false,
  item,
  number,
  // isDone,
  // setDone,
}: StepProps) {
  const [isDone, setDone] = useState(false);
  let icon = <></>;

  function handleClick({ event }: { event: any }) {
    console.log(event);
    return setDone(!isDone);
  }

  if (item.type == "course") {
    icon = <Book size={32} />;
  } else if (item.type == "start") {
    icon = <Star size={32} />;
  } else {
    icon = <Cat size={32} />;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg border-primary p-6 md:flex-row">
      <p className="m-5 p-[1rem] py-4 text-5xl font-bold text-secondary">
        {number}
      </p>
      <div className="flex h-[200px] w-full justify-center md:h-[200px] md:w-[400px]">
        <img src={item.imgSource} alt="" className="rounded-lg" />
      </div>
      <div className="m-3 flex w-full flex-col">
        <h3 className="p-[1rem] text-lg font-bold">{item.name}</h3>
        <p className="p-[1rem] py-4">{item.description}</p>
        <p>{item.completed === true ? "Complete" : "Incomplete"}</p>
        <div className="flex w-full justify-between">
          <MyButton url={item.statementUrl} name="Statement" />
          <MyButton url={item.githubUrl} name="GitHub" />
          <MyButton url={item.demoUrl} name="Demo" />
          <MyButton url={item.tutorialUrl} name="Tutorial" />
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
