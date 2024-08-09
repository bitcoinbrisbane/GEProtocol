import { makeAutoObservable } from "mobx";

class NetworkStore {
  network: string = "Ethereum";
  contractAddress: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setNetwork(network: string) {
    this.network = network;
  }

  setContractAddress(address: string) {
    this.contractAddress = address;
  }
}

const networkStore = new NetworkStore();
export default networkStore;
