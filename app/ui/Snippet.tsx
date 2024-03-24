import clsx from "clsx";
import React from "react";
import { Buttons, Tab } from "@/app/ui";
import type { CodeSettings } from "@/app/types";

const Snippet = (props: {
  code: CodeSettings;
  editTab: (name: string) => void;
  onContentChange: (code: string) => void;
  buttons: { style: boolean; position: boolean };
}) => {
  // Line number count
  let count = 0;

  return (
    <article className="relative  grid rounded-xl shadow-lg ring-1 ring-white backdrop-blur-3xl dark:ring-slate-900/95">
      <div className="absolute inset-0 -z-10 rounded-3xl backdrop-blur-3xl"></div>

      {/* Header */}
      <header
        className={clsx(
          "flex w-full items-center gap-8 rounded-t-xl bg-white/85 px-4 dark:bg-slate-900/80",
          {
            "justify-between": !props.buttons.position,
          },
        )}
      >
        {props.buttons.position ? (
          <Buttons
            style={props.buttons.style}
            position={props.buttons.position}
          />
        ) : undefined}

        <div className="flex items-center gap-2">
          <Tab code={props.code.tab} onTabUpdate={(n) => props.editTab(n)} />
        </div>

        {!props.buttons.position ? (
          <Buttons
            style={props.buttons.style}
            position={props.buttons.position}
          />
        ) : undefined}
      </header>

      {/* Main */}
      <main className="rounded-b-xl bg-white/75 p-4 dark:bg-slate-800/75 dark:text-slate-200">
        <section className="flex gap-4">
          {props.code.displayLineNumbers ? (
            <div className="grid text-center">
              {props.code.tab.content.split("\n").map(() => {
                count += 1;
                return <div key={count}>{count}</div>;
              })}
            </div>
          ) : undefined}

          <div className="relative w-full">
            <textarea
              autoFocus
              name="code"
              value={props.code.tab.content}
              className="absolute inset-0 z-[1px] h-full min-h-full w-full min-w-full resize-none overflow-hidden whitespace-pre-wrap bg-transparent text-transparent caret-slate-800 outline-none dark:caret-white"
              onChange={(event) => props.onContentChange(event.target.value)}
            ></textarea>

            <pre className="w-full whitespace-pre-wrap bg-transparent outline-none">
              <code
                id="code"
                style={{ padding: 0, background: "transparent" }}
                className={`hljs language-${props.code.tab.language}`}
              >
                {props.code.tab.content}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </article>
  );
};

export default Snippet;
