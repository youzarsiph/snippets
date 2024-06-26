import React from 'react'

const Input = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement> & { label: string },
) => (
  <label className="grid gap-2">
    <span>{props.label}</span>
    <input
      {...props}
      className="flex w-full appearance-none rounded-lg border border-white bg-transparent px-4 py-2 caret-indigo-600 outline-none ring-1 ring-white hover:border-indigo-600 hover:ring-indigo-500 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 dark:border-slate-900 dark:ring-slate-900"
    >
      {props.children}
    </input>
  </label>
)

export default Input
