import React from "react";

const Select = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLSelectElement> &
    React.SelectHTMLAttributes<HTMLSelectElement> & { label: string },
) => (
  <label className="grid gap-2">
    <span>{props.label}</span>
    <div className="relative">
      <select
        {...props}
        className="peer w-full appearance-none rounded-lg bg-transparent px-4 py-2 ring-2 ring-white/75 focus:ring-8 focus:ring-offset-2"
      >
        {props.children}
      </select>
      <div className="absolute right-4 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/50 shadow ring-1 ring-white backdrop-blur-3xl peer-focus:-rotate-180 peer-active:-rotate-180 dark:bg-stone-800/50 dark:ring-stone-900">
        <i className="bi bi-chevron-expand text-2xl" />
      </div>
    </div>
  </label>
);

export default Select;
