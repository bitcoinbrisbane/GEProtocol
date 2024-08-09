import * as React from "react";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { factoryV3Contract } from "@/components/wagmi/contracts";

// Token data
const tokens = [
  { name: "Token A", address: "0x945d9Eb083b477472870B2D1a3FAbaFc7ad70F00", decimals: 18 },
  { name: "Mock BTC", address: "0x574084E6A21cD334277B79f35F98C0Aae24E0030", decimals: 18 },
  { name: "Mock USDT", address: "0x26a69c93Fbda73A5a46D79bdfCD282B947b741BE", decimals: 6 }
];

export function CreatePool() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  // States for input values
  const [tokenA, setTokenA] = React.useState<string>(tokens[0].address);
  const [tokenB, setTokenB] = React.useState<string>(tokens[1].address);
  const [fee, setFee] = React.useState<number>(3000); // Default fee value, e.g., 3000 for Uniswap v2

  // Handle form submission
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!writeContract) {
      return;
    }

    const formattedTokenA = tokenA.trim().toLowerCase() as `0x${string}`;
    const formattedTokenB = tokenB.trim().toLowerCase() as `0x${string}`;

    try {
      await writeContract({
        ...factoryV3Contract,
        functionName: "createPool",
        args: [formattedTokenA, formattedTokenB, fee],
      });
    } catch (err) {
      console.error("Error:", err);
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  // Handlers for input change events
  const handleTokenAChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTokenA(e.target.value);
  };

  const handleTokenBChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTokenB(e.target.value);
  };

  const handleFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFee(Number(e.target.value));
  };

  return (
    <>
      <h1 className="w-full text-center font-bold bg-highlight-dark-500 py-5">
        CREATE NEW POOL
      </h1>
      <form onSubmit={submit} className="flex flex-col gap-2">
        <label className="text-white text-xs -mb-2">Token A:</label>
        <select
          className="p-2 bg-primary-dark-500 border rounded"
          value={tokenA}
          onChange={handleTokenAChange}
          required
        >
          {tokens.map((token) => (
            <option key={token.address} value={token.address}>
              {token.name}
            </option>
          ))}
        </select>
        
        <label className="text-white text-xs -mb-2">Token B:</label>
        <select
          className="p-2 bg-primary-dark-500 border rounded"
          value={tokenB}
          onChange={handleTokenBChange}
          required
        >
          {tokens.map((token) => (
            <option key={token.address} value={token.address}>
              {token.name}
            </option>
          ))}
        </select>
        
        <label className="text-white text-xs -mb-2">Fee:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="number"
          placeholder="Fee (e.g., 3000 for Uniswap v2)"
          value={fee}
          onChange={handleFeeChange}
          min="0"
          required
        />
        
        <button
          className="bg-primary-gold-500 p-4 rounded text-white"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Creating Pool..." : "Create Pool"}
        </button>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Pool created successfully.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </form>
    </>
  );
}
