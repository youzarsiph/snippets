import clsx from "clsx";
import React from "react";

const Buttons = (props: { style: boolean; position: boolean }) =>
  props.style ? (
    <div
      className={clsx("flex items-center gap-4 py-4", {
        "flex-row-reverse": !props.position,
      })}
    >
      <button className="peer h-5 w-5 rounded-full bg-red-500 ring-1 ring-red-600 ring-opacity-50 hover:bg-red-600 focus:outline-none focus:ring-8 focus:ring-red-400 focus:ring-offset-4 active:scale-95 dark:ring-opacity-75"></button>

      <button className="peer h-5 w-5 rounded-full bg-yellow-500 ring-1 ring-yellow-600 ring-opacity-50 hover:bg-yellow-600 focus:outline-none focus:ring-8 focus:ring-yellow-400 focus:ring-offset-4 active:scale-95 dark:ring-opacity-75"></button>

      <button className="peer h-5 w-5 rounded-full bg-green-500 ring-1 ring-green-600 ring-opacity-50 hover:bg-green-600 focus:outline-none focus:ring-8 focus:ring-green-400 focus:ring-offset-4 active:scale-95 dark:ring-opacity-75"></button>
    </div>
  ) : (
    <div
      className={clsx("flex items-center gap-4 py-2", {
        "flex-row-reverse": props.position,
      })}
    >
      <button className="peer flex h-8 w-8 items-center justify-center rounded-lg hover:bg-white/80 active:scale-95 active:bg-white/80 dark:text-stone-200 dark:hover:bg-stone-700/75 dark:active:bg-stone-700/80">
        <i className="bi bi-dash-lg text-2xl" />
      </button>

      <button className="peer flex h-8 w-8 items-center justify-center rounded-lg hover:bg-white/80 active:scale-95 active:bg-white/80 dark:text-stone-200 dark:hover:bg-stone-700/75 dark:active:bg-stone-700/80">
        <i className="bi bi-fullscreen text-2xl" />
      </button>

      <button className="peer flex h-8 w-8 items-center justify-center rounded-lg hover:bg-white/80 active:scale-95 active:bg-white/80 dark:text-stone-200 dark:hover:bg-stone-700/75 dark:active:bg-stone-700/80">
        <i className="bi bi-x-lg text-2xl" />
      </button>
    </div>
  );

export default Buttons;
