import React from "react";

const Input = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement> & { label: string },
) => (
  <label className="grid gap-2">
    <span>{props.label}</span>
    <input
      {...props}
      className="w-full appearance-none rounded-lg bg-transparent px-4 py-2 ring-2 ring-white/75 focus:ring-8 focus:ring-offset-2"
    >
      {props.children}
    </input>
  </label>
);

export default Input;
