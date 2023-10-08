import { goerli } from "viem/chains";
import { useWalletClient } from "wagmi";
import { Button } from "~~/components/ui/button";
import { CONTRACT_ADDRESSES } from "~~/constants/address";
import { createRecipeTransaction } from "~~/lib/railgun/create-proposal";

export default function CreatePage() {
  const { data: walletClient } = useWalletClient();

  async function createInvoiceRequest() {
    if (walletClient) {
      await fetch("/api/createRequest", {
        method: "POST",
      });
      const { transaction } = await createRecipeTransaction(
        "0x7730B4Cdc1B1E7a33A309AB7205411faD009C106",
        10000n,
        CONTRACT_ADDRESSES[goerli.id].ERC_20_FEE_PROXY,
        0n,
        "id",
        "encryption",
      );

      const hash = await walletClient.sendTransaction(transaction as any);
      console.log({ hash });
    }
  }
  return (
    <div>
      <h1>Hello</h1>
      <Button onClick={() => createInvoiceRequest()}>Create Invoice</Button>
    </div>
  );
}
