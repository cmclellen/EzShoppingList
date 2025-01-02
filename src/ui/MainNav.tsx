/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { forwardRef } from "react";
import { HiBars3, HiBell, HiMoon, HiSun, HiXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import DarkModeToggle from "./DarkModeToggle";

const navigation = [
  { name: "Lists", href: "#", to: "/lists", current: true },
  { name: "Other", href: "#", to: "/lists", current: false },
  //   { name: "Team", href: "#", current: false },
  //   { name: "Projects", href: "#", current: false },
  //   { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const isActiveMenuItemClasses = "bg-gray-900 text-white";
const isInactiveMenuItemClasses =
  "text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white";

const NavButton = forwardRef(function (item: any, ref: any) {
  return (
    <NavLink ref={ref} key={item.name} {...item}>
      {item.name}
    </NavLink>
  );
});

function MainNav() {
  return (
    <Disclosure
      as="nav"
      className="dark:bg-gray-800 bg-gray-300 dark:text-gray-300 text-gray-800"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 dark:text-gray-400 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700 dark:focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <HiBars3
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden "
              />
              <HiXMark
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    to={item.to}
                    key={item.name}
                    className={classNames(
                      item.current
                        ? isActiveMenuItemClasses
                        : isInactiveMenuItemClasses,
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <HiBell aria-hidden="true" className="size-6" />
            </button>

            <DarkModeToggle />

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                  6
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={NavButton}
              name={item.name}
              to={item.to}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? isActiveMenuItemClasses
                  : isInactiveMenuItemClasses,
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            ></DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default MainNav;
