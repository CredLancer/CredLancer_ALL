import { Dispatch, SetStateAction } from "react";
import { Mnemonic, randomBytes } from "ethers";
import { Button } from "~~/components/ui/button";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "~~/components/ui/dialog";

export function StepTwo({
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
