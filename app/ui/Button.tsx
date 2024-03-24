import React from "react";

const Button = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>,
) => (
  <button
    {...props}
    className="flex items-center justify-center gap-4 rounded-lg border border-white bg-transparent px-4 py-2 font-semibold ring-1 ring-white hover:bg-white/75 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 dark:border-slate-900 dark:ring-slate-900 dark:hover:bg-slate-800/75"
  >
    {props.children}
  </button>
);

export default Button;
