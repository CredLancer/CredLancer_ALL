import {
  Button,
  Grid,
  GridItem,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Spinner,
  Box,
} from "@chakra-ui/react";
import {
  useAccount,
  useSigner,
  useWebSocketProvider,
  useContract,
} from "wagmi";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { OrganizationService, QuestService } from "../../services";
import { QUEST_CONTRACT } from "../../utils/constants";
import QUEST_ABI from "../../assets/contracts/QuestController.json";
import { BigNumber } from "ethers";
import { formatEther, parseEther, parseUnits } from "ethers/lib/utils.js";
import { useQuestContext } from "../../providers/Quest";

interface ComponentProps {
  isUpdating?: any;
}

export const CreateQuestView = () => {
  const { selectedQuest } = useQuestContext()!;
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const provider = useWebSocketProvider();
  const contract = useContract({
    address: QUEST_CONTRACT,
    abi: QUEST_ABI,
    signerOrProvider: signer,
  });
  const { handleSubmit, register } = useForm({
    defaultValues: {
      title: selectedQuest?.title ?? "",
      hoursRequired: 100,
      reward: formatEther((selectedQuest?.value ?? "0").toString()),
      description: selectedQuest?.description,
    } as any,
  });
  const { data: organization, isLoading } = useQuery(
    ["organization.address", address],
    () => OrganizationService.findOrganizationByAddress(`${address}`)
  );
  // console.log({
  //   deadline: (selectedQuest?.deadline as any as Date)?.toDateString(),
  // });

  console.log({ selectedQuest });
  console.log({
    deadline: new Date(selectedQuest?.deadline ?? "")
      .toLocaleDateString()
      .split("/")
      .reverse()
      .join("/"),
  });

  const {
    mutate,
    isLoading: isSubmitting,
    error,
    isSuccess,
  } = useMutation(QuestService.createQuest);

  const onSubmit = (model: any) => {
    const orgId = organization.org.id;
    mutate(
      {
        title: model.title,
        description: model.description,
        reward: parseEther(model.reward).toString(),
        deadline: ((new Date(model.deadline).getTime() / 1000) | 0).toString(),
        orgId,
      },
      {
        onSuccess: async (response) => {
          console.log({ response });
          const { questCID, signature, nonce } = response;
          const deadline = (
            (new Date(model.deadline).getTime() / 1000) |
            0
          ).toString();
          const reward = parseEther(model.reward).toString();
          await contract?.createQuest(
            questCID,
            reward,
            orgId,
            deadline,
            signature,
            nonce,
            {
              maxPriorityFeePerGas: await provider?.send(
                "eth_maxPriorityFeePerGas",
                []
              ),
              value: reward,
            }
          );
        },
      }
    );
  };

  console.log({ error, organization, isSuccess });

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Heading textAlign="center" as="h3" mb="10">
        Fill form to create Quest
      </Heading>
      <Grid gap="6" gridTemplateColumns="1fr 1fr 1fr 1fr">
        <GridItem colSpan={4}>
          <FormControl>
            <FormLabel htmlFor="title">Title of Quest</FormLabel>
            <Input
              bg="white.2"
              borderRadius="2px"
              id="title"
              {...register("title")}
              type="text"
              color="black.5"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="hoursRequired">Hours Required</FormLabel>
            <Input
              bg="white.2"
              borderRadius="2px"
              id="hoursRequired"
              {...register("hoursRequired")}
              type="number"
              color="black.5"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="deadline">Deadline</FormLabel>
            <Input
              bg="white.2"
              borderRadius="2px"
              id="deadline"
              type="datetime-local"
              color="black.5"
              {...register("deadline")}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl>
            <FormLabel htmlFor="credentials">
              Credential Requirement (Describe what NFTs users should have)
            </FormLabel>
            <Textarea
              bg="white.2"
              borderRadius="2px"
              id="credentials"
              color="black.5"
              {...register("credentials")}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="extraFiles">Upload from Files</FormLabel>
            <Input
              bg="white.2"
              borderRadius="2px"
              id="extraFiles"
              type="file"
              color="black.5"
              name="extraFiles"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="reward">Quest Reward (in FIL)</FormLabel>
            <Input
              bg="white.2"
              borderRadius="2px"
              id="reward"
              step="0.01"
              type="number"
              color="black.5"
              {...register("reward")}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl>
            <FormLabel htmlFor="description">
              Description of Quest (3000-10000 characters)
            </FormLabel>
            <Textarea
              bg="white.2"
              borderRadius="2px"
              height="200px"
              id="description"
              color="black.5"
              {...register("description")}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <Button width="100%" type="submit" colorScheme="purple">
            {isSubmitting ? <Spinner /> : "CREATE"}
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};
