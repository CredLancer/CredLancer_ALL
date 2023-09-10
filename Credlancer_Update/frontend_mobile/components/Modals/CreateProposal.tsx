import {
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
  Spinner,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
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
import { LancerProposal, ProposalStatus } from "../../utils/models";

interface Props {
  questId: number;
  proposals?: LancerProposal[];
}
export const CreateProposalModal: React.FC<Props> = ({
  questId,
  proposals,
}) => {
  const { address } = useAccount();
  const { register, handleSubmit } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading: isSubmitting, mutate } = useMutation(
    ProposalService.createProposal
  );
  const { data: lancerSignatureOrProfile } = useQuery(
    ["lancer.signature|profile", address],
    () => LancerService.fetchLancerSignatureOrProfile(address ?? ""),
    {
      enabled: !!address,
      retry: 2,
    }
  );
  const { data: signer } = useSigner();
  const provider = useWebSocketProvider({ chainId: 3141 });
  const contract = useContract({
    address: QUEST_CONTRACT,
    abi: QUEST_ABI,
    signerOrProvider: signer,
  });
  const { signMessage } = useSignMessage({
    async onSuccess(data, variables) {
      console.log(data, variables);
      console.log({ lancerData: variables });
      await createProposal({ ...variables, signature: data });
    },
  });
  const canApply = useMemo(() => {
    const currentQuest = proposals?.find(
      ({ quest }) => quest.id === `${questId}`
    );

    if (!currentQuest) {
      return true;
    }
  }, [questId, proposals]);

  const onSubmit = async (data: any) => {
    if (!address) {
      toast.error("Please connect your wallet!");
      return;
    }

    signMessage({
      ...data,
      message: (lancerSignatureOrProfile as any).message,
    });
  };

  const createProposal = async (model: any) => {
    console.log({ model });
    const data = {
      questId,
      description: model.description,
      approxCompletionTime: new Date(model.completion_time),
      proposer: address,
      signature: model.signature,
    };
    mutate(data, {
      onSuccess: async (data) => {
        console.log({ data });
        const { proposalCID, signature, nonce } = data;
        await contract?.sendProposal(questId, proposalCID, signature, nonce, {
          maxPriorityFeePerGas: await provider?.send(
            "eth_maxPriorityFeePerGas",
            []
          ),
        });
        toast.success("Proposal Created Successfully");
        onClose();
      },
    });
  };

  return (
    <>
      {canApply && (
        <Button onClick={() => onOpen()} colorScheme="pink" w="100%">
          Apply
        </Button>
      )}
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
        <ModalContent background="black" padding="2em" borderRadius="10px">
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Heading textAlign="center" fontFamily="Aclonica">
                Create Quest Proposal
              </Heading>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                  mt="12"
                  gap="6"
                  alignItems="stretch"
                  justifyContent="center"
                  gridTemplateColumns="1fr"
                >
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel htmlFor="description">
                        Proposal: (how will you complete this quest)
                      </FormLabel>
                      <Textarea
                        bg="white.2"
                        borderRadius="2px"
                        {...register("description")}
                        id="description"
                        height="250px"
                        color="black.5"
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel htmlFor="completion_time">
                        Completion Time
                      </FormLabel>
                      <Input
                        bg="white.2"
                        borderRadius="2px"
                        {...register("completion_time")}
                        id="completion_time"
                        type="datetime-local"
                        color="black.5"
                      />
                    </FormControl>
                  </GridItem>

                  <GridItem colSpan={1} mt="10">
                    <Button width="100%" type="submit" colorScheme="purple">
                      {isSubmitting ? <Spinner /> : "CREATE"}
                    </Button>
                  </GridItem>
                </Grid>
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
