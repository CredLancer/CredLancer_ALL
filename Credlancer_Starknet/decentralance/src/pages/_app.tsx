import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "~/components/theme-provider";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, goerli, mainnet, polygon } from "wagmi/chains";
import "~/styles/globals.css";
import { Footer } from "~/components/footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  const chains = [arbitrum, mainnet, polygon, goerli];
  const projectId = "4dd307b07565ea15ed78a018ac63ab7a";

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
          <Component {...pageProps} />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default MyApp;
