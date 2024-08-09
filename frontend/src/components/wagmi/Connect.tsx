import { useState } from "react";
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import type { Register } from "wagmi";
import Modal from '@/components/Modal'; // Pastikan jalur impor sesuai dengan struktur proyekmu

export function Connect() {
  const { connector, isConnected } = useAccount();
  const { connect, connectors, error, status, variables } = useConnect();
  const { chains } = useSwitchChain();
  const { disconnect } = useDisconnect();
  const [chainId, setChainId] = useState<Register["config"]["state"]["chainId"]>(chains[0].id);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex justify-center py-1 px-2 md:py-2 md:px-4 border border-transparent shadow-sm text-xs md:text-sm font-medium rounded-md text-white bg-primary-gold-500 hover:bg-primary-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-gold-500"
      >
        <div className="hidden md:flex">CONNECT WALLET</div>
        <div className="flex md:hidden">CONNECT</div>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {!isConnected && (
          <div className="mb-4 ">
            <label htmlFor="chain-select" className="block text-sm font-medium text-white">
              Choose chain:
            </label>
            <select
              id="chain-select"
              value={chainId}
              onChange={(e) => setChainId(Number(e.target.value) as Register["config"]["state"]["chainId"])}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-gold-500 focus:border-primary-gold-500 sm:text-sm rounded-md"
            >
              {chains.map((chain) => (
                <option key={chain.id} value={chain.id}>
                  {chain.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-2 text-white">
            Choose wallet:
          </label>
          <div className="grid gap-2">
            {connectors
              .filter((x) => x.id !== connector?.id)
              .map((connector) => (
                <button
                  key={connector.id}
                  onClick={() => connect({ connector, chainId })}
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-gold-500 hover:bg-primary-gold-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-gold-500"
                >
                  {connector.name}
                  {variables?.connector === connector && status === "pending" && " (connecting)"}
                </button>
              ))}
          </div>
        </div>

        {isConnected && (
          <div className="mt-4">
            <button
              onClick={() => disconnect()}
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Disconnect from {connector?.name}
            </button>
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-500 text-sm">
            {error.message}
          </div>
        )}
      </Modal>
    </div>
  );
}
