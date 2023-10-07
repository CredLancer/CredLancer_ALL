import { useEffect, useState } from "react";
import { useEthersProvider } from "./useEthersProviders";
import { setProviderForNetwork } from "@railgun-community/quickstart";
import { useNetwork } from "wagmi";
import { appChains } from "~~/services/web3/wagmiConnectors";
import { getNetwork, networks } from "~~/utils/networks";
import { loadProviders } from "~~/utils/railgun";

// Fee is in bips, e.g. a value of 25 is a 0.25% fee.
interface ShieldFee {
  [chainId: number]: bigint;
}

const fallbackShieldingFees: ShieldFee = {};
Object.keys(networks).forEach(chainId => {
  // Current fees are 0.25% everywhere, so we initialize with that
  fallbackShieldingFees[Number(chainId)] = BigInt("25");
});

const { chains } = appChains;

export const useRailgunProvider = () => {
  const [isProviderLoaded, setProviderLoaded] = useState<boolean>(false);
  const [shieldingFees, setShieldingFees] = useState<ShieldFee>(fallbackShieldingFees);
  const network = getNetwork(chains[0].id);
  const provider = useEthersProvider({ chainId: chains[0].id });

  useEffect(() => {
    const fn = async () => {
      setProviderLoaded(false);
      const res = await loadProviders();

      // Set the shield fees for each network.
      const shieldingFeesFromNetwork = res.reduce((acc, response) => {
        const newFee = response.providerInfo.feesSerialized?.shield;
        return {
          ...acc,
          [response.chainId]: BigInt(newFee || fallbackShieldingFees[response.chainId]),
        };
      }, {});
      setShieldingFees(shieldingFeesFromNetwork);

      // Provider is done loading.
      setProviderLoaded(true);
    };
    fn();
  }, []);

  useEffect(() => {
    setProviderForNetwork(network.railgunNetworkName, provider as any);
  }, [provider, network.railgunNetworkName]);

  return { isProviderLoaded, shieldingFees };
};
