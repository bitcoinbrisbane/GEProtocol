"use client"
import { useState } from "react";
import PriceFeedApi from "@/components/pyth/PriceFeedApi";
import PriceFeedService from "@/components/pyth/PriceFeedService";
import PythPrices from "@/components/pyth/PythPrices";
import PriceFeedHermes from "@/components/pyth/PriceFeedHermes";
import HistoricalChart from "@/components/pyth/HistoricalChart";
import WagmiTest from "@/components/wagmi/WagmiTest";
import RouterSepoliaTest from "@/components/test/RouterSepoliaTest";
import TestChart from "@/components/test/TestChart";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("TestChart");

  // Historical state & Func
  const [symbol, setSymbol] = useState('Crypto.ETH/USD');
  const [days, setDays] = useState(7);

  const handleSymbolChange = (newSymbol: string) => {
    setSymbol(newSymbol);
  };

  const handleDaysChange = (newDays: number) => {
    setDays(newDays);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "PriceFeedApi":
        return <PriceFeedApi />;
      case "PriceFeedService":
        return <PriceFeedService />;
      case "PythPrices":
        return <PythPrices />;
      case "PriceFeedHermes":
        return <PriceFeedHermes />;
      case "HistoricalChart":
        return  <HistoricalChart
        symbol={symbol}
        days={days}
        onSymbolChange={handleSymbolChange}
        onDaysChange={handleDaysChange}
      />;
      case "WagmiTest":
        return <WagmiTest />;
      case "SepoliaImplementation":
        return <RouterSepoliaTest />;
      case "TestChart":
        return <TestChart />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mb-20">
      <div className="flex flex-wrap gap-2 mb-4 text-xs md:text-base">
        <button
          onClick={() => setSelectedComponent("PriceFeedApi")}
          className={`flex-1 min-w-[150px] px-4 py-2 rounded ${
            selectedComponent === "PriceFeedApi" ? "bg-primary-gold-500 text-white" : "bg-highlight-dark-500"
          }`}
        >
          Price Feed API
        </button>
        <button
          onClick={() => setSelectedComponent("PriceFeedService")}
          className={`flex-1 min-w-[150px] px-4 py-2 rounded ${
            selectedComponent === "PriceFeedService" ? "bg-primary-gold-500 text-white" : "bg-highlight-dark-500"
          }`}
        >
          Price Feed Service
        </button>
        <button
          onClick={() => setSelectedComponent("PythPrices")}
          className={`flex-1 min-w-[150px] px-4 py-2 rounded ${
            selectedComponent === "PythPrices" ? "bg-primary-gold-500 text-white" : "bg-highlight-dark-500"
          }`}
        >
          Pyth Prices
        </button>
        <button
          onClick={() => setSelectedComponent("PriceFeedHermes")}
          className={`flex-1 min-w-[150px] px-4 py-2 rounded ${
            selectedComponent === "PriceFeedHermes" ? "bg-primary-gold-500 text-white" : "bg-highlight-dark-500"
          }`}
        >
          Price Feed Hermes Client
        </button>
        <button
          onClick={() => setSelectedComponent("HistoricalChart")}
          className={`flex-1 min-w-[150px] px-4 py-2 rounded ${
            selectedComponent === "HistoricalChart" ? "bg-primary-gold-500 text-white" : "bg-highlight-dark-500"
          }`}
        >
          Historical Chart
        </button>
        <button
          onClick={() => setSelectedComponent("WagmiTest")}
          className={`flex-1 min-w-[150px] px-4 py-2 rounded ${
            selectedComponent === "WagmiTest" ? "bg-primary-gold-500 text-white" : "bg-highlight-dark-500"
          }`}
        >
          Wagmi Test Implementation
        </button>
        <button
          onClick={() => setSelectedComponent("SepoliaImplementation")}
          className={`flex-1 min-w-[150px] m-1 px-4 py-2 rounded ${
            selectedComponent === "SepoliaImplementation" ? "bg-primary-gold-500 text-white" : "bg-highlight-dark-500"
          }`}
        >
          Sepolia Implementation
        </button>
        <button
          onClick={() => setSelectedComponent("TestChart")}
          className={`flex-1 min-w-[150px] m-1 px-4 py-2 rounded ${
            selectedComponent === "TestChart" ? "bg-primary-gold-500 text-white" : "bg-highlight-dark-500"
          }`}
        >
          Chart Implementation
        </button>
      </div>
      <div className="max-h-[700px] overflow-scroll bg-secondary-dark-500 rounded-xl">{renderComponent()}</div>
    </div>
  );
};

export default Dashboard;
