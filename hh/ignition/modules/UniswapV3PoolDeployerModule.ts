import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("UniswapV3PoolDeployerModule", (m) => {
  const deployer = m.contract("UniswapV3PoolDeployer");

  return { deployer };
});
