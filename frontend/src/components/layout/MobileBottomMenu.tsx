// components/Layout/MobileBottomMenu.tsx
import React from "react";
import {
  FiHome,
  FiPieChart,
  FiChevronRight,
  FiShare,
  FiSearch,
} from "react-icons/fi"; // Ubah ikon
import { AiOutlineSwap } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import menuStore from "@/stores/menuStore";
import { subMenuItems } from "@/static/menuData";

const MobileBottomMenu: React.FC = () => {
  const router = useRouter();

  const handleMenuClick = (menu: any) => {
    menuStore.setMenu(menu.key, menu.items[0]?.key || "");
    router.push(`/${menu.key}`);
    menuStore.setDrawerState(false);
  };

  const handleSubMenuClick = (subMenu: any) => {
    menuStore.setMenu(menuStore.selectedMenu, subMenu.key);
    router.push(`/${menuStore.selectedMenu}/${subMenu.key}`);
    menuStore.setDrawerState(false);
  };

  const toggleDrawer = () => {
    menuStore.toggleDrawer();
  };

  const toggleSubMenu = (menu: string) => {
    menuStore.selectedSubMenu = menuStore.selectedSubMenu === menu ? "" : menu;
  };


  return (
    <>
      <div className="z-50 fixed bottom-0 left-0 right-0 bg-secondary-dark-500 text-white/80 flex justify-around items-center py-[13px] pb-[16px] md:hidden">
        <button
          onClick={() => handleMenuClick(subMenuItems[3])}
          className={`flex flex-col items-center ${
            menuStore.selectedMenu === subMenuItems[3].key ? "text-yellow-500" : ""
          }`}
        >
          <FiPieChart className="h-4 w-4" />
          <span className="text-xs mt-1">Portfolio</span>
        </button>

        <button
          onClick={() => handleMenuClick(subMenuItems[1])}
          className={`flex flex-col items-center ${
            menuStore.selectedMenu === subMenuItems[1].key ? "text-yellow-500" : ""
          }`}
        >
          <FiSearch className="h-4 w-4" />
          <span className="text-xs mt-1">Liquidity</span>
        </button>

        <button
          onClick={() => handleMenuClick(subMenuItems[0])}
          className={`flex flex-col items-center ${
            menuStore.selectedMenu === subMenuItems[0].key ? "text-yellow-500" : ""
          }`}
        >
          <AiOutlineSwap className="h-4 w-4" />
          <span className="text-xs mt-1">Trade</span>
        </button>

        <button
          onClick={() => handleMenuClick(subMenuItems[2])}
          className={`flex flex-col items-center ${
            menuStore.selectedMenu === subMenuItems[2].key ? "text-yellow-500" : ""
          }`}
        >
          <FiShare className="h-4 w-4" />
          <span className="text-xs mt-1">Lending</span>
        </button>

        <button
          onClick={() => handleMenuClick(subMenuItems[4])}
          className={`flex flex-col items-center ${
            menuStore.selectedMenu === subMenuItems[4].key ? "text-yellow-500" : ""
          }`}
        >
          <FiHome className="h-4 w-4" />
          <span className="text-xs mt-1">Dashboard</span>
        </button>
      </div>

      {menuStore.isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed right-0 top-0 bottom-0 w-full bg-secondary-dark-500 text-white z-50 mt-12 p-4 overflow-y-hidden">
            <ul>
              {subMenuItems.map((menu) => (
                <li key={menu.key} className="mb-4">
                  <div
                    className={`font-bold text-lg mb-2 cursor-pointer flex items-center ${
                      menuStore.selectedMenu === menu.key
                        ? "text-yellow-500"
                        : ""
                    }`}
                    onClick={() => toggleSubMenu(menu.key)}
                  >
                    {menu.text}
                  </div>
                  {menuStore.selectedSubMenu === menu.key && (
                    <ul className="ml-4">
                      {menu.items.map((subItem) => (
                        <li
                          key={subItem.key}
                          onClick={() =>
                            handleSubMenuClick(subItem.key)
                          }
                          className={`mb-2 cursor-pointer flex items-center ${
                            menuStore.selectedMenu === menu.key &&
                            menuStore.selectedSubMenu === subItem.key
                              ? "text-yellow-500"
                              : ""
                          }`}
                        >
                          <FiChevronRight className="mr-2" />
                          {subItem.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(MobileBottomMenu);
