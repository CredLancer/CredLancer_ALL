import { Dispatch, SetStateAction, useState } from "react";
import { RAILGUN_WALLET_LOCAL_STORAGE_KEY, creationBlockNumberMap } from "../../pages";
import { RailgunWalletInfo } from "@railgun-community/shared-models";
import { createRailgunWallet, getRandomBytes } from "@railgun-community/wallet";
import { Button } from "~~/components/ui/button";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "~~/components/ui/dialog";
import { Input } from "~~/components/ui/input";
import { hashPasswordString } from "~~/utils/hash-service";

// railgunWalletInfo contains other useful information, like the wallet's RAILGUN address, i.e. '0zk987...654'
export function StepThree({
  mnemonic,
  setStep,
  setWalletConfig,
}: {
  setWalletConfig: Dispatch<SetStateAction<RailgunWalletInfo | undefined>>;
  mnemonic: string;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const [password, setPassword] = useState("");

  const setEncryptionKeyFromPassword = async (password: string): Promise<string> => {
    const salt = getRandomBytes(16); // Generate salt
    const [encryptionKey, hashPasswordStored] = await Promise.all([
      hashPasswordString(password, salt, 100000),
      hashPasswordString(password, salt, 1000000), // Generate hash for stored password. Use more iterations for the stored value.
    ]);

    localStorage.setItem("hashPasswordStored", hashPasswordStored);
    localStorage.setItem("salt", salt);

    return encryptionKey;
  };

  const createWallet = async () => {
    console.log("Creating wallet...");

    const encryptionKey = await setEncryptionKeyFromPassword(password);

    const railgunWalletInfo = await createRailgunWallet(encryptionKey, mnemonic, creationBlockNumberMap);
    const id = railgunWalletInfo.id;
    setWalletConfig(railgunWalletInfo);

    console.log("Created railgun wallet", { railgunWalletInfo });

    localStorage.setItem(RAILGUN_WALLET_LOCAL_STORAGE_KEY, id);

    setStep(prev => prev + 1);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Set your password</DialogTitle>
        <DialogDescription>
          <p className="pb-4">Enter a password to encrypt your wallet</p>
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button onClick={() => createWallet()}>Continue</Button>
      </DialogFooter>
    </>
  );
}
