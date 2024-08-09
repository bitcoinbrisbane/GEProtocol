import { stringify, parseEther } from "viem";
import {
  useSendTransaction,
  useWaitForTransactionReceipt,
  useAccount,
} from "wagmi";

export function SendTransaction() {
  const { chain } = useAccount();
  const { data, isIdle, status, isError, sendTransaction } =
    useSendTransaction();
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransactionReceipt({ hash: data });

  const isLoading = status === "pending";

  if (isLoading) return <div>Check Wallet</div>;

  if (isIdle)
    return (
      <button
        className="p-2 bg-primary-gold-500"
        disabled={isLoading}
        onClick={() =>
          sendTransaction({
            to: "0x0aD29c477599531eb6d490084C098CE2c430567b",
            value: parseEther("0.0001"), // 0.0001 ETH
          })
        }
      >
        Send Transaction
      </button>
    );

  return (
    <div>
      {isPending && <div>Pending...</div>}
      {isSuccess && (
        <>
          <a
            target="__blank"
            href={`${chain?.blockExplorers?.default?.url}/tx/${data}`}
          >
            Transaction Hash: {data}
          </a>
          <div>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}

      {isError && <div>Error sending transaction</div>}
    </div>
  );
}
