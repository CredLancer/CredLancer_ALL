import { useEffect, useState } from "react";
import { IUser } from "../../../types/talentLayer";
import { getUserByAddress, getUserById } from "../../../utils/queries/users";

const useUserByAddress = (address: string): IUser | null => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!address) {
          return;
        }
        const response = await getUserByAddress(address);
        if (response?.data?.data?.users) {
          setUser(response.data.data.users[0]);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [address]);

  return user;
};

export default useUserByAddress;
