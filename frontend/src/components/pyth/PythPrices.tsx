// components/pyth/PythPrices.tsx
"use client";

import { useEffect, useState } from 'react';
import { Connection } from '@solana/web3.js';
import { PriceStatus, PythHttpClient, getPythClusterApiUrl, getPythProgramKeyForCluster, PythCluster } from '@pythnetwork/client';

const PYTHNET_CLUSTER_NAME: PythCluster = 'pythnet';
const connection = new Connection(getPythClusterApiUrl(PYTHNET_CLUSTER_NAME));
const pythPublicKey = getPythProgramKeyForCluster(PYTHNET_CLUSTER_NAME);

interface PriceData {
  symbol: string;
  price: number | null;
  confidence: number | null;
  status: PriceStatus;
}

const PythPrices: React.FC = () => {
  const [prices, setPrices] = useState<PriceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      const pythClient = new PythHttpClient(connection, pythPublicKey);
      const data = await pythClient.getData();
      console.log(data);

      const priceData: PriceData[] = Array.from(data.productPrice.entries()).map(([symbol, price]) => ({
        symbol,
        price: price.price ? price.price * Math.pow(10, price.exponent) : null,
        confidence: price.confidence ? price.confidence * Math.pow(10, price.exponent) : null,
        status: price.status,
      }));

      setPrices(priceData);
      setLoading(false);
    };

    fetchPrices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {prices.map(price => (
        <div key={price.symbol} className="mb-4 p-4 border rounded-lg shadow">
          <div>Symbol: {price.symbol}</div>
          <div>
            Price: {price.price !== null ? `$${price.price.toFixed(10)} ±$ ${price.confidence?.toFixed(10)}` : 'Price currently unavailable'}
          </div>
          <div>Status: {PriceStatus[price.status]}</div>
        </div>
      ))}
    </div>
  );
};

export default PythPrices;
