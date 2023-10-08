import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { PlusIcon } from "lucide-react";
import { goerli } from "viem/chains";
import { useAccount } from "wagmi";
import { CONTRACT_ADDRESSES } from "~~/constants/address";
import { usePrepareTalentLayerIdMint, useTalentLayerIdMint } from "~~/utils/generated";

const platformId = 0n;

export function MintTalentLayerId() {
  const [handle, setHandle] = useState("");

  const { address } = useAccount();
  const { config } = usePrepareTalentLayerIdMint({
    address: CONTRACT_ADDRESSES[goerli.id].TALENT_LAYER_ID,
    chainId: goerli.id,
    args: [platformId, handle],
    enabled: address !== undefined && handle.length > 0,
  });
  const { write } = useTalentLayerIdMint(config);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="btn-sm !rounded-xl flex gap-3 py-3">
          <PlusIcon className="text-xl font-normal h-6 w-4 cursor-pointer ml-2 sm:ml-0" aria-hidden="true" />
          <span className="font-bold whitespace-nowrap">Create TalentLayer ID</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div>
          <p className="pb-4">Please enter a valid handle</p>
          <Input value={handle} onChange={e => setHandle(e.target.value)} />
        </div>
        <DialogFooter>
          <Button disabled={write === undefined} onClick={() => write?.()}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
