import clsx from 'clsx'
import React from 'react'
import { Listbox, Transition } from '@headlessui/react'

const ColorPicker = (props: {
  label: string
  value: string
  data: string[]
  onChange: (val: string) => void
}) => (
  <div className="grid gap-2">
    <span>{props.label}</span>
    <Listbox value={props.value} onChange={(v) => props.onChange(v)}>
      <div className="relative mt-1">
        <Listbox.Button
          className={clsx(
            'flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg border border-white bg-transparent px-8 py-4 ring-1 ring-white focus:ring-4 focus:ring-offset-2 dark:border-slate-900 dark:ring-slate-900',
            props.value,
          )}
        >
          <span>Click to change</span>
          <i className="bi bi-chevron-expand text-xl" />
        </Listbox.Button>

        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 grid max-h-60 w-full cursor-pointer gap-4 overflow-auto rounded-md bg-white px-1 py-2 shadow-xl ring-1 ring-white focus:outline-none dark:bg-slate-800 dark:ring-slate-900">
            {props.data.map((item, index) => (
              <Listbox.Option
                key={index}
                value={item}
                className={clsx(
                  'flex items-center justify-between gap-4 rounded-lg px-8 py-4',
                  item,
                )}
              >
                {({ selected }) => (
                  <>
                    <span>{selected ? 'Selected' : undefined}</span>
                    {selected ? (
                      <i className="bi bi-check-lg text-xl" />
                    ) : undefined}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  </div>
)

export default ColorPicker
