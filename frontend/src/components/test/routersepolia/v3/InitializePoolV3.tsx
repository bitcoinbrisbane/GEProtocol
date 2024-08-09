import * as React from "react";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { pool1V3Contract } from "@/components/wagmi/contracts";
import TooltipSepolia from "../TooltipSepolia";

export const InitializePool = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  // State for input value
  const [sqrtPriceX96, setSqrtPriceX96] = React.useState<number>(1000000); // Default value

  // Handle form submission
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!writeContract) {
      return;
    }

    try {
      await writeContract({
        ...pool1V3Contract,
        functionName: "initialize",
        args: [BigInt(sqrtPriceX96)],
      });
    } catch (err) {
      console.error("Error:", err);
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  // Handler for input change event
  const handleSqrtPriceX96Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSqrtPriceX96(Number(e.target.value));
  };

  return (
    <>
      <h1 className="w-full text-center font-bold bg-highlight-dark-500 py-5">
        INITIALIZE POOL
      </h1>
      <div className="text-xs flex my-2 items-center">
        <div className="text-xs">
          <strong>Explanation:</strong> Initializes the pool with the specified
          price. Returns no outputs.
        </div>
        <TooltipSepolia
          content={
            <div>
              <h3 className="font-bold">7. initialize</h3>
              <p>
                <strong>Function:</strong> initialize (Write Contract)
              </p>
              <p>
                <strong>Inputs:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>
                  sqrtPriceX96: 79228162514264337593543950336 (Example initial
                  price in sqrtPriceX96 format)
                </li>
              </ul>
              <p>
                <strong>Outputs:</strong> None
              </p>
              <p>
                <strong>Explanation:</strong> Initializes the pool with the
                specified price. Returns no outputs.
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
        <label className="text-white text-xs -mb-2">Sqrt Price X96:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="number"
          placeholder="Sqrt Price X96"
          value={sqrtPriceX96}
          onChange={handleSqrtPriceX96Change}
          min="0"
          required
        />

        <button
          className="bg-primary-gold-500 p-4 rounded text-white"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Initializing Pool..." : "Initialize Pool"}
        </button>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Pool initialized successfully.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </form>
    </>
  );
};
