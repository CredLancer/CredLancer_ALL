import {
  RequestNetwork,
  Types,
  Utils,
} from "@requestnetwork/request-client.js";
import { EthereumPrivateKeySignatureProvider } from "@requestnetwork/epk-signature";
import {
  approveErc20,
  hasSufficientFunds,
  hasErc20Approval,
  payRequest,
} from "@requestnetwork/payment-processor";
import { providers, Wallet } from "ethers";

import "dotenv/config";

const main = async () => {
  const epkSignatureProvider = new EthereumPrivateKeySignatureProvider({
    method: Types.Signature.METHOD.ECDSA,
    privateKey: process.env.PRIVATE_KEY!, // Must include 0x prefix
  });
  const payerWallet = new Wallet(process.env.PRIVATE_KEY!);
  const payerIdentity = "0x7730B4Cdc1B1E7a33A309AB7205411faD009C106";

  const requestClient = new RequestNetwork({
    nodeConnectionConfig: {
      baseURL: "https://goerli.gateway.request.network/",
    },
    signatureProvider: epkSignatureProvider,
  });

  const request = await requestClient.fromRequestId(
    "01ee813fff3dd6329b735c5ebeb9654be61725e4e025c5bddffe8a6c62265334ed"
  );
  const requestData = request.getData();

  const provider = new providers.InfuraProvider(
    "goerli",
    process.env.INFURA_KEY
  );

  console.log(`Checking if payer ${payerIdentity} has sufficient funds...`);
  const _hasSufficientFunds = await hasSufficientFunds(
    requestData,
    payerIdentity,
    {
      provider,
    }
  );
  console.log(`_hasSufficientFunds = ${_hasSufficientFunds}`);
  if (!_hasSufficientFunds) {
    throw new Error(`Insufficient Funds: ${payerIdentity}`);
  }

  console.log(`Checking if payer ${payerIdentity} has sufficient approval...`);
  const _hasErc20Approval = await hasErc20Approval(
    requestData,
    payerIdentity,
    provider
  );
  console.log(`_hasErc20Approval = ${_hasErc20Approval}`);
  if (!_hasErc20Approval) {
    console.log(`Requesting approval...`);
    const approvalTx = await approveErc20(requestData);
    await approvalTx.wait(2);
    console.log(`Approval granted. ${approvalTx.hash}`);
  }

  const paymentTx = await payRequest(requestData, payerWallet);
  await paymentTx.wait(2);
  console.log(`Payment complete. ${paymentTx.hash}`);

  const startTime = Date.now();
  while (
    requestData.balance?.balance != null &&
    requestData.balance.balance < requestData.expectedAmount
  ) {
    console.log(`current balance = ${requestData.balance?.balance}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Check if 5 seconds have passed, and if so, break out of the loop
    if (Date.now() - startTime >= 5000) {
      console.log("Timeout: Exiting loop after 5 seconds.");
      break;
    }
  }
};

main().catch(console.error);
