import {
  Box,
  Button,
  Flex,
  SkeletonCircle,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "react-query";
import { ProposalStatus, QuestResponse } from "../../utils/models";
import {
  QuestService,
  OrganizationService,
  LancerService,
  UtilService,
  ProposalService,
} from "../../services";
import {
  useAccount,
  useContract,
  useSigner,
  useSignMessage,
  useWebSocketProvider,
} from "wagmi";
import { useQuestContext } from "../../providers/Quest";
import QUEST_ABI from "../../assets/contracts/QuestController.json";
import { useRouter } from "next/router";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CreateProposalModal, ViewQuestInfoModal } from "../Modals";
import { QUEST_CONTRACT } from "../../utils/constants";

interface ComponentProps extends QuestResponse {
  handleUpdate: (quest?: QuestResponse) => void;
}

export const SubmitWorkView: React.FC<QuestResponse> = ({ ...quest }) => {
  const router = useRouter();
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const provider = useWebSocketProvider({ chainId: 3141 });
  const contract = useContract({
    address: QUEST_CONTRACT,
    abi: QUEST_ABI,
    signerOrProvider: signer,
  });
  const { data: proposal } = useQuery(
    ["lancer.proposal", address],
    () => ProposalService.fetchProposalsFromLancer(`${address}`),
    {
      enabled: !!address,
    }
  );

  const { data: lancer } = useQuery(
    ["lancer.profile", address],
    () => LancerService.fecthLancer(address ?? ""),
    {
      enabled: !!address,
      retry: 2,
    }
  );
  const { mutate } = useMutation(ProposalService.submitWork);
  const { signMessage } = useSignMessage({
    onSuccess(data, variables) {
      console.log({ data, variables });
      submitWork(data);
    },
  });

  const submitWork = (signature: any) => {
    const existingProposal = proposal?.proposals.find(
      ({ questId }) => questId === `${quest.id}`
    );
    const model = {
      proposalID: existingProposal?.id,
      address,
      signature,
      cid: existingProposal?.fileCID,
    };

    mutate(model, {
      onSuccess: async (response) => {
        console.log({ response });
        const { signature, nonce } = response;
        contract?.submitWork(quest.id, model.cid, signature, nonce, {
          maxPriorityFeePerGas: await provider?.send(
            "eth_maxPriorityFeePerGas",
            []
          ),
        });
      },
    });
  };

  console.log({ proposal })

  return (
    <Button
      onClick={() => signMessage({ message: lancer?.message })}
      colorScheme="pink"
      w="100%"
    >
      Submit
    </Button>
  );
};
