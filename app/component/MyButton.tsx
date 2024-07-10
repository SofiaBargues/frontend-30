"use client";

type ButtonTypes = "github" | "statement" | "demo" | "tutorial";

const buttonStyle = {
  github: { color: "text-xl ", img: "🎦" },
  statement: { color: "text-xl ", img: "🎦" },
  demo: { color: "text-xl ", img: "🎦" },
  tutorial: { color: "text-xl ", img: "🎦" },
};

export function MyButton({
  url,
  name,
  type,
}: {
  url: any;
  name: string;
  type: ButtonTypes;
}) {
  return (
    <a
      aria-label="Github"
      target="_blank"
      href={url}
      rel="noopener, noreferrer"
    >
      <button
        className={
          buttonStyle[type].color +
          " flex-none items-center rounded-lg border-2 p-2"
        }
      >
        {buttonStyle.github.img}
        {name}
      </button>
    </a>
  );
}
