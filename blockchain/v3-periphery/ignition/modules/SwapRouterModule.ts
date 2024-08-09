import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SwapRouterModule", (m) => {
  const factory = "0xF6E9ff447C8E7bb2098eb558557C34B483ec928E";
  const weth = "0x5Df3cF639d8cB528A973B2b4BA6eC9D7EEd6a176";
  const router = m.contract("SwapRouter", [factory, weth]);

  return { router };
});
