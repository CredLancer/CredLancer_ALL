import { RequestNetwork, Types, Utils } from "@requestnetwork/request-client.js";
import { Web3SignatureProvider } from "@requestnetwork/web3-signature";
import { NextApiRequest, NextApiResponse } from "next";
import { goerli } from "viem/chains";
import { GetWalletClientResult } from "wagmi/dist/actions";
import { CONTRACT_ADDRESSES } from "~~/constants/address";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
async function createRequest(walletClient: GetWalletClientResult) {
  const web3SignatureProvider = new Web3SignatureProvider(walletClient);
  console.log({ web3SignatureProvider });
  const requestClient = new RequestNetwork({
    nodeConnectionConfig: {
      baseURL: "https://goerli.gateway.request.network/",
    },
  });

  const payeeIdentity = "0xb8c5BB783E1CF34Ba802e16a4d17fF1Fee09683A";
  const payerIdentity = "0x7730B4Cdc1B1E7a33A309AB7205411faD009C106";
  const paymentRecipient = payeeIdentity;
  const feeRecipient = "0xb8c5BB783E1CF34Ba802e16a4d17fF1Fee09683A";

  const requestCreateParameters: Types.ICreateRequestParameters = {
    requestInfo: {
      currency: {
        type: Types.RequestLogic.CURRENCY.ERC20,
        value: CONTRACT_ADDRESSES[goerli.id].ERC_20_FEE_PROXY,
        network: "goerli",
      },
      expectedAmount: "1000000000000000000",
      payee: {
        type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
        value: payeeIdentity,
      },
      payer: {
        type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
        value: payerIdentity,
      },
      timestamp: Utils.getCurrentTimestampInSecond(),
    },
    paymentNetwork: {
      id: Types.Extension.PAYMENT_NETWORK_ID.ERC20_FEE_PROXY_CONTRACT,
      parameters: {
        paymentNetworkName: "goerli",
        paymentAddress: paymentRecipient,
        feeAddress: feeRecipient,
        feeAmount: "0",
      },
    },
    contentData: {
      reason: "🍕",
      dueDate: "2023.06.16",
    },
    signer: {
      type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
      value: payeeIdentity,
    },
  };

  const request = await requestClient.createRequest(requestCreateParameters);
  return await request.waitForConfirmation();
}
