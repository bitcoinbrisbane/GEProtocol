// components/pyth/PriceFeedApi.tsx
"use client";
import { useEffect, useState } from 'react';
import { getPriceFeedIds, getLatestPriceFeeds, PriceFeed } from '@/lib/pythApi';

const PriceFeedApi = () => {
  const [priceFeeds, setPriceFeeds] = useState<PriceFeed[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feedIds = await getPriceFeedIds();
        const ids = feedIds.slice(0, 4); // take a few id to test
        const latestPriceFeeds = await getLatestPriceFeeds(ids);
        setPriceFeeds(latestPriceFeeds);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch price feeds');
      }
      setLoading(false);
    };
    fetchData();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pyth Network Price Feeds</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 gap-4">
        {priceFeeds.map((feed) => (
          <div key={feed.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{feed.id}</h2>
            <p>Price: {feed.price.price}</p>
            <p>Confidence: {feed.price.conf}</p>
            <p>Exponent: {feed.price.expo}</p>
            <p>Publish Time: {new Date(feed.price.publish_time * 1000).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceFeedApi;
