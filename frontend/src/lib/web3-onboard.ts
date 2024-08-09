// lib/web3-onboard.ts
import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';

const injected = injectedModule();

const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: '0x1', // Mainnet chain ID
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'
    }
  ],
  appMetadata: {
    name: 'My App',
    icon: '<svg>My App Icon</svg>',
    description: 'My App description'
  }
});

export default onboard;
