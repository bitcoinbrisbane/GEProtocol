import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenAModule = buildModule("TokenAModule", (m) => {
  const token = m.contract("MockERC20", ["TokenA", "TKA", 18]);

  return { token };
});

export default TokenAModule;
