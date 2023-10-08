import { Dispatch, SetStateAction } from "react";
import { RailgunWalletInfo } from "@railgun-community/shared-models";
import { Button } from "~~/components/ui/button";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "~~/components/ui/dialog";

export function StepFour({
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
