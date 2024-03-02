import clsx from "clsx";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/ui";

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
      "absolute inset-x-0 max-h-[30rem] min-w-96 overflow-auto rounded-t-3xl bg-white/80 ring-1 ring-white lg:inset-x-auto lg:top-4 lg:max-h-full lg:max-w-md lg:rounded-3xl dark:bg-stone-800/75 dark:ring-stone-900",
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
        <div className="flex items-center justify-between gap-8">
          <h2 className="text-xl">{props.title}</h2>

          <Button onClick={() => props.onDisplayChange()}>
            <XMarkIcon className="h-6 w-6" />
          </Button>
        </div>

        {props.children}
      </div>
    </div>
  </aside>
);

export default Drawer;
