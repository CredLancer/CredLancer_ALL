import { Dispatch, SetStateAction, useState } from "react";
import { NetworkName, RailgunWalletInfo } from "@railgun-community/shared-models";
import { createRailgunWallet, getRandomBytes } from "@railgun-community/wallet";
import { Mnemonic, randomBytes } from "ethers";
import type { NextPage } from "next";
import { goerli } from "viem/chains";
import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { MintTalentLayerId } from "~~/components/MintTalentLayerId";
import { Button } from "~~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~~/components/ui/dialog";
import { Input } from "~~/components/ui/input";
import { CONTRACT_ADDRESSES } from "~~/constants/address";
import useServices from "~~/hooks/talent-layer/hooks/useServices";
import { useRailgunProvider } from "~~/hooks/useRailgunProvider";
import { ServiceStatusEnum } from "~~/types/talentLayer";
import { useTalentLayerIdIds, useTalentLayerIdProfiles } from "~~/utils/generated";
import { hashPasswordString } from "~~/utils/hash-service";

const RAILGUN_WALLET_LOCAL_STORAGE_KEY = "railgunWalletId";

// Block numbers for each chain when wallet was first created.
// If unknown, provide undefined.
const creationBlockNumberMap: Record<string, number> = {
  [NetworkName.Ethereum]: 15725700,
  [NetworkName.Polygon]: 3421400,
};

const Home: NextPage = () => {
  const [step, setStep] = useState(0);
  const [mnemonic, setMnemonic] = useState("");
  const [walletConfig, setWalletConfig] = useState<RailgunWalletInfo>();
  const [isOpen, setIsOpen] = useState(false);
  const { address } = useAccount();

  const { data: talentLayerId } = useTalentLayerIdIds({
    address: CONTRACT_ADDRESSES[goerli.id].TALENT_LAYER_ID,
    chainId: goerli.id,
    args: [address!],
    enabled: address !== undefined,
  });
  const { data: profile } = useTalentLayerIdProfiles({
    address: CONTRACT_ADDRESSES[goerli.id].TALENT_LAYER_ID,
    chainId: goerli.id,
    args: [talentLayerId!],
    enabled: address !== undefined && talentLayerId !== undefined,
  });
  const [, /* id */ handle /* platformId */ /* dataUri */, ,] = profile || [];

  const { isProviderLoaded } = useRailgunProvider();
  const { services } = useServices(ServiceStatusEnum.Opened);

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">CredLancer</span>
          </h1>
        </div>
        {handle !== undefined && handle !== "" ? (
          <p className="pb-4">Your talent layer handle is {handle}</p>
        ) : (
          <MintTalentLayerId />
        )}
        <Dialog
          onOpenChange={open => {
            if (!open) setStep(0);
            setIsOpen(open);
          }}
          open={isOpen}
        >
          <DialogTrigger asChild>
            <Button disabled={!isProviderLoaded}>
              {isProviderLoaded ? "Create Railgun Wallet" : "Provider not loaded"}
            </Button>
          </DialogTrigger>
          <DialogContent>
            {step === 0 && <StepOne setStep={setStep} />}
            {step === 1 && <StepTwo setMnemonic={setMnemonic} setStep={setStep} />}
            {step === 2 && <StepThree setWalletConfig={setWalletConfig} mnemonic={mnemonic} setStep={setStep} />}
            {step === 3 && <StepFour setIsOpen={setIsOpen} walletConfig={walletConfig} />}
          </DialogContent>
        </Dialog>
        {services.slice(0, 10).map(service => (
          <div key={service.id} className="p-4 rounded border">
            <p>{service.id}</p>
            <p>{service.seller?.id}</p>
            <p>{service.seller?.address}</p>
            <p>{service.seller?.handle}</p>
          </div>
        ))}
      </div>
    </>
  );
};

function StepOne({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Create Railgun Wallet</DialogTitle>
        <DialogDescription>
          You will be creating a Railgun wallet, and you should store the mneomonic phrase in a safe place.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button onClick={() => setStep(prev => prev + 1)}>Continue</Button>
      </DialogFooter>
    </>
  );
}

function StepTwo({
  setStep,
  setMnemonic,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  setMnemonic: Dispatch<SetStateAction<string>>;
}) {
  const mnemonic = Mnemonic.fromEntropy(randomBytes(16)).phrase.trim();

  return (
    <>
      <DialogHeader>
        <DialogTitle>Copy your mnemonic</DialogTitle>
        <DialogDescription>{mnemonic}</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          onClick={() => {
            setStep(prev => prev + 1);
            setMnemonic(mnemonic);
          }}
        >
          Continue
        </Button>
      </DialogFooter>
    </>
  );
}

// railgunWalletInfo contains other useful information, like the wallet's RAILGUN address, i.e. '0zk987...654'
function StepThree({
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
      hashPasswordString(password, salt, 100000), // Generate hash from password and salt
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

function StepFour({
  setIsOpen,
  walletConfig,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  walletConfig?: RailgunWalletInfo;
}) {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Copy your mnemonic</DialogTitle>
        <DialogDescription>{JSON.stringify(walletConfig, null, 2)}</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Continue
        </Button>
      </DialogFooter>
    </>
  );
}

export default Home;
