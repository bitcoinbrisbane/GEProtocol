import { makeAutoObservable } from "mobx";

class AppStatusStore {
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  setError(error: string | null) {
    this.error = error;
  }
}

const appStatusStore = new AppStatusStore();
export default appStatusStore;
