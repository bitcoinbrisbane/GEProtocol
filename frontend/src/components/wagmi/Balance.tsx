import { useState } from "react";
import { useAccount, useBalance } from "wagmi";

import { type Address } from "viem";

export function Balance() {
  return (
    <div>
      <div>
        <AccountBalance />
      </div>
      <br />
      <div>
        <FindBalance />
      </div>
    </div>
  );
}

export function AccountBalance() {
  const { address } = useAccount();
  const { data, refetch } = useBalance({
    address,
  });

  return (
    <div className="mt-2">
      {`${data?.formatted} ${data?.symbol} `}
      <button className="p-2 bg-primary-gold-500" onClick={() => refetch()}>refetch</button>
    </div>
  );
}

export function FindBalance() {
  const [address, setAddress] = useState(
    "0x4cA444f07F351bb8C9754E71Af40Cb3Bb60A11B3"
  );
  const { data, isLoading, refetch } = useBalance({
    address: address as Address,
  });

  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col space-y-2 ">
      Find balance:{" "}
      <div className="flex">
        <input
          className="text-black w-96 p-2"
          onChange={(e) => setValue(e.target.value)}
          placeholder="wallet address"
          value={value}
        />
        <button
          className="p-2 bg-primary-gold-500"
          onClick={() => (value === address ? refetch() : setAddress(value))}
        >
          {isLoading ? "fetching..." : "fetch"}
        </button>
      </div>
      Data : {data?.formatted}
    </div>
  );
}
