"use client";
import { useAccount } from "wagmi";

import { Connect } from "@/components/wagmi/Connect";
import { Account } from "@/components/wagmi/Account";
import { Balance } from "@/components/wagmi/Balance";
import { BlockNumber } from "@/components/wagmi/BlockNumber";
import { NetworkSwitcher } from "@/components/wagmi/NetworkSwitcher";
import { ReadContract } from "@/components/wagmi/ReadContract";
import { ReadContracts } from "@/components/wagmi/ReadContracts";
import { ReadContractsInfinite } from "@/components/wagmi/ReadContractsInfinite";
import { SendTransaction } from "@/components/wagmi/SendTransaction";
import { SendTransactionPrepared } from "@/components/wagmi/SendTransactionPrepared";
import { SignMessage } from "@/components/wagmi/SignMessage";
import { SignTypedData } from "@/components/wagmi/SignTypedData";
import { WatchContractEvents } from "@/components/wagmi/WatchContractEvents";
import { WatchPendingTransactions } from "@/components/wagmi/WatchPendingTransactions";
import { WriteContract } from "@/components/wagmi/WriteContract";
import { WriteContractPrepared } from "@/components/wagmi/WriteContractPrepared";

function WagmiTest() {
  const { isConnected } = useAccount();
  return (
    <>
      <div className="w-full overflow-scroll">
        {isConnected && (
          <>
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">Network</h2>
            <div className="p-2">
              <NetworkSwitcher />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">Account</h2>
            <div className="p-2">
              <Account />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">Balance</h2>
            <div className="p-2">
              <Balance />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">Block Number</h2>
            <div className="p-2">
              <BlockNumber />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">Read Contract</h2>
            <div className="p-2">
              <ReadContract />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">Read Contracts</h2>
            <div className="p-2">
              <ReadContracts />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">
              Read Contracts Infinite
            </h2>
            <div className="p-2">
              <ReadContractsInfinite />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">Send Transaction</h2>
            <div className="p-2">
              <SendTransaction />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">
              Send Transaction (Prepared)
            </h2>
            <div className="p-2">
              <SendTransactionPrepared />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">Sign Message</h2>
            <div className="p-2">
              <SignMessage />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">Sign Typed Data</h2>
            <div className="p-2">
              <SignTypedData />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">Watch Contract Events</h2>
            <div className="p-2">
              <WatchContractEvents />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">
              Watch Pending Transactions
            </h2>
            <div className="p-2">
              <WatchPendingTransactions />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">Write Contract</h2>
            <div className="p-2">
              <WriteContract />
            </div>
            <br />
            <hr />
            <h2 className="p-2 bg-highlight-dark-500">
              Write Contract (Prepared)
            </h2>
            <div className="p-2">
              <WriteContractPrepared />
            </div>
          </>
        )}
      </div>
    </>
  );
}

WagmiTest.getInitialProps = async () => {
  return {};
};

export default WagmiTest;
