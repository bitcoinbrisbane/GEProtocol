"use client";
import { useState } from "react";
import { Account } from "../wagmi/Account";
import { Balance } from "../wagmi/Balance";
import { NetworkSwitcher } from "../wagmi/NetworkSwitcher";
import { AddLiquidityETH } from "./routersepolia/v2/AddLiquidityETHRouterV2";
import { AddLiquidity } from "./routersepolia/v2/AddLiquidityRouterV2";
import { CreatePair } from "./routersepolia/v2/CreatePairFactoryV2";
import { ReadRouterV2 } from "./routersepolia/v2/ReadRouterV2";
import { SendTransaction } from "./routersepolia/SendTransaction";
import { SwapExactETHForTokens } from "./routersepolia/v2/SwapExactETHForTokensV2";
import { SwapExactTokensForETH } from "./routersepolia/v2/SwapTokensForETHV2";
import { SwapTokens } from "./routersepolia/v2/SwapTokensRouterV2";
import { CreatePool } from "./routersepolia/v3/CreatePoolV3";
import { BurnTokens } from "./routersepolia/v3/BurnTokensV3";
import { CollectTokens } from "./routersepolia/v3/CollectTokensV3";
import { CollectProtocol } from "./routersepolia/v3/CollectProtocolV3";
import { Flash } from "./routersepolia/v3/FlashV3";
import { IncreaseObservationCardinality } from "./routersepolia/v3/IncreaseObservationCardinalityV3";
import { InitializePool } from "./routersepolia/v3/InitializePoolV3";
import { MintTokens } from "./routersepolia/v3/MintTokensV3";
import { SetFeeProtocol } from "./routersepolia/v3/SetFeeProtocolV3";
import { SwapTokensV3 } from "./routersepolia/v3/SwapTokensV3";

const RouterSepoliaTest = () => {
  const [showAccountSection, setShowAccountSection] = useState(true);
  const [showReadRouterSection, setShowReadRouterSection] = useState(true);
  const [showWriteRouterSection, setShowWriteRouterSection] = useState(true);
  const [showV3WriteRouterSection, setShowV3WriteRouterSection] =
    useState(true);

  return (
    <>
      <div className="flex flex-wrap flex-col gap-4 p-2">
        <div className="w-full p-4 text-center mt-5 font-bold text-xl bg-highlight-dark-500">
          Account Section
          <button
            className="ml-4 px-2 py-1 bg-primary-gold-500 text-sm text-white rounded"
            onClick={() => setShowAccountSection((prev) => !prev)}
          >
            {showAccountSection ? "Hide" : "Show"}
          </button>
        </div>
        {showAccountSection && (
          <div className="w-full overflow-scroll flex flex-wrap gap-2">
            <div className="flex-1 flex-col">
              <h2 className="p-2 bg-highlight-dark-500">Account Address</h2>
              <div className="flex flex-col gap-2 p-2">
                <Account />
                <NetworkSwitcher />
              </div>
            </div>
            <div className="flex-1 flex-col">
              <h2 className="p-2 bg-highlight-dark-500">Account Balance</h2>
              <div className="p-2">
                <Balance />
              </div>
            </div>
            <div className="flex-1 flex-col">
              <h2 className="p-2 bg-highlight-dark-500">Send ETH</h2>
              <SendTransaction />
            </div>
          </div>
        )}

        <div className="w-full p-4 text-center mt-5 font-bold text-xl bg-highlight-dark-500">
          V2 - Read Contract Section
          <button
            className="ml-4 px-2 py-1 bg-primary-gold-500 text-sm text-white rounded"
            onClick={() => setShowReadRouterSection((prev) => !prev)}
          >
            {showReadRouterSection ? "Hide" : "Show"}
          </button>
        </div>
        {showReadRouterSection && (
          <div className="w-full">
            <ReadRouterV2 />
          </div>
        )}

        <div className="w-full p-4 text-center mt-5 font-bold text-xl bg-highlight-dark-500">
          V2 - Write Contract Section
          <button
            className="ml-4 px-2 py-1 bg-primary-gold-500 text-sm text-white rounded"
            onClick={() => setShowWriteRouterSection((prev) => !prev)}
          >
            {showWriteRouterSection ? "Hide" : "Show"}
          </button>
        </div>
        {showWriteRouterSection && (
          <div className="w-full flex flex-wrap flex-row gap-4">
            <div className="flex-1 flex-col gap-2 p-2 border">
              <SwapTokens />
            </div>
            <div className="flex-1 flex-col gap-2 p-2 border">
              <AddLiquidity />
            </div>
            <div className="flex-1 flex-col gap-2 p-2 border">
              <CreatePair />
            </div>
            <div className="w-full flex flex-wrap flex-row gap-4">
              <div className="flex-1 flex-col gap-2 p-2 border">
                <SwapExactETHForTokens />
              </div>
              <div className="flex-1 flex-col gap-2 p-2 border">
                <SwapExactTokensForETH />
              </div>
              <div className="flex-1 flex-col gap-2 p-2 border">
                <AddLiquidityETH />
              </div>
            </div>
          </div>
        )}

        <div className="w-full p-4 text-center mt-5 font-bold text-xl bg-highlight-dark-500">
          V3 - Write Contract Section
          <button
            className="ml-4 px-2 py-1 bg-primary-gold-500 text-sm text-white rounded"
            onClick={() => setShowV3WriteRouterSection((prev) => !prev)}
          >
            {showV3WriteRouterSection ? "Hide" : "Show"}
          </button>
        </div>
        {showV3WriteRouterSection && (
          <div className="w-full flex flex-wrap flex-row gap-4">
            <div className="flex-1 flex-col gap-2 p-2 border">
              <CreatePool />
            </div>
            <div className="flex-1 flex-col gap-2 p-2 border">
              <BurnTokens />
            </div>
            <div className="flex-1 flex-col gap-2 p-2 border">
              <CollectTokens />
            </div>
            <div className="w-full flex flex-wrap flex-row gap-4">
              <div className="flex-1 flex-col gap-2 p-2 border">
                <CollectProtocol />
              </div>
              <div className="flex-1 flex-col gap-2 p-2 border">
                <Flash />
              </div>
              <div className="flex-1 flex-col gap-2 p-2 border">
                <IncreaseObservationCardinality />
              </div>

            </div>
            <div className="w-full flex flex-wrap flex-row gap-4">
              <div className="flex-1 flex-col gap-2 p-2 border">
                <InitializePool />
              </div>
              <div className="flex-1 flex-col gap-2 p-2 border">
                <MintTokens />
              </div>
            </div>
            <div className="w-full flex flex-wrap flex-row gap-4">
              <div className="flex-1 flex-col gap-2 p-2 border">
                <SetFeeProtocol />
              </div>
              <div className="flex-1 flex-col gap-2 p-2 border">
                <SwapTokensV3 />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RouterSepoliaTest;
