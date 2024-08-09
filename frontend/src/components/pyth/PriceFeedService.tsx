// components/pyth/PriceFeedService.tsx
'use client';

import { useEffect, useState } from 'react';
import { getPriceFeeds, subscribeToPriceFeedUpdates } from '@/lib/pythService';
import { PriceFeed } from '@pythnetwork/price-service-client';

const priceIds = [
  '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace', // ETH/USD
  // '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43', // BTC/USD
];

const PriceFeedService = () => {
  const [prices, setPrices] = useState<PriceFeed[]>([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchInitialPrices = async () => {
      const data = await getPriceFeeds(priceIds);
      console.log('initial data', data);
      if (data) {
        setPrices(data);
      }

      setLoading(false);
    };

    fetchInitialPrices();

    // subscribeToPriceFeedUpdates(priceIds, (priceFeed: PriceFeed) => {
    //   setPrices((prevPrices) => {
    //     return prevPrices.map((price) => {
    //       if (price.id === priceFeed.id) {
    //         return {
    //           ...price,
    //           ...priceFeed,
    //         };
    //       } else {
    //         return price;
    //       }
    //     });
    //   });
    // });


  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pyth Network Price Feeds</h1>
      <div className="grid grid-cols-1 gap-4">

	  {/* {prices.map((price) => (
          <div key={price.id} className="p-4 border rounded shadow ">
            <h2 className="text-xl font-semibold">{price.id}</h2>
            <div className="mt-10">
              <h3>Current Price:</h3>
              <p>Price: {price.price?.price}</p>
              <p>Confidence: {price.price?.conf}</p>
              <p>Expo: {price.price?.expo}</p>
              <p>Publish Time: {price.price?.publishTime}</p>
            </div>
            <div className="mt-10">
              <h3>EMA Price:</h3>
              <p>Price: {price.emaPrice?.price}</p>
              <p>Confidence: {price.emaPrice?.conf}</p>
              <p>Expo: {price.emaPrice?.expo}</p>
              <p>Publish Time: {price.emaPrice?.publishTime}</p>
            </div>
          </div>
        ))} */}


        {prices.map((price) => (
          <div key={price.id} className="mt-2 p-4 border rounded shadow overflow-scroll">
            <h2 className="text-xl font-semibold">{price.id}</h2>
            <div className="mt-10">
              <h3>Current Price:</h3>
              <pre>{JSON.stringify(price, null, 2)}</pre> {/* debug test */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceFeedService;
