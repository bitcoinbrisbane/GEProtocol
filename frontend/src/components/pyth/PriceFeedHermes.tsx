// components/pyth/PriceFeedHermes.tsx
import React, { useEffect, useState } from 'react';
import { HermesClient } from '@pythnetwork/hermes-client';

const PriceFeedHermes: React.FC = () => {
  const [priceUpdates, setPriceUpdates] = useState<any[]>([]);
  const priceIds = [
    "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43", // BTC/USD price id
    "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace"  // ETH/USD price id
  ];

  useEffect(() => {
    const fetchData = async () => {
      const connection = new HermesClient("https://hermes.pyth.network", {});

      // Streaming price updates
      const eventSource = await connection.getPriceUpdatesStream(priceIds);

      eventSource.onmessage = (event :any) => {
        const data = JSON.parse(event.data);
        console.log("Received price update:", data);
        setPriceUpdates((prev) => [...prev, data]);
      };

      eventSource.onerror = (error: any) => {
        console.error("Error receiving updates:", error);
        eventSource.close();
      };

      // To stop listening to the updates after a certain period, you can use the following code:
      // setTimeout(() => {
      //   console.log("Closing event source.");
      //   eventSource.close();
      // }, 5000);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Price Feed Updates</h1>
      <div className="space-y-4 max-w-2xl">
        {priceUpdates.map((update, index) => (
          <div key={index} className="p-4 border rounded-lg shadow overflow-scroll">
            <pre className="text-sm">{JSON.stringify(update, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceFeedHermes;
