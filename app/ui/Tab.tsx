import React from "react";
import Image from "next/image";
import { getIconForFile } from "vscode-icons-js";
import { Code } from "@/app/types";

const Tab = (props: { code: Code; onTabUpdate: (name: string) => void }) => {
  const [display, setDisplay] = React.useState<boolean>(true);
  const [title, setTitle] = React.useState<string>(props.code.name);

  React.useEffect(() => setTitle(props.code.name), [props.code]);

  return (
    <div className="flex items-center gap-4 rounded-lg bg-white/75 p-2 ring-1 ring-white dark:bg-slate-800/75 dark:ring-slate-900">
      <div className="flex h-6 w-6 items-center justify-center">
        <Image
          width={16}
          height={16}
          className="h-12 w-12"
          alt={`${getIconForFile(title)}`}
          src={`icons/${getIconForFile(props.code.name)}`}
        />
      </div>
      {display ? (
        <button
          title="Select tab"
          onBlur={() => setDisplay(true)}
          className="bg-transparent outline-none"
          onDoubleClick={() => setDisplay(false)}
        >
          {title}
        </button>
      ) : (
        <input
          autoFocus
          type="text"
          value={title}
          style={{ width: `${title.length}rem` }}
          onChange={(event) => setTitle(event.target.value)}
          className="block w-fit max-w-fit bg-transparent outline-none"
          onBlur={(event) => {
            setDisplay(true);
            props.onTabUpdate(event.target.value);
          }}
        />
      )}
    </div>
  );
};

export default Tab;
