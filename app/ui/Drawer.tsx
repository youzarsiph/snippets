import clsx from "clsx";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Drawer = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLElement> &
    React.HTMLAttributes<HTMLElement> & {
      title: string;
      isVisible: boolean;
      onDisplayChange: () => void;
    },
) => (
  <aside
    className={clsx(
      "absolute inset-x-0 overflow-auto rounded-t-3xl bg-white/80 ring-1 ring-white dark:bg-stone-800/75 dark:ring-stone-900 lg:inset-x-auto lg:top-4 lg:max-w-md lg:rounded-3xl",
      {
        "bottom-full lg:bottom-4 lg:left-28": props.isVisible,
        "-bottom-[1000%] lg:-left-[200%] lg:bottom-4": !props.isVisible,
      },
    )}
    {...props}
  >
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 rounded-3xl backdrop-blur-3xl"></div>

      <div className="grid gap-6 p-6">
        <div className="item-center flex justify-between gap-8">
          <h2 className="text-xl">{props.title}</h2>

          <button
            type="button"
            onClick={() => props.onDisplayChange()}
            className="relative rounded-3xl px-4 py-2 ring-1 ring-white hover:bg-white/80 dark:ring-stone-900 dark:hover:bg-stone-800/75"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {props.children}
      </div>
    </div>
  </aside>
);

export default Drawer;
