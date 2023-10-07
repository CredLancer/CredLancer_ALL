import {
  RequestNetwork,
  Types,
  Utils,
} from "@requestnetwork/request-client.js";
import { EthereumPrivateKeySignatureProvider } from "@requestnetwork/epk-signature";

import "dotenv/config";

const main = async () => {
  const epkSignatureProvider = new EthereumPrivateKeySignatureProvider({
    method: Types.Signature.METHOD.ECDSA,
    privateKey: "0x" + process.env.PRIVATE_KEY!,
  });

  const requestClient = new RequestNetwork({
    nodeConnectionConfig: {
      baseURL: "https://goerli.gateway.request.network/",
    },
    signatureProvider: epkSignatureProvider,
  });

  // In this example, the payee is also the payer and payment recipient.
  const payeeIdentity = "0xb8c5BB783E1CF34Ba802e16a4d17fF1Fee09683A";
  const payerIdentity = "0x7730B4Cdc1B1E7a33A309AB7205411faD009C106";
  const paymentRecipient = payeeIdentity;
  const feeRecipient = "0xb8c5BB783E1CF34Ba802e16a4d17fF1Fee09683A";

  const requestCreateParameters = {
    requestInfo: {
      currency: {
        type: Types.RequestLogic.CURRENCY.ERC20,
        value: "0x37527e755e00b55b33d49fbfedc8df2381b840d7",
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
  } as any;

  const request = await requestClient.createRequest(requestCreateParameters);
  const requestData = await request.waitForConfirmation();
  console.log(JSON.stringify(requestData));
};

main().catch(console.error);
