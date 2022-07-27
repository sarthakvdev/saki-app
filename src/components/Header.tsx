import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import VideoModal from "./VideoModal";

export default function Header() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = useRouter();
  return (
    <Popover className="relative">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex items-center py-5 px-5 justify-end md:space-x-10">
          {/* Menu Icon: Mobile */}
          <div className="md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 active:text-gray-900 active:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/* Desktop Navigation */}
          <Popover.Group
            as="nav"
            className="hidden md:flex items-center space-x-10"
          >
            <button
              className="header-btn-desktop"
              onClick={() => router.push("/")}
            >
              HOME
            </button>
            <button
              className="header-btn-desktop"
              onClick={() => setOpenModal(true)}
            >
              THE C6
            </button>
            <button className="header-btn-desktop">MANIFESTO</button>
          </Popover.Group>
          {/* Desktop Icons */}
          <Popover.Group
            as="nav"
            className="hidden md:flex items-center space-x-2"
          >
            <div className="header-btn-desktop">
              <a href="" target="_blank" rel="noreferrer">
                <img src="/assets/twitter.svg" className="w-7" alt="twitter" />
              </a>
            </div>
            <div className="header-btn-desktop">
              <a href="" target="_blank" rel="noreferrer">
                <img src="/assets/discord.svg" className="w-8" alt="discord" />
              </a>
            </div>
          </Popover.Group>
        </div>
      </div>

      <VideoModal open={openModal} setOpen={setOpenModal} />

      {/* Menu Modal - Mobile View Mobile View mobile */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-3">
                <nav className="flex flex-col gap-y-7">
                  <button
                    className="header-btn-mobile"
                    onClick={() => router.push("/")}
                  >
                    HOME
                  </button>
                  <button
                    className="header-btn-mobile"
                    onClick={() => setOpenModal(true)}
                  >
                    THE C6
                  </button>
                  <button className="header-btn-mobile">MANIFESTO</button>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
