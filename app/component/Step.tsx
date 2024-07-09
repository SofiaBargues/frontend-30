"use client";
import { Book, Star, Cat } from "lucide-react";
import { MyButton } from "./MyButton";
import { Item } from "./Item";

export interface StepProps {
  name: string;
  description: string;
  alignment: string;
  disabled?: boolean;
  type: string;
  item: Item;
  statementUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  tutorialUrl?: string;
  imgSource?: string;
}

export function Step({ alignment, disabled = false, item }: StepProps) {
  let icon = <></>;

  if (item.type == "course") {
    icon = <Book size={32} />;
  } else if (item.type == "start") {
    icon = <Star size={32} />;
  } else {
    icon = <Cat size={32} />;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-primary p-6 md:flex-row">
      <div className="flex h-[200px] w-full justify-center bg-orange-200 md:h-[200px] md:w-[400px]">
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
    </div>
  );
}
