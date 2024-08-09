import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MockwBTCModule = buildModule("MockwBTCModule", (m) => {
  const token = m.contract("MockwBTC");

  return { token };
});

export default MockwBTCModule;
