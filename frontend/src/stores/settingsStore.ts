import { makeAutoObservable } from "mobx";

class SettingsStore {
  theme: "light" | "dark" = "light";
  language: string = "en";
  slippageTolerance: number = 0.5;

  constructor() {
    makeAutoObservable(this);
  }

  setTheme(theme: "light" | "dark") {
    this.theme = theme;
  }

  setLanguage(language: string) {
    this.language = language;
  }

  setSlippageTolerance(tolerance: number) {
    this.slippageTolerance = tolerance;
  }
}

const settingsStore = new SettingsStore();
export default settingsStore;
