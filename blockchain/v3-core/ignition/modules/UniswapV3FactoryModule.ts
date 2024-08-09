import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

export default buildModule('UniswapV3Factory', (m) => {
  const factory = m.contract('UniswapV3Factory')

  return { factory }
})
