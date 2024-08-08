import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

export default buildModule('PoolStorageModule', (m) => {
  const pool = m.contract('PoolStorage');

  return { pool };
});
