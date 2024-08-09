import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenBModule = buildModule("TokenBModule", (m) => {
  const token = m.contract("MockERC20", ["TokenB", "TKB", 6]);

  return { token };
});

export default TokenBModule;
