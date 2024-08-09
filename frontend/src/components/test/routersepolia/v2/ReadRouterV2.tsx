import { stringify } from "viem";
import { useReadContracts } from "wagmi";
import {
  routerV2Contract,
  factoryV2Contract,
} from "@/components/wagmi/contracts";

export function ReadRouterV2() {
  const contracts = [
    { contract: routerV2Contract, functionName: "WETH", args: [] },
    { contract: routerV2Contract, functionName: "factory", args: [] },
    { contract: factoryV2Contract, functionName: "allPairsLength", args: [] },
    {
      contract: factoryV2Contract,
      functionName: "allPairs",
      args: [BigInt(2)],
    },
  ];

  const { data, isSuccess, isLoading } = useReadContracts({
    contracts: contracts.map(({ contract, functionName, args }) => ({
      ...contract,
      functionName,
      args,
    })),
  });

  return (
    <div className="h-[300px] overflow-auto p-4 bg-secondary-dark-500 border border-gray-200 rounded-lg shadow-md">
      {isLoading && <div className="text-center text-white/90">Loading...</div>}
      {isSuccess &&
        data?.map((result, index) => (
          <div key={index} className="mb-6 p-4  bg-primary-dark-500 border border-gray-300 rounded-md shadow-sm">
            <div className="mb-2">
              <span className="font-medium text-white/90">Contract:</span>{" "}
              <span className="text-white/90">{contracts[index].contract.address}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium text-white/90">Function:</span>{" "}
              <span className="text-white/90">{contracts[index].functionName}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium text-white/90">Args:</span>{" "}
              <span className="text-white/90">
                {contracts[index].args.length > 0
                  ? stringify(contracts[index].args, null, 2)
                  : "None"}
              </span>
            </div>
            <div className="bg-highlight-dark-500 p-2 rounded">
              <pre className="whitespace-pre-wrap text-sm">{stringify(result, null, 2)}</pre>
            </div>
          </div>
        ))}
    </div>
  );
}
