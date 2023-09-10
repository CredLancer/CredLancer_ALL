import { useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AppProps } from "next/app";

import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { Chain } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

interface Props {
  children: ReactNode;
}

const hyperspaceChain: Chain = {
  id: 3141,
  name: "Filecoin - Hyperspace testnet",
  network: "Hyperspace",
  nativeCurrency: {
    decimals: 18,
    name: "Hyperspace",
    symbol: "tFIL",
  },
  rpcUrls: {
    default: {
      http: ["https://api.hyperspace.node.glif.io/rpc/v1"],
      webSocket: ["wss://wss.hyperspace.node.glif.io/apigw/lotus/rpc/v0"],
    },
  },
  blockExplorers: {
    default: { name: "Glif", url: "https://hyperspace.filfox.info/en" },
  },
  testnet: true,
};

const { chains, provider, webSocketProvider } = configureChains(
  [hyperspaceChain],
  [
    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

export function Web3Provider(props: Props, { Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>{props.children}</RainbowKitProvider>
    </WagmiConfig>
  );
}
