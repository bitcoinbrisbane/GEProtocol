import * as React from "react";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { factoryV2Contract } from "@/components/wagmi/contracts";

export function CreatePair() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const [tokenA, setTokenA] = React.useState<string>(
    "0x5Df3cF639d8cB528A973B2b4BA6eC9D7EEd6a176"
  );
  const [tokenB, setTokenB] = React.useState<string>(
    "0x0aD29c477599531eb6d490084C098CE2c430567b"
  );

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!writeContract) {
      return;
    }

    // Format token addresses
    const formattedTokenA = tokenA.trim().toLowerCase() as `0x${string}`;
    const formattedTokenB = tokenB.trim().toLowerCase() as `0x${string}`;

    try {
      await writeContract({
        ...factoryV2Contract,
        functionName: "createPair",
        args: [formattedTokenA, formattedTokenB],
      });
    } catch (err) {
      console.error("Error:", err);
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  return (
    <>
      <h1 className="w-full text-center font-bold bg-highlight-dark-500 py-5">
        CREATE PAIR
      </h1>
      <form onSubmit={submit} className="flex flex-col gap-2">
        <label className="text-white text-xs -mb-2">Token A Address:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Token A address"
          value={tokenA}
          onChange={(e) => setTokenA(e.target.value)}
          required
        />
        <label className="text-white text-xs -mb-2">Token B Address:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="text"
          placeholder="Token B address"
          value={tokenB}
          onChange={(e) => setTokenB(e.target.value)}
          required
        />
        <button
          className="bg-primary-gold-500 p-4 rounded text-white"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Creating..." : "Create Pair"}
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
