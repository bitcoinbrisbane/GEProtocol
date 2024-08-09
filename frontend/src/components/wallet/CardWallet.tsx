// CardWallet.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { Web3ReactSelectedHooks } from '@web3-react/core';
import { Connector } from '@web3-react/types';

interface Props {
  connector: Connector;
  hooks: Web3ReactSelectedHooks;
  name: string;
}

const Card: React.FC<Props> = ({ connector, hooks, name }) => {
  const { useSelectedAccount, useSelectedChainId, useSelectedIsActive, useSelectedIsActivating } = hooks;
  const isActivating = useSelectedIsActivating(connector);
  const isActive = useSelectedIsActive(connector);
  const account = useSelectedAccount(connector);
  const chain = useSelectedChainId(connector);

  const [error, setError] = useState<Error | undefined>(undefined);
  const [connectionStatus, setConnectionStatus] = useState<string>('Disconnected');

  const handleToggleConnect = () => {
    setError(undefined); // clear error state

    if (isActive) {
      if (connector?.deactivate) {
        void connector.deactivate();
      } else {
        void connector.resetState();
      }
    } else if (!isActivating) {
      setConnectionStatus('Connecting..');
      Promise.resolve(connector.activate(1))
        .catch((e) => {
          connector.resetState();
          setError(e);
        });
    }
  };

  useEffect(() => {
    if (isActive) {
      setConnectionStatus('Connected');
    } else {
      setConnectionStatus('Disconnected');
    }
  }, [isActive]);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <p className="text-center text-xl font-bold mb-4">{name.toUpperCase()}</p>
      <h3 className="text-center text-lg">{error?.message ? `Error: ${error.message}` : `Status - ${connectionStatus}`}</h3>
      <h3 className="text-center text-lg">Address - {account ? account : 'No Account Detected'}</h3>
      <h3 className="text-center text-lg">ChainId - {chain ? chain : 'No Chain Connected'}</h3>
      <div className="text-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleToggleConnect}
          disabled={false}
        >
          {isActive ? 'Disconnect' : 'Connect'}
        </button>
      </div>
    </div>
  );
};

export default Card;
