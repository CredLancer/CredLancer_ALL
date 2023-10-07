import { Dispatch, SetStateAction, useState } from "react";
import { NetworkName } from "@railgun-community/shared-models";
import { createRailgunWallet } from "@railgun-community/wallet";
import { Mnemonic, randomBytes } from "ethers";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
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
import { useRailgunProvider } from "~~/hooks/useRailgunProvider";

const ENCRYPTION_KEY = "0101010101010101010101010101010101010101010101010101010101010101";
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

  const { isProviderLoaded } = useRailgunProvider();

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">CredLancer</span>
          </h1>
        </div>
        <Dialog
          onOpenChange={open => {
            if (!open) setStep(0);
          }}
        >
          <DialogTrigger asChild>
            <Button disabled={!isProviderLoaded}>
              {isProviderLoaded ? "Create Railgun Wallet" : "Provider not loaded"}
            </Button>
          </DialogTrigger>
          <DialogContent>
            {step === 0 && <StepOne setStep={setStep} />}
            {step === 1 && <StepTwo setMnemonic={setMnemonic} setStep={setStep} />}
            {step === 2 && <StepThree mnemonic={mnemonic} setStep={setStep} />}
          </DialogContent>
        </Dialog>
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
function StepThree({ mnemonic, setStep }: { mnemonic: string; setStep: Dispatch<SetStateAction<number>> }) {
  const createWallet = async () => {
    console.log("Creating wallet...");
    const railgunWalletInfo = await createRailgunWallet(ENCRYPTION_KEY, mnemonic, creationBlockNumberMap);
    const id = railgunWalletInfo.id;

    console.log("Created railgun wallet", { railgunWalletInfo });

    localStorage.setItem(RAILGUN_WALLET_LOCAL_STORAGE_KEY, id);

    setStep(prev => prev + 1);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Copy your mnemonic</DialogTitle>
        <DialogDescription>{mnemonic}</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button onClick={() => createWallet()}>Continue</Button>
      </DialogFooter>
    </>
  );
}

export default Home;
