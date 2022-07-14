import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const menu = [
  {
    name: "HOME",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
  },
  {
    name: "THE C6",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
  },
  {
    name: "MANIFESTO",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
  },
];

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center py-8 border justify-end md:space-x-10">
          {/* <div className="md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div> */}
          <Popover.Group
            as="nav"
            className="hidden md:flex items-center space-x-10"
          >
            {menu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-normal tracking-[0.25em] ray-5hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </Popover.Group>
        </div>
      </div>

      {/* <Transition
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
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {menu.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition> */}
    </Popover>
  );
}
