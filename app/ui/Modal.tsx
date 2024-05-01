import clsx from 'clsx'
import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Button } from '@/app/ui'
import { Icons } from '../utils'

const Modal = (props: {
  title: string
  show: boolean
  theme: boolean
  onClose: () => void
  children?: React.ReactNode | React.ReactNode[]
}) => (
  <Transition appear show={props.show} as={React.Fragment}>
    <Dialog
      as="div"
      onClose={() => props.onClose()}
      className={clsx({ dark: props.theme }, 'relative z-50')}
    >
      <Transition.Child
        as={React.Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-slate-950/10" />
      </Transition.Child>

      <div className="fixed inset-x-0 bottom-0 flex items-center justify-center lg:inset-y-0">
        <div className="flex w-full items-center justify-center p-4 text-center lg:justify-start">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative grid w-full transform gap-6 rounded-2xl rounded-t-3xl bg-white bg-white/80 text-left align-middle shadow-xl ring-1 ring-white transition-all lg:inset-x-auto lg:w-auto lg:rounded-3xl dark:bg-slate-800/75 dark:ring-slate-900">
              <div className="absolute inset-0 -z-10 rounded-3xl backdrop-blur-3xl"></div>

              <div className="flex items-center justify-between gap-4 px-6 pt-6">
                <Dialog.Title
                  as="h1"
                  className="text-3xl font-medium leading-6"
                >
                  {props.title}
                </Dialog.Title>

                <Button onClick={() => props.onClose()}>
                  <Icons.Close className="h-6 w-6" />
                </Button>
              </div>

              <div className="grid max-h-[40rem] w-full min-w-full gap-6 overflow-hidden overflow-y-auto px-6 py-2 lg:max-h-[40rem] lg:min-w-[30rem] lg:max-w-md">
                {props.children}
              </div>

              <div className="grid gap-4 px-6 pb-6">
                <Button onClick={() => props.onClose()}>Close</Button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
)

export default Modal
