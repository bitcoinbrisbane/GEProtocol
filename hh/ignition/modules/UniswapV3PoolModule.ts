import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("UniswapV3PoolModule", (m) => {
  const pool = m.contract("UniswapV3Pool");

  return { pool };
});
