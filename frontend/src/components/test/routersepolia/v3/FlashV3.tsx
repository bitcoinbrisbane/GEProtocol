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

export const Flash = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  // States for input values
  const [recipient, setRecipient] = React.useState<string>("");
  const [amount0, setAmount0] = React.useState<string>("");
  const [amount1, setAmount1] = React.useState<string>("");
  const [data, setData] = React.useState<string>("");

  // Handle form submission
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!writeContract) {
      return;
    }

    const formattedRecipient = recipient.trim().toLowerCase() as `0x${string}`;
    const formattedAmount0 = BigInt(amount0);
    const formattedAmount1 = BigInt(amount1);
    const formattedData = data.trim().toLowerCase() as `0x${string}`;

    try {
      await writeContract({
        ...pool1V3Contract,
        functionName: "flash",
        args: [
          formattedRecipient,
          formattedAmount0,
          formattedAmount1,
          formattedData,
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

  const handleAmount0Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount0(e.target.value);
  };

  const handleAmount1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount1(e.target.value);
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <>
      <h1 className="w-full text-center font-bold bg-highlight-dark-500 py-5">
        FLASH FUNCTION
      </h1>
      <div className="text-xs flex my-2 items-center">
        <div className="text-xs">
          <strong>Explanation:</strong> Executes a flash loan with the specified
          amounts of token0 and token1. Returns no outputs.
        </div>
        <TooltipSepolia
          content={
            <div>
              <h3 className="font-bold">5. flash</h3>
              <p>
                <strong>Function:</strong> flash (Write Contract)
              </p>
              <p>
                <strong>Inputs:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>
                  recipient: 0x7FAEE86E94Ce9A4E3F5a21d74e7Da308CbD7b08d (Example
                  recipient address)
                </li>
                <li>
                  amount0: 1000000000000000000 (Example amount of token0 to
                  flash)
                </li>
                <li>
                  amount1: 2000000000000000000 (Example amount of token1 to
                  flash)
                </li>
                <li>data: 0x (Example additional data)</li>
              </ul>
              <p>
                <strong>Outputs:</strong> None
              </p>
              <p>
                <strong>Explanation:</strong> Executes a flash loan with the
                specified amounts of token0 and token1. Returns no outputs.
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

        <label className="text-white text-xs -mb-2">Amount0:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Amount0"
          value={amount0}
          onChange={handleAmount0Change}
          required
        />

        <label className="text-white text-xs -mb-2">Amount1:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Amount1"
          value={amount1}
          onChange={handleAmount1Change}
          required
        />

        <label className="text-white text-xs -mb-2">Data:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Data (hex encoded)"
          value={data}
          onChange={handleDataChange}
          required
        />

        <button
          className="bg-primary-gold-500 p-4 rounded text-white"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Processing Flash..." : "Execute Flash"}
        </button>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Flash executed successfully.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </form>
    </>
  );
};
