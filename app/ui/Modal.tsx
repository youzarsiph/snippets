import clsx from "clsx";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@/app/ui";

const Modal = (props: {
  title: string;
  show: boolean;
  theme: boolean;
  onClose: () => void;
  children?: React.ReactNode | React.ReactNode[];
}) => (
  <Transition appear show={props.show} as={React.Fragment}>
    <Dialog
      as="div"
      onClose={() => props.onClose()}
      className={clsx({ dark: props.theme }, "relative z-50")}
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
        <div className="fixed inset-0 bg-slate-900/30" />
      </Transition.Child>

      <div className="fixed inset-x-0 bottom-0 flex items-center justify-center lg:inset-y-0">
        <div className="flex items-center justify-center p-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative grid max-h-[40rem] w-full min-w-[30rem] transform gap-6 overflow-hidden overflow-y-auto rounded-2xl rounded-t-3xl bg-white bg-white/80 p-6 text-left align-middle shadow-xl ring-1 ring-white transition-all lg:inset-x-auto lg:max-h-[45rem] lg:max-w-md lg:rounded-3xl dark:bg-slate-800/75 dark:ring-slate-900">
              <div className="absolute inset-0 -z-10 rounded-3xl backdrop-blur-3xl"></div>

              <div className="flex items-center justify-between gap-4">
                <Dialog.Title
                  as="h1"
                  className="text-3xl font-medium leading-6"
                >
                  {props.title}
                </Dialog.Title>

                <Button onClick={() => props.onClose()}>
                  <i className="bi bi-x-lg text-xl" />
                </Button>
              </div>

              {props.children}

              <Button onClick={() => props.onClose()}>Close</Button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

export default Modal;
