import clsx from 'clsx'
import React from 'react'
import { Switch as BaseSwitch } from '@headlessui/react'

const Switch = (props: { value: boolean; onChange: () => void }) => (
  <BaseSwitch
    checked={props.value}
    onChange={() => props.onChange()}
    className={clsx(
      { 'bg-indigo-600': props.value },
      'relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent ring-1 ring-white ease-in-out hover:border-indigo-600 hover:bg-indigo-500/75 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-white/75 active:scale-95 dark:border-slate-900 dark:ring-slate-900  dark:hover:bg-indigo-600/75',
    )}
  >
    <span className="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      className={clsx(
        { 'translate-x-9': props.value, 'translate-x-0': !props.value },
        'pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 ease-in-out',
      )}
    />
  </BaseSwitch>
)

export default Switch
