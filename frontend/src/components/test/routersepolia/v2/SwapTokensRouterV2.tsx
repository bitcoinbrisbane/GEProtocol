import * as React from "react";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { routerV2Contract } from "@/components/wagmi/contracts";
import { parseUnits, formatUnits } from "viem";

// Token data
const tokens = [
  { name: "Token A", address: "0x945d9Eb083b477472870B2D1a3FAbaFc7ad70F00", decimals: 18 },
  { name: "Mock BTC", address: "0x574084E6A21cD334277B79f35F98C0Aae24E0030", decimals: 18 },
  { name: "Mock USDT", address: "0x26a69c93Fbda73A5a46D79bdfCD282B947b741BE", decimals: 6 }
];

export function SwapTokens() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  // States for input values
  const [amountIn, setAmountIn] = React.useState<string>('');
  const [amountOutMin, setAmountOutMin] = React.useState<string>('');
  const [path, setPath] = React.useState<string[]>([
    tokens[0].address, // Default to first token address
    tokens[1].address  // Default to second token address
  ]);
  const [to, setTo] = React.useState<string>(
    "0x7FAEE86E94Ce9A4E3F5a21d74e7Da308CbD7b08d"
  );
  const [deadline, setDeadline] = React.useState<bigint>(BigInt(1753408279));

  // Helper function to get the decimals for a token address
  const getDecimals = (address: string): number => {
    const token = tokens.find(token => token.address === address);
    return token ? token.decimals : 18; // Default to 18 if not found
  };

  // Helper function to convert Wei to ETH using viem
  function weiToEth(wei: bigint, tokenAddress: string): string {
    const decimals = getDecimals(tokenAddress);
    return formatUnits(wei, decimals)
      .replace(/(\.\d*?[1-9])0+$/, "$1")
      .replace(/\.$/, "");
  }

  // Helper function to convert ETH to Wei using viem
  function ethToWei(eth: string, tokenAddress: string): bigint {
    const decimals = getDecimals(tokenAddress);
    return parseUnits(eth, decimals);
  }

  // Helper function to convert timestamp to date string
  function timestampToDateString(timestamp: bigint): string {
    const date = new Date(Number(timestamp) * 1000); // Convert seconds to milliseconds
    return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  }

  // Helper function to convert date string to timestamp
  function dateStringToTimestamp(dateString: string): bigint {
    const date = new Date(dateString);
    return BigInt(Math.floor(date.getTime() / 1000)); // Convert milliseconds to seconds
  }

  // Handle form submission
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!writeContract) {
      return;
    }

     // Format path and to with type assertion
     const formattedPath = path.map(
      (p) => p.trim().toLowerCase() as `0x${string}`
    );
    const formattedTo = to.trim().toLowerCase() as `0x${string}`;

    try {
      await writeContract({
        ...routerV2Contract,
        functionName: "swapExactTokensForTokens",
        args: [
          ethToWei(amountIn, path[0]),
          ethToWei(amountOutMin, path[1]),
          formattedPath,
          formattedTo,
          deadline,
        ],
      });
    } catch (err) {
      console.error("Error:", err);
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  // Handlers for input change events
  const handleAmountInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(",", ".").trim();
    setAmountIn(value);
  };

  const handleAmountOutMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(",", ".").trim();
    setAmountOutMin(value);
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setDeadline(dateStringToTimestamp(value));
  };

  // Handler for path change
  const handlePathChange = (index: number, address: string) => {
    const newPath = [...path];
    newPath[index] = address;
    setPath(newPath);
  };

  return (
    <>
      <h1 className="w-full text-center font-bold bg-highlight-dark-500 py-5">
      SWAP EXACT TOKENS FOR TOKENS
      </h1>
      <form onSubmit={submit} className="flex flex-col gap-2 ">
        <label className="text-white text-xs -mb-2">To :</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="0xA0Cf…251e"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
        <label className="text-white text-xs -mb-2">
          Amount In ({amountIn}) :
        </label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Amount In"
          value={amountIn}
          onChange={handleAmountInChange}
          step="any" // Allows decimal values
          min="0" // Ensures no negative values
          required
        />
        <label className="text-white text-xs -mb-2">
          Amount Out Min ({amountOutMin}) :
        </label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Amount Out Min"
          value={amountOutMin}
          onChange={handleAmountOutMinChange}
          step="any" // Allows decimal values
          min="0" // Ensures no negative values
          required
        />
        <label className="text-white text-xs -mb-2">Path :</label>
        <div className="flex w-full gap-2">
          <select
            className="flex-1 p-2 bg-primary-dark-500 border rounded"
            value={path[0]}
            onChange={(e) => handlePathChange(0, e.target.value)}
            required
          >
            {tokens.map((token) => (
              <option key={token.address} value={token.address}>
                {token.name}
              </option>
            ))}
          </select>
          <select
            className="flex-1 p-2 bg-primary-dark-500 border rounded"
            value={path[1]}
            onChange={(e) => handlePathChange(1, e.target.value)}
            required
          >
            {tokens.map((token) => (
              <option key={token.address} value={token.address}>
                {token.name}
              </option>
            ))}
          </select>
        </div>
        <label className="text-white text-xs -mb-2">Deadline  ({deadline}) :</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="date"
          placeholder="Deadline (date)"
          value={timestampToDateString(deadline)}
          onChange={handleDeadlineChange}
          required
        />
        <button
          className="bg-primary-gold-500 p-4 rounded text-white"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Confirming..." : "Swap"}
        </button>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Transaction confirmed.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </form>
    </>
  );
}
