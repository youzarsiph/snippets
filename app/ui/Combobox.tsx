import clsx from 'clsx'
import React from 'react'
import { Combobox as BaseCombobox, Transition } from '@headlessui/react'
import { Icons } from '../utils'

const Combobox = (props: {
  label: string
  value: string
  data: string[]
  onChange: (val: string) => void
}) => {
  const [query, setQuery] = React.useState('')

  const filteredData =
    query === ''
      ? props.data
      : props.data.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        )

  return (
    <div className="grid gap-2">
      <span>{props.label}</span>

      <BaseCombobox value={props.value} onChange={(v) => props.onChange(v)}>
        <div className="relative mt-1">
          <div className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg bg-transparent focus:outline-none">
            <BaseCombobox.Input
              displayValue={() => props.value}
              onChange={(event) => setQuery(event.target.value)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg border border-white bg-transparent px-4 py-2 ring-1 ring-white focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2 dark:border-slate-900 dark:ring-slate-900"
            />
            <BaseCombobox.Button className="absolute inset-y-0 right-0 pr-4">
              {Icons.expand}
            </BaseCombobox.Button>
          </div>

          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <BaseCombobox.Options className="absolute z-10 mt-1 grid max-h-60 w-full cursor-pointer gap-2 overflow-y-auto overflow-x-hidden rounded-md bg-white px-1 py-2 shadow-xl ring-1 ring-white focus:outline-none dark:bg-slate-800 dark:ring-slate-900">
              {filteredData.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredData.map((item) => (
                  <BaseCombobox.Option
                    key={item}
                    className={({ active }) =>
                      clsx(
                        'flex items-center justify-between gap-4 rounded-lg px-2 py-1',
                        {
                          'bg-indigo-500 text-white': active,
                        },
                      )
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={clsx('block truncate', {
                            'font-medium': selected,
                            'font-normal': !selected,
                          })}
                        >
                          {item}
                        </span>
                        {selected ? Icons.check : undefined}
                      </>
                    )}
                  </BaseCombobox.Option>
                ))
              )}
            </BaseCombobox.Options>
          </Transition>
        </div>
      </BaseCombobox>
    </div>
  )
}

export default Combobox
