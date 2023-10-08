import type { RailgunWalletInfo } from "@railgun-community/shared-models";
import { WalletIcon } from "lucide-react";
import { useState } from "react";
import { useRailgunProvider } from "~~/hooks/useRailgunProvider";
import { cn } from "~~/utils";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { StepFour } from "./StepFour";
import { StepOne } from "./StepOne";
import { StepThree } from "./StepThree";
import { StepTwo } from "./StepTwo";

export function CreateRailgunWallet() {
  const [step, setStep] = useState(0);
  const [mnemonic, setMnemonic] = useState("");
  const [walletConfig, setWalletConfig] = useState<RailgunWalletInfo>();
  const [isOpen, setIsOpen] = useState(false);

  const { isProviderLoaded } = useRailgunProvider();
  return (
    <Dialog
      onOpenChange={open => {
        if (!open) setStep(0);
        setIsOpen(open);
      }}
      open={isOpen}
    >
      <DialogTrigger asChild>
        <div className={cn("btn-sm !rounded-xl flex gap-3 py-3", !isProviderLoaded && "")}>
          <WalletIcon className="text-xl font-normal h-6 w-4 cursor-pointer ml-2 sm:ml-0" aria-hidden="true" />
          <span className="font-bold whitespace-nowrap">
            {isProviderLoaded ? "Create Railgun Wallet" : "Provider not loaded"}
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        {step === 0 && <StepOne setStep={setStep} />}
        {step === 1 && <StepTwo setMnemonic={setMnemonic} setStep={setStep} />}
        {step === 2 && <StepThree setWalletConfig={setWalletConfig} mnemonic={mnemonic} setStep={setStep} />}
        {step === 3 && <StepFour setIsOpen={setIsOpen} walletConfig={walletConfig} />}
      </DialogContent>
    </Dialog>
  );
}
