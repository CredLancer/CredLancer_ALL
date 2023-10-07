import { RequestNetwork, Types } from "@requestnetwork/request-client.js";

const main = async () => {
  const requestClient = new RequestNetwork({
    nodeConnectionConfig: {
      baseURL: "https://goerli.gateway.request.network/",
    },
  });

  const identity = "0xb8c5BB783E1CF34Ba802e16a4d17fF1Fee09683A";
  const requests = await requestClient.fromIdentity({
    type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
    value: identity,
  });
  const requestDatas = requests.map((request) => request.getData());
  console.log(JSON.stringify(requestDatas));
};

main().catch(console.error);
