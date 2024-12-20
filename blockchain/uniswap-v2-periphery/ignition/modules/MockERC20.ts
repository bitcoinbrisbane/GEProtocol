import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MockwERC20Module = buildModule("MockwERC20Module", (m) => {
  const token = m.contract("MockERC20", ["MockDAI", "DAI", 18]);

  return { token };
});

export default MockwERC20Module;
