import { Dispatch, SetStateAction } from "react";
import { Button } from "~~/components/ui/button";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "~~/components/ui/dialog";

export function StepOne({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) {
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
