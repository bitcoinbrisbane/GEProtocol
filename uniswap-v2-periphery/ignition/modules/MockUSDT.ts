import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MockUSDTModule = buildModule("MockUSDTModule", (m) => {
  const token = m.contract("MockUSDT");

  return { token };
});

export default MockUSDTModule;
