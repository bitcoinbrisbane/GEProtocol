import { useState } from "react";
import { useReadContract } from "wagmi";
import { BaseError } from "viem";

import { type Address } from "viem";

// import { wagmiContractConfig } from './contracts';
import { wagmiContractConfigUSDT, wagmiContractConfigWBTC } from "./contracts";

export function ReadContract() {
  return (
    <div>
      <div>
        <BalanceOf />
        <br />
        <TotalSupply />
      </div>
    </div>
  );
}

const TotalSupply = () => {
  const { data, isRefetching, refetch } = useReadContract({
    ...wagmiContractConfigUSDT,
    functionName: "totalSupply",
  });

  return (
    <div>
      Total Supply: {data?.toString()}
      <button
        disabled={isRefetching}
        onClick={() => refetch()}
        style={{ marginLeft: 4 }}
      >
        {isRefetching ? "loading..." : "refetch"}
      </button>
    </div>
  );
};

const BalanceOf = () => {
  const [address, setAddress] = useState<Address>(
    "0x4cA444f07F351bb8C9754E71Af40Cb3Bb60A11B3"
  );
  const { data, error, isLoading, isSuccess } = useReadContract({
    ...wagmiContractConfigUSDT,
    functionName: "balanceOf",
    args: [address],
  });

  const [value, setValue] = useState<string>(address);

  return (
    <div className="flex flex-col ">
      Token balance: {isSuccess && data?.toString()}
      <div className="flex flex-1">
        <input
          className="text-black block w-96 p-2"
          onChange={(e) => setValue(e.target.value)}
          placeholder="wallet address"
          style={{ marginLeft: 4 }}
          value={value}
        />
        <button
          className="p-2 bg-primary-gold-500"
          onClick={() => setAddress(value as Address)}
        >
          {isLoading ? "fetching..." : "fetch"}
        </button>
      </div>
      {error && <div>{(error as BaseError).shortMessage || error.message}</div>}
    </div>
  );
};
