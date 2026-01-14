"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Panelist {
  name: string;
  affiliation: string;
  isModerator?: boolean;
}

interface PanelDialogProps {
  title: string;
  panelists: Panelist[];
  description?: string;
}

export default function PanelDialog({ title, panelists, description }: PanelDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-white hover:text-yellow-400 transition-colors underline underline-offset-2 decoration-dotted"
      >
        {title}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-start">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-semibold leading-6 text-yellow-500"
                    >
                      {title}
                    </Dialog.Title>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-white"
                      onClick={closeModal}
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {description && (
                    <p className="mt-4 text-gray-300">{description}</p>
                  )}

                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-white mb-3">Panelists</h4>
                    <ul className="space-y-3">
                      {panelists.map((panelist, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <div>
                            <span className="text-white font-medium">
                              {panelist.name}
                            </span>
                            {panelist.isModerator && (
                              <span className="ml-2 text-xs bg-yellow-500 text-black px-2 py-0.5 rounded-full">
                                Moderator
                              </span>
                            )}
                            <span className="text-gray-400 block text-sm">
                              {panelist.affiliation}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-400 focus:outline-none"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
} 