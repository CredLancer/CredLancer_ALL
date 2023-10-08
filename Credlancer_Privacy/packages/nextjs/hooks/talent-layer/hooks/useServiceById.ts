import { useEffect, useState } from "react";
import { IService } from "../../../types/talentLayer";
import { getServiceById } from "../../../utils/queries/services";

const useServiceById = (serviceId: string): IService | null => {
  const [user, setUser] = useState<IService | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getServiceById(serviceId);
        if (response?.data?.data?.service) {
          setUser(response.data.data.service);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [serviceId]);

  return user;
};

export default useServiceById;
