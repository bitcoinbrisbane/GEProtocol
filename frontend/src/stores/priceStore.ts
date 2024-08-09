import { makeAutoObservable, runInAction } from "mobx";
import { Item } from "@/static/interface";

class PriceStore {
  items: Item[] = [
    { name: "USDC", currentPrice: 1, data: {} },
    { name: "BTC", currentPrice: 1, data: {} },
    { name: "SOL", currentPrice: 1, data: {} },
  ];

  itemMap = new Map<string, any>(); // To store additional data such as IDs
  defaultPrice = 0; // Default price for items not yet updated

  firstSelectedItem: Item | null = null;
  secondSelectedItem: Item | null = null;
  firstInputValue: string = "";
  secondInputValue: string = "";

  constructor() {
    makeAutoObservable(this);
    this.initializeItems();
  }

  // Initialize items with default values and fetch price IDs
  async initializeItems() {
    // Default items with hardcoded data
    const defaultItems = [
      {
        id: "eaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
        attributes: {
          asset_type: "Crypto",
          base: "USDC",
          description: "USD COIN / US DOLLAR",
          generic_symbol: "USDCUSD",
          publish_interval: "1",
          quote_currency: "USD",
          symbol: "Crypto.USDC/USD",
          weekly_schedule: "America/New_York,O,O,O,O,O,O,O"
        }
      },
      {
        id: "e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
        attributes: {
          asset_type: "Crypto",
          base: "BTC",
          description: "BITCOIN / US DOLLAR",
          generic_symbol: "BTCUSD",
          publish_interval: "1",
          quote_currency: "USD",
          symbol: "Crypto.BTC/USD",
          weekly_schedule: "America/New_York,O,O,O,O,O,O,O"
        }
      },
      {
        id: "ef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d",
        attributes: {
          asset_type: "Crypto",
          base: "SOL",
          description: "SOLANA / US DOLLAR",
          generic_symbol: "SOLUSD",
          publish_interval: "1",
          quote_currency: "USD",
          symbol: "Crypto.SOL/USD",
          weekly_schedule: "America/New_York,O,O,O,O,O,O,O"
        }
      },
    ];

    runInAction(async () => {
      // Map default items to itemMap and items
      for (const item of defaultItems) {
        this.itemMap.set(item.id, item);

        const existingItem = this.items.find(i => i.name === item.attributes.base);
        if (existingItem) {
          existingItem.data = item;
        } else {
          this.items.push({
            name: item.attributes.base,
            currentPrice: this.defaultPrice,
            data: item
          });
        }

        // Fetch the latest price for each default item
        await this.updatePriceById(item.id);
      }

      // Fetch price IDs from API and update items with new data
      await this.fetchPriceIds();
      
    });
  }

  // Fetch price IDs from the API and update items
  async fetchPriceIds() {
    try {
      const response = await fetch("https://hermes.pyth.network/v2/price_feeds?asset_type=crypto");
      const data = await response.json();
  
      runInAction(() => {
        // Update itemMap and items
        data.forEach((item: any) => {
          this.itemMap.set(item.id, item);
  
          const existingItem = this.items.find(i => i.name === item.attributes.base);
          if (existingItem) {
            existingItem.data = item; // Update existing item data
          } else {
            this.items.push({
              name: item.attributes.base,
              currentPrice: this.defaultPrice,
              data: item
            });
          }
        });
  
        // Optionally fetch prices for the first 10 IDs
        // const ids = data.slice(0, 10).map((item: any) => item.id);
        // if (ids.length > 0) {
        //   this.fetchLatestPrices(ids);
        // }
      });
    } catch (error) {
      console.error("Failed to fetch price IDs:", error);
    }
  }
  

  // Fetch the latest prices based on the provided IDs
  async fetchLatestPrices(ids: string[]) {
    try {
      const url = `/api/price?${ids.map((id) => `ids[]=${id}`).join("&")}`;
      const response = await fetch(url);
      const data = await response.json();

      if (Array.isArray(data.parsed)) {
        runInAction(() => {
          // Update prices for the given IDs
          data.parsed.forEach((update: any) => {
            // Find the item based on the ID
            const item = this.items.find(
              (item) =>
                this.itemMap.get(update.id)?.attributes.base === item.name
            );
            if (item) {
              item.currentPrice =
                parseFloat(update.price.price) *
                Math.pow(10, update.price.expo);
              console.log("Updated item:", item);
            } else {
              console.log("Item not found for ID:", update.id);
            }
          });
        });
      } else {
        console.error("Invalid response format for latest prices:", data);
      }
    } catch (error) {
      console.error("Failed to fetch latest prices:", error);
    }
  }

  // Fetch and update price for a specific ID
  async updatePriceById(id: string) {
    try {
      const url = `/api/price?ids[]=${id}`;
      const response = await fetch(url);
      const data = await response.json();

      if (Array.isArray(data.parsed)) {
        // Extract the latest price for the ID
        const updatedPrices: Record<string, number> = {};
        runInAction(() => {
          data.parsed.forEach((update: any) => {
            // Find the item based on the ID
            const item = this.items.find(
              (item) =>
                this.itemMap.get(update.id)?.attributes.base === item.name
            );
            if (item) {
              updatedPrices[update.id] =
                parseFloat(update.price.price) *
                Math.pow(10, update.price.expo);
              // Update item price with the fetched data
              item.currentPrice = updatedPrices[update.id];
              console.log("Updated item:", item);
            } else {
              console.log("Item not found for ID:", update.id);
            }
          });
        });

        return updatedPrices; // Return updated prices
      } else {
        console.error("Invalid response format for specific ID:", data);
        return {};
      }
    } catch (error) {
      console.error("Failed to update price by ID:", error);
      return {};
    }
  }

  setFirstSelectedItem(item: Item | null) {
    this.firstSelectedItem = item;
    this.updateInputValues();
  }

  setSecondSelectedItem(item: Item | null) {
    this.secondSelectedItem = item;
    this.updateInputValues();
  }

  private updateInputValues() {
    if (this.firstSelectedItem && this.secondSelectedItem) {
      if (this.firstInputValue) {
        const value =
          parseFloat(this.firstInputValue) *
          (this.firstSelectedItem.currentPrice / this.secondSelectedItem.currentPrice);
        this.secondInputValue = value.toFixed(6).toString();
      } else {
        this.secondInputValue = "";
      }
      if (this.secondInputValue) {
        const value =
          parseFloat(this.secondInputValue) *
          (this.secondSelectedItem.currentPrice / this.firstSelectedItem.currentPrice);
        this.firstInputValue = value.toFixed(6).toString();
      } else {
        this.firstInputValue = "";
      }
    }
  }

  setFirstInputValue(value: string) {
    this.firstInputValue = value;
    this.updateInputValues();
  }

  setSecondInputValue(value: string) {
    this.secondInputValue = value;
    this.updateInputValues();
  }

  setPrice(token: string, price: number) {
    const item = this.items.find((item) => item.name === token);
    if (item) {
      item.currentPrice = price;
    } else {
      console.warn(`Item with token ${token} not found.`);
    }
  }

  getItem(token: string): Item | undefined {
    return this.items.find((item) => item.name === token);
  }

  getItems(): Item[] {
    return this.items;
  }
}

const priceStore = new PriceStore();
export default priceStore;
