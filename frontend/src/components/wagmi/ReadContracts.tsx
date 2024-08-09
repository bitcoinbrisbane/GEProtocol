import { stringify } from "viem";
import { useReadContracts } from "wagmi";
import { wagmiContractConfigUSDT } from "./contracts";

export function ReadContracts() {
  const { data, isSuccess, isLoading } = useReadContracts({
    contracts: [
      {
        ...wagmiContractConfigUSDT,
        functionName: "balanceOf",
        args: ["0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC"],
      },
      {
        ...wagmiContractConfigUSDT,
        functionName: "name",
      },
      {
        ...wagmiContractConfigUSDT,
        functionName: "totalSupply",
      },
    ],
  });

  return (
    <div className="h-[300px] overflow-scroll">
      <div>Data:</div>
      {isLoading && <div>loading...</div>}
      {isSuccess &&
        data?.map((data) => (
          <pre key={stringify(data)}>{stringify(data, null, 2)}</pre>
        ))}
    </div>
  );
}
