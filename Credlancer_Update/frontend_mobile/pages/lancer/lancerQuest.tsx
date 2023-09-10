import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
    Link,
    SkeletonCircle,
    HStack,
    VStack,
    Square,
    Input,
    FormLabel,
    VisuallyHiddenInput,
    FormControl,
    Select,
    Spinner,
    Textarea
  } from "@chakra-ui/react";

  import { ListLancerQuestsView } from "../../components/views";

  import type { NextPage } from "next";
  import ORGANIZATION_ABI from "../../assets/contracts/OrganizationController.json";
  import {
    useAccount,
    useContract,
    useContractWrite,
    usePrepareContractWrite,
    useProvider,
    useSendTransaction,
    useSigner,
    useWebSocketProvider,
  } from "wagmi";
  import { BigNumber } from "@ethersproject/bignumber";
  import { ChangeEvent, useMemo, useState } from "react";
  import { useRouter } from "next/router";
  import { useForm } from "react-hook-form";
  import { useMutation } from "react-query";
  import { LancerService } from "../../services/lancer.service";
  import Image from "next/image";
  //import { ORGANIZATION_CONTRACT } from "../../utils/constants";
  import { InternalNavigationPage } from "../../components/Page/InternalPage";
  
  import { useSignMessage } from 'wagmi'
  import { verifyMessage } from 'ethers/lib/utils'
  import { useQuery } from "react-query";
  
  import { BASE_URL } from "../../utils/constants";

  import { OrganizationService, QuestService } from "../../services";

  
  type LogoInfo = {
    size: number;
    name: string;
    image: string;
  };
  
  const LancerQuest: NextPage = () => {

    const { handleSubmit, register } = useForm();

    const {
        mutate,
        isLoading: isSubmitting,
        error,
        isSuccess,
      } = useMutation(QuestService.createQuest);

    return (
      <InternalNavigationPage
        heading={
          <Heading color="black" fontSize="large" as="h4">
            My Quests
          </Heading>
        }
      >
        <Heading as="h4" textAlign={`center`}>
          Quest Detail
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
        <GridItem colSpan={4}>
          <FormControl>
            <FormLabel htmlFor="skills">Skill Requirement</FormLabel>
            <Input
              bg="white.2"
              borderRadius="2px"
              id="skills"
              type="text"
              color="black.5"
              {...register("skills")}
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
            Return
          </Button>
        </GridItem>
      </Grid>


      </InternalNavigationPage>
    );
  };
  
  export default LancerQuest;
  