import { useEffect, useState } from "react";
import { IProposal } from "../../../types/talentLayer";
import { getAllProposalsByUser } from "../../../utils/queries/proposals";

const useProposalsByUser = (id?: string | undefined): IProposal[] => {
  const [proposals, setProposals] = useState<IProposal[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await getAllProposalsByUser(id);

          if (response?.data?.data?.proposals) {
            setProposals(response.data.data.proposals);
          }
        } catch (error: any) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      } else {
        setProposals([]);
      }
    };
    fetchData();
  }, [id]);

  return proposals;
};

export default useProposalsByUser;
