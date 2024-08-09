// StoreProvider.tsx
"use client";

import React, { createContext, ReactNode } from "react";
import userStore from "./userStore";
import tokenStore from "./tokenStore";
import transactionStore from "./transactionStore";
import settingsStore from "./settingsStore";
import networkStore from "./networkStore";
import appStatusStore from "./appStatusStore";
import priceStore from "./priceStore";
import menuStore from "./menuStore";

export const StoreContext = createContext({
  userStore,
  tokenStore,
  transactionStore,
  settingsStore,
  networkStore,
  appStatusStore,
  priceStore,
  menuStore,
});

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
  <StoreContext.Provider
    value={{
      userStore,
      tokenStore,
      transactionStore,
      settingsStore,
      networkStore,
      appStatusStore,
      priceStore,
      menuStore,
      
    }}
  >
    {children}
  </StoreContext.Provider>
);
