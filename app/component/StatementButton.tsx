"use client";

export function StatementButton({ url, name }: { url: any; name: string }) {
  return (
    <span className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]">
      <div className="flex-none items-center">
        <a
          aria-label="Github"
          target="_blank"
          href={url}
          rel="noopener, noreferrer"
        >
          <button
            className={
              "border-1 rounded-lg border border-primary p-2 text-xs hover:bg-primary sm:border-2 md:p-3 xl:p-2 xl:text-sm"
            }
          >
            <div className="flex items-center justify-center gap-1 font-semibold md:text-xl">
              <p>{name}</p>
            </div>
          </button>
        </a>
      </div>
    </span>
  );
}
