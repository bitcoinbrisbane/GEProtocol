import { PriceServiceConnection, PriceFeed } from '@pythnetwork/price-service-client';

const connection = new PriceServiceConnection('https://hermes.pyth.network', {
  priceFeedRequestConfig: {
    binary: true,
  },
});

export const getPriceFeeds = async (priceIds: string[]): Promise<PriceFeed[] | null> => {
  try {
    const currentPrices = await connection.getLatestPriceFeeds(priceIds);
    return currentPrices || null; // Return null if currentPrices is undefined or falsy
  } catch (error) {
    console.error('Error fetching price feeds:', error);
    return null;
  }
};

export const subscribeToPriceFeedUpdates = (
  priceIds: string[],
  callback: (priceFeed: PriceFeed) => void
): void => {
  connection.subscribePriceFeedUpdates(priceIds, callback);

  // Close the WebSocket after 60 seconds
  setTimeout(() => {
    connection.closeWebSocket();
  }, 60000);
};
