import * as React from "react";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { pool1V3Contract } from "@/components/wagmi/contracts";
import TooltipSepolia from "../TooltipSepolia";

// Example token data (todo: change to global state)
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

export const SwapTokensV3 = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  // States for input values
  const [recipient, setRecipient] = React.useState<string>("");
  const [zeroForOne, setZeroForOne] = React.useState<boolean>(true);
  const [amountSpecified, setAmountSpecified] = React.useState<number>(0);
  const [sqrtPriceLimitX96, setSqrtPriceLimitX96] = React.useState<number>(0);
  const [data, setData] = React.useState<string>("");

  // Handle form submission
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!writeContract) {
      return;
    }

    try {
      await writeContract({
        ...pool1V3Contract,
        functionName: "swap",
        args: [
          recipient.trim().toLowerCase() as `0x${string}`,
          zeroForOne,
          BigInt(amountSpecified),
          BigInt(sqrtPriceLimitX96),
          data.trim().toLowerCase() as `0x${string}`,
        ],
      });
    } catch (err) {
      console.error("Error:", err);
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  // Handlers for input change events
  const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipient(e.target.value);
  };

  const handleZeroForOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZeroForOne(e.target.checked);
  };

  const handleAmountSpecifiedChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAmountSpecified(Number(e.target.value));
  };

  const handleSqrtPriceLimitX96Change = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSqrtPriceLimitX96(Number(e.target.value));
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <>
      <h1 className="w-full text-center font-bold bg-highlight-dark-500 py-5">
        SWAP TOKENS
      </h1>
      <div className="text-xs flex my-2 items-center">
        <div className="text-xs">
          <strong>Explanation:</strong> Executes a swap between token0 and
          token1. Returns the amounts of token0 and token1 swapped.
        </div>
        <TooltipSepolia
          content={
            <div>
              <h3 className="font-bold">10. swap</h3>
              <p>
                <strong>Function:</strong> swap (Write Contract)
              </p>
              <p>
                <strong>Inputs:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>
                  recipient: 0x7FAEE86E94Ce9A4E3F5a21d74e7Da308CbD7b08d (Example
                  recipient address)
                </li>
                <li>zeroForOne: true (Example direction of the swap)</li>
                <li>
                  amountSpecified: 1000000000000000000 (Example amount of token0
                  or token1 to swap)
                </li>
                <li>
                  sqrtPriceLimitX96: 79228162514264337593543950336 (Example
                  price limit in sqrtPriceX96 format)
                </li>
                <li>data: 0x (Example additional data)</li>
              </ul>
              <p>
                <strong>Outputs:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>
                  amount0: 1000000000000000000 (Example amount of token0
                  swapped)
                </li>
                <li>
                  amount1: -1000000000000000000 (Example amount of token1
                  swapped, negative for outflow)
                </li>
              </ul>
              <p>
                <strong>Explanation:</strong> Executes a swap between token0 and
                token1. Returns the amounts of token0 and token1 swapped.
              </p>
              <p>
                <strong>Calculation Example:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>
                  Amount of token0 swapped: 1,000,000,000,000,000,000 (1 ether)
                </li>
                <li>
                  Amount of token1 swapped (outflow): -1,000,000,000,000,000,000
                  (-1 ether)
                </li>
              </ul>
            </div>
          }
        >
          <button className="text-xs text-nowrap bg-primary-gold-500/25 rounded p-2 text-primary-gold-500 ml-2">
            Help ?
          </button>
        </TooltipSepolia>
      </div>

      <form onSubmit={submit} className="flex flex-col gap-2">
        <label className="text-white text-xs -mb-2">Recipient Address:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={handleRecipientChange}
          required
        />

        <label className="text-white text-xs -mb-2">Zero For One:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="checkbox"
          checked={zeroForOne}
          onChange={handleZeroForOneChange}
        />

        <label className="text-white text-xs -mb-2">Amount Specified:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="number"
          placeholder="Amount Specified"
          value={amountSpecified}
          onChange={handleAmountSpecifiedChange}
          min="0"
          required
        />

        <label className="text-white text-xs -mb-2">
          Sqrt Price Limit X96:
        </label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="number"
          placeholder="Sqrt Price Limit X96"
          value={sqrtPriceLimitX96}
          onChange={handleSqrtPriceLimitX96Change}
          min="0"
          required
        />

        <label className="text-white text-xs -mb-2">Data:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Data (bytes)"
          value={data}
          onChange={handleDataChange}
          required
        />

        <button
          className="bg-primary-gold-500 p-4 rounded text-white"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Swapping Tokens..." : "Swap Tokens"}
        </button>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Tokens swapped successfully.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </form>
    </>
  );
};
