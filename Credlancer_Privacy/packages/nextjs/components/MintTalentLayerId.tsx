import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
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
        <Button>Mint</Button>
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
