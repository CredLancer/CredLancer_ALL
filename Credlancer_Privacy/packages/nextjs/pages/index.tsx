import { NetworkName } from "@railgun-community/shared-models";
import type { NextPage } from "next";
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

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">CredLancer</span>
          </h1>
        </div>

        {services.slice(0, 10).map(service => (
          <div key={service.id} className="p-4 rounded border">
            <p>{service.id}</p>
            <p>{service.seller?.id}</p>
            <p>{service.seller?.address}</p>
            <p>{service.seller?.handle}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
