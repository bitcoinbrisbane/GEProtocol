"use client";
// components/TestComponent.tsx
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { StoreContext } from "@/stores/storePovider";
import Image from "next/image";

const TestComponent: React.FC = observer(() => {
  const { priceStore } = useContext(StoreContext);

  const updatePrice = () => {
    priceStore.setPrice("BTC", 22.0); // Test to update the price of BTC
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {priceStore.getItems().map((item) => (
          <li key={item.name}>
            <Image
              width={32}
              height={32}
              src={`/coin/${item.name}.svg`}
              alt={item.name}
            />
            {item.name}: {item.currentPrice}
          </li>
        ))}
      </ul>
      <button onClick={updatePrice}>Update BTC Price</button>
    </div>
  );
});

export default TestComponent;
