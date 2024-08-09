import * as React from "react";
import { BaseError, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { routerV2Contract } from "@/components/wagmi/contracts";
import { parseUnits, formatUnits } from "viem";

// Token data
const tokens = [
  {
    name: "Token A",
    address: "0x945d9Eb083b477472870B2D1a3FAbaFc7ad70F00",
    decimals: 18,
  },
  {
    name: "Mock BTC",
    address: "0x574084E6A21cD334277B79f35F98C0Aae24E0030",
    decimals: 18,
  },
  {
    name: "Mock USDT",
    address: "0x26a69c93Fbda73A5a46D79bdfCD282B947b741BE",
    decimals: 6,
  },
];

export function SwapExactTokensForETH() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  // States for input values
  const [amountIn, setAmountIn] = React.useState<string>("");
  const [amountOutMin, setAmountOutMin] = React.useState<string>("");
  const [tokenIn, setTokenIn] = React.useState<string>(tokens[0].address); // Default to first token address
  const [tokenOut, setTokenOut] = React.useState<string>(""); // Token for receiving ETH (not used in this function)
  const [to, setTo] = React.useState<string>("0x7FAEE86E94Ce9A4E3F5a21d74e7Da308CbD7b08d");
  const [deadline, setDeadline] = React.useState<bigint>(BigInt(1753408279));

  // Helper function to get the decimals for a token address
  const getDecimals = (address: string): number => {
    const token = tokens.find((token) => token.address === address);
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

    // Format token addresses and type assertion
    const formattedTokenIn = tokenIn.trim().toLowerCase() as `0x${string}`;
    const formattedTo = to.trim().toLowerCase() as `0x${string}`;

    try {
      await writeContract({
        ...routerV2Contract,
        functionName: "swapExactTokensForETH",
        args: [
          ethToWei(amountIn, tokenIn), // amountIn
          ethToWei(amountOutMin, tokenIn), // amountOutMin
          [formattedTokenIn, "0xc665C290BaCA0709d66327320206d7c65e2A6F36"], // path (WETH address 0xc665C290BaCA0709d66327320206d7c65e2A6F36)
          formattedTo, // to
          deadline, // deadline
        ],
      });
    } catch (err) {
      console.error("Error:", err);
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  // Handlers for input change events
  const handleAmountInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(",", ".").trim();
    setAmountIn(value);
  };

  const handleAmountOutMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(",", ".").trim();
    setAmountOutMin(value);
  };

  const handleTokenInChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTokenIn(e.target.value);
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTo(e.target.value);
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(dateStringToTimestamp(e.target.value));
  };

  return (
    <>
      <h1 className="w-full text-center font-bold bg-highlight-dark-500 py-5">
        SWAP EXACT TOKENS FOR ETH
      </h1>
      <form onSubmit={submit} className="flex flex-col gap-2">
        <label className="text-white text-xs -mb-2">Token In:</label>
        <select
          className="p-2 bg-primary-dark-500 border rounded"
          value={tokenIn}
          onChange={handleTokenInChange}
          required
        >
          {tokens.map((token) => (
            <option key={token.address} value={token.address}>
              {token.name}
            </option>
          ))}
        </select>

        <label className="text-white text-xs -mb-2">
          Amount In ({amountIn}):
        </label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Amount In"
          value={amountIn}
          onChange={handleAmountInChange}
          step="any"
          min="0"
          required
        />

        <label className="text-white text-xs -mb-2">
          Amount Out Min ({amountOutMin}):
        </label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Amount Out Min"
          value={amountOutMin}
          onChange={handleAmountOutMinChange}
          step="any"
          min="0"
          required
        />

        <label className="text-white text-xs -mb-2">To:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="0xA0Cf…251e"
          value={to}
          onChange={handleToChange}
          required
        />

        <label className="text-white text-xs -mb-2">
          Deadline ({deadline}):
        </label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="date"
          placeholder="YYYY-MM-DD"
          value={timestampToDateString(deadline)}
          onChange={handleDeadlineChange}
          required
        />

        <button
          type="submit"
          className="bg-primary-gold-500 p-4 rounded disabled:opacity-50"
          disabled={isPending || isConfirming}
        >
          {isPending ? "Processing..." : "Swap Tokens"}
        </button>

        {hash && <div className="text-xs">Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && !isPending && (
          <p className="text-green-500">Transaction Confirmed!</p>
        )}
        {error && (
          <p className="text-red-500">
            Error: {(error as BaseError).shortMessage || error.message}
          </p>
        )}
      </form>
    </>
  );
}
