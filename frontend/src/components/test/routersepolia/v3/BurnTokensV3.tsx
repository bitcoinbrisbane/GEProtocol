import * as React from "react";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { pool1V3Contract } from "@/components/wagmi/contracts";
import TooltipSepolia from "../TooltipSepolia";

// Token data (todo: change to global state)
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

export const BurnTokens = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  // States for input values
  const [tickLower, setTickLower] = React.useState<number>(0);
  const [tickUpper, setTickUpper] = React.useState<number>(0);
  const [amount, setAmount] = React.useState<string>("");

  // Handle form submission
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!writeContract) {
      return;
    }

    try {
      await writeContract({
        ...pool1V3Contract,
        functionName: "burn",
        args: [tickLower, tickUpper, BigInt(amount)],
      });
    } catch (err) {
      console.error("Error:", err);
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  // Handlers for input change events
  const handleTickLowerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTickLower(Number(e.target.value));
  };

  const handleTickUpperChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTickUpper(Number(e.target.value));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <h1 className="w-full text-center font-bold bg-highlight-dark-500 py-5">
        BURN
      </h1>
      <div className="text-xs flex my-2 items-center">
        <div className="text-xs">
          <strong>Explanation:</strong> Burns liquidity within the specified
          tick range. Returns the amounts of token0 and token1 burned.
        </div>
        <TooltipSepolia
          content={
            <div>
              <h3 className="font-bold">2. burn</h3>
              <p>
                <strong>Function:</strong> burn (Write Contract)
              </p>
              <p>
                <strong>Inputs:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>tickLower: -10000 (Example lower tick value)</li>
                <li>tickUpper: 10000 (Example upper tick value)</li>
                <li>
                  amount: 500000000000000000 (Example amount of liquidity to
                  burn)
                </li>
              </ul>
              <p>
                <strong>Outputs:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>
                  amount0: 1000000000000000000 (Example amount of token0 burned)
                </li>
                <li>
                  amount1: 2000000000000000000 (Example amount of token1 burned)
                </li>
              </ul>
              <p>
                <strong>Explanation:</strong> Burns liquidity within the
                specified tick range. Returns the amounts of token0 and token1
                burned.
              </p>
              <p>
                <strong>Calculation Example:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>
                  Amount burned for token0: 1,000,000,000,000,000,000 (1 ether)
                </li>
                <li>
                  Amount burned for token1: 2,000,000,000,000,000,000 (2 ether)
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
        <label className="text-white text-xs -mb-2">Tick Lower:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="number"
          placeholder="Tick Lower"
          value={tickLower}
          onChange={handleTickLowerChange}
          min="-100000"
          required
        />

        <label className="text-white text-xs -mb-2">Tick Upper:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="number"
          placeholder="Tick Upper"
          value={tickUpper}
          onChange={handleTickUpperChange}
          min="-100000"
          required
        />

        <label className="text-white text-xs -mb-2">Amount:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
          required
        />

        <button
          className="bg-primary-gold-500 p-4 rounded text-white"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Burning Tokens..." : "Burn Tokens"}
        </button>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Tokens burned successfully.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </form>
    </>
  );
};
