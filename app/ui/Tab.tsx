import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { getIconForFile } from "vscode-icons-js";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Code } from "@/app/types";

const Tab = (props: {
  code: Code;
  onTabSwitch: () => void;
  onTabRemove: () => void;
  onTabUpdate: (tab: Code, title: string) => void;
}) => {
  const [display, setDisplay] = React.useState<boolean>(true);
  const [title, setTitle] = React.useState<string>(props.code.name);

  return (
    <div
      className={clsx(
        "group relative flex items-center gap-2 px-2 dark:text-stone-200",
        {
          "bg-white/80 ring-1 ring-white dark:bg-stone-800/75 dark:ring-stone-900/95":
            props.code.isActive,
        },
      )}
    >
      <div className="flex h-6 w-6 items-center justify-center">
        <Image
          width={16}
          height={16}
          className="h-8 w-8"
          alt={`${getIconForFile(title)}`}
          src={`icons/${getIconForFile(props.code.name)}`}
        />
      </div>
      {display ? (
        <>
          <button
            title="Select tab"
            onClick={() => props.onTabSwitch()}
            className="peer h-full rounded-r-lg p-2 hover:rounded-none hover:bg-white/80 active:bg-white/80 dark:hover:bg-stone-800/75 dark:active:bg-stone-800/80"
          >
            {title}
          </button>

          <button
            title="Remove tab"
            onClick={() => props.onTabRemove()}
            className="flex h-6 w-6 items-center justify-center rounded hover:bg-white/50 dark:hover:bg-stone-800/50 dark:active:bg-stone-800/80"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </>
      ) : (
        <input
          autoFocus
          type="text"
          value={title}
          style={{ width: `${title.length}rem` }}
          onChange={(event) => setTitle(event.target.value)}
          onBlur={(event) => {
            setDisplay(true);
            props.onTabUpdate(props.code, event.target.value);
          }}
          className="block w-fit rounded-lg bg-transparent px-2 py-1 font-[inherit] outline-none"
        />
      )}
    </div>
  );
};

export default Tab;