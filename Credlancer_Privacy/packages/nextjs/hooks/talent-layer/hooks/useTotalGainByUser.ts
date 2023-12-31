import { useEffect, useState } from "react";
import { IUserGain } from "../../../types/talentLayer";
import { getUserTotalGains } from "../../../utils/queries/users";

const useTotalGainByUser = (id?: string | undefined): IUserGain[] => {
  const [userGains, setUserGains] = useState<IUserGain[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await getUserTotalGains(id);

          if (response?.data?.data?.user?.totalGains) {
            setUserGains(response.data.data.user.totalGains);
          }
        } catch (error: any) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      } else {
        setUserGains([]);
      }
    };
    fetchData();
  }, [id]);

  return userGains;
};

export default useTotalGainByUser;
