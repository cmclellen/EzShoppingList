/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { forwardRef } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import clsx from "clsx";
import NavLogo from "./NavLogo";
import NavBarUser from "./NavBarUser";

const navigation = [
  { name: "Lists", to: "/shopping-lists", current: true },
  // { name: "Other", to: "/shopping-lists", current: false },
];

const NavButton = forwardRef(function (item: any, ref: any) {
  let clazz: string = item.current
    ? "font-semibold underline decoration-2 underline-offset-4"
    : "font-normal hover:bg-primary hover:text-white";

  clazz = clsx(
    clazz,
    item.isMobile ? "block text-base" : "text-sm",
    "px-3 py-2"
  );

  return (
    <NavLink ref={ref} key={item.name} className={clazz} to={item.to}>
      {item.name}
    </NavLink>
  );
});

function MainNav() {
  return (
    <Disclosure as="nav" className="bg-secondary text-primary">
      <div className="mx-auto container px-2 sm:px-0">
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
              <NavLogo />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavButton
                    to={item.to}
                    name={item.name}
                    key={item.name}
                    current={item.current}
                  ></NavButton>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full bg-primary p-1 text-background hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <HiBell aria-hidden="true" className="size-6" />
            </button> */}

            <DarkModeToggle />

            <NavBarUser />
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
              isMobile={true}
              to={item.to}
              current={item.current}
              aria-current={item.current ? "page" : undefined}
            ></DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default MainNav;
