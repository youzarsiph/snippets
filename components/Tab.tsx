import React from "react";
import Image from "next/image";
import { getIconForFile } from "vscode-icons-js";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { TabType } from "@/types";
import TabStyles from "../styles/components/Tab.module.css";

const Tab = (props: {
  tab: TabType;
  isLast: boolean;
  switchTab: () => void;
  removeTab: () => void;
  updateTab: (tab: TabType, title: string) => void;
}) => {
  const [display, setDisplay] = React.useState<boolean>(true);
  const [title, setTitle] = React.useState<string>(props.tab.title);

  return (
    <div
      className={`group ${TabStyles.container} ${
        props.tab.active ? TabStyles.active : ""
      }`}
    >
      <div className="peer p-1">
        <Image
          width={16}
          height={16}
          alt={`${getIconForFile(title)}`}
          className="h-8 w-8 rounded bg-white/75 p-1 dark:bg-stone-900/75"
          src={`https://github.com/vscode-icons/vscode-icons/blob/master/icons/${getIconForFile(title)}`}
        />
      </div>
      {display ? (
        <>
          <button
            title="Select tab"
            onClick={() => props.switchTab()}
            className={`peer ${TabStyles.btn} rounded-r-lg hover:rounded-none`}
          >
            {title}
          </button>

          <button
            title="Edit title"
            onClick={() => setDisplay(false)}
            className={`peer ${TabStyles.btn} ${TabStyles.tooltip}${
              props.isLast ? " rounded-r-lg " : " "
            }group-hover:h-auto group-hover:w-auto group-hover:scale-100 group-hover:p-2 peer-hover:h-auto peer-hover:w-auto peer-hover:scale-100 peer-hover:p-2 peer-focus:h-auto peer-focus:w-auto peer-focus:scale-100 peer-focus:p-2`}
          >
            <PencilSquareIcon className="h-6 w-6" />
          </button>

          {!props.isLast ? (
            <button
              title="Remove tab"
              onClick={() => props.removeTab()}
              className={`${TabStyles.btn} ${TabStyles.tooltip} rounded-r-lg group-hover:h-auto group-hover:w-auto group-hover:scale-100 group-hover:p-2 peer-hover:h-auto peer-hover:w-auto peer-hover:scale-100 peer-hover:p-2 peer-focus:h-auto peer-focus:w-auto peer-focus:scale-100 peer-focus:p-2`}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          ) : undefined}
        </>
      ) : (
        <input
          autoFocus
          id="title"
          type="text"
          name="title"
          value={title}
          className={TabStyles.input}
          style={{ width: `${title.length}rem` }}
          onChange={(event) => setTitle(event.target.value)}
          onBlur={(event) => {
            setDisplay(true);
            props.updateTab(props.tab, event.target.value);
          }}
        />
      )}
    </div>
  );
};

export default Tab;
