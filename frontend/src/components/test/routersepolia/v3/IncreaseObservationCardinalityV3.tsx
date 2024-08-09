import * as React from "react";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { pool1V3Contract } from "@/components/wagmi/contracts";
import TooltipSepolia from "../TooltipSepolia";

export const IncreaseObservationCardinality = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  // State for input value
  const [observationCardinalityNext, setObservationCardinalityNext] =
    React.useState<number>(1000); // Default value

  // Handle form submission
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!writeContract) {
      return;
    }

    try {
      await writeContract({
        ...pool1V3Contract,
        functionName: "increaseObservationCardinalityNext",
        args: [observationCardinalityNext],
      });
    } catch (err) {
      console.error("Error:", err);
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  // Handler for input change event
  const handleObservationCardinalityNextChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setObservationCardinalityNext(Number(e.target.value));
  };

  return (
    <>
      <h1 className="w-full text-center font-bold bg-highlight-dark-500 py-5">
        INCREASE OBSERVATION CARDINALITY
      </h1>
      <div className="text-xs flex my-2 items-center">
        <div className="text-xs">
          <strong>Explanation:</strong> Increases the observation cardinality to
          the specified value. Returns no outputs.
        </div>
        <TooltipSepolia
          content={
            <div>
              <h3 className="font-bold">
                6. increaseObservationCardinalityNext
              </h3>
              <p>
                <strong>Function:</strong> increaseObservationCardinalityNext
                (Write Contract)
              </p>
              <p>
                <strong>Inputs:</strong>
              </p>
              <ul className="list-disc ml-5">
                <li>
                  observationCardinalityNext: 100 (Example new observation
                  cardinality)
                </li>
              </ul>
              <p>
                <strong>Outputs:</strong> None
              </p>
              <p>
                <strong>Explanation:</strong> Increases the observation
                cardinality to the specified value. Returns no outputs.
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
        <label className="text-white text-xs -mb-2">
          Observation Cardinality Next:
        </label>
        <input
          className="p-2 bg-primary-dark-500 border rounded"
          type="number"
          placeholder="New Observation Cardinality"
          value={observationCardinalityNext}
          onChange={handleObservationCardinalityNextChange}
          min="0"
          required
        />

        <button
          className="bg-primary-gold-500 p-4 rounded text-white"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Increasing Cardinality..." : "Increase Cardinality"}
        </button>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Cardinality increased successfully.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </form>
    </>
  );
};
