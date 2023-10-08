import { NetworkName } from "@railgun-community/shared-models";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MetaHeader } from "~~/components/MetaHeader";
import useServices from "~~/hooks/talent-layer/hooks/useServices";

export const RAILGUN_WALLET_LOCAL_STORAGE_KEY = "railgunWalletId";

// Block numbers for each chain when wallet was first created.
// If unknown, provide undefined.
export const creationBlockNumberMap: Record<string, number> = {
  [NetworkName.Ethereum]: 15725700,
  [NetworkName.Polygon]: 3421400,
};

const Home: NextPage = () => {
  const { services } = useServices();
  const { router } = useRouter();
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">CredLancer</span>
          </h1>
        </div>
        <div className="grid-cols-3 gap-3">
          {services.slice(0, 12).map(service => (
            <div
              key={service.id}
              className="col-span-1 p-4 rounded border hover:cursor-pointer"
              onClick={() => router.push(`/${service.id}/chat`)}
            >
              <p>Sender: {service.cid}</p>
              <p>Sender: {service.sender?.address}</p>
              <p>Handle: {service.sender?.handle}</p>
              <p>Status: {service.status}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
