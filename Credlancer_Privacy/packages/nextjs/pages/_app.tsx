import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useMemo, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDarkMode } from "usehooks-ts";
import { WagmiConfig } from "wagmi";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";
import { SUBGRAPH_URI } from "~~/utils/constants";
import { initialize } from "~~/utils/railgun";

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  useMemo(initialize, []);

  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  // This variable is required for initial client side rendering of correct theme for RainbowKit
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { isDarkMode } = useDarkMode();

  const apolloClient = new ApolloClient({
    uri: SUBGRAPH_URI,
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  useEffect(() => {
    setIsDarkTheme(isDarkMode);
  }, [isDarkMode]);

  return (
    <ApolloProvider client={apolloClient}>
      <WagmiConfig config={wagmiConfig}>
        <NextNProgress />
        <RainbowKitProvider
          chains={appChains.chains}
          avatar={BlockieAvatar}
          theme={isDarkTheme ? darkTheme() : lightTheme()}
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="relative flex flex-col flex-1">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
          <Toaster />
        </RainbowKitProvider>
      </WagmiConfig>
    </ApolloProvider>
  );
};

export default ScaffoldEthApp;
