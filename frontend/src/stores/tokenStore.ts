import { makeAutoObservable } from "mobx";

interface Token {
  symbol: string;
}

class TokenStore {
  tokens: Token[] = [];
  balances: Record<string, number> = {};

  constructor() {
    makeAutoObservable(this);
  }

  setTokens(tokens: Token[]) {
    this.tokens = tokens;
  }

  setBalance(token: string, balance: number) {
    this.balances[token] = balance;
  }
}

const tokenStore = new TokenStore();
export default tokenStore;
