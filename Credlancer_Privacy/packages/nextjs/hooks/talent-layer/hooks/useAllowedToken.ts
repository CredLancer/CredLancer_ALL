import { useEffect, useState } from "react";
import { IToken } from "../../../types/talentLayer";
import { getAllowedToken } from "../../../utils/queries/global";

const useAllowedToken = (address: string): IToken | undefined => {
  const [allowedToken, setAllowedToken] = useState<IToken>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (address) {
          const response = await getAllowedToken(address);
          console.log("response", response);
          if (response?.data?.data?.tokens) {
            console.log("response.data.data.tokens[0]", response.data.data.tokens[0]);
            setAllowedToken(response.data.data.tokens[0]);
          }
        }
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return allowedToken;
};

export default useAllowedToken;
