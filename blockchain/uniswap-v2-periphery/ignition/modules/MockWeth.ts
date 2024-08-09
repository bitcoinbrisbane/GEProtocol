import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MockWethModule = buildModule("MockWethModule", (m) => {
  const token = m.contract("MockWeth");

  return { token };
});

export default MockWethModule;
