import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";
import getConfig from "next/config";

// const { publicRuntimeConfig } = getConfig();
// const { WC_PROJECT_ID } = publicRuntimeConfig;
// console.log('WC_PROJECT_ID (client):', publicRuntimeConfig.WC_PROJECT_ID);
// console.log('WC_PROJECT_ID (server):', process.env.WC_PROJECT_ID);
const WC_PROJECT_ID = "6c5c9bef29975bd33af8ee6d77564f4a";
// console.log('WC_PROJECT_ID:', WC_PROJECT_ID);



const connectors =
  typeof window !== "undefined"
    ? [
        injected(),
        coinbaseWallet({ appName: "Create Wagmi" }),
        walletConnect({ projectId: WC_PROJECT_ID }),
      ]
    : [];

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors,
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
