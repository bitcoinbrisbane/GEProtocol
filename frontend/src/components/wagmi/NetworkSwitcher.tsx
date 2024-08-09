import { useAccount, useSwitchChain } from "wagmi";

export function NetworkSwitcher() {
  const { chain } = useAccount();
  const { chains, switchChain, status, failureReason } = useSwitchChain();

  return (
    <div>
      <div>Connected to {chain?.name || " (unsupported)"}</div>
      <br />
      <div>
        Switch to: {" "}
        {chains.map((x) =>
          x.id === chain?.id ? null : (
            <button className="p-2 bg-primary-gold-500" key={x.id} onClick={() => switchChain({ chainId: x.id })}>
              {x.name}
              {status === "pending" && " (switching)"}
            </button>
          )
        )}
      </div>

      <div>{failureReason?.message}</div>
    </div>
  );
}
