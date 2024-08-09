//components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiSettings, FiSun, FiMoon } from "react-icons/fi"; // Import react-icons
// import { subMenuItems, MenuItem, SubMenuItem } from "@/static/menuData"; // Import data menu
import { subMenuItems } from "@/static/menuData"; // Import data menu

import MobileBottomMenu from "./MobileBottomMenu";
import { Connect } from "@/components/wagmi/Connect";
import menuStore from "@/stores/menuStore";
import { observer } from "mobx-react-lite";

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Theme state
  const router = useRouter();

  useEffect(() => {
    // Initialize menu only on client-side
    menuStore.initializeMenu();
  }, []);

  const handleMenuClick = (menu: any) => {
    menuStore.setMenu(menu.key, menu.items[0]?.key || "");
    router.push(`/${menu.key}`);
  };

  const handleSubMenuClick = (subMenu: any) => {
    menuStore.setMenu(menuStore.selectedMenu, subMenu.key);
    router.push(`/${menuStore.selectedMenu}/${subMenu.key}`);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (isDarkMode) {
      rootElement?.classList.add("dark");
    } else {
      rootElement?.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Menu Section 1 */}
      <nav className=" fixed top-0 right-0 left-0 md:static md:top-auto md:right-auto md:left-auto z-50 bg-gray-400 primary-dark-500 dark:bg-secondary-dark-500 md:dark:bg-primary-dark-500 dark:text-primary-light-500 px-2 md:px-4 flex flex-row justify-between items-center">
        {/* Left */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Image
            className="p-1 md:p-0"
            src="/ge.svg"
            alt="Logo"
            width={40}
            height={20}
            priority
          />
          <div className="text-sm md:text-lg font-bold my-3 md:my-auto">
            GE Protocol
          </div>
        </div>
        {/* Center */}
        <ul className="hidden md:flex flex-space-2 mx-2 md:space-x-4">
          {subMenuItems.map((item) => (
            <li
              key={item.key}
              onClick={() => handleMenuClick(item)}
              className={`cursor-pointer content-center text-center px-2 py-4 md:px-4 md:py-4 text-[11px] lg:text-base capitalize ${
                menuStore.selectedMenu === item.key
                  ? "bg-secondary-dark-500 text-primary-gold-500"
                  : ""
              }`}
            >
              <div
                className={`${
                  menuStore.selectedMenu === item.key
                    ? "text-primary-light-500"
                    : "text-primary-light-700"
                }`}
              >
                {item.text}
              </div>
            </li>
          ))}
        </ul>
        {/* Right */}
        <div className="flex items-center space-x-2 md:space-x-4 ">
          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex text-primary-lig text-primary-light-500 text-xs focus:outline-none"
          >
            {isDarkMode ? (
              <FiSun className="h-5 w-5 cursor-pointer" />
            ) : (
              <FiMoon className="h-5 w-5 cursor-pointer" />
            )}
          </button>
          {/* Settings Button */}
          <button className="flex text-primary-lig text-primary-light-500 text-xs focus:outline-none">
            <FiSettings className="h-4 w-4 md:h-5 md:w-5 cursor-pointer" />
          </button>
          {/* Connect Wallet Button */}
          <Connect />
        </div>
      </nav>
      {/* Menu Section 2 */}
      <nav className="bg-secondary-dark-500 text-white/80  shadow-lg z-50  fixed top-11 right-0 left-0 md:static md:top-auto md:right-auto md:left-auto border-t-[1px] border-primary-dark-500 md:border-0">
        <div className="flex justify-center w-100 ">
          <ul className="flex space-x-2 md:space-x-16">
            {subMenuItems
              .find((menu) => menu.key === menuStore.selectedMenu)
              ?.items.map((subItem) => (
                <li
                  key={subItem.key}
                  onClick={() => handleSubMenuClick(subItem)}
                  className={`p-4 py-2 cursor-pointer text-center hover:text-primary-gold-500 text-xs lg:text-base capitalize ${
                    menuStore.selectedSubMenu === subItem.key
                      ? "border-b-4 border-primary-gold-500"
                      : ""
                  }`}
                >
                  <div
                    className={`cursor-pointer  ${
                      menuStore.selectedSubMenu === subItem.key
                        ? "text-primary-gold-500"
                        : ""
                    }`}
                  >
                    {subItem.text}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </nav>

      <MobileBottomMenu />
    </>
  );
};

export default observer(Navbar);
