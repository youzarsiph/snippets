import clsx from "clsx";
import React from "react";
import Image from "next/image";
import hljs from "highlight.js";
import { getIconForFile } from "vscode-icons-js";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Buttons, Logo, Tab } from "@/app/ui";
import type { CodeSettings } from "@/app/types";

const Snippet = (props: {
  code: CodeSettings;
  buttons: { style: boolean; position: boolean };
  createTab: () => void;
  editTab: (index: number, name: string) => void;
  switchTab: (index: number) => void;
  deleteTab: (index: number) => void;
  onContentChange: (code: string) => void;
}) => {
  React.useEffect(() => hljs.highlightAll(), [props.code]);

  const Header = () => (
    <header
      className={clsx(
        "relative flex w-full items-center gap-8 rounded-t-xl bg-white/85 px-4 dark:bg-stone-900/80",
        {
          "justify-between": !props.buttons.position,
        },
      )}
    >
      <div className="absolute inset-0 -z-10 rounded-3xl backdrop-blur-3xl"></div>

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

      <div className="flex items-center gap-2">
        <Image
          width={16}
          height={16}
          className="h-6 w-6"
          alt={`${getIconForFile(props.code.tabs[props.code.active].name)}`}
          src={`icons/${getIconForFile(props.code.tabs[props.code.active].name)}`}
        />
        <p>{props.code.tabs[props.code.active].name}</p>
      </div>

      {!props.buttons.position ? (
        <Buttons
          style={props.buttons.style}
          position={props.buttons.position}
        />
      ) : undefined}
    </header>
  );

  // Line number count
  let count = 0;

  return (
    <article className="grid rounded-xl shadow-lg ring-1 ring-white backdrop-blur-3xl dark:ring-stone-900/95">
      <Header />

      <div className="flex items-center gap-4 bg-white/85 shadow-xl ring-1 ring-white dark:bg-stone-900/80 dark:ring-stone-900">
        <div className="flex items-center">
          {props.code.tabs.length !== 0
            ? props.code.tabs.map((item, idx) => (
                <Tab
                  code={item}
                  key={`${item.name}-${idx}`}
                  onTabSwitch={() => props.switchTab(idx)}
                  onTabRemove={() => props.deleteTab(idx)}
                  onTabUpdate={(n) => props.editTab(idx, n)}
                />
              ))
            : undefined}
        </div>

        <button
          type="button"
          onClick={() => props.createTab()}
          className="flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-white hover:bg-white/80 active:bg-white/95 dark:ring-stone-900/95 dark:hover:bg-stone-800/80 dark:active:bg-stone-800/95"
        >
          <PlusIcon className="h-4 w-4" />
        </button>
      </div>

      <main className="relative rounded-b-xl bg-white/75 p-4 dark:bg-stone-800/75 dark:text-stone-200">
        <div className="absolute inset-0 -z-10 rounded-3xl backdrop-blur-3xl"></div>

        <section className="flex gap-4">
          {props.code.tabs.length !== 0 ? (
            <>
              {props.code.displayLineNumbers ? (
                <div className="grid text-center">
                  {props.code.tabs[props.code.active].content
                    .split("\n")
                    .map(() => {
                      count += 1;
                      return <div key={count}>{count}</div>;
                    })}
                </div>
              ) : undefined}

              <div className="relative w-full">
                <textarea
                  id="code"
                  autoFocus
                  name="code"
                  value={props.code.tabs[props.code.active].content}
                  className="absolute inset-0 z-[1px] h-full min-h-full w-full min-w-full resize-none overflow-hidden whitespace-pre-wrap bg-transparent text-transparent caret-stone-800 outline-none dark:caret-white"
                  onChange={(event) =>
                    props.onContentChange(event.target.value)
                  }
                ></textarea>

                <pre className="w-full whitespace-pre-wrap bg-transparent outline-none">
                  <code
                    style={{ padding: 0, background: "transparent" }}
                    className={`hljs language-${props.code.tabs[props.code.active].language}`}
                  >
                    {props.code.tabs[props.code.active].content}
                  </code>
                </pre>
              </div>
            </>
          ) : (
            <div className="grid gap-4 p-4 md:px-24 md:py-16 lg:px-32 lg:py-24">
              <div className="flex items-center gap-4">
                <Logo />
                <h1 className="font-sans text-2xl font-bold">Snippets</h1>
              </div>
              <p className="font-sans text-lg font-semibold tracking-wide">
                Create beautiful images of your code snippets
              </p>
            </div>
          )}
        </section>
      </main>
    </article>
  );
};

export default Snippet;
