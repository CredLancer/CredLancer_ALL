import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SkeletonCircle,
  Spinner,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import QUEST_ABI from "../../assets/contracts/QuestController.json";
import { toast } from "react-toastify";
import {
  useAccount,
  useContract,
  useMutation,
  useSigner,
  useSignMessage,
  useWebSocketProvider,
} from "wagmi";
import { LancerService, ProposalService } from "../../services";
import { ORGANIZATION_CONTRACT, QUEST_CONTRACT } from "../../utils/constants";
import { useQuery } from "react-query";
import { ProposalStatus, QuestProposalType } from "../../utils/models";

type SingleProposalProps = QuestProposalType;

const ViewSingleProposal: React.FC<SingleProposalProps> = ({ ...proposal }) => {
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const provider = useWebSocketProvider({ chainId: 3141 });
  const contract = useContract({
    address: QUEST_CONTRACT,
    abi: QUEST_ABI,
    signerOrProvider: signer,
  });

  console.log({ proposal });

  const manageProposal = async (id: string, action: "accept" | "reject") => {
    console.log({ id });
    action === "accept"
      ? contract?.acceptProposal(id, {
          maxPriorityFeePerGas: await provider?.send(
            "eth_maxPriorityFeePerGas",
            []
          ),
        })
      : contract?.rejectProposal(id, {
          maxPriorityFeePerGas: await provider?.send(
            "eth_maxPriorityFeePerGas",
            []
          ),
        });
  };

  const acceptWork = async () => {
    contract?.acceptWork(proposal.id, {
      maxPriorityFeePerGas: await provider?.send(
        "eth_maxPriorityFeePerGas",
        []
      ),
    });
  };

  return (
    <Grid mt="6" gridTemplateColumns="7em 1fr 10em">
      <GridItem>
        <SkeletonCircle size="20" />
        <Badge
          mt="4"
          colorScheme={
            proposal.status === ProposalStatus.Accepted
              ? "green"
              : proposal.status === ProposalStatus.Proposed
              ? "orange"
              : proposal.status === ProposalStatus.Rejected
              ? "red"
              : "purple"
          }
          p="2"
        >
          {proposal.status === ProposalStatus.Accepted && "In Progress"}
          {proposal.status === ProposalStatus.Proposed &&
            ProposalStatus.Proposed}
          {proposal.status === ProposalStatus.Awarded && ProposalStatus.Awarded}
        </Badge>
      </GridItem>

      <GridItem>
        <Flex direction="column" gap="3">
          <Text fontWeight="600">{proposal.proposer.name}</Text>
          <Text color="#E8EDF6" noOfLines={5}>
            {proposal.file.description}
          </Text>
        </Flex>
      </GridItem>

      <GridItem>
        {proposal.workCID && proposal.status === ProposalStatus.Awarded ? (
          <VStack gap="3">
            <Badge mt="4" w="full" textAlign="center" colorScheme="green" p="2">
              Awarded
            </Badge>
            <Badge mt="4" w="full" textAlign="center" colorScheme="blue" p="2">
              Winner: {proposal.proposer.name}
            </Badge>
          </VStack>
        ) : null}
        {proposal.workCID && proposal.status === ProposalStatus.Accepted ? (
          <VStack gap="3">
            <Button onClick={() => acceptWork()} w="full" colorScheme="pink">
              Approve Work
            </Button>

            <Badge mt="4" w="full" textAlign="center" colorScheme="blue" p="2">
              Submitted
            </Badge>
          </VStack>
        ) : null}
        {proposal.status === ProposalStatus.Proposed ? (
          <VStack gap="3">
            <Button
              onClick={() => manageProposal(proposal.id, "accept")}
              w="full"
              colorScheme="pink"
            >
              Accept
            </Button>

            <Button
              w="full"
              variant="outline"
              onClick={() => manageProposal(proposal.id, "reject")}
              colorScheme="pink"
            >
              Reject
            </Button>
          </VStack>
        ) : proposal.workCID ? null : (
          <Badge mt="4" w="full" textAlign="center" colorScheme="blue" p="2">
            {proposal.status}
          </Badge>
        )}
      </GridItem>
    </Grid>
  );
};

interface Props {
  questId: number;
}
export const ViewQuestInfoModal: React.FC<Props> = ({ questId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: proposal } = useQuery(
    ["proposal.quest", questId],
    () => ProposalService.fetchProposalsbyQuestId(questId),
    {
      enabled: !!questId,
    }
  );

  return (
    <>
      <Button onClick={() => onOpen()} colorScheme="teal" w="100%">
        View
      </Button>
      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent
          minW="700px"
          background="black"
          padding="2em"
          borderRadius="10px"
        >
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Heading textAlign="center" fontFamily="Aclonica">
                View Proposals
              </Heading>

              <Box mt="8">
                {proposal?.proposals.length ? (
                  proposal.proposals.map((proposal) => (
                    <ViewSingleProposal {...proposal} />
                  ))
                ) : (
                  <Box textAlign="center" color="red">
                    No Available Proposals
                  </Box>
                )}
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
