import clsx from 'clsx'
import React from 'react'
import { Switch as BaseSwitch } from '@headlessui/react'

const Switch = (props: { value: boolean; onChange: () => void }) => (
  <BaseSwitch
    checked={props.value}
    onChange={() => props.onChange()}
    className={clsx(
      {
        'bg-sky-950 ring-sky-950': props.value,
        'bg-yellow-400 ring-amber-400': !props.value,
      },
      'relative flex h-[38px] w-[74px] cursor-pointer items-center justify-center rounded-full ring-2 ring-offset-1 ease-in-out focus:outline-none',
    )}
  >
    <span className="sr-only">Use {props.value ? 'Dark' : 'Light'} theme</span>
    <span
      aria-hidden="true"
      className={clsx(
        {
          'translate-x-[18px] bg-sky-800/80 ring-sky-500': props.value,
          '-translate-x-[18px] bg-white/80 ring-amber-500': !props.value,
        },
        'pointer-events-none flex h-[34px] w-[34px] items-center justify-center rounded-full shadow-xl ring-1 ease-in-out',
      )}
    >
      <i
        className={clsx('bi text-xl', {
          'bi-moon-stars-fill -rotate-90': props.value,
          'bi-sun-fill rotate-90': !props.value,
        })}
      ></i>
    </span>
  </BaseSwitch>
)

export default Switch
