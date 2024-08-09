// menuData.tsx
export interface SubMenuItem {
  key: string;
  text: string;
}

export interface MenuItem {
  key: string;
  text: string;
  items: SubMenuItem[];
}

export const subMenuItems: MenuItem[] = [
  {
    key: "trade",
    text: "Trade",
    items: [
      { key: "swap", text: "Swap" },
      { key: "limit-order", text: "Limit Order" },
      { key: "bridge", text: "Bridge" },
    ],
  },
  {
    key: "liquidity",
    text: "Liquidity",
    items: [
      { key: "standard-pools", text: "Standard Pools" },
      { key: "concentrated-pools", text: "Concentrated Pools" },
      { key: "lst-pools", text: "LST Pools" },
      // { key: "multi-token-pools", text: "Multi Pools" },
    ],
  },
  {
    key: "lending",
    text: "Lending",
    items: [
      { key: "borrow", text: "Borrow" },
      { key: "market", text: "Market" },
    ],
  },
  {
    key: "portfolio",
    text: "Portfolio",
    items: [
      { key: "position-overview", text: "Position Overview" },
      { key: "transaction-history", text: "Transaction History" },
    ],
  },
  {
    key: "dashboard",
    text: "Dashboard",
    items: [
      { key: "testing-area", text: "Testing Area" },
    ],
  },
];
