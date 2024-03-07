import clsx from "clsx";
import React from "react";
import { Buttons, Logo, Tab } from "@/app/ui";
import type { File } from "@/app/types";

const Snippet = (props: {
  file: File;
  displayLineNumbers: boolean;
  editTab: (name: string) => void;
  onContentChange: (code: string) => void;
  buttons: { style: boolean; position: boolean };
}) => {
  // Line number count
  let count = 0;

  return (
    <article className="relative  grid rounded-xl shadow-lg ring-1 ring-white backdrop-blur-3xl dark:ring-stone-900/95">
      <div className="absolute inset-0 -z-10 rounded-3xl backdrop-blur-3xl"></div>

      {/* Header */}
      <header
        className={clsx(
          "flex w-full items-center gap-4 rounded-t-xl bg-white/85 px-4 dark:bg-stone-900/80",
          {
            "justify-between": !props.buttons.position,
          },
        )}
      >
        {!props.buttons.position ? (
          <div className="-translate-x-6 scale-[60%]">
            <Logo />
          </div>
        ) : undefined}

        {props.buttons.position ? (
          <Buttons
            style={props.buttons.style}
            position={props.buttons.position}
          />
        ) : undefined}

        <Tab title={props.file.name} onTabUpdate={(n) => props.editTab(n)} />

        {!props.buttons.position ? (
          <Buttons
            style={props.buttons.style}
            position={props.buttons.position}
          />
        ) : undefined}
      </header>

      {/* Main */}
      <main className="rounded-b-xl bg-white/75 p-4 dark:bg-stone-800/75 dark:text-stone-200">
        <section className="flex gap-4">
          {props.displayLineNumbers ? (
            <div className="grid text-center">
              {props.file.content.split("\n").map(() => {
                count += 1;
                return <div key={count}>{count}</div>;
              })}
            </div>
          ) : undefined}

          <div className="relative w-full">
            <textarea
              name="code"
              value={props.file.content}
              className="absolute inset-0 z-[1px] h-full min-h-full w-full min-w-full resize-none overflow-hidden whitespace-pre-wrap text-nowrap bg-transparent text-transparent caret-stone-800 outline-none dark:caret-white"
              onChange={(event) => props.onContentChange(event.target.value)}
            ></textarea>

            <pre className="w-full whitespace-pre-wrap text-nowrap bg-transparent outline-none">
              <code
                id="code"
                style={{ padding: 0, background: "transparent" }}
                className={`hljs language-${props.file.language}`}
              >
                {props.file.content}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </article>
  );
};

export default Snippet;
