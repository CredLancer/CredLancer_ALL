import { useEffect, useState } from "react";
import { IUser } from "../../../types/talentLayer";
import { getUserById } from "../../../utils/queries/users";

const useUserById = (userId: string): IUser | null => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserById(userId);
        if (response?.data?.data?.user) {
          setUser(response.data.data.user);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [userId]);

  return user;
};

export default useUserById;
