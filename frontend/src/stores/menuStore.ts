// stores/menuStore.ts
import { makeAutoObservable } from "mobx";
import { subMenuItems } from "@/static/menuData";

class MenuStore {
  selectedMenu: string = "";
  selectedSubMenu: string = "";
  isDrawerOpen: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  initializeMenu() {
    if (typeof window === "undefined") return;

    const pathParts = window.location.pathname.split("/");
    const parentMenu = pathParts[1] || "trade";
    const subMenu = pathParts[2] || "swap";

    const foundMenu = subMenuItems.find((menu) => menu.key === parentMenu);
    const foundSubMenu = foundMenu?.items.find((item) => item.key === subMenu);

    if (foundMenu && foundSubMenu) {
      this.selectedMenu = foundMenu.key;
      this.selectedSubMenu = foundSubMenu.key;
    } else if (foundMenu) {
      this.selectedMenu = foundMenu.key;
      this.selectedSubMenu = foundMenu.items[0]?.key || "";
    }
  }

  setMenu(menu: string, subMenu: string) {
    this.selectedMenu = menu;
    this.selectedSubMenu = subMenu;
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  setDrawerState(isOpen: boolean) {
    this.isDrawerOpen = isOpen;
  }
}

const menuStore = new MenuStore();
export default menuStore;
