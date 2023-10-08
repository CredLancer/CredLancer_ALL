import { useEffect, useState } from "react";
import { getShieldPrivateKeySignatureMessage } from "@railgun-community/quickstart";
import { keccak256 } from "ethers";
import { useAccount, useWalletClient } from "wagmi";

const useShieldPrivateKey = () => {
  const { data: signer } = useWalletClient();
  const [shieldPrivateKey, setShieldPrivateKey] = useState<string>();
  const { address } = useAccount();

  useEffect(() => {
    setShieldPrivateKey(undefined);
  }, [address]);

  const getShieldPrivateKey = async () => {
    if (shieldPrivateKey) return shieldPrivateKey;
    if (signer) {
      const spk = keccak256(await signer.signMessage({ message: getShieldPrivateKeySignatureMessage() }));
      setShieldPrivateKey(spk);
      return spk;
    }
  };
  return { shieldPrivateKey, getShieldPrivateKey };
};

export default useShieldPrivateKey;
