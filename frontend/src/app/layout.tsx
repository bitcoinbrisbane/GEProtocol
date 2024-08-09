import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { StoreProvider } from "@/stores/storePovider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PWAInstallPopup from "@/components/pwa/PWAInstallPopup";

// wagmi
import WagmiProviderLocal from "@/components/wagmi/WagmiProvider";


// wallet
// import { Web3ReactProvider, Web3ReactHooks } from "@web3-react/core";
// import { Connector } from "@web3-react/types";
// import connectors from "@/components/wallet/connectors";
// const connections: [Connector, Web3ReactHooks][] = connectors.map(
//   ([connector, hooks]) => [connector, hooks]
// );

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GE Protocol",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html id="root" lang="en-US" className="dark ">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.className} bg-primary-light-500 dark:bg-primary-dark-500 flex flex-col min-h-screen`}
      >
        {/* <Web3ReactProvider connectors={connections}> */}
        <WagmiProviderLocal>
          <StoreProvider>
            <Navbar />
            <main className="flex flex-grow p-2 md:p-4 text-white mt-[86px] mb-4 md:mt-auto">
              {/* <div className="text-center content-center min-h-64">{children}</div> */}
              {children}
            </main>
            <Footer />
          </StoreProvider>
        </WagmiProviderLocal>
        <SpeedInsights />
        <PWAInstallPopup />

        {/* </Web3ReactProvider> */}
      </body>
    </html>
  );
}
