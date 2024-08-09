import { useSimulateContract } from "wagmi";

import { wagmiContractConfig } from "./contracts";

export function WriteContractPrepared() {
  const { data, error, isError, isLoading, isSuccess } = useSimulateContract({
    ...wagmiContractConfig,
    functionName: "mint",
  });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <pre>{error.message}</pre>}
      {isSuccess && "success"}
    </div>
  );
}
