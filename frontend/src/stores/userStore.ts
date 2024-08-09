import { makeAutoObservable } from "mobx";

interface User {
  name: string;
  wallet: string;
}

class UserStore {
  user: User | null = null;
  isAuthenticated: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
    this.isAuthenticated = true;
  }

  logout() {
    this.user = null;
    this.isAuthenticated = false;
  }
}

const userStore = new UserStore();
export default userStore;
