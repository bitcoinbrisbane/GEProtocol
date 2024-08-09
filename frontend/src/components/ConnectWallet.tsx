// components/ConnectWallet.tsx
import { useState } from 'react';
import onboard from '../lib/web3-onboard';

const ConnectWallet = () => {
  const [wallet, setWallet] = useState<any>(null);

  const connectWallet = async () => {
    const wallets = await onboard.connectWallet();
    setWallet(wallets[0]);
  };

  return (
    <>
      <button
        onClick={connectWallet}
        className="bg-primary-gold-500  px-2 py-1 md:px-4 md:py-2 rounded text-primary-lig text-primary-light-500 text-xs font-bold"
      >
        <div className="hidden md:flex">CONNECT WALLET</div>
        <div className="flex md:hidden text-[10px]">CONNECT</div>
      </button>
      {wallet && (
        <div className="mt-4">
          <p>Connected to {wallet.accounts[0].address}</p>
        </div>
      )}
    </>
  );
};

export default ConnectWallet;


