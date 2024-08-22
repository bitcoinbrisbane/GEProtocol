import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokensModule = buildModule("TokensModule", (m) => {
  const tokenA = m.contract("MockERC20", ["TokenA", "TKA", 18]);
  const tokenB = m.contract("MockERC20", ["TokenB", "TKB", 18]);

  return { tokenA, tokenB };
});

export default TokensModule;
