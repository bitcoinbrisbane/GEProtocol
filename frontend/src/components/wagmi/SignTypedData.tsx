import { useEffect, useState } from "react";
import { recoverTypedDataAddress } from "viem";
import { useSignTypedData } from "wagmi";

import { type Address } from "viem";

const domain = {
  name: "Ether Mail",
  version: "1",
  chainId: 1,
  verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
} as const;

// The named list of all type definitions
const types = {
  Person: [
    { name: "name", type: "string" },
    { name: "wallet", type: "address" },
  ],
  Mail: [
    { name: "from", type: "Person" },
    { name: "to", type: "Person" },
    { name: "contents", type: "string" },
  ],
} as const;

const message = {
  from: {
    name: "Cow",
    wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
  },
  to: {
    name: "Bob",
    wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
  },
  contents: "Hello, Bob!",
} as const;

export function SignTypedData() {
  const { data, error, isPending, signTypedData } = useSignTypedData();

  const [recoveredAddress, setRecoveredAddress] = useState<Address>();
  useEffect(() => {
    if (!data) return;
    (async () => {
      setRecoveredAddress(
        await recoverTypedDataAddress({
          domain,
          types,
          message,
          primaryType: "Mail",
          signature: data,
        })
      );
    })();
  }, [data]);

  return (
    <div>
      <button
        className="p-2 bg-primary-gold-500"
        disabled={isPending}
        onClick={() =>
          signTypedData({
            domain,
            types,
            message,
            primaryType: "Mail",
          })
        }
      >
        {isPending ? "Check Wallet" : "Sign Message"}
      </button>

      {data && (
        <div>
          <div>signature {data}</div>
          <div>recovered address {recoveredAddress}</div>
        </div>
      )}

      <div>{error && (error?.message ?? "Failed to sign message")}</div>
    </div>
  );
}
