"use client";
import Image from "next/image";
import { useEffect } from "react";
import { AiOutlineSwap } from "react-icons/ai";

const TradingViewWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      new TradingView.widget({
        container_id: "tradingview-widget",
        width: "100%",
        height: window.innerWidth < 768 ? "300" : "600", // Adjust height based on screen size
        symbol: "PYTH:BTCUSD",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        hide_legend: true,
        enable_publishing: false,
        allow_symbol_change: false,
        details: false,
        hotlist: false,
        calendar: false,
        studies: [
          //   'MACD@tv-basicstudies',
          //   'RSI@tv-basicstudies',
        ],
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex h-max max-h-[400px] md:max-h-[100%] rounded-2xl overflow-hidden w-full flex-col justify-between transition-height duration-500 ease-in-out">
      <div className="flex items-center px-4 py-2">
        <div className="hidden md:flex -space-x-2">
          <span className="relative">
            <Image
              src="/coin/BTC.svg"
              alt="BTC"
              width={32}
              height={32}
              className="object-cover rounded-full"
              style={{ maxWidth: 32, maxHeight: 32 }}
            />
          </span>
          <span className="relative">
            <Image
              src="/coin/USDC.svg"
              alt="USDC"
              width={32}
              height={32}
              className="object-cover rounded-full"
              style={{ maxWidth: 32, maxHeight: 32 }}
            />
          </span>
        </div>
        <div className="flex md:hidden -space-x-2">
          <span className="relative">
            <Image
              src="/coin/BTC.svg"
              alt="BTC"
              width={24}
              height={24}
              className="object-cover rounded-full"
              style={{ maxWidth: 24, maxHeight: 24 }}
            />
          </span>
          <span className="relative">
            <Image
              src="/coin/USDC.svg"
              alt="USDC"
              width={24}
              height={24}
              className="object-cover rounded-full"
              style={{ maxWidth: 24, maxHeight: 24 }}
            />
          </span>
        </div>
        <div className="flex items-center group cursor-pointer">
          <span className="ml-1.5 md:ml-4 font-semibold max-md:text-xs">
            BTC/USDC
          </span>
          <div className="ml-2 text-v2-lily/[.75] group-hover:text-v2-primary fill-current">
            <AiOutlineSwap />
          </div>
        </div>
        <div className="text-xs lg:text-base flex items-center ml-auto font-semibold space-x-1">
          {/* <span>139.4</span>
          <span className="!ml-3 text-xs flex items-center text-light-active-state dark:text-v2-primary">
            <span className="flex whitespace-nowrap items-center">
              <span className="text-xxs">+</span>
              <span className="text-xs">8</span>
            </span>
            %
          </span> */}
        </div>
      </div>
      <div className="flex-1">
        <div className="tradingview-widget-container">
          <div id="tradingview-widget" />
        </div>
      </div>
    </div>
  );
};

export default TradingViewWidget;
