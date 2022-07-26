import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import VideoModal from "./VideoModal";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

type MenuType = {
  name: string;
  href: string;
};

const menu: MenuType[] = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "THE C6",
    href: "https://tailwindcss.com/docs/responsive-design",
  },
  {
    name: "MANIFESTO",
    href: "",
  },
];

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  return (
    <Popover className="relative">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex items-center py-5 px-5 justify-end md:space-x-10">
          <div className="md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 active:text-gray-900 active:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex items-center space-x-10"
          >
            <button className="px-2.5 py-1.5 rounded-full hover:bg-gray-100 transition-all duration-100 group">
              <a
                href="#"
                className="text-sm font-normal tracking-[0.25em] ray-5hover:text-gray-900"
              >
                HOME
              </a>
            </button>
            <button
              className="px-2.5 py-1.5 rounded-full hover:bg-gray-100 text-sm font-normal tracking-[0.25em] ray-5hover:text-gray-900 transition-all duration-100 group"
              onClick={() => setOpenModal(true)}
            >
              THE C6
            </button>
            <button className="px-2.5 py-1.5 rounded-full hover:bg-gray-100 transition-all duration-100 group">
              <a
                href="#"
                className="text-sm font-normal tracking-[0.25em] ray-5hover:text-gray-900"
              >
                MANIFESTO
              </a>
            </button>
          </Popover.Group>
          <Popover.Group
            as="nav"
            className="hidden md:flex items-center space-x-2"
          >
            <div className="px-2.5 py-1.5 rounded-full hover:bg-gray-100 transition-all duration-100">
              <a href="" target="_blank" rel="noreferrer">
                <img src="/assets/twitter.svg" className="w-7" alt="twitter" />
              </a>
            </div>
            <div className="px-2.5 py-1.5 rounded-full hover:bg-gray-100 transition-all duration-100">
              <a href="" target="_blank" rel="noreferrer">
                <img src="/assets/discord.svg" className="w-8" alt="discord" />
              </a>
            </div>
          </Popover.Group>
        </div>
      </div>

      <VideoModal open={openModal} setOpen={setOpenModal} />

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
                    className="navbar-button"
                    onClick={() => router.push('/')}
                  >
                    HOME
                  </button>
                  <button
                    className="navbar-button"
                    onClick={() => setOpenModal(true)}
                  >
                    THE C6
                  </button>
                  <button
                    className="navbar-button"
                  >
                    MANIFESTO
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
