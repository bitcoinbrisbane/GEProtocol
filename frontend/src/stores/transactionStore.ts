import { makeAutoObservable } from "mobx";

class TransactionStore {
  transactions: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTransaction(transaction: string) {
    this.transactions.push(transaction);
  }
}

const transactionStore = new TransactionStore();
export default transactionStore;
