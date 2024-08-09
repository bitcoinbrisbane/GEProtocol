import * as React from "react";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { pool1V3Contract } from "@/components/wagmi/contracts";
import TooltipSepolia from "../TooltipSepolia";

export const SetFeeProtocol = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  // States for input values
  const [feeProtocol0, setFeeProtocol0] = React.useState<number>(0);
  const [feeProtocol1, setFeeProtocol1] = React.useState<number>(0);

  // Handle form submission
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!writeContract) {
      return;
    }

    try {
      await writeContract({
        ...pool1V3Contract,
        functionName: "setFeeProtocol",
        args: [feeProtocol0, feeProtocol1],
      });
    } catch (err) {
      console.error("Error:", err);
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  // Handlers for input change events
  const handleFeeProtocol0Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeeProtocol0(Number(e.target.value));
  };

  const handleFeeProtocol1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeeProtocol1(Number(e.target.value));
  };

  return (
    <>
      <h1 className="w-full text-center font-bold bg-highlight-dark-500 py-5">
        SET FEE PROTOCOL
      </h1>
      <div className="text-xs flex my-2 items-center">
        <div className="text-xs">
          <strong>Explanation:</strong> Sets the protocol fee for token0 and
          token1. Returns no outputs.
        </div>
        <TooltipSepolia
          content={
            <div>
              <h3 className="font-bold">9. setFeeProtocol</h3>
              <p>
                <strong>Function:</strong> setFeeProtocol (Write Contract)
              </p>
              <p>
                <strong>Inputs:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>
                  feeProtocol0: 1 (Example new fee protocol value for token0)
                </li>
                <li>
                  feeProtocol1: 2 (Example new fee protocol value for token1)
                </li>
              </ul>
              <p>
                <strong>Outputs:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>None</li>
              </ul>
              <p>
                <strong>Explanation:</strong> Sets the protocol fee for token0
                and token1. Returns no outputs.
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
        <label className="text-white text-xs -mb-2">Fee Protocol 0:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="number"
          placeholder="Fee Protocol 0"
          value={feeProtocol0}
          onChange={handleFeeProtocol0Change}
          min="0"
          required
        />

        <label className="text-white text-xs -mb-2">Fee Protocol 1:</label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="number"
          placeholder="Fee Protocol 1"
          value={feeProtocol1}
          onChange={handleFeeProtocol1Change}
          min="0"
          required
        />

        <button
          className="bg-primary-gold-500 p-4 rounded text-white"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Setting Fee Protocol..." : "Set Fee Protocol"}
        </button>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Fee protocol set successfully.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </form>
    </>
  );
};
