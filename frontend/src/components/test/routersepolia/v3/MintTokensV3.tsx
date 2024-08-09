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

export const MintTokens = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  // States for input values
  const [recipient, setRecipient] = React.useState<string>("");
  const [tickLower, setTickLower] = React.useState<number>(0);
  const [tickUpper, setTickUpper] = React.useState<number>(0);
  const [amount, setAmount] = React.useState<number>(0);
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
        functionName: "mint",
        args: [
          recipient.trim().toLowerCase() as `0x${string}`,
          tickLower,
          tickUpper,
          BigInt(amount),
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

  const handleTickLowerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTickLower(Number(e.target.value));
  };

  const handleTickUpperChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTickUpper(Number(e.target.value));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <>
      <h1 className="w-full text-center font-bold bg-highlight-dark-500 py-5">
        MINT TOKENS
      </h1>
      <div className="text-xs flex my-2 items-center">
        <div className="text-xs">
          <strong>Explanation:</strong> Mints liquidity within the specified
          tick range. Returns the amounts of token0 and token1 minted.
        </div>
        <TooltipSepolia
          content={
            <div>
              <h3 className="font-bold">8. mint</h3>
              <p>
                <strong>Function:</strong> mint (Write Contract)
              </p>
              <p>
                <strong>Inputs:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>
                  recipient: 0x7FAEE86E94Ce9A4E3F5a21d74e7Da308CbD7b08d (Example
                  recipient address)
                </li>
                <li>tickLower: -10000 (Example lower tick value)</li>
                <li>tickUpper: 10000 (Example upper tick value)</li>
                <li>
                  amount: 500000000000000000 (Example amount of liquidity to
                  mint)
                </li>
                <li>data: 0x (Example additional data)</li>
              </ul>
              <p>
                <strong>Outputs:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>
                  amount0: 1000000000000000000 (Example amount of token0 minted)
                </li>
                <li>
                  amount1: 2000000000000000000 (Example amount of token1 minted)
                </li>
              </ul>
              <p>
                <strong>Explanation:</strong> Mints liquidity within the
                specified tick range. Returns the amounts of token0 and token1
                minted.
              </p>
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

        <label className="text-white text-xs -mb-2">Tick Lower:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="number"
          placeholder="Tick Lower"
          value={tickLower}
          onChange={handleTickLowerChange}
          min="-100000" // Adjust according to expected range
          max="100000" // Adjust according to expected range
          required
        />

        <label className="text-white text-xs -mb-2">Tick Upper:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="number"
          placeholder="Tick Upper"
          value={tickUpper}
          onChange={handleTickUpperChange}
          min="-100000" // Adjust according to expected range
          max="100000" // Adjust according to expected range
          required
        />

        <label className="text-white text-xs -mb-2">Amount:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
          min="0"
          required
        />

        <label className="text-white text-xs -mb-2">Data (Hex String):</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Data (Hex String)"
          value={data}
          onChange={handleDataChange}
        />

        <button
          className="bg-primary-gold-500 p-4 rounded text-white"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Minting Tokens..." : "Mint Tokens"}
        </button>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Tokens minted successfully.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </form>
    </>
  );
};
