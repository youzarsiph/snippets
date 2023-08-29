/**
 * Editor tabs
 */

import React from "react";
import Image from "next/image";
import { getIconForFile } from "vscode-icons-js";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { TabType } from "@/types";
import "../styles/components/tab.css";

const Tab = (props: {
  tab: TabType;
  switchTab: () => void;
  removeTab: () => void;
  updateTab: (tab: TabType, title: string) => void;
}) => {
  const [display, setDisplay] = React.useState<boolean>(true);
  const [title, setTitle] = React.useState<string>(props.tab.title);

  return (
    <div
      className={`group tab-container${props.tab.active ? " tab-active" : ""}`}
    >
      <div className="peer p-1">
        <Image
          width={16}
          height={16}
          className={"tab-image"}
          alt={`${getIconForFile(title)}`}
          src={`icons/${getIconForFile(props.tab.title)}`}
        />
      </div>
      {display ? (
        <>
          <button
            title="Select tab"
            onClick={() => props.switchTab()}
            className={`tab-btn peer`}
          >
            {title}
          </button>

          <button
            title="Edit title"
            onClick={() => setDisplay(false)}
            className={"tab-btn tab-tooltip peer"}
          >
            <PencilSquareIcon className="h-6 w-6" />
          </button>

          <button
            title="Remove tab"
            onClick={() => props.removeTab()}
            className={"tab-btn tab-tooltip rounded-r-lg"}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </>
      ) : (
        <input
          autoFocus
          type="text"
          value={title}
          className={"tab-input"}
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
