// lib/pythApi.ts
import axios from 'axios';

const HERMES_BASE_URL = 'https://hermes.pyth.network';

export interface Price {
  price: number;
  conf: number;
  expo: number;
  publish_time: number;
  [key: string]: any; // need to adjust based on responses later
}

export interface PriceFeed {
  id: string;
  price: Price;
  [key: string]: any; // need to adjust based on responses later
}

export const getPriceFeedIds = async (): Promise<string[]> => {
  const response = await axios.get<string[]>(`${HERMES_BASE_URL}/api/price_feed_ids`);
  return response.data;
};

export const getLatestPriceFeeds = async (ids: string[]): Promise<PriceFeed[]> => {
  const response = await axios.get<PriceFeed[]>(`${HERMES_BASE_URL}/api/latest_price_feeds`, {
    params: {
      ids: ids,
      verbose: true,
    },
  });
  return response.data;
};
