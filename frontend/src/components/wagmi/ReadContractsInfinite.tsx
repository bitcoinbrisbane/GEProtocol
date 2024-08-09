import { stringify } from "viem";
import { useInfiniteReadContracts } from "wagmi";
import { wagmiContractConfigUSDT } from "./contracts";

type resData = {
  pageParams: number[];
  pages: {
    result: string;
    status: string;
  }[][];
};

let base = 0;

export function ReadContractsInfinite() {
  const { data, isLoading, isSuccess, fetchNextPage } =
    useInfiniteReadContracts({
      cacheKey: "lootTokenURIs",
      contracts(pageParam: number) {
        const arr = [];
        for (let i = base; i < pageParam; i++) {
          arr.push({
            ...wagmiContractConfigUSDT,
            functionName: "ownerOf",
            args: [BigInt(i)] as const,
          });
        }
        base = pageParam;
        return arr;
      },
      query: {
        initialPageParam: base,
        getNextPageParam: (_lastPage, _allPages, lastPageParam) => {
          return lastPageParam + 10;
        },
      },
    });

  return (
    <div>
      {isLoading && <div>loading...</div>}
      {isSuccess && (
        <>
          <div className="h-[300px] overflow-scroll">
            {(data as unknown as resData)?.pages.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div>
                {data.flatMap((x) => (
                  <pre>{stringify(x, null, 2)}</pre>
                ))}
              </div>
            ))}
          </div>
          <button onClick={() => fetchNextPage()}>Fetch more</button>
        </>
      )}
    </div>
  );
}
