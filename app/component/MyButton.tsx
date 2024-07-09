"use client";
export function MyButton({ url, name }: { url: any; name: string }) {
  return (
    <a
      aria-label="Github"
      target="_blank"
      href={url}
      rel="noopener, noreferrer"
      className="btn-ghost drawer-button btn normal-case"
    >
      <div className="flex-none items-center">{name}</div>
    </a>
  );
}
